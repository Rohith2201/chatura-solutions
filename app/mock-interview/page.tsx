import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Mock Interview | Chatura Solutions',
  description: 'Practice real interview questions with peers in a collaborative environment. Get live feedback from experts.',
}

export default function MockInterviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Subheading */}
          <p className="text-center text-gray-600 text-base md:text-lg mb-4">
            Stop preparing alone
          </p>

          {/* Main Heading */}
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Get Real <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Interview Practice</span>
          </h1>

          {/* Description */}
          <p className="text-center max-w-3xl mx-auto text-gray-700 text-lg md:text-xl mb-12 leading-relaxed">
            Acing job interviews requires many skills: problem-solving, communication, product sensibility, and strong technical aptitude. There&apos;s one certain way to get dramatically better: <span className="font-semibold">Practicing Live Interviews.</span>
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
                Practice mock interviews with peers
              </h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Join thousands of tech candidates practicing interviews to land jobs. Practice real questions over video chat in a collaborative environment and get helpful feedback.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-cyan-500 text-cyan-500 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors uppercase tracking-wider"
                >
                  SCHEDULE NOW
                </Link>
              </div>
            </div>

            {/* Right Column - Image with Form Overlay */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-200 to-purple-100 p-8 aspect-square flex items-center justify-center">
                {/* Form Overlay */}
                <div className="absolute top-8 right-8 bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 z-10 text-sm font-semibold">
                  <span>👤</span>
                  Interview Preparation Hub
                </div>

                {/* Form Fields */}
                <div className="absolute bottom-8 right-8 space-y-3 z-10">
                  <div className="bg-white rounded-lg px-4 py-2 shadow-lg w-40">
                    <p className="text-gray-700 text-sm font-medium">Position</p>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 shadow-lg w-40">
                    <p className="text-gray-700 text-sm font-medium">Company</p>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 shadow-lg w-40">
                    <p className="text-gray-700 text-sm font-medium">Job Description</p>
                  </div>
                </div>

                {/* Person Placeholder */}
                <div className="relative z-5">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                    alt="Professional interviewer"
                    width={300}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Real-world Practice</h3>
              <p className="text-gray-600">Practice with actual interview questions asked by top tech companies.</p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Peer Community</h3>
              <p className="text-gray-600">Connect with thousands of tech candidates on the same journey.</p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Feedback</h3>
              <p className="text-gray-600">Get detailed feedback from experienced interviewers after each session.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-teal-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Ace Your Interviews?</h2>
          <p className="text-cyan-100 text-lg mb-8">Join thousands of professionals who are already improving their interview skills.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
            >
              Schedule Now
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
