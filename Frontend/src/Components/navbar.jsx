import React, { useEffect, useRef, useState } from "react";
import Contact from "./contact";

const Navbar = () => {
  const [hide, setHide] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const diff = current - lastScroll.current;

      if (diff > 25) setHide(true);
      if (diff < 0) setHide(false);

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-30 transition-transform duration-300 ${
        hide ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#541f03] h-10 w-full flex items-center justify-center gap-3 px-4">
        <p className="text-white text-xs sm:text-sm text-center">
          Location | Daily 10AM-10PM
        </p>
        <Contact />
      </div>

      {/* Navbar */}
      <div className="bg-[#fff99f] text-[#541f03] h-16 lg:h-[90px] flex items-center justify-between px-4 lg:px-14">

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-[17px]">
          <li><a href="/flavors">Flavors</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/event">Book an Event</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Logo */}
        <a href="/">
          <img
            src="https://static.wixstatic.com/media/84770f_71803fcfa2ce4fb59c425d59cf8c0e0a~mv2.png"
            alt="Gelato"
            className="h-5 w-auto lg:h-[25px]"
          />
        </a>

        {/* Login */}
        <a href="/login" className="flex items-center">
          <i className="fa-solid fa-circle-user text-xl"></i>
          <span className="hidden sm:inline ml-3">Log In</span>
        </a>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#fff99f] text-[#541f03]">
          <ul className="flex flex-col items-center py-4 gap-4">
            <li><a href="/flavors">Flavors</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/event">Book an Event</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;