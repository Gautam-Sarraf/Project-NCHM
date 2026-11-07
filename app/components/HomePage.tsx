"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Users,
  Award,
  Sparkles,
  Clock,
  CheckCircle2,
  Building,
  Coffee,
  Utensils,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Star,
  Quote,
  ShieldCheck,
  Calendar,
  Layers,
  ArrowUpRight,
  Plus,
  Minus,
} from "lucide-react"
import { siteData } from "@/lib/site-data"

// Core Institutional Stats
const stats = [
  { value: "1st", label: "Hotel Mgmt College in Birgunj", detail: "Pioneer since establishment" },
  { value: "100%", label: "Practical Learning", detail: "Hands-on hotel operations" },
  { value: "5+", label: "BHM Faculty Experts", detail: "Dedicated personal mentorship" },
  { value: "3+", label: "Industry Programs", detail: "Diploma & barista certifications" },
]

// Actual Academic Programs
const programs = [
  {
    title: "Diploma in Hotel Management",
    duration: "15 Months",
    type: "Comprehensive Diploma",
    description:
      "A complete foundational program covering front office operations, professional food & beverage service, housekeeping management, and hotel operational systems.",
    image: "/images/3.jpeg",
    icon: Building,
    features: [
      "Front Office & Guest Services",
      "Food & Beverage Service Training",
      "Housekeeping & Hygiene Standards",
      "Hotel Operations Fundamentals",
    ],
    link: "/courses",
  },
  {
    title: "Advanced Diploma in Hotel Management",
    duration: "21 Months",
    type: "Professional Diploma",
    description:
      "Advanced hospitality leadership training focusing on culinary arts, revenue management, guest experience design, and international hotel standard operating procedures.",
    image: "/images/8.jpeg",
    icon: Award,
    features: [
      "Culinary Arts & Kitchen Production",
      "Hospitality Revenue Management",
      "Strategic Hotel Administration",
      "Industry Placement Assistance",
    ],
    link: "/courses",
  },
  {
    title: "Professional Barista Certification",
    duration: "1 Month",
    type: "Specialized Certificate",
    description:
      "Intensive, practical certification covering espresso extraction, milk frothing & latte art, bean profiles, sensory cupping, and modern cafe operational skills.",
    image: "/images/2.jpeg",
    icon: Coffee,
    features: [
      "Espresso Machine Calibration",
      "Latte Art & Milk Texturing",
      "Specialty Bean Sourcing & Brewing",
      "Commercial Cafe Workflow",
    ],
    link: "/courses",
  },
]

// Core Facilities
const facilities = [
  {
    name: "Practical Training Kitchens",
    category: "Culinary Lab",
    description:
      "Fully fitted commercial kitchen stations where students master food production, knife skills, food safety, and multi-course culinary preparation.",
    image: "/images/kitchen-lab.jpg",
    specs: ["Commercial burners & ovens", "Individual chef workstations", "HACCP hygiene standards"],
  },
  {
    name: "Food & Beverage Service Lab",
    category: "Service Training",
    description:
      "Mock restaurant and dining setup designed for students to practice fine dining etiquette, banquet service, table setting, and guest interaction.",
    image: "/images/7.jpeg",
    specs: ["Restaurant table setups", "Beverage service counter", "Customer etiquette coaching"],
  },
  {
    name: "Professional Barista & Coffee Bar",
    category: "Specialty Beverages",
    description:
      "Equipped with commercial espresso machines, grinders, and brewing gear for intensive hands-on coffee craftsmanship and latte art.",
    image: "/images/6.jpeg",
    specs: ["Commercial espresso machines", "Precision grinders & tampers", "Latte art pitchers & tools"],
  },
  {
    name: "Modern Interactive Classrooms",
    category: "Academic Facilities",
    description:
      "Spacious, well-ventilated learning spaces with audiovisual equipment for hospitality management theory, case studies, and presentations.",
    image: "/images/classroom.jpg",
    specs: ["Air-conditioned lecture rooms", "Multimedia presentations", "Ergonomic seating"],
  },
]

// Why Choose NCHM
const institutionalStrengths = [
  {
    title: "100% Practical Hospitality Training",
    description:
      "Our curriculum is centered on genuine hotel lab sessions, ensuring every student acquires the real-world skills demanded by leading hospitality employers.",
    icon: Utensils,
  },
  {
    title: "Distinguished BHM Faculty Mentorship",
    description:
      "Learn directly from experienced hotel management educators who provide close, personalized mentorship from day one until graduation.",
    icon: GraduationCap,
  },
  {
    title: "Birgunj's First & Pioneer Institution",
    description:
      "Proudly established as the pioneer college of hotel management in Birgunj, conveniently located inside Bright College premises.",
    icon: Award,
  },
  {
    title: "Industry Placements & Career Readiness",
    description:
      "Strong hotel network connecting students to internship tracks and job opportunities in top hotels across Nepal and abroad.",
    icon: ShieldCheck,
  },
  {
    title: "Comprehensive Lab Infrastructure",
    description:
      "Hands-on practice in commercial-grade kitchens, mock restaurant dining halls, and dedicated barista coffee workstations.",
    icon: Building,
  },
  {
    title: "Professional Grooming & Discipline",
    description:
      "Instilling international hospitality ethics, punctuality, communication skills, and personal grooming that set our graduates apart.",
    icon: Users,
  },
]

// Verified Student Placements
const testimonials = [
  {
    name: "Aarav Sharma",
    position: "Front Office Associate",
    property: "Hotel Placeholder International",
    location: "Kathmandu, Nepal",
    image: "/images/faculty-1.jpg",
    quote:
      "My training at NCHM helped me feel completely confident with guest communication, professional grooming, and hotel operations. The practical classes made all the difference.",
  },
  {
    name: "Sanjana Thapa",
    position: "Guest Service Trainee",
    property: "Grand Horizon Hotel",
    location: "Pokhara, Nepal",
    image: "/images/faculty-2.jpg",
    quote:
      "The practical kitchen and dining labs combined with supportive BHM faculty made it seamless for me to transition into a demanding hotel environment.",
  },
  {
    name: "Ritesh Kumar",
    position: "F&B Service Assistant",
    property: "Royal Palm Resort",
    location: "Biratnagar, Nepal",
    image: "/images/faculty-3.jpg",
    quote:
      "NCHM gave me a rigorous foundation in service standards, teamwork, and coffee brewing. I stepped into my first job already knowing standard operating procedures.",
  },
]

// News & Announcements
const announcements = [
  {
    date: "ADMISSIONS OPEN",
    tag: "Enrollment",
    title: "New Diploma & Barista Certification batch registrations are now open for upcoming intake",
    desc: "Limited seats available for practical-based training batches. Inquire now at the campus office.",
    link: "/contact",
  },
  {
    date: "ACADEMIC UPDATE",
    tag: "Curriculum",
    title: "Advanced culinary & mock restaurant guest service workshops scheduled this semester",
    desc: "Hands-on masterclasses covering international banqueting, fine dining setups, and HACCP standards.",
    link: "/courses",
  },
  {
    date: "CAMPUS LIFE",
    tag: "Excursion",
    title: "Hospitality study tour and resort exposure visit organized for senior batch students",
    desc: "Students gained firsthand exposure to back-of-the-house and front-of-the-house luxury resort operations.",
    link: "/gallery",
  },
]

// FAQ Items
const faqs = [
  {
    question: "Why should I choose Nepal College of Hotel Management (NCHM) in Birgunj?",
    answer:
      "NCHM is the first and pioneer hotel management college in Birgunj, conveniently located inside Bright College premises. We focus on 100% practical-based training in dedicated kitchen labs, mock restaurants, and coffee bars, guided by experienced BHM faculty members.",
  },
  {
    question: "What courses and certifications are currently offered at NCHM?",
    answer:
      "We offer three premier programs: a 15-month Diploma in Hotel Management, a 21-month Advanced Diploma in Hotel Management, and a 1-month intensive Professional Barista Certification.",
  },
  {
    question: "Is prior experience or a specific academic background required?",
    answer:
      "Our programs are designed for ambitious students completing high school (SEE / +2 or equivalent) who want to build a career in hotel management. No prior hotel experience is required; we teach all fundamental and advanced skills from the ground up.",
  },
  {
    question: "Does NCHM assist students with internships and hotel placements?",
    answer:
      "Yes. We maintain active connections with leading hotels, resorts, and cafe chains in Kathmandu, Pokhara, Chitwan, and abroad, providing interview preparation, grooming, and placement guidance.",
  },
  {
    question: "Where is the campus located and how can I visit?",
    answer:
      "Our campus is situated inside Bright College premises, Birgunj-09, Nepal. You can visit us Sunday through Friday between 9:00 AM and 5:00 PM, or call our admission advisors directly at 9845532370 / 9829232426.",
  },
]

export default function HomePage() {
  const [activeFacility, setActiveFacility] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="bg-[#F8F7F3] text-[#555B6E]">
      {/* =========================================================================
          HERO SECTION: Contemporary Campus Editorial Composition
      ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8F7F3] to-[#F1F2F5] border-b border-[#30345B]/8">
        {/* Subtle Decorative Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#30345B_1px,transparent_1px)] [background-size:28px_28px]" />
        
        {/* Ambient Gold/Navy Blobs */}
        <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-[#DFA526]/8 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] rounded-full bg-[#30345B]/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
              {/* Institution Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#DFA526]/12 border border-[#DFA526]/35 text-[#30345B] text-xs font-bold uppercase tracking-widest shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#DFA526] animate-pulse" />
                Birgunj&apos;s Pioneer Hospitality College
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1E2340] tracking-tight leading-[1.12]"
              >
                Shaping Tomorrow&apos;s{" "}
                <span className="text-[#30345B]">Leaders in</span>{" "}
                <span className="text-[#DFA526] relative inline-block">
                  Hospitality.
                  <span className="absolute -bottom-1.5 left-0 right-0 h-1 bg-[#DFA526]/30 rounded-full" />
                </span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-[#555B6E] leading-relaxed max-w-2xl font-normal"
              >
                Discover your potential through professional hospitality education, practical learning and industry-focused training at Nepal College of Hotel Management.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link
                  href="/courses"
                  className="btn-navy !py-3.5 !px-8 text-sm font-bold shadow-md hover:shadow-lg w-full sm:w-auto text-center"
                >
                  <BookOpen size={17} className="text-[#DFA526]" />
                  Explore Programs
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="btn-gold !py-3.5 !px-8 text-sm font-bold shadow-md hover:shadow-lg w-full sm:w-auto text-center"
                >
                  <GraduationCap size={18} />
                  Apply for Admission
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-6 border-t border-[#30345B]/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left"
              >
                {stats.map((s) => (
                  <div key={s.label} className="space-y-1">
                    <div className="font-heading text-2xl font-extrabold text-[#30345B]">
                      {s.value}
                    </div>
                    <div className="text-xs font-bold text-[#1E2340] leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Visual Composition (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Main Editorial Image Frame */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image
                  src="/images/kitchen-lab.jpg"
                  alt="Students training in practical hospitality kitchen lab at NCHM Birgunj"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20233E]/80 via-transparent to-transparent" />

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 text-white p-5 rounded-2xl bg-[#30345B]/85 backdrop-blur-md border border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#DFA526] text-[#20233E] flex items-center justify-center font-bold flex-shrink-0">
                      <Utensils size={20} />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm text-white">
                        Practical Culinary & Hotel Lab
                      </div>
                      <div className="text-xs text-[#DFA526] font-medium">
                        100% Hands-On Kitchen Training
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-[#30345B]/8 flex items-center gap-3.5 z-20">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#DFA526] bg-white flex-shrink-0">
                  <Image src="/images/logo.jpeg" alt="NCHM Official Crest" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-heading font-extrabold text-xs text-[#30345B] uppercase tracking-wider">
                    Established 1st
                  </div>
                  <div className="text-xs font-semibold text-[#555B6E]">
                    Hotel College in Birgunj
                  </div>
                </div>
              </div>

              {/* Floating Secondary Thumbnail */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-36 sm:w-44 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block z-20">
                <Image
                  src="/images/2.jpeg"
                  alt="Barista and beverage training at NCHM"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white leading-tight">
                    Barista Lab
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C: About NCHM Introduction (Two-Column Balanced Whitespace)
      ========================================================================= */}
      <section className="py-24 bg-white border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Composition (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#30345B]/10">
                <Image
                  src="/images/10.jpeg"
                  alt="Nepal College of Hotel Management students and faculty"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Complementary overlapping image */}
              <div className="relative -mt-16 ml-auto w-3/4 aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image
                  src="/images/about.jpg"
                  alt="Hospitality training environment at NCHM"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative Accent Pill */}
              <div className="absolute -bottom-4 left-6 bg-[#30345B] text-white px-5 py-3 rounded-2xl shadow-lg border border-[#DFA526]/30 flex items-center gap-3">
                <GraduationCap size={20} className="text-[#DFA526]" />
                <div>
                  <div className="font-heading font-bold text-xs uppercase tracking-wider text-[#DFA526]">
                    Campus Location
                  </div>
                  <div className="text-xs text-white/90 font-medium">
                    Inside Bright College, Birgunj-09
                  </div>
                </div>
              </div>
            </div>

            {/* Right Narrative Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="gold-badge">
                  Institutional Overview
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2340] tracking-tight leading-tight">
                  Pioneering Professional Hospitality Education in Birgunj.
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#555B6E] leading-relaxed">
                Nepal College of Hotel Management (NCHM) was established with a singular mission: to provide world-class, accessible, and thoroughly practical hospitality education to the aspiring youth of Birgunj and the surrounding regions.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-[#F8F7F3] border border-[#30345B]/8 space-y-2">
                  <div className="flex items-center gap-2.5 text-[#30345B] font-heading font-bold text-base">
                    <div className="w-8 h-8 rounded-lg bg-[#30345B] text-white flex items-center justify-center">
                      <Award size={16} className="text-[#DFA526]" />
                    </div>
                    Our Vision
                  </div>
                  <p className="text-xs text-[#555B6E] leading-relaxed">
                    To be the most trusted, industry-respected hospitality institute in Nepal, renowned for producing disciplined, skilled, and work-ready hotel professionals.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8F7F3] border border-[#30345B]/8 space-y-2">
                  <div className="flex items-center gap-2.5 text-[#30345B] font-heading font-bold text-base">
                    <div className="w-8 h-8 rounded-lg bg-[#DFA526] text-[#20233E] flex items-center justify-center">
                      <CheckCircle2 size={16} />
                    </div>
                    Our Mission
                  </div>
                  <p className="text-xs text-[#555B6E] leading-relaxed">
                    Delivering 100% practical-based training in modern culinary kitchens and dining labs, supported by dedicated BHM faculty and lifelong career guidance.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="btn-navy !py-3 !px-7 text-sm font-semibold"
                >
                  Learn More About NCHM
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/faculty"
                  className="btn-outline-navy !py-3 !px-7 text-sm font-semibold"
                >
                  Meet Our Faculty
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION D: Academic Programs
      ========================================================================= */}
      <section className="py-24 bg-[#F8F7F3] border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="gold-badge">
              Academic Offerings
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E2340] tracking-tight">
              Hospitality Programs Designed for <span className="text-[#DFA526]">Career Success</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555B6E] leading-relaxed">
              Curriculum structured according to contemporary luxury hotel standards, balancing intensive culinary and front-of-house practicals with essential management theory.
            </p>
          </div>

          {/* 3 Program Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((prog, index) => {
              const Icon = prog.icon
              return (
                <div
                  key={prog.title}
                  className="campus-card overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Header with Duration Badge */}
                    <div className="relative h-60 overflow-hidden bg-[#30345B]">
                      <Image
                        src={prog.image}
                        alt={prog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#20233E]/85 via-black/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/95 text-[#30345B] text-xs font-bold shadow-sm">
                          {prog.type}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DFA526] text-[#20233E] text-xs font-extrabold shadow-md">
                          <Clock size={13} />
                          {prog.duration}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                          <Icon size={18} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 space-y-4">
                      <h3 className="font-heading font-extrabold text-xl text-[#1E2340] group-hover:text-[#30345B] transition-colors leading-snug">
                        {prog.title}
                      </h3>
                      <p className="text-sm text-[#555B6E] leading-relaxed">
                        {prog.description}
                      </p>

                      <div className="pt-2 border-t border-gray-100 space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#30345B]">
                          Core Curriculum Focus:
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#555B6E]">
                          {prog.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-2">
                              <CheckCircle2 size={14} className="text-[#DFA526] flex-shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="p-7 pt-0">
                    <Link
                      href={prog.link}
                      className="w-full btn-outline-navy !py-3 text-xs font-bold flex items-center justify-center gap-2 group-hover:bg-[#30345B] group-hover:text-white transition-all"
                    >
                      View Curriculum & Details
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/courses"
              className="btn-navy !py-3.5 !px-8 text-sm font-bold shadow-md hover:shadow-lg inline-flex"
            >
              Explore Full Course Directory
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION E: Why Choose NCHM / Institutional Strengths
      ========================================================================= */}
      <section className="py-24 bg-white border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="gold-badge">
              Why Choose NCHM
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E2340] tracking-tight">
              The NCHM Hospitality <span className="text-[#DFA526]">Advantage</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555B6E] leading-relaxed">
              We focus strictly on the competencies that hotel general managers look for: practical fluency, high service standards, and professional integrity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {institutionalStrengths.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl bg-[#F8F7F3] border border-[#30345B]/8 hover:border-[#DFA526]/40 transition-all duration-300 space-y-4 hover:-translate-y-1 hover:shadow-lg group"
                >
                  <div className="w-13 h-13 rounded-2xl bg-white border border-[#30345B]/10 group-hover:bg-[#30345B] text-[#30345B] group-hover:text-[#DFA526] transition-all flex items-center justify-center shadow-sm">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-[#1E2340] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#555B6E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION F: Facilities and Practical Learning (Interactive Visual Showcase)
      ========================================================================= */}
      <section className="py-24 bg-[#20233E] text-white border-b border-[#DFA526]/20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="gold-badge-dark">
              Practical Learning Spaces
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              World-Class Hospitality <span className="text-[#DFA526]">Training Facilities</span>
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Hospitality is an art mastered through repetitive practical experience. Step inside our purpose-built training laboratories.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {facilities.map((fac, idx) => (
              <button
                key={fac.name}
                onClick={() => setActiveFacility(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeFacility === idx
                    ? "bg-[#DFA526] text-[#20233E] shadow-lg scale-105"
                    : "bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
                }`}
              >
                {fac.name}
              </button>
            ))}
          </div>

          {/* Active Facility Presentation */}
          <div className="bg-[#30345B] border border-white/10 rounded-3xl p-6 lg:p-10 shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Image (7 cols) */}
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-inner border border-white/15">
                <Image
                  src={facilities[activeFacility].image}
                  alt={facilities[activeFacility].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#DFA526] text-[#20233E] text-xs font-bold uppercase tracking-wider">
                    {facilities[activeFacility].category}
                  </span>
                </div>
              </div>

              {/* Text Info (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                    {facilities[activeFacility].name}
                  </h3>
                  <p className="mt-3 text-white/80 text-sm leading-relaxed">
                    {facilities[activeFacility].description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/10">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#DFA526]">
                    Laboratory Specifications:
                  </div>
                  <ul className="space-y-2 text-sm text-white/90">
                    {facilities[activeFacility].specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2.5">
                        <CheckCircle2 size={16} className="text-[#DFA526] flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href="/gallery"
                    className="btn-gold !py-2.5 !px-6 text-xs font-bold inline-flex items-center gap-2"
                  >
                    View All Campus Photos
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION G: Student Life / Campus Experience (Editorial Asymmetric Grid)
      ========================================================================= */}
      <section className="py-24 bg-[#F8F7F3] border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 max-w-2xl">
              <span className="gold-badge">
                Student Life & Training
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E2340] tracking-tight">
                Authentic Moments from Our <span className="text-[#DFA526]">Campus</span>
              </h2>
              <p className="text-base sm:text-lg text-[#555B6E] leading-relaxed">
                From morning kitchen preparation to customer service simulations and hospitality excursions, experience how students thrive at NCHM.
              </p>
            </div>

            <Link
              href="/gallery"
              className="btn-navy !py-3 !px-7 text-xs font-bold uppercase tracking-wider shrink-0 self-start lg:self-auto"
            >
              Browse Photo Gallery
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Asymmetric Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#30345B]/10">
              <Image
                src="/images/5.jpeg"
                alt="Culinary presentation and student dish display"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20233E]/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-sm font-bold">Culinary Production & Food Display</span>
              </div>
            </div>

            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#30345B]/10">
              <Image
                src="/images/9.jpeg"
                alt="Culinary arts masterclass at NCHM"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20233E]/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-sm font-bold">Kitchen Practical Sessions</span>
              </div>
            </div>

            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#30345B]/10">
              <Image
                src="/images/1.jpeg"
                alt="Student industrial tour and study excursion"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20233E]/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-sm font-bold">Hospitality Industry Study Tour</span>
              </div>
            </div>

            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#30345B]/10">
              <Image
                src="/images/4.jpeg"
                alt="Commercial baking and pastry training"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20233E]/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-sm font-bold">Baking & Kitchen Operations</span>
              </div>
            </div>

            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#30345B]/10">
              <Image
                src="/images/8.jpeg"
                alt="Food and beverage service table setup"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20233E]/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-sm font-bold">F&B Fine Dining Operations</span>
              </div>
            </div>

            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#30345B]/10">
              <Image
                src="/images/campus.jpg"
                alt="Campus facility and learning environment"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20233E]/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-sm font-bold">Campus Environment in Birgunj</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION I: Testimonials & Alumni Success
      ========================================================================= */}
      <section className="py-24 bg-white border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="gold-badge">
              Alumni Success
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E2340] tracking-tight">
              From Our Classrooms to <span className="text-[#DFA526]">Leading Hotels</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555B6E] leading-relaxed">
              Read how NCHM graduates built rewarding careers in top hotels and resorts through dedicated practical training.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-3xl bg-[#F8F7F3] border border-[#30345B]/8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#DFA526]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#DFA526" />
                    ))}
                  </div>

                  <p className="text-sm text-[#555B6E] italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#30345B]/10 flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#DFA526] bg-[#30345B] flex-shrink-0">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm text-[#1E2340]">
                      {t.name}
                    </h4>
                    <div className="text-xs font-semibold text-[#DFA526]">
                      {t.position}
                    </div>
                    <div className="text-[11px] text-[#555B6E]">
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/placements"
              className="btn-navy !py-3.5 !px-8 text-sm font-semibold inline-flex"
            >
              Explore Career Pathways & Placements
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION J: News & Campus Announcements
      ========================================================================= */}
      <section className="py-24 bg-[#F8F7F3] border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <span className="gold-badge">
                News & Announcements
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E2340] tracking-tight">
                Latest from <span className="text-[#30345B]">NCHM Campus</span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="btn-outline-navy !py-2.5 !px-6 text-xs font-bold uppercase tracking-wider self-start sm:self-auto"
            >
              Contact Admissions Office
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {announcements.map((news) => (
              <div
                key={news.title}
                className="campus-card p-7 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-[#DFA526] uppercase tracking-wider">
                      {news.date}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#30345B]/8 text-[#30345B]">
                      {news.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-[#1E2340] group-hover:text-[#30345B] transition-colors leading-snug">
                    {news.title}
                  </h3>

                  <p className="text-xs text-[#555B6E] leading-relaxed">
                    {news.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100">
                  <Link
                    href={news.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#30345B] hover:text-[#DFA526] transition-colors"
                  >
                    Read Details
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: FAQ Accordion
      ========================================================================= */}
      <section className="py-24 bg-white border-b border-[#30345B]/8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="gold-badge">
              Questions & Answers
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E2340] tracking-tight">
              Frequently Asked <span className="text-[#DFA526]">Questions</span>
            </h2>
            <p className="text-sm sm:text-base text-[#555B6E]">
              Clear information to help students and parents make informed decisions about hospitality education in Birgunj.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#30345B]/10 overflow-hidden bg-[#F8F7F3] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left font-heading font-bold text-base text-[#1E2340] hover:text-[#30345B] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <div className="w-8 h-8 rounded-full bg-white border border-[#30345B]/10 flex items-center justify-center text-[#30345B] shrink-0 ml-4">
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-[#555B6E] leading-relaxed border-t border-[#30345B]/6">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION K: Admission Call To Action
      ========================================================================= */}
      <section className="py-24 bg-gradient-to-br from-[#30345B] via-[#20233E] to-[#16182C] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DFA526]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#30345B]/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center space-y-8">
          <span className="gold-badge-dark">
            Admissions Open 2026/2027
          </span>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Your Journey into Hospitality <span className="text-[#DFA526]">Starts Here.</span>
          </h2>

          <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward a global career in hotels, culinary arts, and barista management. Speak with an NCHM admission advisor today.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-gold !py-4 !px-9 text-base font-bold shadow-2xl hover:scale-105 transition-transform"
            >
              Apply Online Now
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:9845532370"
              className="btn-navy !bg-white/10 !border !border-white/20 hover:!bg-white/20 !py-4 !px-8 text-base font-semibold text-white"
            >
              <Phone size={17} className="text-[#DFA526]" />
              Call 9845532370 / 9829232426
            </a>
          </div>

          <div className="pt-8 text-xs text-white/60 flex items-center justify-center gap-6 flex-wrap">
            <span>✓ Campus: Inside Bright College, Birgunj-09</span>
            <span>✓ 100% Practical-Based Curriculum</span>
            <span>✓ Active Placement Network</span>
          </div>
        </div>
      </section>
    </div>
  )
}
