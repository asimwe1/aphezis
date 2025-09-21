"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Globe, LineChart } from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem, HoverScale, PageTransition } from "@/components/animations"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three-stdlib"
import AboutPage from "./about/page"
import SolutionsPage from "./solutions/page"
import ContactPage from "./contact/page"

// Dynamically import ThreeScene to ensure client-side rendering
const ThreeScene = dynamic(() => Promise.resolve(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    // Initialize Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.set(25, 10, 15).setLength(25)

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true })

    // Function to update canvas background color based on theme
    const updateCanvasColor = () => {
      const isDarkMode = document.documentElement.classList.contains("dark")
      renderer.setClearColor(isDarkMode ? 0x0a0a0a : 0xffffff) // #0A0A0A for dark, #FFFFFF for light
    }

    // Initial color setting
    updateCanvasColor()

    // Observe theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          updateCanvasColor()
        }
      })
    })
    observer.observe(document.documentElement, { attributes: true })

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05

    // Icosahedron
    const gpt = new THREE.IcosahedronGeometry(5, 12)
    const mpt = new THREE.PointsMaterial({ size: 0.15, color: 0x0055ff })
    const pt = new THREE.Points(gpt, mpt)
    scene.add(pt)

    // Plane
    const gpl = new THREE.PlaneGeometry(100, 100, 100, 100)
    gpl.rotateX(Math.PI * -0.5)

    const mpl = new THREE.PointsMaterial({ size: 0.1, color: 0x3388aa })
    const pl = new THREE.Points(gpl, mpl)
    scene.add(pl)

    // Raycaster for cursor tracking
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    // State for cursor interaction
    const defaultPosition = new THREE.Vector3(0, 1.5, -15) // Right side, vertically centered
    const targetPosition = new THREE.Vector3().copy(defaultPosition)

    // Bend the plane based on sphere position
    const bendThePlane = (center: THREE.Vector3, radius: number, pHeight: number, smoothness: number) => {
      const pos = gpl.attributes.position
      const v3 = new THREE.Vector3()
      for (let i = 0; i < pos.count; i++) {
        v3.fromBufferAttribute(pos, i)
        const a = pHeight
        const adjustedV3 = new THREE.Vector3(v3.x - center.x, v3.y, v3.z - center.z)
        const b = getSphereCone(adjustedV3, -3, radius)
        const sm = smoothfunc(a, b, smoothness)
        pos.setY(i, sm)
      }
      pos.needsUpdate = true
    }

    const getSphereCone = (p: THREE.Vector3, h: number, r: number) => {
      const dist = Math.hypot(p.x, p.z)
      const limR = Math.sqrt(r * r - h * h)
      let res = 0
      if (dist <= limR) {
        res = Math.sqrt(r * r - dist * dist) * Math.sign(h)
      } else {
        res = h - (dist - limR) * (limR / h)
      }
      return res
    }

    const smoothfunc = (a: number, b: number, k: number) => {
      const h = Math.max(0, Math.min(1, (b - a) / k + 0.5))
      const m = h * (1 - h) * k
      return h * a + (1 - h) * b - m * 0.5
    }

    // Initial bend
    bendThePlane(pt.position, 5, 3, 15)

    // Handle Mouse Move
    const onMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const plane = new THREE.Plane(new THREE.Vector3(0, 1.5, 0), 0)
      const intersectPoint = new THREE.Vector3()
      raycaster.ray.intersectPlane(plane, intersectPoint)

      if (intersectPoint) {
        targetPosition.copy(intersectPoint)
      }
    }

    // Handle Mouse Leave
    const onMouseLeave = () => {
      targetPosition.copy(defaultPosition)
    }

    containerRef.current.addEventListener("mousemove", onMouseMove)
    containerRef.current.addEventListener("mouseleave", onMouseLeave)

    // Handle Resize
    const onWindowResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    // Initial Size
    onWindowResize()

    window.addEventListener("resize", onWindowResize)

    // Animation Loop
    const animate = () => {
      controls.update()
      pt.position.lerp(targetPosition, 0.1)
      bendThePlane(pt.position, 5, 3, 15)
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", onWindowResize)
      containerRef.current?.removeEventListener("mousemove", onMouseMove)
      containerRef.current?.removeEventListener("mouseleave", onMouseLeave)
      observer.disconnect()
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}), { ssr: false })

export default function Home() {

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section id="home" className="w-full py-16 md:py-28 lg:py-36 xl:py-48 bg-gradient-to-b from-background to-background/80 relative">
          <ThreeScene />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <SlideIn direction="left">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Innovative Tech Solutions for Your Business
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      ApheZis offers cutting-edge software and web development services to help your business thrive in
                      the digital world.
                    </p>
                  </div>
                </SlideIn>
                <FadeIn delay={0.3}>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <a href="#solutions">
                      <Button className="inline-flex bg-blue-700 h-10 items-center justify-center group">
                        Explore Solutions
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </a>
                    <a href="#contact">
                      <Button variant="outline">Contact Us</Button>
                    </a>
                  </div>
                </FadeIn>
              </div>
              {/* Empty div to maintain grid layout */}
              <div className="lg:order-last"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Services</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    We provide comprehensive tech solutions tailored to your business needs
                  </p>
                </div>
              </div>
            </FadeIn>
            <StaggerContainer className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <StaggerItem>
                <HoverScale>
                  <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <motion.div
                        className="p-2 bg-primary/10 rounded-full"
                        whileHover={{
                          backgroundColor: "rgba(var(--primary), 0.2)",
                          scale: 1.05,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Code className="h-6 w-6 text-blue-700" />
                      </motion.div>
                      <h3 className="text-xl font-bold">Software Development</h3>
                      <p className="text-muted-foreground">
                        Custom software solutions designed to streamline your business operations and enhance
                        productivity.
                      </p>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerItem>
              <StaggerItem>
                <HoverScale>
                  <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <motion.div
                        className="p-2 bg-primary/10 rounded-full"
                        whileHover={{
                          backgroundColor: "rgba(var(--primary), 0.2)",
                          scale: 1.05,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Globe className="h-6 w-6 text-blue-700" />
                      </motion.div>
                      <h3 className="text-xl font-bold">Web Development</h3>
                      <p className="text-muted-foreground">
                        Responsive and user-friendly websites that provide exceptional user experience and drive
                        conversions.
                      </p>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerItem>
              <StaggerItem>
                <HoverScale>
                  <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <motion.div
                        className="p-2 bg-primary/10 rounded-full"
                        whileHover={{
                          backgroundColor: "rgba(var(--primary), 0.2)",
                          scale: 1.05,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <LineChart className="h-6 w-6 text-blue-700" />
                      </motion.div>
                      <h3 className="text-xl font-bold">Forex & Crypto Trading</h3>
                      <p className="text-muted-foreground">
                        Comprehensive learning sessions starting in September to help you navigate the financial
                        markets.
                      </p>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Clients Say</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Hear from our satisfied clients about their experience working with us
                  </p>
                </div>
              </div>
            </FadeIn>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <SlideIn direction="left">
                <HoverScale scale={1.02}>
                  <Card className="bg-background h-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <p className="text-muted-foreground italic">
                            "ApheZis transformed our business with their innovative web development solutions. The
                            Weduca platform they built for us has revolutionized how we interact with our customers."
                          </p>
                        </motion.div>
                        <div className="flex items-center space-x-4">
                          <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">
                            <span className="font-medium text-sm">K</span>
                          </div>
                          <div>
                            <p className="font-medium">Kenzo</p>
                            <p className="text-sm text-muted-foreground">Weduca Platform</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </SlideIn>
              <SlideIn direction="right">
                <HoverScale scale={1.02}>
                  <Card className="bg-background h-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <p className="text-muted-foreground italic">
                            "Working with ApheZis was a game-changer for our startup. Their software development
                            expertise helped us launch our product ahead of schedule and under budget."
                          </p>
                        </motion.div>
                        <div className="flex items-center space-x-4">
                          <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">
                            <span className="font-medium text-sm">S</span>
                          </div>
                          <div>
                            <p className="font-medium">Sarah Johnson</p>
                            <p className="text-sm text-muted-foreground">TechStart Inc.</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-700 text-primary-foreground">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="mx-auto max-w-[700px] md:text-xl">
                    Join our internship program starting in July or enroll in our Forex and Crypto trading sessions
                    beginning in September.
                  </p>
                </div>
                <motion.div
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link className="text-blue-700" href="/contact">
                    <Button variant="secondary" size="lg" className="text-blue-700 group">
                      Get Started Today
                      <motion.span
                        className="ml-2"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </motion.span>
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="solutions">
          <SolutionsPage/>
        </section>
        <section id="contact">
          <ContactPage />
        </section>

      </div>
    </PageTransition>
  )
}