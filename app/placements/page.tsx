"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Users, Globe, Building2, Briefcase, Star, CheckCircle, TrendingUp, MapPin } from "lucide-react"
import SectionHeader from "../components/SectionHeader"
import { siteData } from "@/lib/site-data"

const stats = [
  { label: "Practical Focus", value: "Hands-On", icon: TrendingUp },
  { label: "Local Advantage", value: "Birgunj", icon: Globe },
  { label: "Faculty Support", value: "5+", icon: Users },
  { label: "Career Readiness", value: "Ongoing", icon: Award },
]

const partners = [
  "Hotel Operations Training",
  "Front Office Skills",
  "Food & Beverage Service",
  "Housekeeping Standards",
  "Guest Communication",
  "Professional Grooming",
  "Interview Preparation",
  "Career Guidance",
]

const successStories = [
  {
    name: "Aarav Sharma",
    position: "Front Office Associate",
    company: "Hotel Placeholder International",
    location: "Kathmandu, Nepal",
    image: "/images/faculty-1.jpg",
    quote: "My training at NCHM helped me feel more confident with guest communication, grooming, and hotel service basics.",
  },
  {
    name: "Sanjana Thapa",
    position: "Guest Service Trainee",
    company: "Grand Horizon Hotel",
    location: "Pokhara, Nepal",
    image: "/images/faculty-2.jpg",
    quote: "The practical classes and supportive faculty made it easier for me to adjust to a professional hospitality environment.",
  },
  {
    name: "Ritesh Kumar",
    position: "F&B Service Assistant",
    company: "Royal Palm Resort",
    location: "Biratnagar, Nepal",
    image: "/images/faculty-3.jpg",
    quote: "NCHM gave me a strong base in service standards and teamwork, which helped me begin my placement journey.",
  },
  {
    name: "Nisha Gupta",
    position: "Housekeeping Trainee",
    company: "City View Suites",
    location: "Chitwan, Nepal",
    image: "/images/faculty-4.jpg",
    quote: "The college prepared me with discipline, practical learning, and the confidence to work in a real hotel setup.",
  },
]

export default function PlacementsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-24">
      {/* Page Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/campus.jpg" alt="" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#D4A533]/20 bg-[#D4A533]/5 text-[#D4A533] text-xs tracking-[0.2em] uppercase"
          >
            Career Success
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text-light text-balance"
          >
            Global{" "}
            <span className="bg-gradient-to-r from-[#D4A533] to-[#E8C86A] bg-clip-text text-transparent">
              Placements
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-text-light/50 max-w-2xl mx-auto leading-relaxed"
          >
            We focus on building the practical hospitality skills, confidence, and professional habits students need before stepping into the industry.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card-white rounded-2xl p-8 text-center gold-glow-hover transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A533] to-[#E8C86A] flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-[#0B1F3B]" />
                  </div>
                  <div className="text-3xl font-bold text-text-light mb-1">{stat.value}</div>
                  <div className="text-xs text-text-light/40 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-20 bg-text-light/5">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader 
            label="Career Preparation" 
            title="What We" 
            highlight="Build"
            description="The placement journey starts with daily skill-building inside the classroom and training environment."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl border border-text-light/10 bg-text-light/5 flex items-center justify-center text-center group hover:border-[#D4A533]/30 transition-all duration-300"
              >
                <span className="text-text-light/60 font-medium group-hover:text-text-light transition-colors">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader 
            label="Placed Students" 
            title="Placement" 
            highlight="Highlights"
          />
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {successStories.map((story, i) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group glass-card-white placement-story-card rounded-2xl overflow-hidden gold-glow-hover transition-all duration-500"
              >
                <div className="relative aspect-[4/4.2] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={`Portrait of ${story.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="image-overlay-medium absolute inset-0" />
                  <div className="absolute left-4 top-4 rounded-full border border-[#D4A533]/30 bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4A533]">
                    Placed Student
                  </div>
                </div>
                <div className="relative z-10 -mt-10 p-5">
                  <div className="rounded-2xl border border-text-light/10 bg-background/78 p-5 backdrop-blur-md">
                    <h4 className="font-serif text-lg font-semibold text-text-light">{story.name}</h4>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#D4A533]">{story.position}</p>
                    <p className="mt-3 text-sm font-medium text-text-light/75">{story.company}</p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-text-light/45">
                      <MapPin size={13} className="text-[#D4A533]" />
                      <span>{story.location}</span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed italic text-text-light/55">"{story.quote}"</p>
                    <div className="mt-4 flex items-center gap-2">
                      <Star size={14} className="text-[#D4A533]" />
                      <span className="text-[11px] uppercase tracking-[0.18em] text-text-light/40">
                        Placeholder placement detail
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Lead */}
      <section className="py-20 bg-[#D4A533]/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-light mb-6">
                Why Employers Choose <span className="text-[#D4A533]">NCHM Graduates</span>
              </h2>
              <div className="space-y-4">
                {[
                  `Learning environment at ${siteData.address}`,
                  "Practical hospitality routines and service standards",
                  "Soft skills and personality development",
                  "Faculty-led mentoring and classroom discipline",
                  siteData.distinction,
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-[#D4A533]" size={18} />
                    <span className="text-text-light/70">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden gold-glow"
            >
              <Image src="/images/gallery-1.jpg" alt="Training" fill className="object-cover" />
              <div className="image-overlay-soft absolute inset-0" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
