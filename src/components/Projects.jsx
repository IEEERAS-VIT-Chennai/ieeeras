"use client";
import React, { useState } from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

const Projects = () => {
  let proj = [
    {
      name: "Line Follower Robot",
      url: "/assets/projects/project_name.jpg",
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

  return (<motion.div
      id="Projects"
      className="text-white sm:m-3 md:m-10 hover:text-white relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-gradient-to-br from-[#0073AE] to-[#00ffc3] rounded-full blur-3xl opacity-30 z-0"></div>

      <div className="text-4xl sm:text-5xl lg:text-7xl ml-[8%]">
        <span className="text-white underline-offset-2 inline-block cursor-pointer transition duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_20px_#00ffc3] group ">Projects</span>
      </div>

      <hr className="ml-[8%] w-[19%] md:w-[14%] lg:w-[16%] xl:w-[11%] mt-5 h-1 rounded-lg border-0 bg-[#0073AE] mb-[5%] z-10 relative" />

      <Carousel slides={proj} />
    </motion.div>
  );
};


export default Projects;