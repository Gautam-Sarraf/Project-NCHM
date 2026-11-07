"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Clock,
  ArrowRight,
  Award,
  Coffee,
  Building,
  CheckCircle2,
  Users,
  Star,
  GraduationCap,
  Sparkles,
  BookOpen,
  Briefcase,
  Layers,
  Phone,
} from "lucide-react"
import PageHero from "../components/PageHero"
import SectionHeader from "../components/SectionHeader"

const courseList = [
  {
    title: "Diploma in Hotel Management",
    duration: "15 Months",
    tag: "Core Hospitality Program",
    image: "/images/3.jpeg",
    icon: Building,
    overview:
      "A comprehensive, intensive program designed to provide complete operational mastery of the four major hotel departments: Front Office, Food & Beverage Service, Food Production (Culinary), and Housekeeping.",
    curriculum: [
      {
        module: "Food & Beverage Service",
        topics: "Fine dining etiquette, banquet service, table setting, cocktail/mocktail basics, guest handling.",
      },
      {
        module: "Food Production & Culinary Arts",
        topics: "Knife skills, culinary fundamentals, soups, sauces, basic cooking methods, hygiene and HACCP.",
      },
      {
        module: "Front Office Operations",
        topics: "Reservation systems, check-in/out procedures, guest billing, telephone etiquette, concierge.",
      },
      {
        module: "Housekeeping & Accommodation",
        topics: "Room cleaning techniques, bed making, linen handling, cleaning chemistry, public area upkeep.",
      },
      {
        module: "Hospitality English & Grooming",
        topics: "Professional workplace communication, interview readiness, personal hygiene, body language.",
      },
    ],
    careers: [
      "Front Desk Associate",
      "F&B Service Steward / Captain",
      "Commis Chef / Kitchen Assistant",
      "Guest Service Executive",
      "Housekeeping Supervisor",
    ],
    eligibility: "SEE / 10th pass or equivalent from a recognized board. Open to all streams.",
    practicalRatio: "100% Practical Training in Campus Labs",
  },
  {
    title: "Advanced Diploma in Hotel Management",
    duration: "21 Months",
    tag: "Executive Career Program",
    image: "/images/9.jpeg",
    icon: Award,
    overview:
      "An advanced, rigorous program tailored for students aiming for rapid supervisory and managerial progression in luxury hotels, fine dining restaurants, and international resort chains.",
    curriculum: [
      {
        module: "Advanced Culinary Techniques",
        topics: "Continental & multi-cuisine cooking, food presentation, menu planning, portion control & costing.",
      },
      {
        module: "Hospitality Revenue & Operations",
        topics: "Yield management, room division management, occupancy calculations, budgeting principles.",
      },
      {
        module: "Strategic Restaurant & Bar Operations",
        topics: "Wine appreciation, bar operations, luxury banquet planning, inventory management.",
      },
      {
        module: "Human Resource & Supervisory Skills",
        topics: "Leadership in service industry, team coordination, conflict resolution, staff briefing.",
      },
      {
        module: "Internship & Placement Track",
        topics: "Guided placement support with leading hotel and resort partners in Nepal and abroad.",
      },
    ],
    careers: [
      "Assistant Restaurant Manager",
      "Hotel Operations Supervisor",
      "Demi Chef de Partie",
      "Guest Relations Executive",
      "Banqueting Coordinator",
    ],
    eligibility: "+2 / 12th pass or equivalent in any discipline (Science, Management, Humanities).",
    practicalRatio: "Extensive Lab Practical Sessions & Hotel Exposure",
  },
  {
    title: "Professional Barista Certification",
    duration: "1 Month",
    tag: "Specialized Craft Certification",
    image: "/images/2.jpeg",
    icon: Coffee,
    overview:
      "An intensive, skill-focused certification program designed for aspiring baristas, cafe entrepreneurs, and beverage professionals seeking international standard coffee brewing skills.",
    curriculum: [
      {
        module: "Coffee Botany & Bean Sourcing",
        topics: "Arabica vs Robusta varieties, origins, processing methods, roasting levels, cupping protocols.",
      },
      {
        module: "Espresso Extraction Science",
        topics: "Grind size calibration, dosing, tamping techniques, brew ratios, channeling prevention.",
      },
      {
        module: "Milk Texturing & Latte Art",
        topics: "Microfoam creation, temperature control, free-pour heart, tulip, and rosetta patterns.",
      },
      {
        module: "Manual Brewing Methods",
        topics: "V60 pour-over, French Press, Aeropress, Chemex, and cold brew preparation.",
      },
      {
        module: "Commercial Espresso Machine Care",
        topics: "Daily backflushing, steam wand sanitation, grinder maintenance, hygiene standards.",
      },
    ],
    careers: [
      "Specialty Coffee Barista",
      "Cafe Supervisor",
      "Head Barista / Trainer",
      "Independent Cafe Entrepreneur",
      "Cruise Ship Barista",
    ],
    eligibility: "Open to anyone passionate about coffee crafting. Minimum SEE or school completion.",
    practicalRatio: "100% Hands-On Espresso Machine Practice",
  },
]

export default function CoursesPage() {
  return (
    <div className="bg-[#F8F7F3] text-[#555B6E]">
      {/* Page Hero */}
      <PageHero
        label="Academic Programs"
        title="Industry-Aligned"
        highlight="Hospitality Courses"
        description="Comprehensive diplomas and vocational certifications designed to prepare students for lucrative careers in the global hotel, restaurant, and specialty coffee industry."
        breadcrumb="Courses"
      />

      {/* Program Detailed Cards */}
      <section className="py-24 bg-white border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {courseList.map((course, idx) => {
            const Icon = course.icon
            const isReversed = idx % 2 === 1

            return (
              <div
                key={course.title}
                className="campus-card p-8 lg:p-12 border border-[#30345B]/10 overflow-hidden"
              >
                <div
                  className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-start ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image & Quick Snapshot (5 Cols) */}
                  <div
                    className={`lg:col-span-5 space-y-6 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#30345B]/10">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/95 text-[#30345B] text-xs font-bold shadow-sm">
                          {course.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3.5 py-1.5 rounded-full bg-[#DFA526] text-[#20233E] text-xs font-extrabold shadow-md inline-flex items-center gap-1.5">
                          <Clock size={14} />
                          {course.duration}
                        </span>
                      </div>
                    </div>

                    {/* Quick Highlights Box */}
                    <div className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#30345B]/8 space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#30345B]">
                        Program Snapshot
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between py-1 border-b border-gray-200">
                          <span className="text-[#555B6E]">Duration:</span>
                          <span className="font-bold text-[#1E2340]">{course.duration}</span>
                        </div>
                        <div className="flex items-center justify-between py-1 border-b border-gray-200">
                          <span className="text-[#555B6E]">Eligibility:</span>
                          <span className="font-bold text-[#1E2340] text-right max-w-[200px]">
                            {course.eligibility}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-[#555B6E]">Training Method:</span>
                          <span className="font-bold text-[#DFA526] text-right">
                            {course.practicalRatio}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="w-full btn-gold !py-3.5 text-sm font-bold shadow-md inline-flex items-center justify-center gap-2"
                    >
                      Inquire for Admissions
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Program Curriculum & Details (7 Cols) */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 text-xs font-bold text-[#DFA526] uppercase tracking-wider">
                        <Icon size={16} />
                        {course.tag}
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2340]">
                        {course.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-[#555B6E] leading-relaxed">
                      {course.overview}
                    </p>

                    {/* Curriculum Modules */}
                    <div className="space-y-3 pt-2">
                      <h3 className="font-heading font-bold text-base text-[#1E2340] flex items-center gap-2">
                        <Layers size={18} className="text-[#DFA526]" />
                        Key Learning Modules
                      </h3>

                      <div className="space-y-2.5">
                        {course.curriculum.map((m) => (
                          <div
                            key={m.module}
                            className="p-3.5 rounded-xl bg-[#F8F7F3] border border-[#30345B]/6"
                          >
                            <div className="font-heading font-bold text-xs text-[#30345B]">
                              {m.module}
                            </div>
                            <div className="text-xs text-[#555B6E] mt-0.5">
                              {m.topics}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Career Outcomes */}
                    <div className="space-y-2.5 pt-2">
                      <h3 className="font-heading font-bold text-base text-[#1E2340] flex items-center gap-2">
                        <Briefcase size={18} className="text-[#DFA526]" />
                        Target Career Outcomes
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {course.careers.map((role) => (
                          <span
                            key={role}
                            className="px-3 py-1 rounded-full bg-[#30345B]/8 text-[#30345B] text-xs font-semibold"
                          >
                            ✓ {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Program Comparison Table */}
      <section className="py-24 bg-[#F8F7F3] border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Quick Comparison"
            title="Choose the Program That"
            highlight="Fits Your Goal"
            description="A clear summary of our hospitality and barista programs at Birgunj campus."
          />

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-sm border border-[#30345B]/10 overflow-hidden text-left text-xs sm:text-sm">
              <thead className="bg-[#30345B] text-white font-heading font-bold uppercase tracking-wider text-xs">
                <tr>
                  <th className="p-4 sm:p-5">Course Title</th>
                  <th className="p-4 sm:p-5">Duration</th>
                  <th className="p-4 sm:p-5">Minimum Entry</th>
                  <th className="p-4 sm:p-5">Primary Focus</th>
                  <th className="p-4 sm:p-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium">
                <tr className="hover:bg-[#F8F7F3] transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#1E2340]">
                    Diploma in Hotel Management
                  </td>
                  <td className="p-4 sm:p-5 text-[#DFA526] font-bold">15 Months</td>
                  <td className="p-4 sm:p-5 text-[#555B6E]">SEE / 10th pass</td>
                  <td className="p-4 sm:p-5 text-[#555B6E]">
                    Front Office, F&B, Culinary & Housekeeping
                  </td>
                  <td className="p-4 sm:p-5 text-right">
                    <Link
                      href="/contact"
                      className="btn-gold !py-1.5 !px-3.5 text-xs font-bold inline-block"
                    >
                      Inquire
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-[#F8F7F3] transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#1E2340]">
                    Advanced Diploma in Hotel Management
                  </td>
                  <td className="p-4 sm:p-5 text-[#DFA526] font-bold">21 Months</td>
                  <td className="p-4 sm:p-5 text-[#555B6E]">+2 / 12th pass</td>
                  <td className="p-4 sm:p-5 text-[#555B6E]">
                    Hospitality Management, Culinary Arts & Placements
                  </td>
                  <td className="p-4 sm:p-5 text-right">
                    <Link
                      href="/contact"
                      className="btn-gold !py-1.5 !px-3.5 text-xs font-bold inline-block"
                    >
                      Inquire
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-[#F8F7F3] transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#1E2340]">
                    Professional Barista Certification
                  </td>
                  <td className="p-4 sm:p-5 text-[#DFA526] font-bold">1 Month</td>
                  <td className="p-4 sm:p-5 text-[#555B6E]">School Completion</td>
                  <td className="p-4 sm:p-5 text-[#555B6E]">
                    Espresso, Milk Frothing, Latte Art & Cafe Ops
                  </td>
                  <td className="p-4 sm:p-5 text-right">
                    <Link
                      href="/contact"
                      className="btn-gold !py-1.5 !px-3.5 text-xs font-bold inline-block"
                    >
                      Inquire
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Admission Steps Section */}
      <section className="py-24 bg-white border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="How to Apply"
            title="Simple 4-Step"
            highlight="Admission Process"
            description="Our admissions team is available daily at our Birgunj campus to guide you through registration."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Inquire or Visit Campus",
                desc: "Reach out via our website form, call 9845532370, or visit our office inside Bright College, Birgunj-09.",
              },
              {
                step: "02",
                title: "Personal Counseling",
                desc: "Meet with our BHM faculty advisors to discuss your career interests and choose the ideal program.",
              },
              {
                step: "03",
                title: "Enrollment & Kit Collection",
                desc: "Submit academic transcripts, complete the admission form, and receive your chef/service uniform kit.",
              },
              {
                step: "04",
                title: "Practical Classes Begin",
                desc: "Commence your hands-on kitchen, dining, and hospitality training alongside your peers.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="p-8 rounded-2xl bg-[#F8F7F3] border border-[#30345B]/8 space-y-3 relative group"
              >
                <div className="font-heading font-extrabold text-3xl text-[#DFA526]">
                  {s.step}
                </div>
                <h4 className="font-heading font-bold text-lg text-[#1E2340]">
                  {s.title}
                </h4>
                <p className="text-xs text-[#555B6E] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="btn-navy !py-3.5 !px-8 text-sm font-bold inline-flex"
            >
              Start Admission Process
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
