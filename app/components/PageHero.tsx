"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight, Home, Sparkles } from "lucide-react"

interface PageHeroProps {
  label: string
  title: string
  highlight?: string
  description?: string
  breadcrumb?: string
}

export default function PageHero({
  label,
  title,
  highlight,
  description,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-[#F8F7F3] border-b border-[#30345B]/8 overflow-hidden">
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#30345B_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-[#DFA526]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#30345B]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-2 text-xs font-semibold text-[#555B6E] mb-6"
        >
          <Link href="/" className="flex items-center gap-1 hover:text-[#30345B] transition-colors">
            <Home size={13} className="text-[#DFA526]" />
            Home
          </Link>
          <ChevronRight size={13} className="text-gray-400" />
          <span className="text-[#30345B] font-bold">{breadcrumb || label}</span>
        </motion.div>

        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DFA526]/12 border border-[#DFA526]/35 text-[#30345B] text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles size={12} className="text-[#DFA526]" />
            {label}
          </span>
        </motion.div>

        {/* Main Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-5 font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1E2340] tracking-tight leading-tight text-balance"
        >
          {title}{" "}
          {highlight && (
            <span className="text-[#DFA526]">
              {highlight}
            </span>
          )}
        </motion.h1>

        {/* Supporting Narrative */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-5 text-base sm:text-lg md:text-xl text-[#555B6E] max-w-2xl mx-auto leading-relaxed text-pretty font-normal"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
