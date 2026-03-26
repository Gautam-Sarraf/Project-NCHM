"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Target, Eye, CheckCircle, Sparkles, MapPin, Users, BookOpen } from "lucide-react"
import SectionHeader from "../components/SectionHeader"
import { siteData } from "@/lib/site-data"

const values = [
  { title: "Practical Learning", desc: "Students build confidence through hands-on hospitality training." },
  { title: "Student Support", desc: "Faculty stay approachable and involved throughout the learning journey." },
  { title: "Professional Discipline", desc: "We promote responsibility, service standards, and workplace readiness." },
  { title: "Local Leadership", desc: "We are proud to grow hotel management education in Birgunj." },
]

const milestones = [
  { year: "01", event: siteData.distinction },
  { year: "02", event: `Campus located at ${siteData.address}` },
  { year: "03", event: "BHM-focused faculty mentoring students in hospitality learning" },
  { year: "04", event: "Programs designed around practical exposure and industry readiness" },
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
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
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
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text-light text-balance"
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
            className="mt-5 text-text-light/50 max-w-2xl mx-auto leading-relaxed"
          >
            {siteData.shortName} is building practical hospitality education in Birgunj with committed faculty, focused student support, and a learning environment grounded in hotel operations.
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
                    <h3 className="font-serif text-xl font-semibold text-text-light mb-3">Our Vision</h3>
                    <p className="text-text-light/50 leading-relaxed">
                      To be the most trusted place in Birgunj for students who want to begin a strong career in hotel management.
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
                    <h3 className="font-serif text-xl font-semibold text-text-light mb-3">Our Mission</h3>
                    <p className="text-text-light/50 leading-relaxed">
                      We provide practical hospitality learning, supportive guidance, and a disciplined environment that prepares students for professional service roles.
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 glass-card-white rounded-xl p-4 gold-glow"
              >
                <div className="text-2xl font-bold text-[#D4A533]">1st</div>
                <div className="text-xs text-text-light/50">In Birgunj</div>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card-white rounded-xl p-4 gold-glow"
              >
                <Sparkles size={20} className="text-[#D4A533] mb-1" />
                <div className="text-xs text-text-light/50">Practical Focus</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: MapPin, title: "Address", value: siteData.address },
              { icon: Users, title: "Faculty Team", value: siteData.faculty.map((member) => member.name).join(", ") },
              { icon: BookOpen, title: "Identity", value: siteData.distinction },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="glass-card-white rounded-2xl p-6 gold-glow-hover transition-all duration-500">
                  <Icon size={18} className="text-[#D4A533] mb-4" />
                  <h3 className="font-serif text-lg font-semibold text-text-light">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light/55">{item.value}</p>
                </div>
              )
            })}
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
                <h3 className="font-serif text-lg font-semibold text-text-light mb-2">{val.title}</h3>
                <p className="text-text-light/40 text-sm leading-relaxed">{val.desc}</p>
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
                  <p className="text-text-light/60 text-sm mt-1">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
