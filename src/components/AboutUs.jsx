"use client";
import React, { useEffect, useState } from "react";
import Spline from '@splinetool/react-spline';
//import gsap from "gsap";


function Aboutus() {
 
  return (
    <div id="parent" className="flex lg:h-screen overflow-y-hidden">
      
      <div className="absolute left-[5%] top-0 w-80 h-80 -mt-60 bg-gradient-to-r from-[#F4C4F3] to-[#FC67FA] filter blur-[150px] rounded-full "></div>
      <div className="absolute left-[20%] top-0 w-80 h-80 -mt-60 bg-gradient-to-r from-[#1A2980] to-[#26D0CE] filter blur-[150px] rounded-full"></div>
      <div className="absolute left-[0%] -ml-40 bottom-10 w-40 h-40 bg-white filter blur-[190px]"></div>
      <div className="absolute right-[10%] top-500 w-40 h-40 bg-gradient-to-r from-[#F4C4F3] to-[#FC67FA] filter blur-[180px] rounded-full "></div>
      <div className="absolute right-[10%] top-500 w-40 h-40 bg-white filter blur-[200px]"></div>
      <div className="absolute left-[20%] top-0 w-50 h-80 -mt-60 bg-white filter blur-[90px]"></div>

    

      <div id="about" className="flex-1 mt-[3%] lg:px-20">
      <div className="text-5xl sm:text-6xl lg:text-8xl ml-[10%] font-sans">
        <p>
          <span className="text-[#0073AE]">R</span>
          <span className="text-white underline-offset-2">obotics &#38;</span>
        </p>
        <p>
          <span className="text-[#0073AE]">A</span>
          <span className="text-white underline-offset-2">utomation </span>
        </p>
        <p>
          <span className="text-[#0073AE]">S</span>
          <span className="text-white underline-offset-2">ociety </span>
        </p>
      </div>
      <div className="content">
        <p className="text-white ml-[10%] mr-[10%] mt-5 sm:text-xl max-w-lg text-md">
          The IEEE Robotics and Automation Society (RAS) VITC Student Chapter. Our
          vibrant community comprises a diverse group of multidisciplinary and
          technical enthusiasts with a common passion for robotics and
          automation. Our primary mission is to champion automation&apos;s
          practical and innovative applications on a global scale. To achieve
          this, our chapter is dedicated to organizing an array of enriching
          activities.
        </p>
      </div>
      </div>
      <div id="spline" className="flex-1 hidden lg:block">
      <Spline scene="https://prod.spline.design/hTBdKuo3YI8fh7UK/scene.splinecode" />
      </div>
    </div>
  );
}

export default Aboutus;

// export default function Aboutus() {
//   return (
//     <div className="max-w-8xl py-6 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 bg-transparent">
//       <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl bg-gradient-to-br from-[#FFFFFF] to-[#FFBA86] bg-clip-text text-transparent drop-shadow-lg">About Us</h1>
//       <p className="space-y-6 text-slate-400">
//         We are the heartbeat of innovation at VIT University Chennai Campus – the IEEE Robotics
//         and Automation Society (RAS) Student Chapter. Our vibrant community comprises a diverse
//         group of multidisciplinary and technical enthusiasts with a common passion for robotics
//         and automation.
//         Our primary mission is to champion automation&apos;s practical and innovative applications on
//         a global scale. To achieve this, our chapter is dedicated to organizing an array of enriching
//         activities.
//       </p>
//       <h2 className="text-2xl tracking-tight font-extrabold sm:text-4xl bg-gradient-to-br from-[#FFFFFF] to-[#FFBA86] bg-clip-text text-transparent drop-shadow-lg">What we do</h2>
//       <p className="space-y-6 text-slate-400">
//         We regularly host workshops, seminars, and industrial visits that offer valuable
//         insights into the ever-evolving world of robotics and automation. Through our outreach programs,
//         we aim to inspire and educate our fellow students, fostering a passion for technology.
//         But that&apos; not all – we&apos;re also about action! Our chapter actively promotes technical competitions
//         that challenge our members&apos; creativity and problem-solving skills. We are proud to collaborate on
//         funded projects related to electronics and IoT applications, pushing the boundaries of what&apos; possible
//         in these fields.
//       </p>
//         <p className="space-y-6 text-slate-400">
//         If you share our enthusiasm for robotics and automation or have exciting ideas to explore,
//         we invite you to connect with us. Let&apos; collaborate, innovate, and shape the future of technology
//         together.
//         Feel free to reach out to us with your thoughts, ideas, or questions.
//         We&apos;re always excited to welcome new minds into our community.
//         </p>
//     </div>
//   )
// }