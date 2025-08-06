// "use client";
// import Image from "next/image";
// import { useState,useEffect } from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import { motion } from "framer-motion";

// export default function Carousel({ slides }) {

//     const [curr, setCurr] = useState(0);

//     const prev = () => {
//         setCurr((current) => (current === 0 ? slides.length - 1 : current - 1));
//     }

//     const next = () => {
//         setCurr((current) => (current === slides.length - 1 ? 0 : current + 1));
//     }

//     useEffect(() => {
//         const timer=setInterval(() => next(),8000);
//         return () => clearInterval(timer);
//     }, [curr]);

//     return (
//         <div className="flex relative h-full sm:">
//             <div className="inset-0 flex items-center justify-between p-4">
//                 <button onClick={prev} className="animate-pulse text-[#0073AE] hover:text-white hover:animate-none border-2 border-[#0073AE] md:p-1.5 md:pr-1 rounded-full">
//                     <IoIosArrowBack size={40} />
//                 </button>
//             </div>
//             <div className="overflow-hidden max-w-[85%] m-auto">
//                 <div className={`flex flex-row transition w-full ease-out duration-500`} style={{ transform: `translateX(-${curr * 100}%)` }}>
//                     {slides.map((slide) => {
//                         return (
//                             <div key={slide.name} className="md:flex md:flex-row sm:flex-col bg-[#001A28] min-w-full border-4 border-[#0073AE] rounded-2xl items-center">
//                                 <div className="w-[40%]">
//                                     <Image src={slide.url} alt="pic" width={0} height={0} sizes="30vw" className="rounded-2xl" style={{ width: '100%', height: '100%' }} />
//                                 </div>
//                                 <div className="md:m-4 sm:m-2 w-[55%] min-h-full">
//                                     {/* <p className="text-4xl mt-3">{slide.name}</p> */}
//                                     <p className="text-4xl font-extrabold mt-3 text-cyan-300 relative inline-block cursor-pointer transition duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_20px_#00ffc3] group">
//                                         {slide.name}
//                                         <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-[#0073AE] via-[#00ffc3] to-[#0073AE] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 rounded-full transition-all duration-300 pointer-events-none origin-left"
//                                      />
//                                     </p>
//                                     <p className="mt-12">{slide.desc}</p>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//             <div className="inset-0 flex items-center justify-between p-4">
//                 <button onClick={next} className="animate-pulse text-[#0073AE] hover:text-white hover:animate-none border-2 border-[#0073AE] md:p-1.5 md:pr-1 rounded-full">
//                     <IoIosArrowForward size={40} />
//                 </button>
//             </div>
//         </div>
//     );
// }




"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

export default function Carousel({ slides }) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const next = () => {
    setCurr((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => next(), 8000);
    return () => clearInterval(timer);
  }, [curr]);

  return (
    <div className="flex relative h-full w-full">
      {/* Left Arrow - responsive positioning */}
      <div className="flex items-center justify-start p-2 sm:p-3 md:p-4 z-10">
        <button
          onClick={prev}
          className="animate-pulse text-[#0073AE] hover:text-white hover:animate-none border-2 border-[#0073AE] hover:border-white p-1 sm:p-1.5 md:p-2 rounded-full transition-all duration-300 hover:bg-[#0073AE]/20"
        >
          <IoIosArrowBack className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </button>
      </div>

      {/* Carousel Content - responsive width and spacing */}
      <div className="overflow-hidden flex-1 mx-2 sm:mx-4 md:mx-6">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((slide) => {
            return (
              <a
                key={slide.name}
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-[3px] sm:p-[4px] md:p-[6px] bg-gradient-to-br from-blue-500 to-[#00ffc3] rounded-xl sm:rounded-2xl min-w-full transition-transform duration-300"
              >
                <div className="flex flex-col md:flex-row bg-[#001A28] rounded-xl sm:rounded-2xl items-center overflow-hidden">
                  {/* Image container - responsive sizing */}
                  <div className="w-full md:w-[40%] h-48 sm:h-56 md:h-64 lg:h-102">
                    <Image
                      src={slide.url}
                      alt={slide.name}
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                      priority
                    />
                  </div>

                  {/* Content container - responsive padding and spacing */}
                  <div className="w-full md:w-[60%] p-4 sm:p-6 md:p-8 flex flex-col justify-center min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-cyan-300 relative inline-block cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_20px_#00ffc3] group mb-4 sm:mb-6 md:mb-8">
                      {slide.name}
                      <span className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-0.5 sm:h-1 bg-gradient-to-r from-[#0073AE] via-[#00ffc3] to-[#0073AE] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 rounded-full transition-all duration-300 pointer-events-none origin-left" />
                    </h3>

                    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed line-clamp-4 sm:line-clamp-5 md:line-clamp-6">
                      {slide.desc}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Right Arrow - responsive positioning */}
      <div className="flex items-center justify-end p-2 sm:p-3 md:p-4 z-10">
        <button
          onClick={next}
          className="animate-pulse text-[#0073AE] hover:text-white hover:animate-none border-2 border-[#0073AE] hover:border-white p-1 sm:p-1.5 md:p-2 rounded-full transition-all duration-300 hover:bg-[#0073AE]/20"
        >
          <IoIosArrowForward className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </button>
      </div>
    </div>
  );
}
