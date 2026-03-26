"use client"

import { motion } from "framer-motion"
import { useState, useCallback } from "react"
import { Send, CheckCircle, MapPin, Phone, Mail, Clock, Search } from "lucide-react"
import { contactCards, siteData } from "@/lib/site-data"

const contactInfo = [
  { icon: MapPin, ...contactCards[0] },
  { icon: Phone, ...contactCards[1] },
  { icon: Mail, ...contactCards[2] },
  { icon: Clock, ...contactCards[3] },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    },
    []
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    },
    []
  )

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl bg-background/70 border border-text-light/10 text-text-light text-sm placeholder:text-text-light/25 focus:outline-none focus:border-[#D4A533]/40 focus:shadow-[0_0_20px_rgba(212,165,51,0.1)] transition-all duration-300"

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
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text-light text-balance"
          >
            Contact{" "}
            <span className="bg-gradient-to-r from-[#D4A533] to-[#E8C86A] bg-clip-text text-transparent">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-text-light/50 max-w-lg mx-auto leading-relaxed"
          >
            Reach out for admissions, course information, and campus visits at Nepal College of Hotel Management.
          </motion.p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-10 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 space-y-6"
            >
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="glass-card-white rounded-xl p-5 flex items-start gap-4 gold-glow-hover transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4A533] to-[#E8C86A] flex items-center justify-center">
                      <Icon size={18} className="text-[#0B1F3B]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#D4A533] tracking-wider uppercase mb-1">{item.label}</p>
                      <p className="text-text-light/60 text-sm leading-relaxed">{item.value}</p>
                    </div>
                  </motion.div>
                )
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass-card-white rounded-xl p-6 gold-glow-hover transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#D4A533] to-[#E8C86A]">
                    <Search size={18} className="text-[#0B1F3B]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#D4A533] tracking-wider uppercase">Search Us On</p>
                    <p className="text-sm text-text-light/55">Official social presence</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {siteData.socialSearches.map((item) => (
                    <div key={item.platform} className="rounded-xl border border-text-light/10 bg-background/50 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-[#D4A533]">{item.platform}</p>
                      <p className="mt-1 text-sm text-text-light/60">{item.handle}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass-card-white rounded-2xl p-8 md:p-10 gold-glow">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="rounded-2xl border border-[#D4A533]/15 bg-[#D4A533]/6 px-5 py-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#D4A533]">Admissions Desk</p>
                    <p className="mt-2 text-sm leading-relaxed text-text-light/60">
                      Share your details and we will get back to you through {siteData.email} or {siteData.phones.join(", ")}.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs text-text-light/50 mb-2 uppercase tracking-wider">Full Name</label>
                      <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className={inputClasses} placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs text-text-light/50 mb-2 uppercase tracking-wider">Email</label>
                      <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className={inputClasses} placeholder="john@example.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs text-text-light/50 mb-2 uppercase tracking-wider">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} className={inputClasses} placeholder="98XXXXXXXX" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs text-text-light/50 mb-2 uppercase tracking-wider">Message</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} className={`${inputClasses} resize-none`} placeholder="Tell us about your inquiry..." />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01, boxShadow: "0 0 35px rgba(212, 165, 51, 0.3)" }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#D4A533] to-[#E8C86A] text-[#0B1F3B] font-semibold text-sm tracking-wide transition-all duration-300"
                  >
                    {submitted ? (
                      <>
                        <CheckCircle size={18} />
                        Message Sent Successfully
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
