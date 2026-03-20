"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Clock, ArrowRight, Award, Coffee, Building, CheckCircle, Users, Star } from "lucide-react"
import SectionHeader from "../components/SectionHeader"

const courses = [
  {
    title: "Diploma in Hotel Management",
    duration: "15 months",
    description: "A comprehensive program covering front office operations, food & beverage service, housekeeping management, and hotel operation fundamentals.",
    icon: Building,
    image: "/images/3.jpeg",
    modules: ["Front Office Operations", "F&B Service", "Housekeeping", "Customer Relations", "Basic Accounting"],
    highlights: { students: "200+", rating: "4.9", placements: "95%" },
  },
  {
    title: "Advanced Diploma in Hotel Management",
    duration: "21 months",
    description: "An advanced program with in-depth study of revenue management, strategic planning, culinary arts, and international hotel standards.",
    icon: Award,
    image: "/images/9.jpeg",
    modules: ["Revenue Management", "Strategic Planning", "Culinary Arts", "International Standards", "Industry Placement"],
    highlights: { students: "150+", rating: "4.8", placements: "98%" },
  },
  {
    title: "Barista Certification",
    duration: "1 month",
    description: "An intensive certification covering espresso preparation, latte art, coffee bean sourcing, brewing techniques, and cafe management.",
    icon: Coffee,
    image: "/images/2.jpeg",
    modules: ["Espresso Mastery", "Latte Art", "Bean Sourcing", "Brewing Methods", "Cafe Management"],
    highlights: { students: "500+", rating: "4.9", placements: "92%" },
  },
]

export default function CoursesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-24">
      {/* Page Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/classroom.jpg" alt="" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#D4A533]/20 bg-[#D4A533]/5 text-[#D4A533] text-xs tracking-[0.2em] uppercase"
          >
            Programs
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text-light text-balance"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#D4A533] to-[#E8C86A] bg-clip-text text-transparent">
              Courses
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-text-light/50 max-w-2xl mx-auto leading-relaxed"
          >
            Industry-aligned programs designed to equip you with the skills and knowledge to excel in the global hotel industry.
          </motion.p>
        </div>
      </section>

      {/* Courses Detail */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-20">
          {courses.map((course, index) => {
            const Icon = course.icon
            const isReversed = index % 2 !== 0
            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? "md:direction-rtl" : ""}`}
              >
                {/* Image */}
                <motion.div
                  className={`relative ${isReversed ? "md:order-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative rounded-2xl overflow-hidden gold-glow">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="px-3 py-1 rounded-full bg-[#D4A533]/90 text-[#0B1F3B] text-xs font-semibold flex items-center gap-1">
                        <Clock size={12} />
                        {course.duration}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`space-y-6 ${isReversed ? "md:order-1" : ""}`} style={{ direction: "ltr" }}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4A533] to-[#E8C86A] flex items-center justify-center">
                      <Icon size={26} className="text-[#0B1F3B]" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-light">{course.title}</h3>
                  </div>

                  <p className="text-text-light/50 leading-relaxed">{course.description}</p>

                  {/* Stats row */}
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-[#D4A533]">
                        <Users size={14} />
                        <span className="font-bold text-sm">{course.highlights.students}</span>
                      </div>
                      <span className="text-[10px] text-text-light/30">Students</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-[#D4A533]">
                        <Star size={14} />
                        <span className="font-bold text-sm">{course.highlights.rating}</span>
                      </div>
                      <span className="text-[10px] text-text-light/30">Rating</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-[#D4A533]">
                        <Award size={14} />
                        <span className="font-bold text-sm">{course.highlights.placements}</span>
                      </div>
                      <span className="text-[10px] text-text-light/30">Placement</span>
                    </div>
                  </div>

                  {/* Modules */}
                  <div>
                    <h4 className="text-sm font-semibold text-text-light/70 mb-3 uppercase tracking-wider">Key Modules</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.modules.map((mod, mi) => (
                        <motion.span
                          key={mod}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: mi * 0.05 }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-text-light/5 border border-text-light/10 text-text-light/60 text-xs"
                        >
                          <CheckCircle size={12} className="text-[#D4A533]" />
                          {mod}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-sm text-[#D4A533] hover:text-[#E8C86A] transition-colors font-medium"
                  >
                    Enquire About This Course
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
