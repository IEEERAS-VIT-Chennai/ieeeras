"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Carousel({ slides }) {

    const [curr, setCurr] = useState(0);

    const prev = () => {
        setCurr((current) => (current === 0 ? slides.length - 1 : current - 1));
    }

    const next = () => {
        setCurr((current) => (current === slides.length - 1 ? 0 : current + 1));
    }

    return (
        <div className="flex relative h-full sm:">
            <div className="inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="animate-pulse text-[#0073AE] hover:text-white hover:animate-none border-2 border-[#0073AE] md:p-1.5 md:pr-1 rounded-full">
                    <IoIosArrowBack size={40} />
                </button>
            </div>
            <div className="overflow-hidden max-w-[85%] m-auto">
                <div className={`flex flex-row transition w-full ease-out duration-500`} style={{ transform: `translateX(-${curr * 100}%)` }}>
                    {slides.map((slide) => {
                        return (
                            <div key={slide.name} className="md:flex md:flex-row sm:flex-col bg-[#001A28] min-w-full border-4 border-[#0073AE] rounded-2xl items-center">
                                <div className="w-[40%]">
                                    <Image src={slide.url} alt="pic" width={0} height={0} sizes="30vw" className="rounded-2xl" style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className="md:m-4 sm:m-2 w-[55%] min-h-full">
                                    <p className="text-4xl mt-3">{slide.name}</p>
                                    <p className="mt-12">{slide.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="inset-0 flex items-center justify-between p-4">
                <button onClick={next} className="animate-pulse text-[#0073AE] hover:text-white hover:animate-none border-2 border-[#0073AE] md:p-1.5 md:pr-1 rounded-full">
                    <IoIosArrowForward size={40} />
                </button>
            </div>
        </div>
    );
}