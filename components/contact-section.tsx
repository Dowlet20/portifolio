"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Biz bilen habarlaşyň
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ideýalaryňyzy durmuşa geçirmäge taýynmy? Biz ýokary derejeli web saýtlary, mobile app-lary döretmeklik üçin elýeterlidiris
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Habarlaşyň
                </CardTitle>
                <CardDescription>
                  Proýektleriňiz ýa-da tehnologiýa barada öňde goýan maksatlaryň barmy? Biz bilen maslahatlaşyp bilersiňiz, biz bilen habarlaşmak üçin:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        Ady
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        className="transition-all focus:scale-[1.02]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        Familiýasy
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        className="transition-all focus:scale-[1.02]"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  
                  {/* <div className="space-y-2">
                    <Label htmlFor="subject">
                      maslahatlaşmak isleýän temaňyz:
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="transition-all focus:scale-[1.02]"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div> */}
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="transition-all focus:scale-[1.02] resize-none"
                      placeholder="Bizden soramak isleýän zadyňyz..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-[1.02]"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        iberilýär...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Iberildi!
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Ugrat
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Email we Tel
                </CardTitle>
                {/* <CardDescription>
                  Multiple ways to reach me for different types of inquiries.
                </CardDescription> */}
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      gandymowdowletmyrat@gmail.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Döretmeli proýektleriňiz üçin
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      El Tel
                    </h3>
                    <p className="text-muted-foreground">
                      +993 71-79-03-90
                    </p>
                    <p className="text-sm text-muted-foreground">
                      24/7 elýeterli
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                    <p className="text-muted-foreground">@yourusername</p>
                    <p className="text-sm text-muted-foreground">Professional networking</p>
                  </div>
                </div> */}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Biziň döredip bilýän platformalarymyz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    Full-stack web saýt
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    React/Next.js frontend
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    Go backend, API we databazany birlikde birnäçe maglumat bilen doldurmak 
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    Ýokary derejeli databaza strukturasy we ol bilen işlemeklik
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    Mobile app döretmeklik
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    Eger şu tehnologiýalary ulanyp ulgamyňyz döredilen bolsa, dörän kemçilikleri çözmek
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}