"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"
import SectionHeader from "../components/SectionHeader"

const faculty = [
  {
    name: "Prof. Briz Sarraf",
    designation: "Dean & Professor of Hospitality",
    bio: "Over 25 years of experience in international hotel management. Former GM of Ritz-Carlton and hospitality consultant for leading global brands.",
    image: "/images/fac.jpeg",
    specialties: ["Hotel Management", "Leadership", "Strategic Planning"],
  },
  // {
  //   name: "Prof. Sarah Mitchell",
  //   designation: "Head of Food & Beverage Studies",
  //   bio: "Internationally trained culinary expert with a passion for sustainable gastronomy. Published author and recipient of multiple hospitality awards.",
  //   image: "/images/faculty-2.jpg",
  //   specialties: ["Sustainable Gastronomy", "F&B Operations", "Culinary Arts"],
  // },
  // {
  //   name: "Chef Marco Rossi",
  //   designation: "Culinary Arts Instructor",
  //   bio: "Award-winning chef with experience in Michelin-starred restaurants. Specializes in European and fusion cuisines with a focus on technique mastery.",
  //   image: "/images/faculty-3.jpg",
  //   specialties: ["European Cuisine", "Fusion Cooking", "Kitchen Management"],
  // },
  // {
  //   name: "Dr. Eleanor Price",
  //   designation: "Senior Lecturer in Tourism Management",
  //   bio: "PhD in Tourism Studies from Cornell University. Researcher in sustainable tourism and hospitality innovation with 15+ years in academia.",
  //   image: "/images/faculty-4.jpg",
  //   specialties: ["Tourism Studies", "Sustainability", "Research"],
  // },
]

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40, rotateX: 5 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function FacultyPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-24">
      {/* Page Hero */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#D4A533]/20 bg-[#D4A533]/5 text-[#D4A533] text-xs tracking-[0.2em] uppercase"
          >
            Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance"
          >
            Distinguished{" "}
            <span className="bg-gradient-to-r from-[#D4A533] to-[#E8C86A] bg-clip-text text-transparent">Faculty</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Learn from industry veterans and academic leaders dedicated to shaping your career in the international hotel industry.
          </motion.p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 gap-8"
          >
            {faculty.map((member) => (
              <motion.div
                key={member.name}
                variants={cardVariant}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group glass-card-white rounded-2xl overflow-hidden gold-glow-hover transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Photo */}
                  <div className="relative w-full md:w-48 h-56 md:h-auto flex-shrink-0 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B1F3B]/30 md:block hidden" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/50 to-transparent md:hidden" />
                  </div>

                  {/* Info */}
                  <div className="p-6 flex-1">
                    <h3 className="font-serif text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-[#D4A533] text-xs tracking-wider mt-1 uppercase">{member.designation}</p>
                    <p className="mt-3 text-white/45 text-sm leading-relaxed">{member.bio}</p>

                    {/* Specialties */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {member.specialties.map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-md bg-[#D4A533]/8 border border-[#D4A533]/15 text-[#D4A533] text-[10px] tracking-wide uppercase">
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Social icons */}
                    <div className="mt-4 flex items-center gap-2">
                      {[Linkedin, Twitter, Mail].map((Icon, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ scale: 1.15, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-[#D4A533] hover:border-[#D4A533]/30 transition-all duration-300"
                          aria-label={`${member.name} social link`}
                        >
                          <Icon size={14} />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
