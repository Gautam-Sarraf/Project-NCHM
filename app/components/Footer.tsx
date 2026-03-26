"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { siteData } from "@/lib/site-data"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Faculty", href: "/faculty" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/search/top?q=Nepal%20College%20of%20Hotel%20Management" },
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "TikTok", href: "https://www.tiktok.com/" },
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
              <span className="font-serif text-lg tracking-wide text-[#F5F7FA]">Nepal College of Hotel Management</span>
            </Link>
            <p className="text-[#F5F7FA]/50 text-sm leading-relaxed">
              {siteData.distinction}. Practical hospitality learning for students who want to grow in the hotel industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-serif text-sm font-semibold text-[#F5F7FA] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-[#F5F7FA]/50 hover:text-[#D4A533] transition-colors duration-300"
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
            <h4 className="font-serif text-sm font-semibold text-[#F5F7FA] uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-[#F5F7FA]/50">
                <MapPin size={16} className="text-[#D4A533] flex-shrink-0 mt-0.5" />
                <span>{siteData.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F5F7FA]/50">
                <Phone size={16} className="text-[#D4A533] flex-shrink-0" />
                <span>{siteData.phones.join(", ")}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F5F7FA]/50">
                <Mail size={16} className="text-[#D4A533] flex-shrink-0" />
                <span>{siteData.email}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-serif text-sm font-semibold text-[#F5F7FA] uppercase tracking-wider mb-4">
              Follow Us
            </h4>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-[#F5F7FA]/50 hover:text-[#D4A533] transition-colors duration-300"
                >
                  <ExternalLink size={14} />
                  {link.name}
                </a>
              ))}
              <p className="pt-2 text-xs text-[#F5F7FA]/35">
                Search Instagram for "{siteData.socialSearches[1].handle}" and TikTok for "{siteData.socialSearches[2].handle}".
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#D4A533]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#F5F7FA]/30">
            2025 Nepal College of Hotel Management (NCHM). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#F5F7FA]/30 hover:text-[#D4A533] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[#F5F7FA]/30 hover:text-[#D4A533] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
