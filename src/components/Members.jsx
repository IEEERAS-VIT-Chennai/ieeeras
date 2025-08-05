'use client'
import React, { useRef, useEffect, useState } from 'react';
import { data } from '../constants/member_gallery';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { motion } from 'framer-motion';
import { AnimatePresence} from 'framer-motion';



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
        {member.twitter && (
          <a
            href={member.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0073AE] hover:text-white transition-all duration-300"
          >
            <i className="fa fa-twitter" />
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const visibleCount = 4;
  const totalPages = Math.ceil(data.length / visibleCount);

  
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + visibleCount) % data.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  
  const containerRef = useRef(null);
  useEffect(() => {
    const handleWheel = () => {
      if (e.deltaY > 0) {
        setCurrentIndex((prev) => (prev + visibleCount) % data.length);
      } else {
        setCurrentIndex((prev) =>
          (prev - visibleCount + data.length) % data.length
        );
      }
    };
    const node = containerRef.current;
    if (node) node.addEventListener("wheel", handleWheel);
    return () => node?.removeEventListener("wheel", handleWheel);
  }, []);

  
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
      setCurrentIndex((prev) => (prev + visibleCount) % data.length);
    } else if (endX > startX + 50) {
      setCurrentIndex((prev) =>
        (prev - visibleCount + data.length) % data.length
      );
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
}, []);



  
  const visibleMembers = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleMembers.push(data[(currentIndex + i) % data.length]);
  }

  
  const renderDots = () =>
    Array.from({ length: totalPages }, (_, i) => {
      const isActive = currentIndex / visibleCount === i;
      return (
        <button
          key={i}
          onClick={() => setCurrentIndex(i * visibleCount)}
          className={`h-3 w-3 mx-1 rounded-full ${
            isActive ? 'bg-[#00B4D8]' : 'bg-gray-500'
          }`}
        />
      );
    });

  return (
    
    <div
      ref={containerRef}
      className="relative w-full max-w-7xl mx-auto px-4 h-auto flex flex-col items-center justify-center gap-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {visibleMembers.map((member) => (
            <ImageBox key={member.name} member={member} />
          ))}
        </motion.div>
      </AnimatePresence>

      
     <div className="flex justify-center mt-8 gap-3">
  {Array.from({ length: Math.ceil(data.length / visibleCount) }).map((_, idx) => (
    <button
      key={idx}
      onClick={() => setCurrentIndex(idx * visibleCount)}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        currentIndex === idx * visibleCount
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
    <div id="Team" className="py-20 lg:py-0 lg:h-screen overflow-y-hidden ">
      <div className="absolute left-[15%] top-[340%] w-[30%] h-60 -mt-60 bg-gradient-to-r from-[#1A2980] to-[#26D0CE] filter blur-[250px] rounded-full transform rotate-90"></div>
      <div className="absolute left-[15%] top-[340%] w-[10%] h-60 -mt-60 bg-gradient-to-r from-[#F4C4F3] to-[#FC67FA] filter blur-[150px] rounded-full transform rotate-90"></div>

      <div className="text-4xl sm:text-5xl lg:text-7xl ml-[10%]">
        <span className="text-white underline-offset-2">Meet the </span>
        <span className="text-[#0073AE]">Team</span>
        <span className="text-white">.</span>
      </div>
      <hr className="ml-[10%] w-[19%] md:w-[14%] lg:w-[16%] xl:w-[11%] mt-5 h-1 rounded-lg border-0 bg-[#0073AE]" />
      <div className="mt-[10%] flex flex-wrap justify-center gap-7">
        <Slider />
      </div>
    </div>
  );
}

export default Members;