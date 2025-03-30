"use client";
import React, { useState, useEffect, useRef } from 'react';

const FadingText = () => {
 const [index, setIndex] = useState(0);
 const words = ['think', 'create', 'learn'];

 const intervalIdRef = useRef();

 useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => {
      clearInterval(intervalIdRef.current);
    };
 }, []);

 return (
    <div>
      {words[index]}
    </div>
 );
};
export default FadingText;