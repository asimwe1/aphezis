"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

// Fade in animation for elements as they come into view
export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  ...props
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  [key: string]: any
}) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Slide in animation from different directions
export function SlideIn({
  children,
  className,
  direction = "left",
  delay = 0,
  duration = 0.5,
  ...props
}: {
  children: React.ReactNode
  className?: string
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  duration?: number
  [key: string]: any
}) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const variants = {
    hidden: {
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Staggered animation for lists of items
export function StaggerContainer({
  children,
  className,
  delay = 0,
  staggerChildren = 0.1,
  ...props
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  staggerChildren?: number
  [key: string]: any
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
  [key: string]: any
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Hover animation for cards and buttons
export function HoverScale({
  children,
  className,
  scale = 1.03,
  ...props
}: {
  children: React.ReactNode
  className?: string
  scale?: number
  [key: string]: any
}) {
  return (
    <motion.div whileHover={{ scale }} transition={{ duration: 0.2 }} className={className} {...props}>
      {children}
    </motion.div>
  )
}

// Animated counter
export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  className,
}: {
  from?: number
  to: number
  duration?: number
  className?: string
}) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = from
      const step = (to - from) / (duration * 60)
      const counter = setInterval(() => {
        start += step
        setCount(Math.floor(start))
        if (start >= to) {
          setCount(to)
          clearInterval(counter)
        }
      }, 1000 / 60)
      return () => clearInterval(counter)
    }
  }, [from, to, duration, isInView])

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  )
}

// Page transition wrapper
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  )
}
