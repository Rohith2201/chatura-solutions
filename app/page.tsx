import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Gallery6 } from '@/components/gallery6'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Home() {
  const servicesGallery = [
    {
      id: 'item-1',
      title: 'Upskilling Courses',
      summary: 'Comprehensive courses designed to enhance your professional skills and expertise in your field. Master new technologies and advanced techniques with industry experts.',
      url: '#',
      image: '/images/services/upskilling.jpg',
    },
    {
      id: 'item-2',
      title: 'Mock Interviews',
      summary: 'Practice with industry experts and gain confidence for your actual interviews. Get real-time feedback and personalized coaching to ace your next interview.',
      url: '#',
      image: '/images/services/mock-interview.jpg',
    },
    {
      id: 'item-3',
      title: 'Educational Consultation',
      summary: 'Personalized guidance for higher education selection and career path planning. Navigate university options and craft your perfect academic journey.',
      url: '#',
      image: '/images/services/consultation.jpg',
    },
  ]

  const features = [
    { title: 'Expert Instructors', description: 'Learn from industry professionals with years of experience' },
    { title: 'Personalized Guidance', description: 'One-on-one consultation tailored to your goals' },
    { title: 'Proven Track Record', description: '10,000+ students placed in top companies' },
    { title: '24/7 Support', description: 'Always available to answer your questions and concerns' },
  ]

  const faqs = [
    {
      q: 'What is Chatura Solutions?',
      a: 'Chatura Solutions is an EdTech platform offering upskilling courses, mock interviews, and educational consultation services for career advancement.',
    },
    {
      q: 'How do I schedule a mock interview?',
      a: 'Visit our Mock Interview page and click on the scheduling link to book your session with our experts.',
    },
    {
      q: 'Can I get a refund if I am not satisfied?',
      a: 'Yes, we offer a 30-day money-back guarantee if you are not satisfied with our services.',
    },
    {
      q: 'Do you offer group sessions?',
      a: 'Yes, we offer both individual and group sessions for consultations and courses.',
    },
    {
      q: 'How long does educational consultation take?',
      a: 'Consultation duration varies based on your needs, typically ranging from 1-3 hours spread over multiple sessions.',
    },
    {
      q: 'What subjects do you cover?',
      a: 'We cover a wide range of subjects including technical interviews, career counseling, university applications, and professional development.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Your Path to Career Success Starts Here
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Upskill, practice, and get guidance from industry experts. Join thousands of successful professionals who transformed their careers with Chatura Solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/educational-consultation"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get Consultation <ArrowRight size={20} />
            </Link>
            <Link
              href="/mock-interview"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              Schedule Mock Interview
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-card border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower students and professionals worldwide by providing high-quality educational resources, expert guidance, and mock interview practice that bridge the gap between academic learning and industry requirements.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become the leading EdTech platform trusted by students and professionals for career development, recognized for our innovative approach to education and commitment to individual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Gallery6
        heading="Our Services"
        demoUrl="https://chaturasolutions.com"
        items={servicesGallery}
      />

      {/* Features Section */}
      <section className="bg-card border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Why Choose Chatura?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
            >
              <summary className="cursor-pointer flex items-center justify-between p-4 md:p-6 bg-card hover:bg-card/80 transition-colors">
                <h3 className="font-semibold text-foreground text-left text-balance">{faq.q}</h3>
                <span className="ml-4 flex-shrink-0 text-muted-foreground group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-4 md:px-6 py-4 bg-background text-muted-foreground border-t border-border">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
          <p className="text-blue-100 text-lg mb-8">Join thousands of professionals who have advanced their careers with Chatura Solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/educational-consultation"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule Consultation <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
