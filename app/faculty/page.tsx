"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  GraduationCap,
  Award,
  BookOpen,
  Mail,
  Linkedin,
  Sparkles,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Coffee,
  Utensils,
} from "lucide-react"
import PageHero from "../components/PageHero"
import SectionHeader from "../components/SectionHeader"
import { siteData } from "@/lib/site-data"

const facultyMembers = [
  {
    name: "Brij Sarraf",
    designation: "BHM Faculty & Director",
    department: "Hospitality Management & Operations",
    image: "/images/fac.jpeg",
    bio: "Pioneering hospitality educator in Birgunj with extensive leadership in hotel operations. Mentors students in strategic hotel management, professionalism, and industry placement readiness.",
    expertise: ["Hotel Operations", "Strategic Planning", "Student Mentoring"],
  },
  {
    name: "Urusha Thapa",
    designation: "BHM Faculty",
    department: "Food & Beverage Service & Etiquette",
    image: "/images/faculty-2.jpg",
    bio: "Specialist in fine dining restaurant service, banquet operations, and guest relations. Guides students through mock restaurant table setups and international hospitality standards.",
    expertise: ["F&B Service", "Guest Relations", "Service Standards"],
  },
  {
    name: "Rohan Singh",
    designation: "BHM Faculty",
    department: "Food Production & Culinary Arts",
    image: "/images/faculty-3.jpg",
    bio: "Passionate culinary trainer with deep expertise in commercial kitchen workflow, continental cuisine, hygiene standards, and food presentation in campus training kitchens.",
    expertise: ["Culinary Arts", "Kitchen Operations", "HACCP Hygiene"],
  },
  {
    name: "Sibanshu Barnawal",
    designation: "BHM Faculty",
    department: "Front Office & Accommodation Operations",
    image: "/images/faculty-1.jpg",
    bio: "Experienced instructor specializing in front office management systems, guest communication, telephone etiquette, and luxury accommodation housekeeping protocols.",
    expertise: ["Front Office Systems", "Guest Communication", "Housekeeping"],
  },
  {
    name: "Marorama Mallick",
    designation: "Faculty & Barista Specialist",
    department: "Specialty Beverages & Cafe Management",
    image: "/images/faculty-4.jpg",
    bio: "Dedicated instructor leading practical barista certification modules, espresso calibration, milk texturing, latte art, and cafe hospitality customer service.",
    expertise: ["Barista Training", "Latte Art", "Beverage Service"],
  },
]

export default function FacultyPage() {
  return (
    <div className="bg-[#F8F7F3] text-[#555B6E]">
      {/* Page Hero */}
      <PageHero
        label="Our Academic Team"
        title="Distinguished BHM"
        highlight="Faculty & Mentors"
        description="Meet the experienced hospitality educators who personally guide, mentor, and train every student at Nepal College of Hotel Management, Birgunj."
        breadcrumb="Faculty"
      />

      {/* Faculty Mentorship Philosophy */}
      <section className="py-20 bg-white border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="gold-badge">
                Teaching Philosophy
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E2340] tracking-tight">
                Mentorship Grounded in <span className="text-[#DFA526]">Real Hotel Realities</span>
              </h2>
              <p className="text-base sm:text-lg text-[#555B6E] leading-relaxed">
                At NCHM, our faculty members are not just lecturers—they are hospitality practitioners who guide students side-by-side in our practical kitchens, dining suites, and barista bars. Small class sizes ensure that every student receives dedicated one-on-one feedback on technique, grooming, and professional conduct.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#F8F7F3] border border-[#30345B]/10 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#30345B]">
                Faculty Hallmarks
              </div>
              <ul className="space-y-2 text-xs text-[#555B6E]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#DFA526]" />
                  <span>100% BHM qualified educators</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#DFA526]" />
                  <span>Hands-on kitchen & bar training</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#DFA526]" />
                  <span>Personalized placement counseling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Cards Grid */}
      <section className="py-24 bg-[#F8F7F3] border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Faculty Directory"
            title="Our Dedicated"
            highlight="Educators"
            description="Committed professionals providing qualitative, affordable, and practical study systems for ambitious hospitality careers."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member) => (
              <div
                key={member.name}
                className="campus-card overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Portrait with Badge */}
                  <div className="relative aspect-[4/3] bg-[#30345B] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#20233E]/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/95 text-[#30345B] text-xs font-bold shadow-sm">
                        {member.designation}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="font-heading font-extrabold text-xl text-white">
                        {member.name}
                      </div>
                      <div className="text-xs text-[#DFA526] font-semibold">
                        {member.department}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-[#555B6E] leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="pt-2 border-t border-gray-100 space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#30345B]">
                        Areas of Expertise:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {member.expertise.map((exp) => (
                          <span
                            key={exp}
                            className="px-2.5 py-0.5 rounded-full bg-[#30345B]/6 text-[#30345B] text-[11px] font-semibold"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <Link
                    href="/contact"
                    className="w-full btn-outline-navy !py-2.5 text-xs font-bold text-center justify-center inline-flex items-center gap-1.5"
                  >
                    Connect with Admissions
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Academic Community CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center space-y-6">
          <span className="gold-badge">
            Meet Our Instructors
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E2340]">
            Experience a Classroom Guided by Real Hotel Professionals
          </h2>
          <p className="text-base text-[#555B6E] max-w-2xl mx-auto leading-relaxed">
            Visit our campus inside Bright College, Birgunj-09. Sit down with our faculty members, tour our kitchens and barista labs, and plan your hospitality career.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold !py-3.5 !px-8 text-sm font-bold">
              Schedule a Campus Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
