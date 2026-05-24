import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Clock, BarChart3, Users, Trophy } from 'lucide-react'

export const metadata = {
  title: 'Mock Interviews | Chatura Solutions',
  description: 'Practice with industry experts and gain confidence for your interviews with our comprehensive mock interview services.',
}

export default function MockInterview() {
  const interviewTypes = [
    {
      title: 'Technical Interviews',
      description: 'Prepare for coding problems, system design, and technical depth questions.',
      icon: BarChart3,
    },
    {
      title: 'Behavioral Interviews',
      description: 'Master communication skills and learn to tell compelling career stories.',
      icon: Users,
    },
    {
      title: 'HR Rounds',
      description: 'Get ready for HR screening and final round interviews.',
      icon: Trophy,
    },
  ]

  const benefits = [
    'Real-world interview scenarios',
    'Expert feedback and guidance',
    'Personalized improvement areas',
    'Multiple interview formats',
    'Flexible scheduling',
    'Record and review sessions',
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Practice Interviews with Industry Experts
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Gain confidence and master your interview skills with realistic mock interview sessions conducted by professionals who have hired for top companies.
          </p>
        </div>
      </section>

      {/* Interview Types */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Interview Types We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interviewTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-card border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Why Practice with Us?</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground text-sm font-bold">✓</span>
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-lg p-8 border border-blue-200/30">
              <Clock className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Interview?</h3>
              <p className="text-muted-foreground mb-6">
                Schedule your mock interview session with our expert interviewers and start your journey to interview success.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                <strong>Note:</strong> Use the scheduling link below to book your preferred time slot. Our team will send you session details via email.
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity w-full"
              >
                Schedule Your Interview Now <ArrowRight size={20} />
              </a>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                You can also email us at interviews@chaturasolutions.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { num: '1', title: 'Schedule', desc: 'Book your preferred interview slot' },
            { num: '2', title: 'Prepare', desc: 'Receive interview guidelines and tips' },
            { num: '3', title: 'Interview', desc: 'Participate in a real-world mock session' },
            { num: '4', title: 'Feedback', desc: 'Get detailed feedback and improvement areas' },
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">{step.num}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Interview Preparation</h2>
          <p className="text-blue-100 text-lg mb-8">Limited slots available! Book your session today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule Now <ArrowRight size={20} />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
