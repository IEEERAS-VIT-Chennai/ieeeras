"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EventList, MainEvent } from "../data/EventList";
import { FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import EventCountdown from "./EventCountdown";
import './MagicCard.css';


const Events = () => {

	return (
		
		<div id="Events">
			<div className="py-10">
				{/* heading */}
				<div className="ml-[10%] mb-20 text-4xl sm:text-5xl lg:text-7xl">
				<p>
				<span className="text-white underline-offset-2">Upcoming </span>
				<span className="text-[#0073AE]">Events</span>
				<span className="text-white">.</span>
				</p>
				<hr className="w-[19%] md:w-[14%] lg:w-[16%] xl:w-[11%] mt-5 h-1 rounded-lg border-0 bg-[#0073AE]" />

				</div>
				{/* Main Event */}

				<div id="card" className="md:mt-14 mx-4 md:mx-20 ">
					
					{/* Event Details */}
					<div className="flex flex-col md:flex-row">
						{/* Image */}
						<div id="MainEventCard" className="md:w-2/5 relative ">
							<div className="absolute justify-center items-center pt-1 pb-2 px-4 rounded-b-sm flex flex-col bg-white left-8">
								<p className="text-black text-2xl font-medium">
									{MainEvent.event_date}
								</p>
								<p className="text-[#0073AE] text-xs font-medium">
									{MainEvent.event_month}
								</p>
							</div>
							<img
								src="assets/members/linefollower.png"
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
						{/* Details */}
						<div className="bg-[#001a28] text-white md:w-3/5 px-8 py-6 flex flex-col justify-between h-52 md:h-auto relative">
							{/* Countdown */}
							<div className="absolute z-10 -top-10 right-1.5 md:right-1/4">
								<EventCountdown eventDate="2024-01-01T00:00:00" />
							</div>
							<p className="text-3xl md:text-4xl">{MainEvent.event_name}</p>
							<div className="text-gray-400">
								<div className="text-sm flex  gap-3 items-center">
									<FaLocationDot color="#0073ae" />
									<p className="">{MainEvent.event_venue}</p>
								</div>
								<div className="text-sm flex  gap-3 items-center">
									<GoClockFill color="#0073ad" />
									<p className="">{MainEvent.event_time}</p>
								</div>
							</div>
							<button className="py-2 px-4 text-sm font-medium rounded-sm bg-[#0073ae] w-fit hover:bg-white hover:text-[#0073ae] duration-300">
								<a href={MainEvent.event_register_link} className="">
									Register now
								</a>
							</button>
						</div>
					</div>
				</div>
				{/*
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8 mt-4">
					{EventList.map((event, index) => (
						<motion.div
							className="w-full md:flex rounded-xl group "
							key={index}
						>
							<div className="md:w-1/2 relative">
								<div className="absolute justify-center items-center pt-1 pb-2 px-4 rounded-b-sm flex flex-col bg-white left-8">
									<p className="text-black text-xl md:text-2xl font-medium">
										{event.event_date}
									</p>
									<p className="text-[#0073AE] text-xs font-medium">
										{event.event_month}
									</p>
								</div>
								<img
									src={event.event_img}
									alt=""
									className="h-40 md:h-full w-full object-cover"
								/>
							</div>
							<div className="bg-[#001a28] text-white md:w-1/2 px-6 py-4 flex flex-col justify-between h-40 md:h-52">
								<p className="text-xl md:text-2xl mb-2">
									{event.event_name}
								</p>
								<div className="text-gray-400">
									<div className="text-sm flex gap-3 items-center">
										<FaLocationDot color="#0073ae" />
										<p className="">{event.event_venue}</p>
									</div>
									<div className="text-sm flex gap-3 items-center">
										<GoClockFill color="#0073ad" />
										<p className="">{event.event_time}</p>
									</div>
								</div>
								<button className="py-2 px-4 text-sm rounded-sm bg-[#0073ae] font-medium w-fit hover:bg-white hover:text-[#0073ae] duration-300">
									<a href={event.event_register_link} className="">
										Register now
									</a>
								</button>
							</div>
						</motion.div>
					))}
				</div>
				*/}
			</div>
			
		</div>
		
	);
};

export default Events;