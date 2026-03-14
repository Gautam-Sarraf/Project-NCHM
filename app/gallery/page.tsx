"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "Tour", "Training", "Campus", "Labs", "Events"]

const galleryImages = [
  { src: "/images/1.jpeg", alt: "Tour Bus", category: "Tour" },
  { src: "/images/2.jpeg", alt: "Teaching demonstration", category: "Training" },
  { src: "/images/3.jpeg", alt: "Teaching demonstration", category: "Training" },
  { src: "/images/4.jpeg", alt: "Teaching demonstration", category: "Training" },
  { src: "/images/5.jpeg", alt: "Teaching demonstration", category: "Training" },
  { src: "/images/6.jpeg", alt: "Teaching demonstration", category: "Training" },
  { src: "/images/7.jpeg", alt: "Teaching demonstration", category: "Training" },
  { src: "/images/8.jpeg", alt: "Teaching demonstration", category: "Training" },
  { src: "/images/9.jpeg", alt: "Teaching demonstration", category: "Training" },
  { src: "/images/10.jpeg", alt: "Teaching demonstration", category: "Training" },


]

export default function GalleryPage() {
  const [active, setActive] = useState("All")
  const [selected, setSelected] = useState<number | null>(null)

  const filtered = active === "All" ? galleryImages : galleryImages.filter((img) => img.category === active)

  const closeModal = useCallback(() => setSelected(null), [])
  const goNext = useCallback(() => {
    if (selected !== null) setSelected((selected + 1) % filtered.length)
  }, [selected, filtered.length])
  const goPrev = useCallback(() => {
    if (selected !== null) setSelected((selected - 1 + filtered.length) % filtered.length)
  }, [selected, filtered.length])

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
            Campus Life
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance"
          >
            Photo{" "}
            <span className="bg-gradient-to-r from-[#D4A533] to-[#E8C86A] bg-clip-text text-transparent">Gallery</span>
          </motion.h1>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-gradient-to-r from-[#D4A533] to-[#E8C86A] text-[#0B1F3B]"
                    : "bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/25"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-8 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((image, index) => (
                <motion.button
                  key={image.src + active}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelected(index)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                  aria-label={`View ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#0B1F3B]/0 group-hover:bg-[#0B1F3B]/60 transition-all duration-500 flex flex-col items-center justify-center">
                    <motion.span
                      initial={false}
                      className="text-white text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0"
                    >
                      {image.category}
                    </motion.span>
                    <span className="text-white/50 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 translate-y-3 group-hover:translate-y-0">
                      Click to view
                    </span>
                  </div>
                  {/* Gold border on hover */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#D4A533]/40 transition-colors duration-500" />
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0B1F3B]/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[selected].src}
                alt={filtered[selected].alt}
                width={1200}
                height={800}
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0B1F3B] to-transparent rounded-b-2xl">
                <p className="text-white text-sm font-medium">{filtered[selected].category}</p>
                <p className="text-white/50 text-xs mt-1">{filtered[selected].alt}</p>
              </div>

              {/* Navigation */}
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0B1F3B]/80 border border-[#D4A533]/20 flex items-center justify-center text-white hover:bg-[#D4A533]/20 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0B1F3B]/80 border border-[#D4A533]/20 flex items-center justify-center text-white hover:bg-[#D4A533]/20 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0B1F3B]/80 border border-[#D4A533]/20 flex items-center justify-center text-white hover:bg-[#D4A533]/20 transition-colors"
                aria-label="Close preview"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
