'use client'
import React, { useRef, useEffect, useState } from 'react';
import { data } from '../constants/member_gallery';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const ImageBox = ({ member }) => (
  <div className="bg-[#000D13] sm:w-96 w-[1 3rem] h-fit border-[#0073AE] border shadow-lg shadow-[#0073AE]">
    <div className=" flex flex-row sm:gap-7 gap-5">
      <img src={member.img} className="w-1/3 h-full" />
      <div className="flex flex-col">
        <p className='text-white sm:text-3xl text-xl mt-2'>{member.name}</p>
        <p className='text-[#0073AE] sm:text-2xl text-lg mt-1'>{member.designation}</p>
        <div className="flex flex-row sm:text-3xl text-xl sm:mt-7 gap-4 mb-2">
          <button onClick={() => window.location.href = member.instagram}>
            <i className="fa fa-instagram text-[#0073AE] hover:text-white"></i>
          </button>
          <button onClick={() => window.location.href = member.twitter}>
            <i className="fa fa-twitter text-[#0073AE] hover:text-white"></i>
          </button>
          <button onClick={() => window.location.href = member.linkedin}>
            <i className="fa fa-linkedin text-[#0073AE] hover:text-white"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [increment, setIncrement] = useState(0);

  useEffect(() => {
    const updateIncrement = () => {
      setIncrement(window.innerWidth > 425 ? 4 : 2);
    };

    // Set initial increment value
    updateIncrement();

    // Event listener to update increment value on window resize
    window.addEventListener('resize', updateIncrement);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateIncrement);
    };
  }, []);

  const [style,setstyle] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIncrement(window.innerWidth > 425 ? 4 : 2);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const handleNext = () => {
    const zeroClass = 'transform -translate-x-[200%] duration-500 opacity-0';
    const initialClass = 'transform translate-x-[200%] duration-0 opacity-0';
    const finalClass = 'transform translate-x-0 transition-transform duration-500 ease-in-out';

  setstyle(zeroClass); // Apply initial class for the sliding animation

  setTimeout(() => {
    setstyle(initialClass);
  }, 100); 

  setCurrentIndex((prevIndex) => {
    const newIndex = prevIndex + increment;
    return newIndex >= data.length ? newIndex % data.length : newIndex;
  });

  // Apply final class after a small delay to initiate the transition
  setTimeout(() => {
    setstyle(finalClass);
  }, 200); // Adjust the delay as needed to ensure the transition occurs smoothly
};
  
  const handlePrev = () => {
    const zeroClass = 'transform translate-x-[200%] duration-500 opacity-0';
    const initialClass = 'transform -translate-x-[200%] duration-0 opacity-0';
    const finalClass = 'transform translate-x-0 transition-transform duration-500 ease-in-out';

    setstyle(zeroClass); // Apply initial class for the sliding animation

    setTimeout(() => {
      setstyle(initialClass);
    }, 100); 
  
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - increment;
      return newIndex < 0 ? data.length-1 : newIndex;
    });

     // Apply final class after a small delay to initiate the transition
  setTimeout(() => {
    setstyle(finalClass);
  }, 200); // Adjust the delay as needed to ensure the transition occurs smoothly
};

  return (
    <div className="flex flex-row justify-around sm:gap-7 gap-4 m-auto">
      <button
        onClick={handlePrev}
        className=" animate-pulse hover:animate-none bg-transparent text-[#0073AE] hover:text-white font-extrabold rounded-[50%] border border-[#0073AE] sm:h-1/2 h-1/3 w-auto sm:text-6xl text-3xl text-center sm:mt-36 mt-24"
      >
        <MdChevronLeft />
      </button>
      <div className={`hidden sm:flex sm:flex-col gap-4 ${style}`}>
        <div className='flex flex-row gap-4'>
          <ImageBox member={data[currentIndex]} /> 
          <ImageBox member={data[(currentIndex + 1) % data.length]} />
        </div>
        <div className=' flex flex-row gap-4'>
          <ImageBox member={data[(currentIndex + 2) % data.length]} /> 
          <ImageBox member={data[(currentIndex + 3) % data.length]} />
        </div>
      </div>
      <div className={`flex flex-col gap-2 sm:hidden ${style}`}>
        <ImageBox member={data[currentIndex]} /> 
        <ImageBox member={data[(currentIndex + 1) % data.length]} />
      </div>
      <button
        onClick={handleNext}
        className="  animate-pulse hover:animate-none bg-transparent text-[#0073AE] hover:text-white font-extrabold rounded-[50%] border border-[#0073AE] sm:h-1/2 h-1/3 w-auto sm:text-6xl text-3xl text-center sm:mt-36 mt-24"
      >
        <MdChevronRight />
      </button>
    </div>
  )
}

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