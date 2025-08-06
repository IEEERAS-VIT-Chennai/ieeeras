"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion" // Import motion and AnimatePresence for advanced animations
import { AuroraTextEffect } from "./lightswind/aurora-text-effect"
import TextType from "./ui/TextType"

// Array of taglines to cycle through
const taglines = [
  "Innovating the Future with Robotics",
  "Empowering Automation, Inspiring Minds",
  "Driven by Passion, Powered by IEEE RAS",
  "Robotics for a Better Tomorrow",
  "Think. Design. Automate. IEEE RAS",
]

const Hero = () => {
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [currentTagline, setCurrentTagline] = useState(taglines[0])
  const [rasAnimationComplete, setRasAnimationComplete] = useState(false) // State to control when tagline animation starts
  const intervalRef = useRef(null) // Ref to hold the interval ID for cleanup

  // Effect to delay the start of tagline animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setRasAnimationComplete(true) // Mark RAS animation as complete after a delay
    }, 1000)
    return () => clearTimeout(timer) // Cleanup the timeout
  }, [])

  // Effect to animate taglines at a regular interval
  useEffect(() => {
    if (!rasAnimationComplete) return // Only start if the initial RAS animation is complete

    intervalRef.current = setInterval(() => {
      setTaglineIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % taglines.length // Cycle through taglines
        setCurrentTagline(taglines[nextIndex]) // Update the current tagline
        return nextIndex
      })
    }, 9000) // Change tagline every 9 seconds

    // Cleanup function for the interval
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [rasAnimationComplete]) // Dependency array: re-run when rasAnimationComplete changes

  // Framer Motion variants for tagline entry and exit animations
  const taglineVariants = {
    initial: { opacity: 0, y: 20, rotateX: 90, scale: 0.8 }, // Initial state (hidden, rotated, scaled down)
    animate: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { duration: 1, ease: [0.2, 0.6, 0.3, 0.9] } }, // Animation to visible state
    exit: { opacity: 0, y: -20, rotateX: -90, scale: 0.8, transition: { duration: 0.8, ease: [0.7, 0, 0.8, 0.2] } }, // Animation to exit state
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* Main Container for Hero content */}
      <div className="relative text-center z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20"> {/* Added py-20 for vertical spacing */}
        {/* IEEE Logo with Aurora Effect */}
        <div className="mt-8 mb-8 sm:mb-12 lg:mb-8">
          <div className="relative inline-block">
            <AuroraTextEffect
              text="IEEE"
              fontSize="clamp(4rem, 12vw, 10rem)" // Responsive font size
              colors={{
                first: "bg-gradient-to-r from-violet-900 via-red-800 to-amber-900",
                second: "bg-gradient-to-r from-red-900 via-maroon-800 to-violet-800",
                third: "bg-gradient-to-r from-violet-800 via-rose-900 to-red-800",
                fourth: "bg-gradient-to-r from-maroon-900 via-violet-900 to-red-900",
              }}
              blurAmount="blur-lg"
              className="relative z-10"
            />
          </div>
        </div>

        {/* Robotics and Automation Society Gradient Text */}
        <div className="mb-12 sm:mb-16 lg:mb-8">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide bg-gradient-to-r from-pink-500 via-rose-400 to-violet-600 bg-clip-text text-transparent">
            Robotics and Automation Society
          </div>
        </div>

        {/* Tagline Section with Framer Motion AnimatePresence */}
        <div className="relative">
          <div className="w-full max-w-6xl mx-auto min-h-[4rem] sm:min-h-[5rem] lg:min-h-[6rem] flex items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-lg">
              {/* Decorative background blur */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg blur-xl" />
              <AnimatePresence mode="wait"> {/* Use AnimatePresence to animate components as they enter/exit */}
                {rasAnimationComplete && ( // Only render and animate if initial animation is complete
                  <motion.div
                    key={currentTagline} // Key change triggers the exit and enter animations
                    variants={taglineVariants} // Apply defined animation variants
                    initial="initial" // Set initial state
                    animate="animate" // Animate to animate state
                    exit="exit" // Animate to exit state
                    className="relative w-full flex justify-center items-center py-4 px-6"
                  >
                    <div className="relative">
                      {/* Soft background glow for the tagline */}
                      <div className="absolute inset-0 blur-sm">
                        <TextType
                          text={[currentTagline]}
                          typingSpeed={70}
                          pauseDuration={2000}
                          deletingSpeed={50}
                          showCursor={false}
                          loop={false}
                          className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center font-medium text-red-400/30 tracking-wide max-w-5xl opacity-60"
                        />
                      </div>
                      {/* Main Typing Text for the tagline */}
                      <TextType
                        text={[currentTagline]}
                        typingSpeed={70}
                        pauseDuration={2000}
                        deletingSpeed={50}
                        showCursor={true}
                        cursorCharacter="|"
                        cursorClassName="text-red-400 animate-pulse"
                        cursorBlinkDuration={1}
                        loop={false}
                        className="relative text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center font-medium text-gray-200 tracking-wide max-w-5xl leading-relaxed"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Decorative Gradient Overlay for visual depth */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 opacity-50" />
        </div>
      </div>
    </section>
  )
}

export default Hero
