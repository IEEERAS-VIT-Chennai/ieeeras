"use client";
import React, { useState } from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

const Projects = () => {
  let proj = [
    {
      name: "Line Follower Robot",
      url: "/assets/projects/linefollower.jpg",
      desc: "A line follower robot is an autonomous robot that follows a specific path, usually a black line on a white surface. It uses infrared sensors to detect the line and adjust its movement accordingly. The robot continuously scans the path and makes real-time decisions to stay on track. It's often used to demonstrate concepts of automation, control systems, and robotics. consectetur, adipisicing elit. Nesciunt quis quam quo! Cupiditate aliquid necessitatibus quasi voluptates repellendus molestiae mollitia magnam possimus officiis."
    },
    {
      name: "Hospital Locator & Navigator",
      url: "/assets/projects/hospital.png",
      desc: "The Real-Time Hospital Locator and Navigation System is a web-based tool designed to quickly identify nearby hospitals and provide the shortest route from a user-defined location. Unlike general-purpose platforms like Google Maps, it is optimized specifically for medical emergencies, offering a fast, focused, and user-friendly interface to assist during critical situations.",
      link: "https://github.com/Joevkadavan/GPS-TRACKER"
    },
    {
      name: "Heart Disease Risk Prediction App",
      url: "/assets/projects/heart.png",
      desc: "This application is a machine learning-based diagnostic tool designed to predict the likelihood of heart disease by analyzing various clinical parameters provided by the user, such as age, blood pressure, cholesterol levels, and other relevant health indicators.  ",
      link: "https://github.com/NikhilBansalv/Heart_disease_risk_app.git"
    },
    {
      name: "Document summarizer",
      url: "/assets/projects/document.jpg",
      desc: "This project is a simple document summarizer that takes long pieces of text and generates short, clear summaries. It uses natural language processing techniques to understand the main ideas and present them in a concise format. The tool helps users save time and quickly grasp the key points of any document.",
      link: "https://github.com/muralikrishnan2022/IEEERAS_TEAM_3"
    },
  ];

  //   return (
  //     <div id="Projects" className="text-white sm:m-3 md:m-10 hover:text-white">
  //       <div className="text-4xl sm:text-5xl lg:text-7xl ml-[8%]">
  //         <span className="text-white underline-offset-2 " >Projects </span>
  //       </div>
  //       <hr className="ml-[8%] w-[19%] md:w-[14%] lg:w-[16%] xl:w-[11%] mt-5 h-1 rounded-lg border-0 bg-[#0073AE] mb-[5%]" />
  //       <Carousel slides={proj} />
  //     </div>
  //   );
  // };

  return (
    <motion.div
      id="Projects"
      className="text-white relative px-4 sm:px-6 md:px-8 lg:px-10 py-10 lg:py-16 min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Background glow effect - responsive positioning */}
      <div className="absolute -top-10 sm:-top-16 md:-top-20 -left-10 sm:-left-16 md:-left-20 w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] bg-gradient-to-br from-[#0073AE] to-[#00ffc3] rounded-full blur-3xl opacity-30 z-0"></div>

      {/* Header section with better responsive margins */}
      <div className="relative z-10 mb-8 sm:mb-10 md:mb-12">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ml-[4%] sm:ml-[6%] md:ml-[8%]">
          <span className="text-white underline-offset-2 inline-block cursor-pointer transition duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_20px_#00ffc3] group">
            Projects
          </span>
        </div>

        {/* Responsive horizontal rule */}
        <hr className="ml-[4%] sm:ml-[6%] md:ml-[8%] w-[25%] sm:w-[20%] md:w-[16%] lg:w-[14%] xl:w-[11%] mt-3 sm:mt-4 md:mt-5 h-1 rounded-lg border-0 bg-[#0073AE] z-10 relative" />
      </div>

      {/* Carousel container with responsive padding */}
      <div className="relative z-10 px-2 sm:px-4 md:px-6">
        <Carousel slides={proj} />
      </div>

      {/* Additional decorative background elements for larger screens */}
      <div className="hidden lg:block absolute right-[10%] top-[60%] w-[8%] h-40 bg-gradient-to-r from-[#0073AE] to-[#00ffc3] filter blur-[120px] rounded-full opacity-20 z-0"></div>
    </motion.div>
  );
};


export default Projects;