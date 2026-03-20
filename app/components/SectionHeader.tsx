"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SectionHeaderProps {
  label: string
  title: string
  highlight: string
  description?: string
}

export default function SectionHeader({ label, title, highlight, description }: SectionHeaderProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-16"
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-block px-4 py-1.5 rounded-full border border-[#D4A533]/20 bg-[#D4A533]/5 text-[#D4A533] text-xs tracking-[0.2em] uppercase"
      >
        {label}
      </motion.span>
      <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-light text-balance">
        {title}{" "}
        <span className="bg-gradient-to-r from-[#D4A533] to-[#E8C86A] bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      {description && (
        <p className="mt-5 text-text-light/50 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
