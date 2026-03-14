"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Target, Eye, CheckCircle, Sparkles } from "lucide-react"
import SectionHeader from "../components/SectionHeader"

const values = [
  { title: "Excellence", desc: "Setting the highest standards in hospitality education and training." },
  { title: "Innovation", desc: "Embracing modern technology and forward-thinking approaches to learning." },
  { title: "Integrity", desc: "Building trust through transparency, ethics, and professional conduct." },
  { title: "Leadership", desc: "Nurturing confident leaders who inspire and drive the industry forward." },
]

const milestones = [
  { year: "2005", event: "Nepal College of Hotel Management (NCHM) founded with 50 students" },
  { year: "2010", event: "First batch achieves 100% placement in top hotels" },
  { year: "2015", event: "International partnerships established with global hotel chains" },
  { year: "2018", event: "Advanced Hotel Management Diploma program launched" },
  { year: "2020", event: "Barista Certification added to vocational track" },
  { year: "2024", event: "5000+ alumni milestone reached in the hospitality sector" },
]

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const timelineRef = useRef(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" })

  return (
    <main className="relative min-h-screen overflow-x-hidden pt-24">
      {/* Page Hero Banner */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/about.jpg" alt="" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3B] via-[#0B1F3B]/95 to-[#0B1F3B]" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#D4A533]/20 bg-[#D4A533]/5 text-[#D4A533] text-xs tracking-[0.2em] uppercase"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance"
          >
            A Legacy of{" "}
            <span className="bg-gradient-to-r from-[#D4A533] to-[#E8C86A] bg-clip-text text-transparent">
              Hotel Excellence
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Founded in 2005, NCHM has consistently set benchmarks in hotel management education with state-of-the-art facilities and a faculty of industry veterans in Nepal.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section ref={ref} className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="glass-card-white rounded-2xl p-7 gold-glow-hover transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-13 h-13 rounded-xl bg-gradient-to-br from-[#D4A533] to-[#E8C86A] flex items-center justify-center">
                    <Eye size={24} className="text-[#0B1F3B]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-white mb-3">Our Vision</h3>
                    <p className="text-white/50 leading-relaxed">
                      To be the premier institution in Nepal for hotel management education, recognized globally for producing industry-ready professionals who embody excellence.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="glass-card-white rounded-2xl p-7 gold-glow-hover transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-13 h-13 rounded-xl bg-gradient-to-br from-[#D4A533] to-[#E8C86A] flex items-center justify-center">
                    <Target size={24} className="text-[#0B1F3B]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-white mb-3">Our Mission</h3>
                    <p className="text-white/50 leading-relaxed">
                      We are dedicated to providing world-class hotel management education through hands-on training, global industry partnerships, and a modern curriculum.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative glass-card rounded-2xl overflow-hidden gold-glow">
                <Image
                  src="/images/about.jpg"
                  alt="NCHM campus"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/70 to-transparent" />
              </div>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 glass-card-white rounded-xl p-4 gold-glow"
              >
                <div className="text-2xl font-bold text-[#D4A533]">20+</div>
                <div className="text-xs text-white/50">Years of Excellence</div>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card-white rounded-xl p-4 gold-glow"
              >
                <Sparkles size={20} className="text-[#D4A533] mb-1" />
                <div className="text-xs text-white/50">Award Winning</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader label="What We Stand For" title="Our Core" highlight="Values" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-card-white rounded-2xl p-7 gold-glow-hover transition-all duration-500"
              >
                <CheckCircle size={20} className="text-[#D4A533] mb-4" />
                <h3 className="font-serif text-lg font-semibold text-white mb-2">{val.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader label="Our Journey" title="Key" highlight="Milestones" />
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4A533]/40 via-[#D4A533]/20 to-transparent" />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative flex items-center gap-6 mb-10 md:mb-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D4A533] shadow-[0_0_10px_rgba(212,165,51,0.4)] z-10" />

                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-[#D4A533] font-bold text-sm">{m.year}</span>
                  <p className="text-white/60 text-sm mt-1">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
