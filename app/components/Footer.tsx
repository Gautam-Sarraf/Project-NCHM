"use client"

import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ExternalLink,
  Award,
  Sparkles,
  CheckCircle2,
  Facebook,
  Instagram,
} from "lucide-react"
import { siteData } from "@/lib/site-data"

const quickLinks = [
  { name: "About NCHM", href: "/about" },
  { name: "Academic Programs", href: "/courses" },
  { name: "Faculty & Mentors", href: "/faculty" },
  { name: "Campus Gallery", href: "/gallery" },
  { name: "Placements & Careers", href: "/placements" },
  { name: "Admissions & Contact", href: "/contact" },
]

const academicLinks = [
  { name: "Diploma in Hotel Management (15 Months)", href: "/courses" },
  { name: "Advanced Diploma in Hotel Management (21 Months)", href: "/courses" },
  { name: "Professional Barista Certification (1 Month)", href: "/courses" },
  { name: "Practical Kitchen & Culinary Labs", href: "/gallery" },
  { name: "Food & Beverage Service Training", href: "/courses" },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#20233E] text-white pt-20 pb-12 border-t-2 border-[#DFA526]/30 overflow-hidden font-sans">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DFA526]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#30345B]/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Top Pre-Footer Banner */}
        <div className="bg-[#30345B] border border-[#DFA526]/25 rounded-3xl p-8 lg:p-10 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFA526]/15 text-[#DFA526] font-bold text-xs uppercase tracking-widest">
              <Sparkles size={13} />
              Birgunj's Pioneer Hospitality Campus
            </span>
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white">
              Ready to Build Your Career in Global Hospitality?
            </h3>
            <p className="text-white/70 text-sm max-w-2xl leading-relaxed">
              Admissions are open for upcoming batches. Speak directly with our faculty advisors or visit our campus inside Bright College, Birgunj.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="btn-gold !py-3.5 !px-8 text-sm font-bold text-center justify-center"
            >
              Apply for Admission
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:9845532370"
              className="btn-navy !bg-[#20233E] !border !border-white/20 hover:!border-[#DFA526] !py-3.5 !px-6 text-sm font-semibold text-center justify-center text-white"
            >
              <Phone size={15} className="text-[#DFA526]" />
              Call Admissions
            </a>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-white/10">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#DFA526] bg-white flex-shrink-0">
                <Image
                  src="/images/logo.jpeg"
                  alt="NCHM Birgunj Crest Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg tracking-tight text-white block leading-tight">
                  Nepal College of Hotel Management
                </span>
                <span className="text-xs font-bold text-[#DFA526] tracking-widest uppercase block mt-0.5">
                  Birgunj, Nepal
                </span>
              </div>
            </Link>

            <p className="text-white/75 text-sm leading-relaxed max-w-md">
              Established as the 1st Hotel Management College in Birgunj. We provide 100% practical-based hospitality education, professional culinary kitchens, barista training, and dedicated placement pathways in premier hotels and resorts.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-white/50 uppercase tracking-widest font-bold">Connect with us:</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#DFA526] hover:bg-[#DFA526] hover:text-[#20233E] text-white/80 transition-all flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#DFA526] hover:bg-[#DFA526] hover:text-[#20233E] text-white/80 transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <span className="text-xs text-white/60 font-medium">@NCHM Birgunj</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-heading font-extrabold uppercase tracking-wider text-[#DFA526] pb-1 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#DFA526] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFA526]/50" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Programs (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-heading font-extrabold uppercase tracking-wider text-[#DFA526] pb-1 border-b border-white/10">
              Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              {academicLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#DFA526] transition-colors block text-xs leading-snug"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-heading font-extrabold uppercase tracking-wider text-[#DFA526] pb-1 border-b border-white/10">
              Campus Info
            </h4>
            <div className="space-y-3.5 text-xs text-white/80">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#DFA526] shrink-0 mt-0.5" />
                <span>{siteData.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#DFA526] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:9845532370" className="block hover:text-[#DFA526] transition-colors">
                    9845532370
                  </a>
                  <a href="tel:9829232426" className="block hover:text-[#DFA526] transition-colors">
                    9829232426
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#DFA526] shrink-0 mt-0.5" />
                <a href="mailto:nchmbrj143@gmail.com" className="hover:text-[#DFA526] transition-colors">
                  {siteData.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-[#DFA526] shrink-0 mt-0.5" />
                <span>{siteData.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Nepal College of Hotel Management (NCHM), Birgunj. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#DFA526]/80 font-semibold">
              1st Hotel Management College in Birgunj
            </span>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#DFA526] transition-colors">
              Admissions
            </Link>
            <span>•</span>
            <Link href="/courses" className="hover:text-[#DFA526] transition-colors">
              Curriculum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
