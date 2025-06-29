"use client"

import { motion } from 'framer-motion'
import { Github, ExternalLink, Smartphone, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with NextJS and Go backend. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, and admin dashboard. Implemented real-time inventory management and order tracking system with MySQL database optimization for high-performance queries.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["NextJS", "Go", "MySQL", "Stripe", "Redis"],
    demoUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    type: "web"
  },
  {
    id: 2,
    title: "Task Management Mobile App",
    description: "Cross-platform mobile application for project management and team collaboration. Built with React Native frontend and Go microservices backend. Features real-time notifications, file sharing, team chat, and advanced analytics dashboard. Implemented offline-first architecture with seamless synchronization.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React Native", "Go", "WebSocket", "MySQL", "Redis"],
    demoUrl: "https://example.com/task-app-download",
    githubUrl: "https://github.com/yourusername/task-management-app",
    type: "mobile",
    platforms: ["iOS", "Android"]
  },
  {
    id: 3,
    title: "Real-Time Analytics Dashboard",
    description: "Professional analytics platform for business intelligence with real-time data visualization. Built using ReactJS with D3.js for custom charts and Go backend for data processing. Features include customizable dashboards, automated reports, data export capabilities, and role-based access control with MySQL for data persistence.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["ReactJS", "D3.js", "Go", "MySQL", "WebSocket"],
    demoUrl: "https://example-analytics.com",
    githubUrl: "https://github.com/yourusername/analytics-dashboard",
    type: "web"
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Full-featured social networking platform with posts, comments, likes, and real-time messaging. Developed with NextJS frontend and scalable Go backend architecture. Implements advanced features like image/video uploads, story functionality, friend recommendations, and content moderation using machine learning APIs.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["NextJS", "Go", "MySQL", "AWS S3", "WebSocket"],
    demoUrl: "https://example-social.com",
    githubUrl: "https://github.com/yourusername/social-platform",
    type: "web"
  },
  {
    id: 5,
    title: "Fitness Tracking Mobile App",
    description: "Comprehensive fitness and wellness mobile application with workout tracking, nutrition logging, and progress analytics. Built with React Native and Go backend services. Features include GPS workout tracking, social challenges, personalized workout plans, and integration with wearable devices for health data synchronization.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React Native", "Go", "MySQL", "GPS API", "Health APIs"],
    demoUrl: "https://example.com/fitness-app-download",
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    type: "mobile",
    platforms: ["iOS", "Android"]
  },
  {
    id: 6,
    title: "API Gateway & Microservices",
    description: "Enterprise-grade API gateway and microservices architecture built entirely with Go. Handles authentication, rate limiting, load balancing, and service discovery. Features include circuit breakers, distributed tracing, comprehensive logging, and auto-scaling capabilities. Designed for high-throughput applications with MySQL clustering.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Go", "Docker", "Kubernetes", "MySQL", "Redis"],
    demoUrl: "https://example-api.com/docs",
    githubUrl: "https://github.com/yourusername/api-gateway",
    type: "backend"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work demonstrating expertise in full-stack development, 
            from responsive web applications to scalable backend systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <div className="flex items-center gap-1">
                      {project.type === 'web' && <Monitor className="h-4 w-4 text-blue-600" />}
                      {project.type === 'mobile' && <Smartphone className="h-4 w-4 text-green-600" />}
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <div className="flex flex-col w-full gap-3">
                    <div className="flex gap-2">
                      <Button asChild size="sm" className="flex-1">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {project.type === 'mobile' ? 'Download App' : 'Live Demo'}
                        </a>
                      </Button>
                      
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                    
                    {project.type === 'mobile' && project.platforms && (
                      <p className="text-xs text-muted-foreground text-center">
                        Available on {project.platforms.join(' & ')}
                      </p>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}