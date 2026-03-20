"use client"

import { motion } from "framer-motion"

interface PageHeroProps {
  label: string
  title: string
  highlight: string
  description?: string
}

export default function PageHero({ label, title, highlight, description }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 page-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#D4A533]/5 blur-[100px]" />
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-text-light/3 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-5 py-2 rounded-full border border-[#D4A533]/30 bg-[#D4A533]/10 text-[#D4A533] text-sm tracking-widest uppercase"
        >
          {label}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-balance text-[#F5F7FA]"
        >
          {title}{" "}
          <span className="bg-gradient-to-r from-[#D4A533] to-[#E8C86A] bg-clip-text text-transparent">
            {highlight}
          </span>
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-lg text-text-light/60 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            {description}
          </motion.p>
        )}

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4A533] to-transparent"
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
