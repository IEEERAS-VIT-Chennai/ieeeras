"use client";
import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

// Robot component
function RobotModel() {
  const group = useRef();
  const { scene } = useGLTF("/model/robot.glb");

  // Entry animation
  const { scale } = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    config: { tension: 120, friction: 25 },
  });

  // Cursor movement
  useFrame(({ mouse }) => {
    if (group.current) {
      group.current.rotation.y = mouse.x * 0.5;
      group.current.rotation.x = mouse.y * 0.2;
    }
  });

  return <a.group ref={group} scale={scale}><primitive object={scene} /></a.group>;
}

export default function AboutUs() {
  const robotWrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const contentOneRef = useRef(null);
  const contentTwoRef = useRef(null);
  const [introCompleted, setIntroCompleted] = useState(false);
  const playedIntro = useRef(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const introTimeline = gsap.timeline({
        paused: true,
        onComplete: () => {
          setTimeout(() => {
            window.scrollTo({
              top: sectionRef.current.offsetTop,
              behavior: "instant",
            });
            setIntroCompleted(true);
            document.body.style.overflow = "auto";
          }, 100);
        },
      });

      introTimeline
        .to(robotWrapperRef.current, {
          x: "70%",
          width: "600px",
          height: "800px",
          duration: 5,
          ease: "expo.in",
        })
        .fromTo(
          contentOneRef.current,
          { x: "100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1, ease: "power2.out", delay: 4 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        once: true,
        onEnter: () => {
          if (playedIntro.current) return;
          playedIntro.current = true;
          document.body.style.overflow = "hidden";
          introTimeline.play();
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!introCompleted || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "200% top",
          scrub: true,
          pin: true,
        },
      });

      scrollTimeline
        .to(robotWrapperRef.current, { x: "-70%", duration: 0.5 })
        .to(contentOneRef.current, { x: "-100%", opacity: 0, duration: 0.5 }, "<")
        .fromTo(
          contentTwoRef.current,
          { x: "-100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 0.5 },
          "<"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [introCompleted]);

  return (
    <div ref={sectionRef} className="relative w-screen h-screen">
      {/* Background Lights */}
      <div className="absolute left-[5%] top-0 w-80 h-80 -mt-60 bg-gradient-to-r from-[#F4C4F3] to-[#FC67FA] filter blur-[150px] rounded-full" />
      <div className="absolute left-[20%] top-0 w-80 h-80 -mt-60 bg-gradient-to-r from-[#1A2980] to-[#26D0CE] filter blur-[150px] rounded-full" />
      <div className="absolute left-[0%] -ml-40 bottom-10 w-40 h-40 bg-white filter blur-[190px]" />
      <div className="absolute right-[10%] w-40 h-40 bg-gradient-to-r from-[#F4C4F3] to-[#FC67FA] filter blur-[180px] rounded-full" />
      <div className="absolute right-[10%] w-40 h-40 bg-white filter blur-[200px]" />
      <div className="absolute left-[20%] top-0 w-50 h-80 -mt-60 bg-white filter blur-[90px]" />

      {/* 3D Robot Model */}
      <motion.div
        ref={robotWrapperRef}
        initial={false}
        className="z-20 absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 max-md:hidden w-[100vw] h-[200vh]"
      >
        <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <RobotModel />
          </Suspense>
        </Canvas>
      </motion.div>

      {/* First Content */}
      <div
        ref={contentOneRef}
        className="absolute left-0 top-0 w-full h-full flex items-center justify-start pl-[10%] opacity-0"
      >
        <div className="text-white max-w-xl">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-sans mb-6">
            <span className="text-[#0073AE]">R</span>obotics & <br />
            <span className="text-[#0073AE]">A</span>utomation <br />
            <span className="text-[#0073AE]">S</span>ociety
          </h1>
          <p className="text-lg sm:text-xl">
            The IEEE Robotics and Automation Society (RAS) VITC Student Chapter.
            Our vibrant community comprises multidisciplinary enthusiasts with a
            passion for robotics and automation.
          </p>
        </div>
      </div>

      {/* Second Content */}
      <div
        ref={contentTwoRef}
        className="absolute left-0 top-0 w-full h-full flex items-center justify-end px-[10%] opacity-0"
      >
        <div className="text-white max-w-xl text-right">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6">
            <span className="text-white">What We </span>
            <span className="text-[#0073AE]">Do</span>.
          </h1>
          <hr className="ml-auto w-[60%] mt-2 mb-4 h-1 rounded-lg border-0 bg-[#0073AE]" />
          <p className="text-lg sm:text-xl">
            We conduct workshops, seminars, industrial visits, and competitions.
            We also develop IoT and electronics projects to innovate and inspire.
          </p>
        </div>
      </div>
    </div>
  );
}
