"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Users,
  Award,
  Handshake,
  Eye,
  Target,
  Building,
  Coffee,
  Clock,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  ChevronRight,
  Globe,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import SectionHeader from "./SectionHeader"
import { contactCards, siteData } from "@/lib/site-data"

const stats = [
  { value: "1st", label: "Hotel Mgmt College in Birgunj", icon: Award },
  { value: "5+", label: "Faculty Members", icon: GraduationCap },
  { value: "BHM", label: "Faculty-Led Learning", icon: Handshake },
  { value: "100%", label: "Practical Based", icon: Users },
]

const courses = [
  {
    title: "Diploma in Hotel Management",
    duration: "15 months",
    description: "Comprehensive program covering front office, F&B service, housekeeping, and hotel operation fundamentals.",
    icon: Building,
    image: "/images/2.jpeg",
  },
  {
    title: "Advanced Diploma in Hotel Management",
    duration: "21 months",
    description: "In-depth study of revenue management, strategic planning, culinary arts, and international luxury hotel standards.",
    icon: Award,
    image: "/images/8.jpeg",
  },
  {
    title: "Barista Certification",
    duration: "1 month",
    description: "Intensive certification covering espresso preparation, latte art, brewing techniques, and cafe management.",
    icon: Coffee,
    image: "/images/6.jpeg",
  },
]

const faculty = siteData.faculty.slice(0, 4)

const galleryImages = [
  { src: "/images/5.jpeg", alt: "Teaching demonstration", category: "Training" },
  { src: "/images/6.jpeg", alt: "Teaching demonstration", category: "Training" },
  { src: "/images/7.jpeg", alt: "Teaching demonstration", category: "Training" },
  { src: "/images/8.jpeg", alt: "Teaching demonstration", category: "Training" },
  { src: "/images/9.jpeg", alt: "Teaching demonstration", category: "Training" },
  { src: "/images/10.jpeg", alt: "Teaching demonstration", category: "Training" },
]

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4A533]/30" />
      <div className="mx-3 w-1.5 h-1.5 rounded-full bg-[#D4A533]/40" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4A533]/30" />
    </div>
  )
}

function SectionLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center mt-12"
    >
      <Link
        href={href}
        className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[#D4A533]/25 bg-[#D4A533]/5 text-[#D4A533] font-medium text-sm tracking-wide transition-all duration-300 hover:bg-[#D4A533]/10 hover:border-[#D4A533]/40 hover:shadow-[0_0_30px_rgba(212,165,51,0.15)]"
      >
        {label}
        <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )
}

export default function HomePage() {
  const aboutRef = useRef(null)
  const aboutInView = useInView(aboutRef, { once: true, margin: "-80px" })

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/campus.jpg" alt="" fill className="object-cover opacity-15" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-[10%] w-64 h-64 border border-[#D4A533]/10 rounded-full hidden lg:block"
          aria-hidden="true"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-[5%] w-48 h-48 border border-text-light/5 rounded-full hidden lg:block"
          aria-hidden="true"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block mb-6 px-5 py-2 rounded-full border border-[#D4A533]/25 bg-[#D4A533]/5 text-[#D4A533] text-sm tracking-[0.2em] uppercase">
              Birgunj, Nepal
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-text-light"
          >
            Nepal College of{" "}
            <motion.span
              className="bg-gradient-to-r from-[#D4A533] via-[#E8C86A] to-[#D4A533] bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Hotel Management
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-text-light/50 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            {siteData.distinction} with hands-on learning, committed faculty, and a strong foundation in hospitality education.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/courses"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4A533] to-[#E8C86A] text-[#0B1F3B] font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_35px_rgba(212,165,51,0.4)] hover:scale-[1.02] w-full sm:w-auto justify-center"
            >
              <BookOpen size={18} />
              Explore Courses
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-text-light/20 text-text-light font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-text-light/5 hover:border-text-light/40 w-full sm:w-auto justify-center"
            >
              Apply Now
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 + i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card-white rounded-xl p-5 text-center group cursor-default"
                >
                  <Icon size={20} className="mx-auto mb-2 text-[#D4A533] opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="text-2xl md:text-3xl font-bold text-[#D4A533]">{stat.value}</div>
                  <div className="mt-1 text-xs text-text-light/40">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 rounded-full border-2 border-text-light/20 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-[#D4A533]"
            />
          </div>
        </motion.div>
      </section>

      {/* ========== ABOUT HIGHLIGHT ========== */}
      <section ref={aboutRef} className="relative py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4A533]/20 bg-[#D4A533]/5 text-[#D4A533] text-xs tracking-[0.2em] uppercase">
              Who We Are
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-light text-balance">
              About <span className="bg-gradient-to-r from-[#D4A533] to-[#E8C86A] bg-clip-text text-transparent">Our College</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <motion.div whileHover={{ scale: 1.01 }} className="glass-card-white rounded-2xl p-7 gold-glow-hover transition-all duration-500">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A533] to-[#E8C86A] flex items-center justify-center">
                    <Eye size={22} className="text-[#0B1F3B]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-text-light mb-2">Our Vision</h3>
                    <p className="text-text-light/50 leading-relaxed text-sm">
                      To help aspiring hospitality students in Birgunj build confident, career-ready skills through practical and accessible hotel management education.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }} className="glass-card-white rounded-2xl p-7 gold-glow-hover transition-all duration-500">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A533] to-[#E8C86A] flex items-center justify-center">
                    <Target size={22} className="text-[#0B1F3B]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-text-light mb-2">Our Mission</h3>
                    <p className="text-text-light/50 leading-relaxed text-sm">
                      To deliver practical training, supportive mentorship, and an industry-focused learning environment for future hotel professionals.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative glass-card rounded-2xl overflow-hidden gold-glow">
                <Image src="/images/10.jpeg" alt="NCHM campus" width={600} height={450} className="w-full h-auto object-cover" />
                <div className="image-overlay-soft absolute inset-0" />
              </div>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 glass-card-white rounded-xl p-4 gold-glow"
              >
                <div className="text-2xl font-bold text-[#D4A533]">20+</div>
                <div className="text-xs text-text-light/50">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </div>

          <SectionLink href="/about" label="Learn More About Us" />
        </div>
      </section>

      {/* ========== HIGHLIGHTS SECTION ========== */}
      <section className="relative py-24 bg-text-light/5">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader 
            label="Why NCHM" 
            title="Our Key" 
            highlight="Highlights"
            description="A focused hospitality campus for students who want practical learning in Birgunj."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Practical Training", 
                desc: "Learn hospitality skills through hands-on classes designed around real hotel operations.",
                icon: Building 
              },
              { 
                title: "BHM Faculty Support", 
                desc: "Study with dedicated BHM faculty members who guide students closely throughout the course.",
                icon: Globe 
              },
              { 
                title: "Birgunj Location", 
                desc: "Conveniently located inside Bright College, Birgunj-09, Nepal.",
                icon: Users 
              },
              { 
                title: "Pioneer in the City", 
                desc: "Recognized as the first hotel management college in Birgunj.",
                icon: Award 
              },
            ].map((item, i) => {
              const Icon = item.icon || Award
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card-white rounded-2xl p-8 gold-glow-hover transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A533] to-[#E8C86A] flex items-center justify-center mb-6">
                    <Icon size={24} className="text-[#0B1F3B]" />
                  </div>
                  <h3 className="text-lg font-bold text-text-light mb-3">{item.title}</h3>
                  <p className="text-text-light/40 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ========== COURSES HIGHLIGHT ========== */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4A533]/20 bg-[#D4A533]/5 text-[#D4A533] text-xs tracking-[0.2em] uppercase">
              Programs
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-light text-balance">
              Our <span className="bg-gradient-to-r from-[#D4A533] to-[#E8C86A] bg-clip-text text-transparent">Courses</span>
            </h2>
            <p className="mt-5 text-text-light/50 max-w-xl mx-auto leading-relaxed">
              Industry-aligned programs designed to equip you with the skills to excel in global hotel management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, i) => {
              const Icon = course.icon
              return (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 40, rotateX: 8 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group glass-card-white rounded-2xl overflow-hidden gold-glow-hover transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="image-overlay-medium absolute inset-0" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#D4A533]/90 text-[#0B1F3B] text-[11px] font-semibold flex items-center gap-1">
                        <Clock size={11} />
                        {course.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4A533] to-[#E8C86A] flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-[#0B1F3B]" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-text-light leading-snug">{course.title}</h3>
                    </div>
                    <p className="text-text-light/40 text-sm leading-relaxed">{course.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <SectionLink href="/courses" label="View All Courses" />
        </div>
      </section>

      <SectionDivider />

      {/* ========== FACULTY HIGHLIGHT ========== */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4A533]/20 bg-[#D4A533]/5 text-[#D4A533] text-xs tracking-[0.2em] uppercase">
              Our Team
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-light text-balance">
              Distinguished <span className="bg-gradient-to-r from-[#D4A533] to-[#E8C86A] bg-clip-text text-transparent">Faculty</span>
            </h2>
            <p className="mt-5 text-text-light/50 max-w-xl mx-auto leading-relaxed">
              Meet the faculty members supporting our hospitality students with BHM-focused learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {faculty.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group glass-card-white rounded-2xl overflow-hidden gold-glow-hover transition-all duration-500 text-center"
              >
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="image-overlay-soft absolute inset-0" />
                </div>
                <div className="p-4 -mt-8 relative z-10">
                  <h3 className="font-serif text-sm font-semibold text-text-light">{member.name}</h3>
                  <p className="text-[#D4A533] text-[11px] tracking-wider mt-1 uppercase">{member.designation}</p>
                  <div className="mt-3 flex items-center justify-center gap-2">
                    {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="w-7 h-7 rounded-full border border-text-light/10 flex items-center justify-center text-text-light/30 hover:text-[#D4A533] hover:border-[#D4A533]/30 transition-all duration-300 cursor-pointer"
                      >
                        <Icon size={12} />
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <SectionLink href="/faculty" label="Meet All Faculty" />
        </div>
      </section>

      <SectionDivider />

      {/* ========== GALLERY HIGHLIGHT ========== */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4A533]/20 bg-[#D4A533]/5 text-[#D4A533] text-xs tracking-[0.2em] uppercase">
              Campus Life
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-light text-balance">
              Photo <span className="bg-gradient-to-r from-[#D4A533] to-[#E8C86A] bg-clip-text text-transparent">Gallery</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, i) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex flex-col items-center justify-center">
                  <span className="text-text-light text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                    {image.category}
                  </span>
                </div>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#D4A533]/40 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>

          <SectionLink href="/gallery" label="View Full Gallery" />
        </div>
      </section>

      <SectionDivider />

      {/* ========== CONTACT HIGHLIGHT ========== */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4A533]/20 bg-[#D4A533]/5 text-[#D4A533] text-xs tracking-[0.2em] uppercase">
              Get in Touch
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-light text-balance">
              Contact <span className="bg-gradient-to-r from-[#D4A533] to-[#E8C86A] bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="mt-5 text-text-light/50 max-w-xl mx-auto leading-relaxed">
              Have questions about our programs? Reach out and our admissions team will be happy to assist.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, ...contactCards[0] },
              { icon: Phone, ...contactCards[1] },
              { icon: Mail, ...contactCards[2] },
              { icon: Clock, ...contactCards[3] },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="glass-card-white rounded-xl p-6 gold-glow-hover transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4A533] to-[#E8C86A] flex items-center justify-center mb-4">
                    <Icon size={18} className="text-[#0B1F3B]" />
                  </div>
                  <p className="text-[#D4A533] text-xs tracking-wider uppercase mb-1">{item.label}</p>
                  <p className="text-text-light/55 text-sm leading-relaxed">{item.value}</p>
                </motion.div>
              )
            })}
          </div>

          <SectionLink href="/contact" label="Send Us a Message" />
        </div>
      </section>
    </>
  )
}
