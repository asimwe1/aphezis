"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Target, Users } from "lucide-react"
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  HoverScale,
  PageTransition,
  AnimatedCounter,
} from "@/components/animations"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="w-full py-5 md:py-10 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <SlideIn direction="left">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About ApheZis</h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      We are a tech startup dedicated to providing innovative solutions in software and web development,
                      with a focus on emerging technologies.
                    </p>
                  </div>
                </div>
              </SlideIn>
              <SlideIn direction="right">
                <motion.div
                  animate={{
                    rotate: [0, 1, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/tech.jpeg?height=600&width=600"
                    width={600}
                    height={400}
                    alt="About Us"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  />
                </motion.div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <FadeIn className="flex flex-col items-center justify-center p-4 text-center">
                <span className="text-4xl font-bold text-primary">
                  <AnimatedCounter to={50} />+
                </span>
                <span className="text-sm text-muted-foreground mt-1">Clients Worldwide</span>
              </FadeIn>
              <FadeIn delay={0.1} className="flex flex-col items-center justify-center p-4 text-center">
                <span className="text-4xl font-bold text-primary">
                  <AnimatedCounter to={100} />+
                </span>
                <span className="text-sm text-muted-foreground mt-1">Projects Completed</span>
              </FadeIn>
              <FadeIn delay={0.2} className="flex flex-col items-center justify-center p-4 text-center">
                <span className="text-4xl font-bold text-primary">
                  <AnimatedCounter to={15} />+
                </span>
                <span className="text-sm text-muted-foreground mt-1">Team Members</span>
              </FadeIn>
              <FadeIn delay={0.3} className="flex flex-col items-center justify-center p-4 text-center">
                <span className="text-4xl font-bold text-primary">
                  <AnimatedCounter to={5} />+
                </span>
                <span className="text-sm text-muted-foreground mt-1">Years of Experience</span>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="w-full py-4 md:py-8 lg:py-10 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <SlideIn direction="left">
                <HoverScale>
                  <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-4">
                        <motion.div
                          className="p-2 w-fit bg-primary/10 rounded-full"
                          whileHover={{
                            backgroundColor: "rgba(var(--primary), 0.2)",
                            scale: 1.05,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <Target className="h-6 w-6 text-primary" />
                        </motion.div>
                        <h2 className="text-2xl font-bold">Our Mission</h2>
                        <p className="text-muted-foreground">
                          To empower businesses through innovative technology solutions that drive growth and
                          efficiency. We strive to deliver exceptional value through our expertise in software and web
                          development.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </SlideIn>
              <SlideIn direction="right">
                <HoverScale>
                  <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-4">
                        <motion.div
                          className="p-2 w-fit bg-primary/10 rounded-full"
                          whileHover={{
                            backgroundColor: "rgba(var(--primary), 0.2)",
                            scale: 1.05,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <Award className="h-6 w-6 text-primary" />
                        </motion.div>
                        <h2 className="text-2xl font-bold">Our Vision</h2>
                        <p className="text-muted-foreground">
                          To be a leading technology partner for businesses worldwide, known for our innovative
                          solutions, exceptional service, and commitment to excellence in every project we undertake.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="w-full py-4 md:py-8 lg:py-10">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Core Values</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    The principles that guide our work and relationships
                  </p>
                </div>
              </div>
            </FadeIn>
            <StaggerContainer className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <StaggerItem>
                <HoverScale>
                  <Card className="bg-background h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <motion.div
                        className="p-2 bg-primary/10 rounded-full"
                        whileHover={{
                          backgroundColor: "rgba(var(--primary), 0.2)",
                          scale: 1.05,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Award className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-bold">Excellence</h3>
                      <p className="text-muted-foreground">
                        We are committed to delivering the highest quality in everything we do, exceeding expectations
                        at every opportunity.
                      </p>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerItem>
              <StaggerItem>
                <HoverScale>
                  <Card className="bg-background h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <motion.div
                        className="p-2 bg-primary/10 rounded-full"
                        whileHover={{
                          backgroundColor: "rgba(var(--primary), 0.2)",
                          scale: 1.05,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Users className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-bold">Collaboration</h3>
                      <p className="text-muted-foreground">
                        We believe in the power of teamwork and partnership, working closely with our clients to achieve
                        shared goals.
                      </p>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerItem>
              <StaggerItem>
                <HoverScale>
                  <Card className="bg-background h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <motion.div
                        className="p-2 bg-primary/10 rounded-full"
                        whileHover={{
                          backgroundColor: "rgba(var(--primary), 0.2)",
                          scale: 1.05,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Clock className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-bold">Innovation</h3>
                      <p className="text-muted-foreground">
                        We continuously explore new technologies and approaches to provide cutting-edge solutions for
                        our clients.
                      </p>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Team */}
        <section className="w-full py-2 bg-muted/50">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet Our Team</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    The talented professionals behind ApheZis
                  </p>
                </div>
              </div>
            </FadeIn>
            <StaggerContainer className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
              <StaggerItem>
                <HoverScale>
                  <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <motion.div
                        className="h-24 w-24 overflow-hidden rounded-full bg-muted"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          width={96}
                          height={96}
                          alt="Team Member"
                          className="h-full w-full object-cover"
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold">Alpha Sadeny</h3>
                        <p className="text-muted-foreground">CEO & Founder</p>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerItem>
              <StaggerItem>
                <HoverScale>
                  <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <motion.div
                        className="h-24 w-24 overflow-hidden rounded-full bg-muted"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          width={96}
                          height={96}
                          alt="Team Member"
                          className="h-full w-full object-cover"
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold">Sultan Garrou</h3>
                        <p className="text-muted-foreground">CTO</p>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerItem>
              <StaggerItem>
                <HoverScale>
                  <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <motion.div
                        className="h-24 w-24 overflow-hidden rounded-full bg-muted"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          width={96}
                          height={96}
                          alt="Team Member"
                          className="h-full w-full object-cover"
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold">Asimwe Landry</h3>
                        <p className="text-muted-foreground">Lead Developer</p>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
