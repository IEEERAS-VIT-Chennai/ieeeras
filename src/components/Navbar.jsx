"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Home, Users, Briefcase, Calendar, Layers, Folder, Menu, MoveRight } from "lucide-react"

// Navbar component responsible for desktop and mobile navigation
const Navbar = ({ onOpenMobileMenu, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  // Function to smoothly scroll to a section by its ID
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Define menu items with their labels, icons, and click handlers
  const menuItems = [
    { label: "Home", icon: <Home size={18} />, onClick: () => scrollToSection("home") },
    { label: "About Us", icon: <Users size={18} />, onClick: () => scrollToSection("about") },
    { label: "Department", icon: <Briefcase size={18} />, onClick: () => scrollToSection("department") },
    { label: "Team", icon: <Layers size={18} />, onClick: () => scrollToSection("members") },
    { label: "Projects", icon: <Folder size={18} />, onClick: () => scrollToSection("projects") },
    { label: "Join Us", icon: <MoveRight size={18} />, onClick: () => window.open("https://linktr.ee/IEEERAS_VITC", "_blank") },
  ]

  // Effect to add/remove scroll listener for dynamic navbar styling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navbar - Visible only on large screens (lg breakpoint and above) */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        // Navbar always maintains the same size and white background
        className={`hidden lg:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-40 h-16 px-6 xl:px-8 items-center justify-between font-medium transition-all duration-500 ease-out
          bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl border border-gray-200/50 w-[95%] max-w-7xl`}
      >
        {/* Logo - IEEE-RAS */}
        <motion.div
          className="text-2xl font-bold cursor-pointer select-none"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={() => scrollToSection("home")}
        >
          IEEE<span className="text-violet-500">-</span>
          <span className="text-red-500">RAS</span>
        </motion.div>

        {/* Navigation Links for desktop */}
        <nav className="flex items-center gap-6 xl:gap-8">
          {menuItems.slice(0, -1).map((item, index) => (
            <motion.button
              key={item.label}
              onClick={item.onClick}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.1,
                // Hover color: blue-400 when scrolled, indigo-600 when not scrolled
                color: isScrolled ? "#60a5fa" : "#4f46e5",
              }}
              whileTap={{ scale: 0.95 }}
              className={`relative py-2 px-1 transition-all duration-300 hover:font-semibold ${
                // Active text color: blue-500 always, font-bold
                activeSection === item.label ? "font-bold text-blue-500" : ""
                } ${isScrolled ? "text-gray-700" : "text-gray-700"
                }`}
            >
              {item.label}
              {/* Underline animation on hover and active */}
              <motion.div
                className={`absolute bottom-0 left-0 h-0.5 ${
                  // Underline color: blue-400 when scrolled, violet-500 when not scrolled
                  isScrolled ? "bg-violet-500" : "bg-violet-500"
                  }`}
                initial={{ width: 0 }}
                // Animate to 100% width if active, otherwise 0%
                animate={{ width: activeSection === item.label ? "100%" : "0%" }}
                // whileHover will override the animate state when hovered
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </nav>

        {/* CTA Button for desktop */}
        <motion.button
          onClick={menuItems[menuItems.length - 1].onClick}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 transition-all duration-300 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl"
        >
          Join Us
          {/* Animated arrow icon */}
          <motion.div animate={{ x: [0, 3, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <MoveRight size={16} />
          </motion.div>
        </motion.button>
      </motion.header>

      {/* Mobile Navbar Header - Visible only on small/medium screens (hidden on lg and above) */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:hidden fixed top-0 left-0 right-0 z-40 h-16 px-4 sm:px-6 flex items-center justify-between bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
      >
        {/* Mobile Logo */}
        <motion.div
          className="text-lg sm:text-xl font-bold text-white cursor-pointer select-none"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={() => scrollToSection("home")}
        >
          IEEE<span className="text-violet-500">-</span>
          <span className="text-red-500">RAS</span>
        </motion.div>

        {/* Mobile Menu Button - Triggers the HamburgerMenuOverlay */}
        <motion.button
          onClick={onOpenMobileMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Open mobile menu"
        >
          <Menu size={24} />
        </motion.button>
      </motion.header>

      {/* Mobile Navbar Spacer - Prevents content from being hidden behind the fixed mobile header */}
      <div className="lg:hidden h-16" />
    </>
  )
}

export default Navbar
