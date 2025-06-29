"use client"

import { motion } from 'framer-motion'
import { Progress } from '@/components/ui/progress'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "ReactJS", level: 95, color: "bg-blue-500" },
      { name: "NextJS", level: 90, color: "bg-gray-800" },
      { name: "TypeScript", level: 88, color: "bg-blue-600" },
      { name: "JavaScript", level: 92, color: "bg-yellow-500" },
      { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
      { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Go (Golang)", level: 88, color: "bg-cyan-600" },
      { name: "Node.js", level: 85, color: "bg-green-600" },
      { name: "RESTful APIs", level: 92, color: "bg-purple-600" },
      { name: "GraphQL", level: 80, color: "bg-pink-500" },
      { name: "Microservices", level: 85, color: "bg-indigo-600" }
    ]
  },
  {
    title: "Database & DevOps",
    skills: [
      { name: "MySQL", level: 90, color: "bg-blue-700" },
      { name: "PostgreSQL", level: 85, color: "bg-blue-800" },
      { name: "Redis", level: 82, color: "bg-red-600" },
      { name: "Docker", level: 85, color: "bg-blue-400" },
      { name: "AWS", level: 80, color: "bg-orange-600" },
      { name: "Git", level: 95, color: "bg-gray-700" }
    ]
  }
]

const additionalSkills = [
  "React Native", "WebSocket", "JWT Authentication", "Payment Integration (Stripe)",
  "CI/CD", "Testing (Jest, Cypress)", "Performance Optimization", "SEO",
  "Agile/Scrum", "Code Review", "Technical Documentation", "Problem Solving"
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern technologies and frameworks for building scalable, 
            high-performance applications across the full development stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  <CardDescription>
                    Core competencies and expertise level
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                          viewport={{ once: true }}
                          className={`absolute top-0 left-0 h-2 rounded-full ${skill.color}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-center">Additional Skills & Tools</CardTitle>
              <CardDescription className="text-center">
                Technologies and methodologies I work with regularly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {additionalSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="outline" className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring 
              advanced Go patterns, cloud-native architectures, and emerging frontend frameworks to stay 
              at the forefront of modern development practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}