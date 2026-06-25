"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, ExternalLink, ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { siteData } from "@/lib/site-data"
import Image from "next/image"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Faculty", href: "/faculty" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <footer ref={ref} className="relative bg-[#FAF6F0] text-[#13152d] border-t border-border/10 py-20 font-sans">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Newsletter, Quote, Founder */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Newsletter Subscribe */}
            <div className="space-y-4 max-w-xl">
              <h3 className="text-xl font-bold uppercase tracking-wider font-sans">Join our newsletter</h3>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="BUSINESS EMAIL..."
                  className="flex-grow px-5 py-3.5 rounded-full border border-[#13152d]/20 bg-white/50 text-[#13152d] placeholder-[#13152d]/40 text-xs font-semibold focus:outline-none focus:border-[#dba328] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-[#13152d] text-white hover:bg-[#32365b] font-bold text-xs tracking-wider uppercase transition-colors"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>

            {/* Quote Block */}
            <div className="space-y-6 max-w-2xl border-l-2 border-[#dba328] pl-6 py-1">
              <p className="text-2xl font-bold leading-snug tracking-tight text-[#13152d]/90 font-sans">
                "It's about shaping a perspective, fostering critical thinking, and preparing for a lifetime of learning, growth, and excellence in global hospitality."
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#32365b] text-white flex items-center justify-center font-bold text-sm">
                  BS
                </div>
                <div>
                  <div className="font-bold text-sm text-[#13152d]">Brij Sarraf</div>
                  <div className="text-[10px] uppercase font-bold text-muted-foreground">BHM Faculty & Director</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Campus Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border border-[#13152d]/10">
              <Image
                src="/images/campus.jpg"
                alt="NCHM Campus building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13152d]/30 to-transparent" />
            </div>
          </div>

        </div>

        {/* Bottom divider */}
        <div className="h-px bg-[#13152d]/10 my-16" />

        {/* Bottom Section - Logo, Links, Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Info */}
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/images/logo.jpeg" alt="NCHM Logo" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <span className="font-sans font-bold text-base tracking-wide text-[#13152d] block leading-tight">
                NCHM
              </span>
              <span className="text-[9px] tracking-wider text-[#dba328] font-bold uppercase">
                Hotel Management
              </span>
            </div>
          </Link>

          {/* Center Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-wider uppercase text-[#13152d]/60 hover:text-[#13152d] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Socials & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
            <div className="flex items-center gap-4 text-xs font-bold text-[#13152d]/60">
              <a href="https://www.facebook.com/search/top?q=Nepal%20College%20of%20Hotel%20Management" target="_blank" rel="noreferrer" className="hover:text-[#32365b]">
                FACEBOOK
              </a>
              <span>•</span>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-[#32365b]">
                INSTAGRAM
              </a>
              <span>•</span>
              <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="hover:text-[#32365b]">
                TIKTOK
              </a>
            </div>
            <p className="text-[10px] text-[#13152d]/40 font-semibold uppercase tracking-wider">
              &copy; 2026 NCHM BIRGUNJ. ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>

      </div>
    </footer>
  )
}
