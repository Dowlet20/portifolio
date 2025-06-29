"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown, Code, Database, Server } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const techStack = [
    { name: 'ReactJS', icon: Code, color: 'text-blue-500' },
    { name: 'NextJS', icon: Server, color: 'text-gray-800 dark:text-white' },
    { name: 'Go', icon: Server, color: 'text-cyan-500' },
    { name: 'MySQL', icon: Database, color: 'text-orange-500' }
  ]

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/5 to-purple-200/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="relative inline-block mb-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 200 }}
                className="relative"
              >
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-5xl font-bold text-gray-700 dark:text-gray-200 shadow-inner">
                    GD
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-300/30 dark:border-blue-600/30"
                />
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                  Gandymow Döwletmyrat
                </span>
              </h1>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="relative"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-6">
                  Full-Stack programmaçy 
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex justify-center items-center gap-8 mb-12"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className="p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
                  <tech.icon className={`h-8 w-8 ${tech.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="max-w-5xl mx-auto mb-12"
          >
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6"
              >
                Men, <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> ReactJS, NextJS, Go we MySQL </span> ýaly tehnologiýalary ulanyp, giň gerimli we ýokary öndürijilikli web programmalaryny döretmekde ýeterlik derejede tejribesi bolan Full-Stack programmaçy.
                {/* <strong className="text-blue-600 dark:text-blue-400">ReactJS</strong>, <strong className="text-gray-800 dark:text-white">NextJS</strong>, <strong className="text-cyan-600 dark:text-cyan-400">Go</strong>, and <strong className="text-orange-600 dark:text-orange-400">MySQL</strong>. */}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6"
              >
                Men ulanyjy üçin ýeňil we duýgur interfeýsler, şeýle hem ygtybarly serwer tarap çözgütlerini tapmakda ýeterlik derejede tejribäm bar. Men Magtymguly adyndaky Türkmen döwlet uniwersitetiniň Maglumat tehnologiýalary fakultetini tamamlap, gullugymy şu ýyl dyndym. Gulluk döwrümde bu tehnologiýalara bolan tejribämi has-da artdyrdym. Men 2.5 - 3 ýyldan wagtdan bäri şu tehnologiýalar bilen işleýärin. Men asyl matematik, mekdep we uniwersitet döwri olimpiadalardan alan birnäçe ýerlerim bar. Men Python, C#, React Native, Windows Forms ýaly tehnologiýalar bilen hem işläp gördim.
              </motion.p>
              
              {/* <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
              >
                I am driven by a love for learning new technologies and creating innovative solutions that make an impact. <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Explore my work to see how I bring ideas to life with code!</strong>
              </motion.p> */}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <a
                href="https://github.com/Dowlet20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Github className="h-6 w-6" />
                Meniň Github - ym
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToProjects}
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 px-8 py-4 text-lg font-semibold rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-950/20 transform hover:scale-105 transition-all duration-300"
            >
              Meniň proýektlerim
              <ArrowDown className="ml-3 h-5 w-5 animate-bounce" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/Dowlet20", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
              // { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn", color: "hover:text-blue-600" },
              { icon: Mail, href: "gandymowdowletmyrat@gmail.com", label: "Email", color: "hover:text-red-500" }
            ].map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.4 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="ghost" size="lg" asChild>
                  <a
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                    rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                    className={`p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 ${social.color}`}
                  >
                    <social.icon className="h-7 w-7" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        {/* <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
        >
          <span className="text-sm font-medium"></span>
          <ArrowDown className="h-5 w-5" />
        </motion.div> */}
      </motion.div>
    </section>
  )
}