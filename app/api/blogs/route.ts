import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  author: string
  date: string
  category: string
  readTime?: number
  featuredImage?: string | null
}

/**
 * Parse date string safely
 */
function parseDate(dateString: string): number {
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
      console.warn(`[v0] Invalid date format: ${dateString}`)
      return 0
    }
    return date.getTime()
  } catch (error) {
    console.warn(`[v0] Error parsing date ${dateString}:`, error)
    return 0
  }
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const slugParam = url.searchParams.get('slug')

    const blogsDirectory = path.join(process.cwd(), 'public', 'data', 'blogs')

    // Check if directory exists
    if (!fs.existsSync(blogsDirectory)) {
      return NextResponse.json(
        slugParam ? { error: 'Blog not found' } : { blogs: [] },
        { status: slugParam ? 404 : 200 }
      )
    }

    // If slug is provided, find and return single blog
    if (slugParam) {
      const files = fs.readdirSync(blogsDirectory).filter(file => file.endsWith('.json'))
      
      for (const file of files) {
        try {
          const filePath = path.join(blogsDirectory, file)
          const fileContent = fs.readFileSync(filePath, 'utf-8')
          const blog: BlogPost = JSON.parse(fileContent)

          if (blog.slug === slugParam) {
            // Add placeholder image if none provided
            if (!blog.featuredImage) {
              blog.featuredImage = PLACEHOLDER_IMAGE
            }
            return NextResponse.json({ blog }, { status: 200 })
          }
        } catch (error) {
          console.error(`[v0] Error parsing blog file ${file}:`, error)
        }
      }

      // Blog not found
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    // Return all blogs
    const files = fs.readdirSync(blogsDirectory).filter(file => file.endsWith('.json'))

    const blogs: BlogPost[] = []

    for (const file of files) {
      try {
        const filePath = path.join(blogsDirectory, file)
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const blog: BlogPost = JSON.parse(fileContent)

        // Add placeholder image if none provided
        if (!blog.featuredImage) {
          blog.featuredImage = PLACEHOLDER_IMAGE
        }

        blogs.push(blog)
      } catch (error) {
        console.error(`[v0] Error parsing blog file ${file}:`, error)
      }
    }

    // Sort by date (newest first) with safe date parsing
    blogs.sort((a, b) => parseDate(b.date) - parseDate(a.date))

    return NextResponse.json({ blogs }, { status: 200 })
  } catch (error) {
    console.error('[v0] Error loading blogs:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
