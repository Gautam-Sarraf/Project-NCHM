"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Maximize2,
  Camera,
  ArrowRight,
  Filter,
} from "lucide-react"
import PageHero from "../components/PageHero"
import SectionHeader from "../components/SectionHeader"

const categories = [
  "All",
  "Culinary & Kitchens",
  "Barista & Beverage",
  "F&B Service",
  "Campus & Classrooms",
  "Tours & Events",
]

const galleryImages = [
  {
    src: "/images/kitchen-lab.jpg",
    alt: "Practical training kitchen at NCHM Birgunj",
    title: "Commercial Culinary Laboratory",
    category: "Culinary & Kitchens",
  },
  {
    src: "/images/2.jpeg",
    alt: "Barista espresso machine and milk texturing training",
    title: "Espresso Extraction & Barista Lab",
    category: "Barista & Beverage",
  },
  {
    src: "/images/3.jpeg",
    alt: "Culinary training and food preparation session",
    title: "Food Production & Knife Skills",
    category: "Culinary & Kitchens",
  },
  {
    src: "/images/7.jpeg",
    alt: "Mock bar and beverage service counter",
    title: "Beverage Service & Mock Bar Counter",
    category: "F&B Service",
  },
  {
    src: "/images/6.jpeg",
    alt: "Latte art and specialty coffee preparation",
    title: "Latte Art & Milk Frothing Session",
    category: "Barista & Beverage",
  },
  {
    src: "/images/8.jpeg",
    alt: "Dining room and table layout training",
    title: "Fine Dining Table Setting Etiquette",
    category: "F&B Service",
  },
  {
    src: "/images/campus.jpg",
    alt: "Campus building inside Bright College premises",
    title: "NCHM Campus Premises (Birgunj-09)",
    category: "Campus & Classrooms",
  },
  {
    src: "/images/10.jpeg",
    alt: "NCHM students in professional hospitality uniform",
    title: "Hospitality Student Batch in Uniform",
    category: "Campus & Classrooms",
  },
  {
    src: "/images/5.jpeg",
    alt: "Culinary presentation and student dish display",
    title: "Culinary Dish Presentation & Plating",
    category: "Culinary & Kitchens",
  },
  {
    src: "/images/9.jpeg",
    alt: "Kitchen production and practical demonstration",
    title: "Chef Demonstration & Cookery Lab",
    category: "Culinary & Kitchens",
  },
  {
    src: "/images/4.jpeg",
    alt: "Baking and pastry practical training",
    title: "Baking & Pastry Workstation",
    category: "Culinary & Kitchens",
  },
  {
    src: "/images/classroom.jpg",
    alt: "Modern air-conditioned multimedia classroom",
    title: "Multimedia Lecture Classroom",
    category: "Campus & Classrooms",
  },
  {
    src: "/images/1.jpeg",
    alt: "Hospitality study tour and hotel visit excursion",
    title: "Hotel Industry Study Tour & Excursion",
    category: "Tours & Events",
  },
  {
    src: "/images/event.jpg",
    alt: "College seminar and guest hospitality workshop",
    title: "Hospitality Seminar & Workshop",
    category: "Tours & Events",
  },
  {
    src: "/images/about.jpg",
    alt: "Student practical hospitality training session",
    title: "Campus Practical Session",
    category: "Campus & Classrooms",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const closeModal = useCallback(() => setSelectedIdx(null), [])
  const goNext = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % filtered.length)
    }
  }, [selectedIdx, filtered.length])
  const goPrev = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + filtered.length) % filtered.length)
    }
  }, [selectedIdx, filtered.length])

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return
      if (e.key === "Escape") closeModal()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedIdx, closeModal, goNext, goPrev])

  return (
    <div className="bg-[#F8F7F3] text-[#555B6E]">
      {/* Page Hero */}
      <PageHero
        label="Visual Campus Tour"
        title="Life & Training at"
        highlight="NCHM Birgunj"
        description="Explore our commercial culinary kitchens, mock restaurant dining suites, professional espresso barista counters, and student excursions."
        breadcrumb="Gallery"
      />

      {/* Gallery Filter & Grid Section */}
      <section className="py-20 bg-white border-b border-[#30345B]/8">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat)
                  setSelectedIdx(null)
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#30345B] text-white shadow-md scale-105"
                    : "bg-[#F8F7F3] text-[#555B6E] hover:bg-gray-200 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, idx) => (
              <div
                key={item.title + idx}
                onClick={() => setSelectedIdx(idx)}
                className="campus-card overflow-hidden cursor-pointer group relative aspect-[4/3] border border-[#30345B]/10"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Permanent subtle category pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/95 text-[#30345B] text-[11px] font-bold shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#20233E]/90 via-[#20233E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-base text-white leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#DFA526] font-medium mt-1">
                        Click to enlarge photo
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#16182C]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              aria-label="Close photo preview"
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              aria-label="Next photo"
            >
              <ChevronRight size={28} />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            >
              <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-black">
                <Image
                  src={filtered[selectedIdx].src}
                  alt={filtered[selectedIdx].alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Caption & Category */}
              <div className="mt-4 text-center text-white space-y-1">
                <div className="font-heading font-bold text-lg">
                  {filtered[selectedIdx].title}
                </div>
                <div className="text-xs text-[#DFA526] uppercase font-bold tracking-widest">
                  {filtered[selectedIdx].category} • {selectedIdx + 1} of {filtered.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Campus Visit Banner */}
      <section className="py-20 bg-[#F8F7F3]">
        <div className="mx-auto max-w-5xl px-6 text-center space-y-6">
          <span className="gold-badge">
            Experience It in Person
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E2340]">
            Tour Our Campus & Practical Labs in Birgunj
          </h2>
          <p className="text-base text-[#555B6E] max-w-2xl mx-auto leading-relaxed">
            Photographs only tell part of the story. Visit our training facilities inside Bright College, meet our BHM mentors, and observe ongoing practical sessions.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="btn-gold !py-3.5 !px-8 text-sm font-bold">
              Book a Guided Campus Visit
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
