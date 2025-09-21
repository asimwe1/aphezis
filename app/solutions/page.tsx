"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Globe, GraduationCap, LineChart } from "lucide-react"
import { FadeIn, SlideIn, PageTransition, HoverScale } from "@/components/animations"
import { motion } from "framer-motion"

export default function SolutionsPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="w-full py-4 md:py-8 lg:py-16 bg-gradient-to-b from-background to-background/80">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Solutions</h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Comprehensive tech services tailored to meet your business needs
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Software Development */}
        <section className="w-full py-4 md:py-8 lg:py-10 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <SlideIn direction="left">
                <div className="flex flex-col justify-center space-y-2">
                  <motion.div
                    className="inline-flex items-center space-x-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    whileHover={{ backgroundColor: "rgba(var(--primary), 0.2)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Code className="h-4 w-4" />
                    <span>Software Development</span>
                  </motion.div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Custom Software Solutions</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      We design and develop custom software applications that streamline your business processes,
                      enhance productivity, and drive growth.
                    </p>
                  </div>
                  <ul className="grid gap-2">
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span>Enterprise Resource Planning (ERP) Systems</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span>Customer Relationship Management (CRM) Solutions</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span>Mobile Application Development</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span>Custom API Development and Integration</span>
                    </motion.li>
                  </ul>
                  <div>
                    <Link href="/contact">
                      <HoverScale>
                        <Button className="group">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </HoverScale>
                    </Link>
                  </div>
                </div>
              </SlideIn>
              <SlideIn direction="right" className="lg:order-last">
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/SoftwareSolutions.jpeg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Software Development"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  />
                </motion.div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Web Development */}
        <section className="w-full py-4 md:py-8 lg:py-10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
              <SlideIn direction="left">
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/Responsive.jpg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Web Development"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  />
                </motion.div>
              </SlideIn>
              <SlideIn direction="right">
                <div className="flex flex-col justify-center space-y-4">
                  <motion.div
                    className="inline-flex items-center space-x-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    whileHover={{ backgroundColor: "rgba(var(--primary), 0.2)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Globe className="h-4 w-4" />
                    <span>Web Development</span>
                  </motion.div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Responsive Web Solutions</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      We create stunning, user-friendly websites that provide exceptional user experience and drive
                      conversions for your business.
                    </p>
                  </div>
                  <ul className="grid gap-2">
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span>Corporate Websites and Landing Pages</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span>E-commerce Platforms</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span>Web Applications</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span>Content Management Systems</span>
                    </motion.li>
                  </ul>
                  <div>
                    <Link href="/contact">
                      <HoverScale>
                        <Button className="group">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </HoverScale>
                    </Link>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Forex & Crypto Trading */}
        <section className="w-full py-4 md:py-8 lg:py-10 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <SlideIn direction="left">
                <div className="flex flex-col justify-center space-y-4">
                  <motion.div
                    className="inline-flex items-center space-x-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    whileHover={{ backgroundColor: "rgba(var(--primary), 0.2)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <LineChart className="h-4 w-4" />
                    <span>Forex & Crypto Trading</span>
                  </motion.div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                      Financial Markets Education
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Starting in September, we're offering comprehensive learning sessions on Forex and Cryptocurrency
                      trading to help you navigate the financial markets.
                    </p>
                  </div>
                  <ul className="grid gap-2">
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span>Fundamentals of Forex Trading</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span>Cryptocurrency Investment Strategies</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span>Technical Analysis Workshops</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span>Risk Management in Trading</span>
                    </motion.li>
                  </ul>
                  <div>
                    <Link href="/contact">
                      <HoverScale>
                        <Button className="group">
                          Register Interest
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </HoverScale>
                    </Link>
                  </div>
                </div>
              </SlideIn>
              <SlideIn direction="right" className="lg:order-last">
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/stocks.png?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Forex & Crypto Trading"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  />
                </motion.div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Internship Program */}
        <section className="w-full py-4 md:py-8 lg:py-10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
              <SlideIn direction="left">
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/career.png?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Internship Program"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  />
                </motion.div>
              </SlideIn>
              <SlideIn direction="right">
                <div className="flex flex-col justify-center space-y-4">
                  <motion.div
                    className="inline-flex items-center space-x-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    whileHover={{ backgroundColor: "rgba(var(--primary), 0.2)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>Internship Program</span>
                  </motion.div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Launch Your Tech Career</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Starting in July, our internship program offers hands-on experience in software and web
                      development under the guidance of industry professionals.
                    </p>
                  </div>
                  <ul className="grid gap-2">
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span>Practical Experience in Real Projects</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span>Mentorship from Industry Experts</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span>Career Development Workshops</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <div className="rounded-full bg-primary/10 p-1">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span>Networking Opportunities</span>
                    </motion.li>
                  </ul>
                  <div>
                    <Link href="/contact">
                      <HoverScale>
                        <Button className="group">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </HoverScale>
                    </Link>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
