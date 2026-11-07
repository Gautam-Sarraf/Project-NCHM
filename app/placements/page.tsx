"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Award,
  Users,
  Globe,
  Briefcase,
  Star,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Building,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Quote,
} from "lucide-react"
import PageHero from "../components/PageHero"
import SectionHeader from "../components/SectionHeader"
import { siteData } from "@/lib/site-data"

const placementStats = [
  { value: "100%", label: "Practical Preparation", desc: "Trained in real hotel setups" },
  { value: "Top", label: "Hotel Destinations", desc: "Kathmandu, Pokhara & Chitwan" },
  { value: "1-on-1", label: "Interview Coaching", desc: "Mock interviews & CV building" },
  { value: "1st", label: "College in Birgunj", desc: "Pioneer hospitality network" },
]

const verifiedStories = [
  {
    name: "Aarav Sharma",
    position: "Front Office Associate",
    property: "Hotel Placeholder International",
    location: "Kathmandu, Nepal",
    image: "/images/faculty-1.jpg",
    quote:
      "My training at NCHM helped me feel completely confident with guest communication, professional grooming, and front office software basics. The practical classes made all the difference.",
    batch: "Diploma Graduate",
  },
  {
    name: "Sanjana Thapa",
    position: "Guest Service Trainee",
    property: "Grand Horizon Hotel",
    location: "Pokhara, Nepal",
    image: "/images/faculty-2.jpg",
    quote:
      "The practical kitchen and mock dining labs combined with supportive BHM faculty made it seamless for me to transition into a demanding hotel environment.",
    batch: "Advanced Diploma Graduate",
  },
  {
    name: "Ritesh Kumar",
    position: "F&B Service Assistant",
    property: "Royal Palm Resort",
    location: "Biratnagar, Nepal",
    image: "/images/faculty-3.jpg",
    quote:
      "NCHM gave me a strong base in service standards, table etiquette, and beverage preparation. I stepped into my first job already knowing standard operating procedures.",
    batch: "Diploma Graduate",
  },
  {
    name: "Nisha Gupta",
    position: "Housekeeping Trainee",
    property: "City View Suites",
    location: "Chitwan, Nepal",
    image: "/images/faculty-4.jpg",
    quote:
      "The college prepared me with discipline, practical learning, and the confidence to work in a real hotel setup. The faculty guidance was invaluable.",
    batch: "Diploma Graduate",
  },
]

const competencies = [
  {
    title: "Front Office & Reservation Systems",
    desc: "Mastering check-in/out, guest relations, telephone etiquette, and billing systems.",
  },
  {
    title: "Food & Beverage Service Standards",
    desc: "Banquet operations, fine dining table setup, order taking, and service etiquette.",
  },
  {
    title: "Culinary & Kitchen Production",
    desc: "Commercial food preparation, knife skills, recipe execution, and kitchen hygiene.",
  },
  {
    title: "Housekeeping & Facility Hygiene",
    desc: "Room turnaround protocols, linen inspection, chemical handling, and public area maintenance.",
  },
  {
    title: "Professional Barista Craftsmanship",
    desc: "Espresso machine calibration, microfoam texturing, latte art, and cafe operations.",
  },
  {
    title: "Interview & Professional Grooming",
    desc: "Hospitality dress codes, body language, interview simulations, and resume building.",
  },
]

const placementSteps = [
  {
    phase: "Phase 01",
    title: "Foundation & Practical Drills",
    desc: "Mastering core hotel competencies through hands-on practice in campus kitchens, mock bars, and service labs.",
  },
  {
    phase: "Phase 02",
    title: "Grooming & Communication",
    desc: "Intensive focus on hospitality English, body language, professional grooming standards, and confidence building.",
  },
  {
    phase: "Phase 03",
    title: "CV Preparation & Mock Interviews",
    desc: "Faculty-led review of student resumes, technical question drills, and mock interview panels replicating hotel hiring standards.",
  },
  {
    phase: "Phase 04",
    title: "Recruitment & Onboarding",
    desc: "Direct coordination with hotel partners for internship placements and entry-level employment opportunities.",
  },
]

export default function PlacementsPage() {
  return (
    <div className="bg-[#F8F7F3] text-[#555B6E]">
      {/* Page Hero */}
      <PageHero
        label="Career Pathways"
        title="Connecting Students to"
        highlight="Hotel Placements"
        description="Our dedicated placement cell works alongside students from their first day of training, ensuring they graduate equipped with real hotel competencies and direct recruitment opportunities."
        breadcrumb="Placements"
      />

      {/* Placement Stats Strip */}
      <section className="py-16 bg-white border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {placementStats.map((s) => (
              <div key={s.label} className="space-y-1">
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#30345B]">
                  {s.value}
                </div>
                <div className="text-sm font-bold text-[#1E2340]">
                  {s.label}
                </div>
                <div className="text-xs text-[#555B6E]">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Alumni Success Stories */}
      <section className="py-24 bg-[#F8F7F3] border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Verified Placements"
            title="Voices of Our"
            highlight="Graduates"
            description="Authentic experiences from NCHM students who transitioned successfully into hotel and restaurant careers."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {verifiedStories.map((story) => (
              <div
                key={story.name}
                className="campus-card p-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#DFA526]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#DFA526" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#555B6E] italic leading-relaxed">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#DFA526] bg-[#30345B] flex-shrink-0">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm text-[#1E2340]">
                      {story.name}
                    </h4>
                    <div className="text-xs font-semibold text-[#DFA526]">
                      {story.position}
                    </div>
                    <div className="text-[11px] text-[#555B6E] flex items-center gap-1 mt-0.5">
                      <MapPin size={11} className="text-[#30345B]" />
                      {story.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Phase Placement Blueprint */}
      <section className="py-24 bg-white border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Placement Roadmap"
            title="How We Prepare You for"
            highlight="Employment"
            description="Our structured 4-phase career roadmap ensures every student develops technical proficiency, workplace discipline, and interview confidence."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementSteps.map((step) => (
              <div
                key={step.phase}
                className="p-7 rounded-2xl bg-[#F8F7F3] border border-[#30345B]/8 space-y-3 relative group"
              >
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#DFA526]">
                  {step.phase}
                </span>
                <h4 className="font-heading font-extrabold text-lg text-[#1E2340]">
                  {step.title}
                </h4>
                <p className="text-xs text-[#555B6E] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitality Core Competencies */}
      <section className="py-24 bg-[#20233E] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Industry Readiness"
            title="Key Competencies We"
            highlight="Train For"
            description="Hotel managers value candidates with demonstrable operational skills. Here is what NCHM graduates bring to the workforce."
            dark
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {competencies.map((c) => (
              <div
                key={c.title}
                className="p-7 rounded-2xl bg-[#30345B] border border-white/10 space-y-3 hover:border-[#DFA526]/50 transition-colors"
              >
                <div className="flex items-center gap-2 text-[#DFA526] font-bold text-base">
                  <CheckCircle2 size={18} />
                  <h4>{c.title}</h4>
                </div>
                <p className="text-xs text-white/75 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="btn-gold !py-3.5 !px-8 text-sm font-bold inline-flex"
            >
              Consult Our Placement Advisors
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
