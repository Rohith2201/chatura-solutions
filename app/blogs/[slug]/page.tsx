'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react'

// Sample blog data - in a real app, this would come from a database
const blogPostsData: Record<string, any> = {
  'top-10-interview-questions': {
    title: 'Top 10 Interview Questions Every Tech Professional Should Know',
    author: 'Sarah Johnson',
    date: new Date('2024-01-15'),
    category: 'Interview Tips',
    image: 'bg-gradient-to-br from-blue-500 to-blue-600',
    content: `
      <h2>Introduction</h2>
      <p>Interview preparation is crucial for career advancement. In this comprehensive guide, we cover the top 10 questions that FAANG companies and other tech giants frequently ask in their interview process.</p>

      <h2>1. Tell Me About Yourself</h2>
      <p>This is often the opening question. Create a concise summary of your professional background, key achievements, and what makes you unique as a candidate. Focus on relevant experience and why you're interested in the role.</p>

      <h2>2. Why Do You Want to Work Here?</h2>
      <p>Research the company thoroughly. Mention specific projects, company values, or challenges they're solving that resonate with you. This shows genuine interest and preparation.</p>

      <h2>3. What Are Your Greatest Strengths?</h2>
      <p>Provide 2-3 specific strengths with concrete examples. Use the STAR method (Situation, Task, Action, Result) to illustrate your point. Choose strengths relevant to the job description.</p>

      <h2>4. What Are Your Weaknesses?</h2>
      <p>Be honest but strategic. Choose a genuine weakness that you're actively working to improve. Explain the steps you're taking to address it, showing self-awareness and commitment to growth.</p>

      <h2>5. Describe a Challenging Project You Worked On</h2>
      <p>Use this to demonstrate problem-solving skills. Structure your answer with the context, the challenge, your specific contribution, and the outcome. Focus on what you learned.</p>

      <h2>6. How Do You Handle Conflicts in a Team?</h2>
      <p>Provide a specific example showing your communication and collaboration skills. Emphasize finding common ground and working towards a solution that benefits the team.</p>

      <h2>7. What Are Your Career Goals?</h2>
      <p>Show ambition aligned with the company's direction. Demonstrate how this role fits into your long-term career plans and what you hope to achieve.</p>

      <h2>8. Tell Me About a Time You Failed</h2>
      <p>Choose a real failure and explain what you learned from it. Show resilience and how the experience made you a better professional. This demonstrates maturity and self-reflection.</p>

      <h2>9. What Technical Skills Do You Bring?</h2>
      <p>Be specific about your technical expertise. Provide examples of projects where you've used these skills. Be honest about your proficiency levels and always express willingness to learn.</p>

      <h2>10. Do You Have Any Questions for Us?</h2>
      <p>Always ask thoughtful questions about the role, team, or company culture. This shows genuine interest and engagement in the interview process.</p>

      <h2>Conclusion</h2>
      <p>Remember, the goal of the interview is mutual fit. Prepare thoroughly, be authentic, and let your enthusiasm shine through. Good luck with your interviews!</p>
    `,
  },
  'choosing-right-university': {
    title: 'How to Choose the Right University for Your Career Goals',
    author: 'Dr. Michael Chen',
    date: new Date('2024-01-10'),
    category: 'Education',
    image: 'bg-gradient-to-br from-purple-500 to-purple-600',
    content: `
      <h2>Why University Choice Matters</h2>
      <p>Choosing a university is one of the most important decisions of your life. The institution you select will shape your academic experience, career prospects, and personal growth for years to come.</p>

      <h2>Key Factors to Consider</h2>
      <h3>1. Academic Reputation and Rankings</h3>
      <p>While rankings aren't everything, they do reflect the quality of education and resources available. Research both global and subject-specific rankings relevant to your field of study.</p>

      <h3>2. Program Offerings</h3>
      <p>Ensure the university offers strong programs in your area of interest. Look for specialized courses, research opportunities, and internship programs that align with your career goals.</p>

      <h3>3. Faculty Expertise</h3>
      <p>Research the faculty members in your department. Their expertise, publications, and research interests will directly impact your learning experience and mentorship opportunities.</p>

      <h3>4. Career Services and Alumni Network</h3>
      <p>A strong alumni network and robust career services office can significantly enhance your job prospects after graduation. Research their track record of placements and industry connections.</p>

      <h3>5. Campus Culture and Community</h3>
      <p>You'll spend several years on campus. Consider the campus culture, student diversity, extracurricular activities, and overall environment. A good fit goes beyond academics.</p>

      <h3>6. Location and Cost</h3>
      <p>Consider the location and financial implications. Look into scholarships, financial aid, and the cost of living in the area. Consider whether you want to study in your home country or abroad.</p>

      <h2>Questions to Ask Universities</h2>
      <ul>
        <li>What is the employment rate of graduates?</li>
        <li>What internship opportunities are available?</li>
        <li>How much personalized attention do students receive?</li>
        <li>What research opportunities exist for undergraduates?</li>
        <li>What support services are available for international students?</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Take time to research thoroughly, visit campuses if possible, and talk to current students and alumni. Your choice will significantly impact your future, so make an informed decision that aligns with your goals and values.</p>
    `,
  },
  'essential-skills-2024': {
    title: 'Essential Skills Employers Look For in 2024',
    author: 'Emily Rodriguez',
    date: new Date('2024-01-05'),
    category: 'Career',
    image: 'bg-gradient-to-br from-green-500 to-green-600',
    content: `
      <h2>The Changing Job Market</h2>
      <p>The job market is constantly evolving. With technological advancements and changing business needs, employers are looking for a specific set of skills that go beyond traditional technical expertise.</p>

      <h2>Technical Skills</h2>
      <h3>Data Analysis and AI Literacy</h3>
      <p>Understanding data analysis, machine learning basics, and AI tools is increasingly important across industries. This doesn't mean you need to be a data scientist, but understanding the concepts is valuable.</p>

      <h3>Cloud Computing</h3>
      <p>Knowledge of AWS, Google Cloud, or Azure is highly sought after. Many companies are migrating to cloud infrastructure, making these skills relevant for various roles.</p>

      <h3>Cybersecurity Awareness</h3>
      <p>With increasing threats, employers value employees who understand cybersecurity best practices and can implement security measures in their work.</p>

      <h2>Soft Skills</h2>
      <h3>Communication and Collaboration</h3>
      <p>The ability to communicate clearly and work effectively in teams remains invaluable. Remote and hybrid work environments emphasize these skills even more.</p>

      <h3>Adaptability and Learning Agility</h3>
      <p>The pace of change is accelerating. Employers value employees who can adapt quickly, learn new skills, and embrace change.</p>

      <h3>Critical Thinking and Problem-Solving</h3>
      <p>The ability to approach problems systematically and think critically is more important than ever in an AI-augmented workplace.</p>

      <h2>Domain-Specific Skills</h2>
      <p>While technical skills matter, employers also value deep expertise in specific domains. Specialize in areas that interest you and combine it with complementary skills.</p>

      <h2>Conclusion</h2>
      <p>Success in 2024 and beyond requires a combination of technical skills, soft skills, and continuous learning. Invest in developing these competencies to stay competitive in the job market.</p>
    `,
  },
  'star-method-behavioral-interviews': {
    title: 'Mastering Behavioral Interviews: The STAR Method',
    author: 'James Wilson',
    date: new Date('2023-12-28'),
    category: 'Interview Tips',
    image: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
    content: `
      <h2>What Are Behavioral Interviews?</h2>
      <p>Behavioral interviews focus on your past experiences and how you handled specific situations. The philosophy is that past behavior predicts future performance. Companies like Google, Amazon, and Microsoft heavily use this interview style.</p>

      <h2>The STAR Method</h2>
      <p>STAR is an acronym that helps you structure your answers to behavioral questions:</p>

      <h3>S - Situation</h3>
      <p>Set the context by describing the situation or challenge you faced. Provide enough detail for the interviewer to understand the background, but keep it concise.</p>

      <h3>T - Task</h3>
      <p>Describe your role and responsibilities in that situation. What were you specifically asked to do or responsible for?</p>

      <h3>A - Action</h3>
      <p>Explain the specific actions you took to address the situation. Focus on what YOU did, not what the team did. Be specific and detailed about your contributions.</p>

      <h3>R - Result</h3>
      <p>Share the positive outcome or result of your actions. If possible, use metrics or specific achievements. What did you learn from this experience?</p>

      <h2>Example STAR Response</h2>
      <p>Question: "Tell me about a time you had to work with a difficult team member."</p>

      <p><strong>S:</strong> "In my previous role at XYZ Company, I was working on a product launch project. One team member consistently missed deadlines and provided incomplete work."</p>

      <p><strong>T:</strong> "As a senior developer, I was responsible for ensuring the project stayed on track and coordinating with all team members."</p>

      <p><strong>A:</strong> "I scheduled a private conversation with this team member to understand their challenges. I learned they were struggling with the technical requirements. I offered to pair-program with them and provided additional training resources. I also adjusted the project timeline slightly to reduce pressure."</p>

      <p><strong>R:</strong> "By the end of the project, this team member's output improved by 60%, and they even received praise in the project retrospective. We delivered the project on time with high quality."</p>

      <h2>Tips for Success</h2>
      <ul>
        <li>Prepare multiple stories covering different competencies</li>
        <li>Use the STAR structure consistently</li>
        <li>Be honest and specific with examples</li>
        <li>Focus on your individual contributions</li>
        <li>Show growth and learning from experiences</li>
        <li>Practice your responses before the interview</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Mastering the STAR method can significantly improve your performance in behavioral interviews. Practice with different stories and competencies, and you'll be well-prepared for any behavioral interview question.</p>
    `,
  },
}

interface BlogPageProps {
  params: Promise<{ slug: string }>
}

export default function BlogPost({ params }: BlogPageProps) {
  const { slug } = React.use(params)
  const post = blogPostsData[slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-3xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
          <Link href="/blogs" className="text-primary hover:underline">
            Back to Blogs
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

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
      <div className={`${post.image} h-80 md:h-96 flex items-center justify-center text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
              {post.category}
            </span>
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
        <div
          className="prose prose-lg max-w-none text-foreground mb-12"
          dangerouslySetInnerHTML={{
            __html: post.content
              .replace(/<h2>/g, '<h2 class="text-3xl font-bold mt-8 mb-4">')
              .replace(/<h3>/g, '<h3 class="text-2xl font-semibold mt-6 mb-3">')
              .replace(/<p>/g, '<p class="text-muted-foreground leading-relaxed mb-4">')
              .replace(/<ul>/g, '<ul class="list-disc list-inside space-y-2 mb-4 text-muted-foreground">')
              .replace(/<li>/g, '<li class="mb-1">'),
          }}
        />

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

        {/* Related Posts CTA */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6">Continue Reading</h3>
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

import React from 'react'
