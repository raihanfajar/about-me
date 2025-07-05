"use client";

import React, { useState, useEffect } from "react";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-5 z-50 w-full bg-transparent">
      <div
        className={`mx-auto mt-4 w-[95%] rounded-full  lg:px-6 transition-all duration-300 ${
          scrolled ? "bg-[#F5EE84] shadow-md" : ""
        }  border-2 border-black`}
      >
        <nav
          className={`flex flex-col items-center justify-center gap-3 rounded-full py-4 md:flex-row md:justify-between md:px-8 md:py-5`}
        >
          <h1 className="text-center text-xl font-bold text-[#03045E] md:text-2xl">
            Raihan Fajar Ramadhan
          </h1>

          <div className="hidden gap-8 text-lg font-medium md:flex">
            <p className="font-semibold cursor-pointer">Home</p>
            <p className="font-semibold cursor-pointer">About</p>
            <p className="font-semibold cursor-pointer">Work</p>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href="https://www.linkedin.com/in/raihan-fajar-ramadhan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <ImLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/fajar_raihan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.github.com/raihanfajar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
