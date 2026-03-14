"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Users, Globe, Building2, Briefcase, Star, CheckCircle, TrendingUp } from "lucide-react"
import SectionHeader from "../components/SectionHeader"

const stats = [
  { label: "Placement Rate", value: "100%", icon: TrendingUp },
  { label: "Global Partners", value: "50+", icon: Globe },
  { label: "Alumni Network", value: "5000+", icon: Users },
  { label: "Average Salary", value: "Attractive", icon: Award },
]

const partners = [
  "Marriott International",
  "Hyatt Hotels",
  "Hilton Worldwide",
  "Taj Hotels",
  "InterContinental Hotels Group",
  "Radisson Hotel Group",
  "Shangri-La Hotels",
  "The Ritz-Carlton",
]

const successStories = [
  {
    name: "Aman Shrestha",
    position: "Operations Manager",
    company: "Marriott Dubai",
    image: "/images/faculty-1.jpg",
    quote: "NCHM's practical training gave me the confidence to lead in a global environment.",
  },
  {
    name: "Priya Thapa",
    position: "Executive Chef",
    company: "Hyatt Kathmandu",
    image: "/images/faculty-2.jpg",
    quote: "The faculty and labs at NCHM are truly world-class and industry-aligned.",
  },
]

export default function PlacementsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-24">
      {/* Page Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/campus.jpg" alt="" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3B] via-[#0B1F3B]/95 to-[#0B1F3B]" />
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
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance"
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
            className="mt-5 text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering our students with the skills and opportunities to excel in the world's most prestigious hotel chains and hospitality brands.
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
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-20 bg-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader 
            label="Industry Partners" 
            title="Our Top" 
            highlight="Recruiters"
            description="Our students are placed in leading hotels across Nepal and internationally."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-center group hover:border-[#D4A533]/30 transition-all duration-300"
              >
                <span className="text-white/60 font-medium group-hover:text-white transition-colors">
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
            label="Testimonials" 
            title="Success" 
            highlight="Stories"
          />
          <div className="grid md:grid-cols-2 gap-12">
            {successStories.map((story, i) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card-white rounded-2xl p-10 relative"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#D4A533]/20">
                    <Image src={story.image} alt={story.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{story.name}</h4>
                    <p className="text-[#D4A533] text-sm">{story.position} at {story.company}</p>
                  </div>
                </div>
                <p className="text-white/50 leading-relaxed italic">"{story.quote}"</p>
                <Star className="absolute top-6 right-6 text-[#D4A533]/20" size={40} />
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                Why Employers Choose <span className="text-[#D4A533]">NCHM Graduates</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Intensive 100% Practical-Based Training",
                  "Soft Skills & Personality Development",
                  "International Internship Opportunities",
                  "Industry-Ready Skillsets",
                  "Leadership & Management Foundation",
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-[#D4A533]" size={18} />
                    <span className="text-white/70">{item}</span>
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
