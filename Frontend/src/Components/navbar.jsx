import React from 'react'
import { useEffect, useRef, useState } from "react";
import Contact from './contact'

const navbar = () => {
    const [hide, setHide] = useState(false);
    const lastScroll = useRef(0);

      useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const diff = current - lastScroll.current;

      // Hide only when scrolling down quickly
      if (diff > 25) {
        setHide(true);
      }

      // Show when scrolling up
      if (diff < 0) {
        setHide(false);
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={`sticky top-0 z-30 transition-transform duration-300 ${
          hide ? "-translate-y-full" : "translate-y-0"
          }`}>
      <div className='flex'>
        <div className='bg-[#541f03]  h-[40px] w-full flex justify-center place-items-center gap-6'>
        <pre className='text-white'>Location  |  Daily 10AM-10PM</pre>
        <Contact/>
      </div>
      </div>


        <div className='flex h-[90px] w-full bg-[#fff99f] text-[#541f03] text-[17.5px] justify-between place-items-center px-14'>
          <div>
            <ul className='flex justify-center place-items-center gap-4'>
              <li><a href="/flavors">Flavors</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/event">Book an Event</a></li>
           </ul>
          </div>
          <div className=''>
            <a href="/"><img src="https://static.wixstatic.com/media/84770f_71803fcfa2ce4fb59c425d59cf8c0e0a~mv2.png" alt="Gelato" className='h-[25px] w-[94px]' /></a>
          </div>
          
          <div>
            <a href="/login">
              <i className="fa-solid fa-circle-user"></i>
              <span className='m-3'>Log In</span>
            </a>
          </div>
      </div>
      
      
    </div>
  )
}

export default navbar