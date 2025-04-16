"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Contact Us", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <motion.div
          className="flex lg:flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="-m-1.5 p-1.5">
            <motion.span className="font-bold text-xl" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Image
  src="/logo2.png"
  alt="ApheZis Logo"
  width={40}
  height={40}
  className="h-full w-[10rem] inline-block drop-shadow-4xl "
  style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))' }}
/>

            </motion.span>
            <span className="sr-only">ApheZis</span>
          </Link>
        </motion.div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors hover:text-primary relative",
                  pathname === item.href ? "text-primary" : "text-foreground/80",
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.span
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="hidden lg:flex lg:flex-1 lg:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ThemeToggle />
        </motion.div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="font-bold text-xl">ApheZis</span>
              </Link>
              <Button variant="ghost" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent",
                          pathname === item.href ? "text-primary" : "text-foreground/80",
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="py-6 flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <ThemeToggle />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.header>
  )
}
