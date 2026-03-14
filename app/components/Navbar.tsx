"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Placements", href: "/placements" },
  { name: "Faculty", href: "/faculty" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0B1F3B]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.jpeg"
              alt="NCHM Logo"
              className="w-11 h-11 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <span className="font-serif text-lg tracking-wide text-white block leading-tight">
                Nepal College
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#D4A533] uppercase">
                Hotel Management
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm tracking-wide transition-colors duration-300 rounded-lg ${
                    isActive
                      ? "text-[#D4A533]"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-[#D4A533] to-[#E8C86A]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#D4A533] to-[#E8C86A] text-[#0B1F3B] font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,165,51,0.4)] hover:scale-105"
            >
              Apply Now
            </Link>
          </div>

          {/* Animated Hamburger */}
          <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                  {/* Top line */}
                  <motion.span
                    animate={mobileOpen ? { rotate: 45 } : { rotate: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-6 h-[2px] bg-white"
                  />

                  {/* Middle line */}
                  <motion.span
                    animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute w-6 h-[2px] bg-white"
                  />

                  {/* Bottom line */}
                  <motion.span
                    animate={mobileOpen ? { rotate: -45 } : { rotate: 0, y: 6 }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-6 h-[2px] bg-white"
                  />
                </motion.button>
        </div>

        {/* Gold bottom border */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4A533]/30 to-transparent" />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 w-80 z-50 bg-[#0B1F3B]/98 backdrop-blur-2xl border-l border-[#D4A533]/15 flex flex-col pt-24 px-8 gap-2 md:hidden"
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 px-4 rounded-lg text-lg tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-[#D4A533] bg-[#D4A533]/10"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 px-4"
            >
              <Link
                href="/contact"
                className="block w-full py-3 rounded-lg bg-gradient-to-r from-[#D4A533] to-[#E8C86A] text-[#0B1F3B] font-semibold text-center text-sm tracking-wide"
              >
                Apply Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}