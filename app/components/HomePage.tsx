"use client"

import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef, useState } from "react"
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
  Plus,
  Minus,
  Sparkles,
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

const faqs = [
  {
    question: "Does NCHM assist with job placement?",
    answer: "Yes, NCHM has an active placement network that connects graduates with leading national and international hotels, ensuring a smooth path to careers.",
  },
  {
    question: "Is the training practical-based?",
    answer: "Absolutely. 100% of our core hotel management curriculum is practical-based, featuring hands-on training in state-of-the-art kitchens and mock hotel layouts.",
  },
  {
    question: "What courses does NCHM offer?",
    answer: "We offer a 15-month Diploma in Hotel Management, a 21-month Advanced Diploma in Hotel Management, and a 1-month intensive Barista Certification program.",
  },
  {
    question: "Where is the college located?",
    answer: "The campus is conveniently situated inside Bright College premises, Birgunj-09, Nepal.",
  },
]

const newsItems = [
  {
    date: "JUNE 25, 2026",
    title: "New barista certification batch registration opens for next semester",
    link: "/courses",
  },
  {
    date: "JUNE 18, 2026",
    title: "NCHM signs international training partnership with premium resort group",
    link: "/about",
  },
  {
    date: "JUNE 10, 2026",
    title: "Practical food preparation highlight class held at training kitchens",
    link: "/gallery",
  },
  {
    date: "MAY 28, 2026",
    title: "Alumni meet outlines placement tracks in Gulf and European markets",
    link: "/placements",
  },
  {
    date: "MAY 15, 2026",
    title: "BHM course overview session led by distinguished faculty panel",
    link: "/faculty",
  },
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
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#dba328]/30" />
      <div className="mx-3 w-1.5 h-1.5 rounded-full bg-[#dba328]/40" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#dba328]/30" />
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
        className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#dba328]/25 bg-[#dba328]/5 text-[#dba328] font-medium text-sm tracking-wide transition-all duration-300 hover:bg-[#dba328]/10 hover:border-[#dba328]/40 hover:shadow-[0_0_30px_rgba(219,163,40,0.15)]"
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
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-24 bg-[#13152d]">
        <div className="absolute inset-0 z-0">
          <Image src="/images/campus.jpg" alt="" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#13152d]/90 via-[#13152d]/75 to-[#13152d]" />
        </div>

        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-[10%] w-64 h-64 border border-[#dba328]/10 rounded-full hidden lg:block"
          aria-hidden="true"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-[5%] w-48 h-48 border border-[#FAF6F0]/5 rounded-full hidden lg:block"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="flex-grow flex items-center justify-center relative z-10 px-6 py-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-5xl text-center"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex mb-6 px-5 py-2 rounded-full border border-[#dba328]/25 bg-[#dba328]/5 text-[#dba328] text-sm tracking-[0.2em] uppercase font-semibold">
                Birgunj, Nepal
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white text-balance"
            >
              Nepal College of{" "}
              <motion.span
                className="bg-gradient-to-r from-[#dba328] via-[#eebf56] to-[#dba328] bg-clip-text text-transparent bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Hotel Management
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg md:text-xl text-[#FAF6F0]/70 max-w-2xl mx-auto leading-relaxed text-pretty font-medium"
            >
              {siteData.distinction} with hands-on learning, committed BHM faculty, and a solid foundation in professional hospitality.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/courses"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#dba328] to-[#eebf56] text-[#13152d] font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_35px_rgba(219,163,40,0.4)] hover:scale-[1.02] w-full sm:w-auto justify-center"
              >
                <BookOpen size={18} />
                Explore Courses
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-sm tracking-wide transition-all duration-300 hover:bg-white hover:text-[#13152d] w-full sm:w-auto justify-center"
              >
                Apply Now
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scrolling Ticker Text */}
        <div className="relative z-10 w-full mt-auto">
          <div className="ticker-wrap border-y border-[#dba328]/20 bg-[#13152d] py-6">
            <div className="ticker">
              <div className="ticker-item font-sans font-extrabold text-2xl sm:text-3xl tracking-wider text-white">
                Nepal College of Hotel Management • <span className="ticker-item-outline">Practical Based</span> • Dedicated BHM Faculty • <span className="ticker-item-outline">First in Birgunj</span> •
              </div>
              <div className="ticker-item font-sans font-extrabold text-2xl sm:text-3xl tracking-wider text-white">
                Nepal College of Hotel Management • <span className="ticker-item-outline">Practical Based</span> • Dedicated BHM Faculty • <span className="ticker-item-outline">First in Birgunj</span> •
              </div>
              <div className="ticker-item font-sans font-extrabold text-2xl sm:text-3xl tracking-wider text-white">
                Nepal College of Hotel Management • <span className="ticker-item-outline">Practical Based</span> • Dedicated BHM Faculty • <span className="ticker-item-outline">First in Birgunj</span> •
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SPLIT ABOUT & STATS ========== */}
      <section ref={aboutRef} className="relative py-24 overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Dark Navy container with image and stats */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 bg-[#32365b] rounded-3xl p-8 border border-[#dba328]/15 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner mb-8">
                  <Image src="/images/10.jpeg" alt="NCHM students" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13152d]/60 to-transparent" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-4 font-sans">Empowering Future Hoteliers</h3>
                <p className="text-[#FAF6F0]/70 text-sm leading-relaxed mb-8">
                  We focus strictly on industry requirements. NCHM provides dynamic practical learning workspaces designed to replicate actual kitchen and hospitality environments.
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#FAF6F0]/10">
                <div>
                  <div className="text-4xl font-extrabold text-[#dba328] font-sans">92%</div>
                  <div className="h-0.5 bg-[#dba328]/35 w-full my-2" />
                  <div className="text-xs text-[#FAF6F0]/60 font-medium">Graduates hold key positions in hotels.</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-[#dba328] font-sans">100%</div>
                  <div className="h-0.5 bg-[#dba328]/35 w-full my-2" />
                  <div className="text-xs text-[#FAF6F0]/60 font-medium">Practical-focused training curriculum.</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Statement, portrait image, and ratings */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 space-y-8 lg:pl-6"
            >
              <div className="space-y-4">
                <span className="border border-[#dba328]/30 bg-[#dba328]/5 text-[#dba328] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-block">
                  SINCE 2005
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight font-sans">
                  When dreams align with the right chance, the possibilities become endless.
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Founded as the pioneer hotel management college in Birgunj, NCHM inside Bright College premises is committed to offering qualitative, affordable, and fully-equipped study systems for ambitious local hospitality professionals.
                </p>
              </div>

              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-lg border border-border/10">
                <Image
                  src="/images/about.jpg"
                  alt="NCHM campus operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Rating Badge Overlay */}
                <div className="absolute bottom-5 left-5 bg-background/90 backdrop-blur-md rounded-2xl p-4 border border-border/20 shadow-xl flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="w-8 h-8 rounded-full border-2 border-background relative overflow-hidden bg-[#1c1e3a]">
                        <Image src="/placeholder-user.jpg" alt="" fill className="object-cover opacity-80" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">100+ Students</div>
                    <div className="text-[10px] text-muted-foreground">Certified & Placed globally</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          <SectionLink href="/about" label="Learn More About Us" />
        </div>
      </section>

      {/* ========== HIGHLIGHTS SECTION ========== */}
      <section className="relative py-24 bg-muted/40 border-y border-border/20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader 
            label="Why NCHM" 
            title="Our Key" 
            highlight="Highlights"
            description="A focused hospitality campus inside Bright College premises for students who want practical learning in Birgunj."
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
                  className="bg-card hover:bg-card/85 border border-border/30 rounded-3xl p-8 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#dba328]/10 text-[#dba328] flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 font-sans">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========== COURSES HIGHLIGHT ========== */}
      <section className="relative py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="border border-[#dba328]/35 bg-[#dba328]/5 text-[#dba328] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-block">
              Programs
            </span>
            <h2 className="mt-4 font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              Our Hospitality <span className="text-[#dba328]">Courses</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Industry-aligned programs designed to equip you with the skills to excel in global hotel management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, i) => {
              const Icon = course.icon
              return (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="group bg-card border border-border/20 rounded-3xl overflow-hidden transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-750 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13152d]/90 via-[#13152d]/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#dba328] text-[#13152d] text-xs font-bold flex items-center gap-1.5">
                        <Clock size={12} />
                        {course.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#dba328]/10 flex items-center justify-center flex-shrink-0 text-[#dba328]">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-sans text-lg font-bold text-foreground leading-snug">{course.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <SectionLink href="/courses" label="View All Courses" />
        </div>
      </section>

      {/* ========== FAQ ACCORDION SECTION ========== */}
      <section className="relative py-24 bg-muted/20 border-y border-border/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Photo of student */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative aspect-square lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-md border border-border/15"
            >
              <Image src="/images/6.jpeg" alt="Student sitting on campus" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13152d]/50 via-transparent to-transparent" />
            </motion.div>

            {/* Right side: Accordion list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              <div>
                <span className="border border-[#dba328]/30 bg-[#dba328]/5 text-[#dba328] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-block">
                  FAQ & ANSWER
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 leading-tight font-sans">
                  Answers to your questions, every step of the way.
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx
                  return (
                    <div
                      key={idx}
                      className="bg-card border border-border/40 rounded-2xl overflow-hidden transition-colors duration-300"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-sans font-bold text-foreground transition-colors hover:text-[#dba328]"
                      >
                        <span>{faq.question}</span>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border/40 flex items-center justify-center text-foreground hover:bg-[#dba328] hover:text-[#13152d] transition-all">
                          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                        </div>
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/10">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========== NEWS / ANNOUNCEMENTS LIST ========== */}
      <section className="relative py-24 bg-[#FAF6F0] text-[#13152d]">
        <div className="mx-auto max-w-7xl px-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="border border-[#32365b]/30 bg-[#32365b]/5 text-[#32365b] px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase inline-block">
                NEWS & INSIGHTS
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 leading-tight font-sans tracking-tight">
                News about our NCHM university
              </h2>
            </div>
            
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#32365b]/30 text-[#32365b] font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#32365b] hover:text-white"
            >
              MORE NEWS
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Vertical news list */}
          <div className="border-t border-[#32365b]/20">
            {newsItems.map((news, idx) => (
              <Link
                key={idx}
                href={news.link}
                className="group flex flex-col md:flex-row md:items-center justify-between py-6 px-4 border-b border-[#32365b]/10 transition-all duration-300 hover:bg-[#32365b] hover:text-white"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 flex-grow">
                  <div className="text-xs font-bold tracking-wider text-[#32365b]/60 group-hover:text-white/60 w-32 shrink-0">
                    {news.date}
                  </div>
                  <div className="text-lg font-bold group-hover:text-white transition-colors duration-200">
                    {news.title}
                  </div>
                </div>

                <div className="mt-4 md:mt-0 flex shrink-0 justify-end">
                  <div className="w-10 h-10 rounded-full border border-[#32365b]/20 group-hover:border-white/30 flex items-center justify-center text-[#32365b] group-hover:text-white transition-all group-hover:bg-[#dba328] group-hover:border-transparent">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========== FACULTY HIGHLIGHT ========== */}
      <section className="relative py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="border border-[#dba328]/35 bg-[#dba328]/5 text-[#dba328] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-block">
              Our Team
            </span>
            <h2 className="mt-4 font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
              Distinguished <span className="text-[#dba328]">Faculty</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Meet the faculty members supporting our hospitality students with BHM-focused learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {faculty.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card border border-border/20 rounded-3xl overflow-hidden transition-all duration-300 text-center"
              >
                <div className="relative w-full aspect-square overflow-hidden bg-muted">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13152d]/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-sans text-base font-bold text-foreground">{member.name}</h3>
                  <p className="text-[#dba328] text-xs font-semibold tracking-wider mt-1 uppercase">{member.designation}</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                      <span
                        key={idx}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-[#dba328] hover:border-[#dba328]/45 transition-all cursor-pointer"
                      >
                        <Icon size={12} />
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <SectionLink href="/faculty" label="Meet All Faculty" />
        </div>
      </section>

      {/* ========== GALLERY HIGHLIGHT ========== */}
      <section className="relative py-24 bg-muted/20 border-y border-border/10">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="border border-[#dba328]/35 bg-[#dba328]/5 text-[#dba328] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-block">
              Campus Life
            </span>
            <h2 className="mt-4 font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
              Photo <span className="text-[#dba328]">Gallery</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, i) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-border/15"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#13152d]/0 group-hover:bg-[#13152d]/70 transition-all duration-300 flex flex-col items-center justify-center">
                  <span className="text-white text-sm font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                    {image.category}
                  </span>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#dba328]/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          <SectionLink href="/gallery" label="View Full Gallery" />
        </div>
      </section>

      {/* ========== CONTACT HIGHLIGHT ========== */}
      <section className="relative py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="border border-[#dba328]/35 bg-[#dba328]/5 text-[#dba328] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-block">
              Get in Touch
            </span>
            <h2 className="mt-4 font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
              Contact <span className="text-[#dba328]">Us</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
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
                  className="bg-card border border-border/25 rounded-2xl p-6 transition-all duration-300 hover:border-[#dba328]/40"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#dba328]/10 text-[#dba328] flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <p className="text-[#dba328] text-xs font-bold tracking-wider uppercase mb-1">{item.label}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.value}</p>
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
