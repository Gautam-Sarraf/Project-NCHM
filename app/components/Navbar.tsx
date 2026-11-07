"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  GraduationCap,
  Sparkles,
  BookOpen,
  Award,
  Users,
  Image as ImageIcon,
} from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Academic Programs", href: "/courses" },
  { name: "Faculty", href: "/faculty" },
  { name: "Placements", href: "/placements" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar */}
      <div
        className={`hidden lg:block bg-[#30345B] text-white text-xs py-2 px-6 border-b border-[#DFA526]/20 transition-all duration-300 ${
          scrolled ? "-translate-y-full opacity-0 h-0 py-0 overflow-hidden" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/90">
              <MapPin size={13} className="text-[#DFA526]" />
              Inside Bright College, Birgunj-09, Nepal
            </span>
            <span className="h-3 w-px bg-white/20" />
            <a
              href="tel:9845532370"
              className="flex items-center gap-1.5 text-white/90 hover:text-[#DFA526] transition-colors"
            >
              <Phone size={13} className="text-[#DFA526]" />
              +977 9845532370 / 9829232426
            </a>
            <span className="h-3 w-px bg-white/20" />
            <a
              href="mailto:nchmbrj143@gmail.com"
              className="flex items-center gap-1.5 text-white/90 hover:text-[#DFA526] transition-colors"
            >
              <Mail size={13} className="text-[#DFA526]" />
              nchmbrj143@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#DFA526]/20 text-[#DFA526] font-semibold text-[11px] tracking-wide uppercase">
              <Sparkles size={11} />
              1st Hotel Mgmt College in Birgunj
            </span>
            <span className="text-white/80 font-medium">Admissions Open 2026/27</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(48,52,91,0.08)] py-3 border-b border-[#30345B]/8"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-[#30345B]/6"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#DFA526] shadow-sm flex-shrink-0 bg-white">
              <Image
                src="/images/logo.jpeg"
                alt="Nepal College of Hotel Management (NCHM) Birgunj Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base md:text-lg tracking-tight text-[#30345B] group-hover:text-[#DFA526] transition-colors leading-tight">
                Nepal College
              </span>
              <span className="text-[10px] md:text-[11px] tracking-[0.16em] uppercase font-bold text-[#DFA526] -mt-0.5">
                of Hotel Management
              </span>
              <span className="text-[9px] text-[#555B6E] tracking-wider uppercase font-semibold hidden sm:inline">
                Birgunj, Nepal
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-semibold tracking-wide transition-all rounded-full ${
                    isActive
                      ? "text-[#30345B] bg-[#30345B]/5 font-bold"
                      : "text-[#555B6E] hover:text-[#30345B] hover:bg-[#30345B]/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#DFA526] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-gold !py-2.5 !px-6 text-sm font-bold shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Apply Now
              <ChevronRight size={15} />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              className="btn-gold !py-1.5 !px-3.5 text-xs font-bold mr-1"
            >
              Apply
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl text-[#30345B] hover:bg-[#30345B]/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-[#30345B]/60 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 w-[84%] max-w-sm bg-white z-50 shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#DFA526]">
                      <Image
                        src="/images/logo.jpeg"
                        alt="NCHM Logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-heading font-extrabold text-sm text-[#30345B]">
                        Nepal College
                      </div>
                      <div className="text-[10px] font-bold text-[#DFA526] uppercase">
                        Hotel Management
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="py-6 space-y-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                          isActive
                            ? "bg-[#30345B] text-white"
                            : "text-[#30345B] hover:bg-[#F8F7F3]"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight
                          size={16}
                          className={isActive ? "text-[#DFA526]" : "text-gray-400"}
                        />
                      </Link>
                    )
                  })}
                </div>

                {/* Admission Callout */}
                <div className="bg-[#F8F7F3] border border-[#DFA526]/30 rounded-2xl p-4 mt-2">
                  <div className="flex items-center gap-2 text-[#30345B] font-bold text-xs uppercase tracking-wider mb-1">
                    <GraduationCap size={16} className="text-[#DFA526]" />
                    Admissions 2026/2027
                  </div>
                  <p className="text-xs text-[#555B6E] leading-relaxed mb-3">
                    Enroll today for Diploma, Advanced Diploma & Barista Certification.
                  </p>
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="w-full btn-gold !py-2.5 text-xs font-bold"
                  >
                    Start Your Application
                  </Link>
                </div>
              </div>

              {/* Mobile Footer Contact */}
              <div className="p-6 bg-[#F8F7F3] border-t border-gray-100 space-y-2 text-xs text-[#555B6E]">
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-[#DFA526] flex-shrink-0" />
                  <span>Birgunj-09, Inside Bright College, Nepal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-[#DFA526] flex-shrink-0" />
                  <a href="tel:9845532370" className="hover:underline">
                    9845532370 / 9829232426
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-[#DFA526] flex-shrink-0" />
                  <a href="mailto:nchmbrj143@gmail.com" className="hover:underline">
                    nchmbrj143@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
