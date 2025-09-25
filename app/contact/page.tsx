"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { FadeIn, SlideIn, PageTransition, HoverScale } from "@/components/animations"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="w-full py-4 md:py-8 lg:py-16">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    We'd love to hear from you. Get in touch with our team.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="w-full py-4 md:py-6 lg:py-8 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <SlideIn direction="left">
                <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                  <CardContent className="p-6">
                    {isSubmitted ? (
                      <motion.div
                        className="flex flex-col items-center justify-center h-full py-12 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                        <p className="text-muted-foreground">
                          Your message has been sent successfully. We'll get back to you soon.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="transition-all duration-200 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="transition-all duration-200 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="transition-all duration-200 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                            className="min-h-[150px] transition-all duration-200 focus:border-primary"
                            required
                          />
                        </div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            type="submit"
                            className="w-full relative overflow-hidden group"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <div className="flex items-center justify-center">
                                <svg
                                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Sending...
                              </div>
                            ) : (
                              <>
                                Send Message
                                <span className="absolute right-0 -mt-12 h-32 w-8 bg-white opacity-10 rotate-12 transform -translate-x-12 transition-transform duration-1000 ease-out group-hover:translate-x-40"></span>
                              </>
                            )}
                          </Button>
                        </motion.div>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </SlideIn>
              <SlideIn direction="right">
                <div className="flex flex-col space-y-6">
                  <HoverScale>
                    <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
                            <MapPin className="h-6 w-6 text-primary" />
                          </motion.div>
                          <div>
                            <h3 className="font-bold">Our Location</h3>
                            <p className="text-muted-foreground">Norrsken House Kigali;
                            1 KN 78 St, Kigali</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                  <HoverScale>
                    <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
                            <Mail className="h-6 w-6 text-primary" />
                          </motion.div>
                          <div>
                            <h3 className="font-bold">Email Us</h3>
                            <p className="text-muted-foreground">info@aphezis.com</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                  <HoverScale>
                    <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
                            <Phone className="h-6 w-6 text-primary" />
                          </motion.div>
                          <div>
                            <h3 className="font-bold">Call and Whatsap us</h3>
                            <p className="text-muted-foreground">+250 789 905 377 / +86 183 0507 3441</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                  <HoverScale>
                    <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <h3 className="font-bold">Business Hours</h3>
                          <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                            <span>Monday - Friday:</span>
                            <span>9:00 AM - 6:00 PM</span>
                            <span>Saturday:</span>
                            <span>10:00 AM - 4:00 PM</span>
                            <span>Sunday:</span>
                            <span>Closed</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full py-4 md:py-6 lg:py-8">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Find Us</h2>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mx-auto max-w-5xl py-12">
                <motion.div
                  className="aspect-video overflow-hidden rounded-xl bg-primary/5 border border-primary/10"
                  whileHover={{
                    boxShadow: "0 10px 25px -5px rgba(var(--primary), 0.1), 0 8px 10px -6px rgba(var(--primary), 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex h-full w-full items-center justify-center" >
                  <iframe className="flex h-full w-full items-center justify-center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6277.205230719282!2d30.057412912191715!3d-1.9511665367094533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5a86d814c61%3A0x7d3b83e12b1c11a9!2sNorrsken%20House%20Kigali!5e1!3m2!1sen!2srw!4v1744753289435!5m2!1sen!2srw" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
