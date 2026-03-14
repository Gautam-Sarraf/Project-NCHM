"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Faculty", href: "/faculty" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="relative bg-[#071529] border-t border-[#D4A533]/15">
      <div className="h-px shimmer-gold" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-3 mb-4 group">
            <img src="/images/logo.jpeg" alt="NCHM Logo" className="w-11 h-11 rounded-full object-cover" />
              <span className="font-serif text-lg tracking-wide text-white">Nepal College of Hotel Management</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Shaping future hotel industry leaders since 2005. A premier institution committed to
              excellence in hospitality and hotel management education.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-white/50 hover:text-[#D4A533] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-white/50">
                <MapPin size={16} className="text-[#D4A533] flex-shrink-0 mt-0.5" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Phone size={16} className="text-[#D4A533] flex-shrink-0" />
                <span>+977 1-XXXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Mail size={16} className="text-[#D4A533] flex-shrink-0" />
                <span>info@nchm.edu.np</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Follow Us
            </h4>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-[#D4A533] transition-colors duration-300"
                >
                  <ExternalLink size={14} />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#D4A533]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            2025 Nepal College of Hotel Management (NCHM). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-[#D4A533] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-[#D4A533] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
