"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
  isGold: boolean
}

function seededRandom(seed: number): () => number {
  let s = seed
  return () => {
    s = (s * 16807 + 0) % 2147483647
    return (s - 1) / 2147483646
  }
}

function generateBubbles(count: number): Bubble[] {
  const rand = seededRandom(42)
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: rand() * 100,
    y: rand() * 100,
    size: rand() * 140 + 40,
    duration: rand() * 20 + 15,
    delay: rand() * 10,
    opacity: rand() * 0.08 + 0.02,
    isGold: rand() > 0.4,
  }))
}

const staticBubbles = generateBubbles(18)

export default function BubbleBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {staticBubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: bubble.size,
            height: bubble.size,
            background: bubble.isGold
              ? `radial-gradient(circle, rgba(212, 165, 51, ${bubble.opacity}) 0%, rgba(232, 200, 106, ${bubble.opacity * 0.5}) 50%, transparent 70%)`
              : `radial-gradient(circle, rgba(255, 255, 255, ${bubble.opacity * 0.8}) 0%, rgba(255, 255, 255, ${bubble.opacity * 0.3}) 50%, transparent 70%)`,
            filter: "blur(10px)",
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
