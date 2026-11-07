"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Eye,
  Target,
  Award,
  CheckCircle2,
  GraduationCap,
  Users,
  Building,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  BookOpen,
} from "lucide-react"
import PageHero from "../components/PageHero"
import SectionHeader from "../components/SectionHeader"
import { siteData } from "@/lib/site-data"

const values = [
  {
    title: "100% Practical Learning",
    desc: "Every core hospitality module is taught through hands-on practice in dedicated commercial kitchens, mock dining halls, and barista counters.",
    icon: Building,
  },
  {
    title: "Dedicated BHM Mentorship",
    desc: "Our faculty members work closely with small student groups to ensure individualized attention, skill refinement, and consistent progress.",
    icon: Users,
  },
  {
    title: "Professional Discipline & Grooming",
    desc: "Instilling world-class hospitality grooming standards, service ethics, guest communication, and situational leadership.",
    icon: ShieldCheck,
  },
  {
    title: "Birgunj's Pioneer Leadership",
    desc: "Proudly serving as the city's first institution dedicated to hotel management education, nurturing local talent for global careers.",
    icon: Award,
  },
]

const milestones = [
  {
    step: "01",
    title: "Pioneer Establishment",
    desc: "Founded as Birgunj's very first college dedicated exclusively to hotel management and hospitality vocational training.",
  },
  {
    step: "02",
    title: "Prime Campus Location",
    desc: "Conveniently established inside Bright College premises, Birgunj-09, providing an accessible and disciplined academic environment.",
  },
  {
    step: "03",
    title: "BHM Faculty-Led Mentorship",
    desc: "Curriculum designed and delivered by qualified BHM faculty members with real-world luxury hotel experience.",
  },
  {
    step: "04",
    title: "Comprehensive Placements",
    desc: "Graduates actively placed across luxury hotels, resorts, and specialty cafe brands in Kathmandu, Pokhara, Chitwan, and overseas.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-[#F8F7F3] text-[#555B6E]">
      {/* Page Hero */}
      <PageHero
        label="About Our Institution"
        title="A Tradition of"
        highlight="Hospitality Excellence"
        description="Nepal College of Hotel Management (NCHM) is dedicated to empowering students in Birgunj with practical hotel operations training, certified barista skills, and career readiness."
        breadcrumb="About Us"
      />

      {/* Institutional Overview / Message */}
      <section className="py-24 bg-white border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="gold-badge">
                Our Foundation
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2340] tracking-tight leading-tight">
                Empowering the Next Generation of <span className="text-[#DFA526]">Hoteliers</span> in Nepal.
              </h2>

              <p className="text-base sm:text-lg text-[#555B6E] leading-relaxed">
                Situated inside Bright College premises in Birgunj-09, Nepal College of Hotel Management has grown into the leading hub for hospitality education in southern Nepal. We believe that true hospitality mastery cannot be learned solely from textbooks; it must be practiced, refined, and perfected in real culinary and hotel environments.
              </p>

              <p className="text-sm sm:text-base text-[#555B6E] leading-relaxed">
                Under the direct stewardship of our experienced BHM faculty, students learn everything from culinary knife work and HACCP hygiene to fine dining table setting, front office guest relations, and specialized barista coffee brewing.
              </p>

              {/* Quote Block */}
              <div className="p-6 rounded-2xl bg-[#F8F7F3] border-l-4 border-[#DFA526] space-y-3">
                <p className="font-serif italic text-base sm:text-lg text-[#1E2340]">
                  &ldquo;Hospitality is not merely a service; it is an attitude of warmth, attention to detail, and professional excellence. At NCHM, our objective is to instill these qualities in every student who walks through our doors.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#30345B] text-white flex items-center justify-center font-bold text-sm">
                    BS
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-[#1E2340]">
                      Brij Sarraf
                    </div>
                    <div className="text-xs text-[#DFA526] font-semibold">
                      BHM Faculty & Director, NCHM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images (5 Cols) */}
            <div className="lg:col-span-5 relative space-y-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#30345B]/10">
                <Image
                  src="/images/about.jpg"
                  alt="NCHM Campus and practical hospitality learning"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-[#30345B]/10">
                <Image
                  src="/images/campus.jpg"
                  alt="Bright College premises in Birgunj"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20233E]/70 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-bold">
                    Campus Facilities • Birgunj-09, Nepal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-24 bg-[#F8F7F3] border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Purpose & Principles"
            title="Our Vision &"
            highlight="Mission"
            description="Guided by clear institutional principles that prioritize student capability and career placement."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="campus-card p-8 lg:p-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#30345B] text-[#DFA526] flex items-center justify-center shadow-md">
                <Eye size={28} />
              </div>
              <h3 className="font-heading text-2xl font-extrabold text-[#1E2340]">
                Institutional Vision
              </h3>
              <p className="text-sm sm:text-base text-[#555B6E] leading-relaxed">
                To be the most reputable and sought-after college of hotel management in Birgunj and Madhesh Province, recognized for producing graduates who excel in luxury hotels, culinary departments, and barista establishments worldwide.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-[#555B6E]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#DFA526]" />
                  <span>Benchmark for hospitality training in the region</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#DFA526]" />
                  <span>Strong international luxury hotel standard operating procedures</span>
                </li>
              </ul>
            </div>

            {/* Mission */}
            <div className="campus-card p-8 lg:p-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#DFA526] text-[#20233E] flex items-center justify-center shadow-md">
                <Target size={28} />
              </div>
              <h3 className="font-heading text-2xl font-extrabold text-[#1E2340]">
                Institutional Mission
              </h3>
              <p className="text-sm sm:text-base text-[#555B6E] leading-relaxed">
                To deliver comprehensive, 100% practical-oriented curriculum in professional kitchens and mock hotel layouts. We mentor each student in ethical service values, effective communication, and culinary precision.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-[#555B6E]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#DFA526]" />
                  <span>Hands-on culinary, F&B service, and barista labs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#DFA526]" />
                  <span>Continuous placement support and career advisory</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Institutional Values */}
      <section className="py-24 bg-white border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Core Values"
            title="The Values That"
            highlight="Define Us"
            description="Our training culture is built around four fundamental values that ensure every graduate enters the industry with confidence."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="p-7 rounded-2xl bg-[#F8F7F3] border border-[#30345B]/8 hover:border-[#DFA526]/40 transition-all duration-300 space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#30345B] text-[#DFA526] flex items-center justify-center shadow-sm">
                    <Icon size={22} />
                  </div>
                  <h4 className="font-heading font-extrabold text-lg text-[#1E2340]">
                    {v.title}
                  </h4>
                  <p className="text-xs text-[#555B6E] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Institutional Milestones Timeline */}
      <section className="py-24 bg-[#20233E] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Our Milestones"
            title="A Journey of"
            highlight="Continuous Growth"
            description="Key institutional achievements since our inception as Birgunj's pioneer hotel management college."
            dark
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((m) => (
              <div
                key={m.step}
                className="p-7 rounded-2xl bg-[#30345B] border border-white/10 space-y-3 relative group hover:border-[#DFA526]/50 transition-colors"
              >
                <div className="font-heading font-extrabold text-3xl text-[#DFA526]">
                  {m.step}
                </div>
                <h4 className="font-heading font-bold text-lg text-white">
                  {m.title}
                </h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="btn-gold !py-3.5 !px-8 text-sm font-bold inline-flex"
            >
              Visit Our Birgunj Campus
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
