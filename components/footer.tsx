"use client"

import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Meniň Portifoliýam
            </h3>
            {/* <p className="text-muted-foreground mb-4">
              Full-Stack Developerd specializing in ReactJS, NextJS, Go, and MySQL. 
              Building scalable, high-performance web applications.
            </p> */}
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              {/* <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button> */}
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="mailto:your.email@example.com"
                  className="hover:scale-110 transition-transform"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Bölümler
            </h3>
            <nav className="space-y-2">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Men barada
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Proýektlerim
              </button>
              <button
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Başarnyklarym
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Habarlaşmak üçin
              </button>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Bilýän tehnologiýalarym
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Frontend: React, Next.js, TypeScript</p>
              <p>
                Backend: Go, Node.js, APIs
              </p>
              <p>
                Databaza: MySQL, PostgreSQL, Redis
              </p>
              <p>
                Gurallar: Docker, Git
              </p>
              <p>
                Başgada: Python, C#, Win Forms, React native.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Bu saýt üçin ulandym: 
            Next.js, Tailwind CSS, we Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}