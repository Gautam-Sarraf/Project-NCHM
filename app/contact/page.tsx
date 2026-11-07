"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Building,
  Calendar,
  MessageSquare,
} from "lucide-react"
import PageHero from "../components/PageHero"
import SectionHeader from "../components/SectionHeader"
import { siteData } from "@/lib/site-data"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "Diploma in Hotel Management",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setSubmitted(true)
      }, 700)
    },
    []
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    },
    []
  )

  return (
    <div className="bg-[#F8F7F3] text-[#555B6E]">
      {/* Page Hero */}
      <PageHero
        label="Admissions & Inquiries"
        title="Connect with Our"
        highlight="Admissions Team"
        description="We are ready to guide you on programs, eligibility, class schedules, and practical training facilities at Nepal College of Hotel Management."
        breadcrumb="Contact Us"
      />

      {/* Main Contact Grid */}
      <section className="py-24 bg-white border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info Cards (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="gold-badge">
                  Campus Location & Office
                </span>
                <h2 className="font-heading text-3xl font-extrabold text-[#1E2340] leading-tight">
                  Visit Our Campus in <span className="text-[#30345B]">Birgunj</span>
                </h2>
                <p className="text-sm text-[#555B6E] leading-relaxed">
                  Our admissions counseling office is open Sunday through Friday. Walk-ins are always welcome for campus walkthroughs and counseling.
                </p>
              </div>

              {/* Cards */}
              <div className="space-y-4">
                {/* Address */}
                <div className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#30345B]/8 flex items-start gap-4 hover:border-[#DFA526]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#30345B] text-[#DFA526] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-sm text-[#1E2340]">
                      Campus Address
                    </h3>
                    <p className="text-xs text-[#555B6E] mt-1 leading-relaxed">
                      {siteData.address}
                    </p>
                    <span className="inline-block mt-2 text-[11px] font-bold text-[#DFA526] uppercase tracking-wider">
                      Inside Bright College Premises
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#30345B]/8 flex items-start gap-4 hover:border-[#DFA526]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#30345B] text-[#DFA526] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-sm text-[#1E2340]">
                      Admissions Direct Hotlines
                    </h3>
                    <div className="mt-1 space-y-0.5 text-xs text-[#555B6E]">
                      <a href="tel:9845532370" className="block hover:text-[#30345B] font-medium">
                        +977 9845532370
                      </a>
                      <a href="tel:9829232426" className="block hover:text-[#30345B] font-medium">
                        +977 9829232426
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#30345B]/8 flex items-start gap-4 hover:border-[#DFA526]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#30345B] text-[#DFA526] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-sm text-[#1E2340]">
                      Official Admissions Email
                    </h3>
                    <a
                      href="mailto:nchmbrj143@gmail.com"
                      className="text-xs text-[#555B6E] mt-1 block hover:underline hover:text-[#30345B]"
                    >
                      {siteData.email}
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#30345B]/8 flex items-start gap-4 hover:border-[#DFA526]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#30345B] text-[#DFA526] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-sm text-[#1E2340]">
                      Office & Counseling Hours
                    </h3>
                    <p className="text-xs text-[#555B6E] mt-1 leading-relaxed">
                      {siteData.hours}
                    </p>
                    <span className="text-[11px] text-[#555B6E]/70 block mt-0.5">
                      Saturday Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry & Admission Form (7 Cols) */}
            <div className="lg:col-span-7 bg-[#F8F7F3] border border-[#30345B]/10 rounded-3xl p-8 sm:p-10 shadow-lg">
              <div className="space-y-3 mb-8">
                <span className="gold-badge">
                  Admission Form
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1E2340]">
                  Submit Your Admission Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#555B6E]">
                  Complete the short form below and our counseling department will respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-white border border-[#DFA526]/40 text-center space-y-4 shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-[#DFA526]/20 text-[#30345B] mx-auto flex items-center justify-center">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="font-heading font-extrabold text-xl text-[#1E2340]">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555B6E] max-w-md mx-auto leading-relaxed">
                    Thank you, {form.name || "Student"}! An NCHM admissions advisor will review your details and contact you via phone or email shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        program: "Diploma in Hotel Management",
                        message: "",
                      })
                    }}
                    className="btn-navy !py-2.5 !px-6 text-xs font-bold mt-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1E2340] uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Aarav Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#30345B]/15 text-[#1E2340] text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#DFA526] focus:ring-1 focus:ring-[#DFA526] transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1E2340] uppercase tracking-wider">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. 9845532370"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#30345B]/15 text-[#1E2340] text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#DFA526] focus:ring-1 focus:ring-[#DFA526] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1E2340] uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. student@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#30345B]/15 text-[#1E2340] text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#DFA526] focus:ring-1 focus:ring-[#DFA526] transition-colors"
                      />
                    </div>

                    {/* Program Selection */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1E2340] uppercase tracking-wider">
                        Program of Interest *
                      </label>
                      <select
                        name="program"
                        value={form.program}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#30345B]/15 text-[#1E2340] text-sm focus:outline-none focus:border-[#DFA526] focus:ring-1 focus:ring-[#DFA526] transition-colors"
                      >
                        <option value="Diploma in Hotel Management">
                          Diploma in Hotel Management (15 Mos)
                        </option>
                        <option value="Advanced Diploma in Hotel Management">
                          Advanced Diploma in Hotel Management (21 Mos)
                        </option>
                        <option value="Professional Barista Certification">
                          Professional Barista Certification (1 Mo)
                        </option>
                        <option value="General Campus Inquiry">General Inquiry / Campus Tour</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1E2340] uppercase tracking-wider">
                      Your Questions or Notes (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Ask about batch start dates, practical kitchens, fees, or accommodation in Birgunj..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#30345B]/15 text-[#1E2340] text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#DFA526] focus:ring-1 focus:ring-[#DFA526] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-gold !py-4 text-sm font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        Submit Admission Inquiry
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-center text-[#555B6E]">
                    Your information is kept confidential and used solely for academic counseling.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map & Directions Guide */}
      <section className="py-20 bg-[#F8F7F3]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#30345B] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs font-bold text-[#DFA526] uppercase tracking-widest">
                Location Landmark
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                How to Reach Our Campus in Birgunj
              </h3>
              <p className="text-sm text-white/80 max-w-xl leading-relaxed">
                NCHM is situated inside the Bright College complex in Birgunj-09, easily accessible via public and private transport with secure campus facilities and modern training labs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <a
                href="tel:9845532370"
                className="btn-gold !py-3.5 !px-8 text-sm font-bold text-center justify-center"
              >
                Call for Directions
                <Phone size={15} />
              </a>
              <Link
                href="/about"
                className="btn-navy !bg-[#20233E] !border !border-white/20 !py-3.5 !px-8 text-sm font-semibold text-center justify-center text-white"
              >
                About Campus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
