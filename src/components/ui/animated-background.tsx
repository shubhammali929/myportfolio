import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export const AnimatedBackground = () => {
  const gridSize = 40
  const circles = Array.from({ length: gridSize }, (_, i) => i)

  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute h-full w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-full w-full">
            {circles.map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-8 w-8 rounded-full bg-primary/10"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight 
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  transition: {
                    duration: Math.random() * 10 + 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
    </div>
  )
} 