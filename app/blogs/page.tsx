'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { Calendar, ArrowRight } from 'lucide-react'

// Sample blog posts data
const blogPosts = [
  {
    id: '1',
    title: 'Top 10 Interview Questions Every Tech Professional Should Know',
    slug: 'top-10-interview-questions',
    excerpt: 'Master the most common technical interview questions asked by FAANG companies and how to answer them effectively.',
    content: `Interview preparation is crucial for career advancement. In this comprehensive guide, we cover the top 10 questions...`,
    author: 'Sarah Johnson',
    date: new Date('2024-01-15'),
    category: 'Interview Tips',
    image: 'bg-gradient-to-br from-blue-500 to-blue-600',
  },
  {
    id: '2',
    title: 'How to Choose the Right University for Your Career Goals',
    slug: 'choosing-right-university',
    excerpt: 'A practical guide to evaluating universities based on your academic interests and career aspirations.',
    content: `Choosing a university is one of the most important decisions of your life. This guide walks you through...`,
    author: 'Dr. Michael Chen',
    date: new Date('2024-01-10'),
    category: 'Education',
    image: 'bg-gradient-to-br from-purple-500 to-purple-600',
  },
  {
    id: '3',
    title: 'Essential Skills Employers Look For in 2024',
    slug: 'essential-skills-2024',
    excerpt: 'Discover the most in-demand skills that will make you stand out in the job market this year.',
    content: `The job market is constantly evolving. Employers are looking for a specific set of skills...`,
    author: 'Emily Rodriguez',
    date: new Date('2024-01-05'),
    category: 'Career',
    image: 'bg-gradient-to-br from-green-500 to-green-600',
  },
  {
    id: '4',
    title: 'Mastering Behavioral Interviews: The STAR Method',
    slug: 'star-method-behavioral-interviews',
    excerpt: 'Learn how to structure your answers using the STAR method to impress interviewers in behavioral rounds.',
    content: `Behavioral interviews focus on your past experiences and how you handled specific situations...`,
    author: 'James Wilson',
    date: new Date('2023-12-28'),
    category: 'Interview Tips',
    image: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  },
]

export default function Blogs() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Career Insights & Interview Tips
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Stay updated with the latest trends in education, career development, and interview preparation.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300"
            >
              <div className={`${post.image} h-48 flex items-center justify-center text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <span className="relative text-sm font-semibold bg-primary/90 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-balance">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-balance">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4 border-t border-border pt-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {formatDate(post.date)}
                  </div>
                  <span>by {post.author}</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card border-y border-border py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Want to Share Your Story?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            If you would like to contribute an article or suggest a topic, please get in touch with us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
