import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image 
                src="/logo.png" 
                alt="Chatura Solutions LLP" 
                width={150} 
                height={50}
                className="h-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Empowering students and professionals with expert guidance for career advancement.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+91-416-4055743" className="hover:text-primary transition-colors">
                  +91-416-4055743
                </a>
              </p>
              <p className="text-muted-foreground flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@chaturasolutions.com" className="hover:text-primary transition-colors">
                  info@chaturasolutions.com
                </a>
              </p>
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin size={16} />
                <span>Vellore, Tamil Nadu</span>
              </p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Social
                </Link>
              </li>
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Careers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Intern
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Trainer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Fulltime
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/mock-interview" className="text-muted-foreground hover:text-primary transition-colors">
                  Mock Interview
                </Link>
              </li>
              <li>
                <Link href="/educational-consultation" className="text-muted-foreground hover:text-primary transition-colors">
                  Consultation
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-muted-foreground hover:text-primary transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2026 Chatura Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/chaturasolutions/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/chaturasolutions/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
