'use client'
import React, { useRef, useEffect, useState } from 'react';
import { teamData } from '../constants/member_gallery';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';



const ImageBox = ({ member }) => {
  const [isTouched, setIsTouched] = useState(false);


  const baseAnimation = {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  };

  const touchAnimation = isTouched
    ? {
      scale: 1.05,
      boxShadow: '0 0 20px #00B4D8',
    }
    : {};

  const combinedAnimation = { ...baseAnimation, ...touchAnimation };

  return (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, scale: 0.8, filter: 'blur(4px)' }}
      animate={combinedAnimation}
      exit={{ opacity: 0, scale: 1.2, filter: 'blur(4px)' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 20px #00B4D8',
      }}
      onTouchStart={() => {
        setIsTouched(true);
        setTimeout(() => setIsTouched(false), 1000);
      }}
      className="group bg-gradient-to-br from-[#001d2e] to-[#000D13] w-full max-w-lg mx-auto p-6 rounded-3xl border border-[#00B4D8] transition-all duration-300 shadow-[0_0_25px_#00B4D855] flex flex-col items-center gap-4 hover:shadow-[0_0_35px_#00B4D8aa]"
    >
      <motion.img
        src={member.img}
        alt={member.name}
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#0073AE] object-cover shadow-lg group-hover:rotate-[3deg] transition-transform duration-300"
      />
      <motion.div className="text-center">
        <motion.h2
          className="text-white text-3xl font-bold"
          whileHover={{ opacity: 1, y: -2 }}
          animate={isTouched ? { opacity: 1, y: -2 } : {}}
          transition={{ duration: 0.3 }}
        >
          {member.name}
        </motion.h2>
        <motion.p
          className="text-[#00B4D8] text-xl"
          whileHover={{ opacity: 1, y: 2 }}
          animate={isTouched ? { opacity: 1, y: 2 } : {}}
          transition={{ duration: 0.3 }}
        >
          {member.designation}
        </motion.p>
      </motion.div>
      <motion.div
        className="flex gap-6 text-2xl mt-4"
        whileHover={{ scale: 1.1 }}
        animate={isTouched ? { scale: 1.1 } : {}}
        transition={{ duration: 0.3 }}
      >
        {member.instagram && (
          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0073AE] hover:text-white transition-all duration-300"
          >
            <i className="fa fa-instagram" />
          </a>
        )}

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0073AE] hover:text-white transition-all duration-300"
          >
            <i className="fa fa-linkedin" />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};



const Slider = () => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Convert teamData to array for easier iteration
  const teams = Object.values(teamData);
  const totalTeams = teams.length;
  const currentTeam = teams[currentTeamIndex];

  // Get responsive grid classes based on team size
  const getGridClasses = (teamSize) => {
    if (teamSize === 1) return "grid grid-cols-1 gap-6 w-full justify-items-center";
    if (teamSize === 2) return "grid grid-cols-1 sm:grid-cols-2 gap-6 w-full";
    if (teamSize === 3) return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full";
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full";
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentTeamIndex((prevIndex) => (prevIndex + 1) % totalTeams);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, totalTeams]);

  const containerRef = useRef(null);

  useEffect(() => {
    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      endX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (endX < startX - 50) {
        setCurrentTeamIndex((prev) => (prev + 1) % totalTeams);
      } else if (endX > startX + 50) {
        setCurrentTeamIndex((prev) => (prev - 1 + totalTeams) % totalTeams);
      }
    };

    const node = containerRef.current;
    if (node) {
      node.addEventListener("touchstart", handleTouchStart, { passive: true });
      node.addEventListener("touchmove", handleTouchMove, { passive: true });
      node.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    return () => {
      if (node) {
        node.removeEventListener("touchstart", handleTouchStart);
        node.removeEventListener("touchmove", handleTouchMove);
        node.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [totalTeams]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-7xl mx-auto px-4 h-auto flex flex-col items-center justify-center gap-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Team Name Header */}
      <motion.div
        key={`header-${currentTeamIndex}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4"
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0073AE] mb-2">
          {currentTeam.teamName}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-[#0073AE] to-[#00ffc3] mx-auto rounded-full"></div>
      </motion.div>

      {/* Team Members Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTeamIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={getGridClasses(currentTeam.members.length)}
        >
          {currentTeam.members.map((member) => (
            <ImageBox key={member.id} member={member} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 gap-4 p-4">
        {teams.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentTeamIndex(idx)}
            className={`lg:w-5 lg:h-5 rounded-full transition-all duration-300 ${currentTeamIndex === idx
                ? 'bg-[#0073AE] scale-110 shadow-md'
                : 'bg-gray-500 hover:bg-[#0073AE]'
              }`}
          />
        ))}
      </div>

      
    </div>
  );
};



const Members = () => {
  return (
    <div id="Team" className="py-20 lg:py-0 lg:h-screen overflow-y-hidden relative">

      {/* Header section with responsive margins and animations */}
      <div className="relative z-10 mb-6 sm:mb-8 md:mb-10 mt-11">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ml-[4%] sm:ml-[6%] md:ml-[8%] lg:ml-[10%]">
          <span className="text-white underline-offset-2 inline-block cursor-pointer transition duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_20px_#00ffc3] group">Meet the    </span>
          <span className="text-[#0073AE] inline-block cursor-pointer transition duration-300 hover:scale-110 hover:text-[#00ffc3] hover:drop-shadow-[0_0_20px_#0073AE] group">Team</span>
          <span className="text-white">.</span>
        </div>
        <hr className="ml-[4%] sm:ml-[6%] md:ml-[8%] lg:ml-[10%] w-[25%] sm:w-[20%] md:w-[16%] lg:w-[14%] xl:w-[11%] mt-3 sm:mt-4 md:mt-5 h-1 rounded-lg border-0 bg-[#0073AE]" />
      </div>

      {/* Slider container with responsive spacing */}
      <div className="relative z-10 mt-[8%] sm:mt-[9%] md:mt-[10%] flex flex-wrap justify-center gap-7">
        <Slider />
      </div>
    </div>
  );
}

export default Members;