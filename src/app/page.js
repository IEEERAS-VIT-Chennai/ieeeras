'use client'

import { useEffect, useState, useCallback, useRef } from "react"
import MagicLoader from "@/components/lightswind/magic-loader"
import { SparkleParticles } from "@/components/lightswind/SparkleParticles"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Aboutus from "@/components/AboutUs"
import Department from "@/components/Department"
import Events from "@/components/Events"
import Members from "@/components/Members"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
import HamburgerMenuOverlay from "@/components/lightswind/HamburgerMenuOverlay"
import { Home, Users, Briefcase, Calendar, Layers, Folder, MoveRight } from "lucide-react"

export default function HomePage() {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingComplete, setLoadingComplete] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("HomePage")
  const [isMobileView, setIsMobileView] = useState(false); // New state for mobile view detection

  // Refs for each section to observe
  const sectionRefs = useRef({});

  // Optimized progress simulation for the loading screen
  const updateProgress = useCallback(() => {
    setLoadingProgress((prev) => {
      if (prev >= 100) return 100

      const increment = Math.random() * 3 + 1
      const newProgress = Math.min(prev + increment, 100)

      return newProgress
    })
  }, [])

  // Effect to manage loading progress and transition to main content
  useEffect(() => {
    if (loadingProgress < 100) {
      const getDelay = () => {
        if (loadingProgress < 30) return Math.random() * 20 + 10
        if (loadingProgress < 70) return Math.random() * 30 + 20
        if (loadingProgress < 90) return Math.random() * 50 + 30
        return Math.random() * 100 + 50
      }

      const timeout = setTimeout(updateProgress, getDelay())
      return () => clearTimeout(timeout)
    } else if (!loadingComplete) {
      const delay = setTimeout(() => {
        setLoadingComplete(true)
        setTimeout(() => setShowContent(true), 800)
      }, 1200)
      return () => clearTimeout(delay)
    }
  }, [loadingProgress, loadingComplete, updateProgress])

  // Effect for IntersectionObserver to determine active section
  useEffect(() => {
    if (!showContent) return;

    const currentSectionRefs = { ...sectionRefs.current };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            let menuLabel = "";
            switch (sectionId) {
              case "homepage":
                menuLabel = "HomePage";
                break;
              case "about":
                menuLabel = "About Us";
                break;
              case "department":
                menuLabel = "Department";
                break;
              case "events":
                menuLabel = "Events";
                break;
              case "members":
                menuLabel = "Members";
                break;
              case "projects":
                menuLabel = "Projects";
                break;
              case "contact":
                menuLabel = "Join Us";
                break;
              default:
                menuLabel = "HomePage";
            }
            setActiveSection(menuLabel);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    Object.values(currentSectionRefs).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      Object.values(currentSectionRefs).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [showContent]);

  // Effect to determine if the view is mobile based on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024); // Tailwind's 'lg' breakpoint is 1024px
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to get dynamic loading messages based on progress
  const getLoadingMessage = (progress) => {
    if (progress < 25) return "Initializing..."
    if (progress < 50) return "Loading Components..."
    if (progress < 75) return "Setting up Interface..."
    if (progress < 95) return "Almost Ready..."
    return "Welcome to IEEE RAS"
  }

  // Menu items configuration for both Navbar and HamburgerMenuOverlay
  const menuItems = [
    { label: "HomePage", icon: <Home size={18} />, onClick: () => {
      document.getElementById("homepage")?.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }},
    { label: "About Us", icon: <Users size={18} />, onClick: () => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }},
    { label: "Department", icon: <Briefcase size={18} />, onClick: () => {
      document.getElementById("department")?.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }},
    { label: "Events", icon: <Calendar size={18} />, onClick: () => {
      document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }},
    { label: "Members", icon: <Layers size={18} />, onClick: () => {
      document.getElementById("members")?.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }},
    { label: "Projects", icon: <Folder size={18} />, onClick: () => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }},
    { label: "Join Us", icon: <MoveRight size={18} />, onClick: () => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }},
  ]

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Sparkle Particles Background - Lowest z-index to ensure it's behind all content */}
      <SparkleParticles
        className="fixed inset-0 z-[1]"
        maxParticleSize={1.4}
        minParticleSize={0.8}
        baseDensity={600}
        maxSpeed={1.2}
        minMoveSpeed={0.3}
        maxOpacity={0.8}
        minParticleOpacity={0.3}
        opacityAnimationSpeed={2.5}
        particleColor="#ffffff"
        backgroundColor="transparent"
        enableParallax={true}
        enableHoverGrab={true}
        clickEffect={true}
        hoverMode="grab"
        zIndexLevel={1}
        particleCount={5}
        particleShape="star"
        enableCollisions={false}
      />

      {/* Navbar - Renders above main content, but below the mobile menu overlay */}
      {showContent && (
        <Navbar
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          activeSection={activeSection}
        />
      )}

      {/* Loading Screen - Highest z-index to cover everything during loading */}
      {!loadingComplete && (
        <div className="loader-container fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
          <div className="flex flex-col items-center gap-8">
            <MagicLoader
              size={220}
              particleCount={3}
              speed={1.2}
              hueRange={[0, 360]}
              loadingProgress={loadingProgress}
            />
            <div className="text-center space-y-4">
              <div className="text-white text-2xl tracking-[0.3em] font-light">IEEE RAS</div>
              <div className="w-80 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-red-400 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <div className="text-gray-400 text-lg font-medium tabular-nums">{Math.floor(loadingProgress)}%</div>
              <div className="text-gray-500 text-sm tracking-wider">{getLoadingMessage(loadingProgress)}</div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Renders above sparkles, below the navbar */}
      {showContent && (
        <div className="main-content relative z-10">
          <section
            id="homepage"
            ref={(el) => (sectionRefs.current.about = el)}
          >
          <Hero />
          </section>

          {/* About Us Section */}
          <section
            id="about"
            ref={(el) => (sectionRefs.current.about = el)}
          >
            <Aboutus />
          </section>

          {/* Department Section */}
          <section
            id="department"
            ref={(el) => (sectionRefs.current.department = el)}
          
          >
            <Department />
          </section>
   

          {/* Members Section */}
          <section
            id="members"
            ref={(el) => (sectionRefs.current.members = el)}
          >
            <Members />
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            ref={(el) => (sectionRefs.current.projects = el)}
          >
            <Projects />
          </section>

          <Footer />
        </div>
      )}

      {/* Hamburger Menu Overlay - Rendered globally, controlled by state from Navbar */}
      {showContent && isMobileView && ( // Only render if content is shown AND it's a mobile view
        <HamburgerMenuOverlay
          items={menuItems}
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
          buttonTop="32px"
          buttonLeft="calc(100vw - 32px - 16px)"
          buttonSize="md"
          buttonColor="transparent"
          textColor="rgba(255, 255, 255, 0.9)"
          overlayBackground="linear-gradient(135deg, rgba(0,0,0,0.98) 0%, rgba(20,20,20,0.99) 50%, rgba(0,0,0,0.98) 100%)"
          menuAlignment="center"
          animationDuration={0.6}
          staggerDelay={0.06}
          enableBlur={true}
          keepOpenOnItemClick={false}
          fontFamily="'Inter', sans-serif"
          fontWeight="medium"
          zIndex={90}
          buttonClassName="p-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
          overlayClassName="fixed inset-0 z-50"
          activeItem={activeSection}
        />
      )}
    </main>
  )
}