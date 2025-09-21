"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Twitter, Github } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      className="border-t bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
            <Link href="https://instagram.com/aphezis" target="blank" className="text-foreground/60 hover:text-primary">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
            <Link href="#" className="text-foreground/60 hover:text-primary">
              <span className="sr-only">Twitter</span>

              <Twitter className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
            <Link href="#" className="text-foreground/60 hover:text-primary">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <motion.p
            className="text-center text-xs leading-5 text-foreground/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            &copy; 2025 ApheZis LTD. All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  )
}
