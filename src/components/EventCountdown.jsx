"use client"
import { useState, useEffect } from 'react';

const EventCountdown = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="flex gap-1 justify-center">
    
      <div className="bg-white px-1 py-1 rounded-md flex flex-col items-center justify-center w-16">
        <p className="text-black text-xl font-medium">{timeLeft.days || 0}</p>
        <p className=" text-xs font-normal text-gray-400">DAYS</p>
      </div>
      <div className="bg-white px-1 py-1 rounded-md flex flex-col items-center justify-center w-16">
        <p className="text-black text-xl font-medium">{timeLeft.hours || 0}</p>
        <p className=" text-xs font-normal text-gray-400">HOURS</p>
      </div>
      <div className="bg-white px-1 py-1 rounded-md flex flex-col items-center justify-center w-16">
        <p className="text-black text-xl font-medium">{timeLeft.minutes || 0}</p>
        <p className=" text-xs font-normal text-gray-400">MINUTES</p>
      </div>
      <div className="bg-white px-1 py-1 rounded-md flex flex-col items-center justify-center w-16">
        <p className="text-black text-xl font-medium">{timeLeft.seconds || 0}</p>
        <p className=" text-xs font-normal text-gray-400">SECONDS</p>
      </div>
    </div>
  );
};

export default EventCountdown;