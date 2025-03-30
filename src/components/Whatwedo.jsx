"use client";
import React, { useEffect, useState } from "react";
import img1 from '../../public/assets/members/image1.png';


function WhatweDo() {
  return (
    <div id="About" className="py-20 flex lg:py-0 lg:h-screen overflow-y-hidden">
      <div className="absolute  -ml-60 w-80 h-80 bg-gradient-to-r from-[#1A2980] to-[#26D0CE] filter blur-[250px] rounded-full"></div>
      <div className="absolute left-[35%] top-[150%] w-[10%] h-60 -mt-60 bg-gradient-to-r from-[#F4C4F3] to-[#FFF] filter blur-[180px] rounded-full transform rotate-90"></div>

        <div className="absolute right-[10%] top-500 w-40 h-40 bg-gradient-to-r from-[#F4C4F3] to-[#FC67FA] filter blur-[150px] rounded-full"></div>
      <div id="image" className="flex-1 hidden lg:block">
        <img src="assets/members/robot.png" alt="" />
      </div>
    
      <div id="about" className="flex-1 lg:mt-[3%] px-0 lg:py-20">
      <div className="ml-[10%] text-4xl sm:text-5xl lg:text-7xl">
        <p>
        <span className="text-white underline-offset-2">What We </span>
        <span className="text-[#0073AE]">Do</span>
        <span className="text-white">.</span>
        </p>
        <hr className="w-[19%] md:w-[14%] lg:w-[16%] xl:w-[22%] mt-5 h-1 rounded-lg border-0 bg-[#0073AE]" />

      </div>
      <div className="content">
        <p className="text-white ml-[10%] mr-[10%] mt-5 sm:text-xl max-w-lg text-md">
        We regularly host workshops, seminars, and industrial visits that offer valuable
        insights into the ever-evolving world of robotics and automation. Through our outreach programs,
        we aim to inspire and educate our fellow students, fostering a pasnpsion for technology.
        But that&apos; not all - we&apos;re also about action! Our chapter actively promotes technical competitions
        that challenge our members&apos; creativity and problem-solving skills. We are proud to collaborate on
        funded projects related to electronics and IoT applications, pushing the boundaries of what&apos; possible
        in these fields.
        </p>
      </div>
      </div>
      
    </div>
    
  );
}

export default WhatweDo;