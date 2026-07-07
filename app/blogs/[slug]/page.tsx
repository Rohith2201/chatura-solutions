'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react'
import { useEffect, useState } from 'react'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  author: string
  date: string
  category: string
  readTime?: number
  content: string
  featuredImage?: string | null
}

interface BlogPageProps {
  params: Promise<{ slug: string }>
}

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'

export default function BlogPost({ params }: BlogPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [suggestedBlogs, setSuggestedBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [slug, setSlug] = useState<string>('')

  useEffect(() => {
    // Unwrap params promise
    params.then(({ slug: slugValue }) => {
      setSlug(slugValue)
      loadBlog(slugValue)
    })
  }, [params])

  async function loadBlog(slugValue: string) {
    try {
      // Load the specific blog
      const blogResponse = await fetch(`/api/blogs?slug=${slugValue}`)
      if (!blogResponse.ok) {
        setLoading(false)
        return
      }

      const blogData = await blogResponse.json()
      if (blogData.blog) {
        setPost(blogData.blog)
      }

      // Load all blogs to find suggestions
      const allBlogsResponse = await fetch('/api/blogs')
      if (allBlogsResponse.ok) {
        const allBlogsData = await allBlogsResponse.json()
        const suggested = (allBlogsData.blogs || [])
          .filter((b: BlogPost) => b.slug !== slugValue)
          .slice(0, 2)
        setSuggestedBlogs(suggested)
      }
    } catch (error) {
      console.error('[v0] Error loading blog:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-foreground">Loading...</p>
        </div>
        <Footer />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-3xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
          <Link href="/blogs" className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const featuredImageUrl = post.featuredImage || PLACEHOLDER_IMAGE

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/blogs" className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <ArrowLeft size={20} />
          Back to Blogs
        </Link>
      </div>

      {/* Featured Image */}
      <div className="relative h-80 md:h-96 w-full overflow-hidden">
        <Image
          src={featuredImageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
              {post.category}
            </span>
            {post.readTime && (
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full">
                {post.readTime} min read
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm md:text-base">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none text-foreground mb-12 space-y-4">
          {post.content
            .split('\n\n')
            .filter((para: string) => para.trim())
            .map((para: string, idx: number) => {
              if (para.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-3xl font-bold mt-8 mb-4 text-foreground">
                    {para.replace('## ', '')}
                  </h2>
                )
              }
              if (para.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-2xl font-semibold mt-6 mb-3 text-foreground">
                    {para.replace('### ', '')}
                  </h3>
                )
              }
              if (para.startsWith('- ')) {
                const items = post.content
                  .split('\n')
                  .filter((line: string) => line.startsWith('- '))
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                    {items.map((item: string, i: number) => (
                      <li key={i} className="mb-1">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
                  {para}
                </p>
              )
            })}
        </div>

        {/* Share Section */}
        <div className="border-t border-border pt-8">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-foreground">Share this article:</span>
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors">
              <Share2 size={18} />
              Share
            </button>
          </div>
        </div>

        {/* Suggested Blogs */}
        {suggestedBlogs.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Suggested Blogs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {suggestedBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300"
                >
                  <div className="relative h-32 w-full overflow-hidden bg-gray-200">
                    <Image
                      src={blog.featuredImage || PLACEHOLDER_IMAGE}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <span className="absolute top-3 left-3 text-xs font-semibold bg-primary/90 text-white px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  <div className="p-4 md:p-5">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>by {blog.author}</span>
                      <span className="text-primary font-medium">Read More →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Continue Reading CTA */}
        <div className="mt-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Articles <ArrowLeft size={20} style={{ transform: 'rotate(180deg)' }} />
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  )
}
