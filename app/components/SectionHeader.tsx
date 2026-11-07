"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SectionHeaderProps {
  label: string
  title: string
  highlight?: string
  description?: string
  align?: "center" | "left"
  dark?: boolean
}

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  const isCenter = align === "center"

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 md:mb-16 ${isCenter ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl"}`}
    >
      <span
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
          dark
            ? "bg-[#DFA526]/20 border border-[#DFA526]/40 text-[#DFA526]"
            : "bg-[#DFA526]/12 border border-[#DFA526]/35 text-[#30345B]"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#DFA526]" />
        {label}
      </span>

      <h2
        className={`mt-4 font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight ${
          dark ? "text-white" : "text-[#1E2340]"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className="text-[#DFA526] underline decoration-[#DFA526]/30 underline-offset-8">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            dark ? "text-white/70" : "text-[#555B6E]"
          } ${isCenter ? "max-w-2xl mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
