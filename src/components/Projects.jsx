"use client";
import React, { useState } from "react";
import Carousel from "./Carousel";

const Projects = () => {
  let proj = [
    {
      name: "Project 1",
      url: "/assets/projects/project_name.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quis quam quo! Cupiditate aliquid necessitatibus quasi voluptates repellendus molestiae mollitia magnam possimus officiis."
    },
    {
      name: "Project 2",
      url: "/assets/projects/project_name.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quis quam quo! Cupiditate aliquid necessitatibus quasi voluptates repellendus molestiae mollitia magnam possimus officiis."
    },
    {
      name: "Project 3",
      url: "/assets/projects/project_name.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quis quam quo! Cupiditate aliquid necessitatibus quasi voluptates repellendus molestiae mollitia magnam possimus officiis."
    },
    {
      name: "Project 4",
      url: "/assets/projects/project_name.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quis quam quo! Cupiditate aliquid necessitatibus quasi voluptates repellendus molestiae mollitia magnam possimus officiis."
    },
  ];

  return (
    <div id="Projects" className="text-white sm:m-3 md:m-10">
      <div className="text-4xl sm:text-5xl lg:text-7xl ml-[8%]">
        <span className="text-white underline-offset-2">Projects </span>
      </div>
      <hr className="ml-[8%] w-[19%] md:w-[14%] lg:w-[16%] xl:w-[11%] mt-5 h-1 rounded-lg border-0 bg-[#0073AE] mb-[5%]" />
      <Carousel slides={proj} />
    </div>
  );
};

export default Projects;