"use client";

import React, { useState, useEffect } from "react";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  // State untuk melacak apakah halaman sudah digulir ke bawah
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Fungsi yang akan dipanggil saat event scroll terjadi
    const handleScroll = () => {
      // Jika posisi gulir Y (scrollY) lebih dari 50 piksel, set 'scrolled' menjadi true
      // Anda bisa mengubah '50' ini ke nilai yang Anda inginkan
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Tambahkan event listener untuk event 'scroll' pada objek window
    window.addEventListener("scroll", handleScroll);

    // Fungsi cleanup: Ini akan dijalankan saat komponen dilepas (unmount)
    // Penting untuk menghapus event listener agar tidak terjadi memory leak
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
    <div className={`sticky top-4 z-50 container mx-auto mt-4 ${scrolled ? "bg-[#F5EE84] shadow-lg" : "bg-transparent"} rounded-full`}>
      <nav className="mt-4 flex w-full items-center justify-center gap-10 rounded-full p-5 md:justify-between md:border-2 md:border-black md:shadow-xs">
        <h1 className="text-2xl font-bold text-[#03045E]">
          Raihan Fajar Ramadhan
        </h1>
        <div className="hidden justify-evenly gap-20 text-lg font-medium md:flex">
          <p>Home</p>
          <p>About</p>
          <p>Work</p>
        </div>
        <div className="hidden justify-evenly gap-10 md:flex">
          <a
            href="https://www.linkedin.com/in/raihan-fajar-ramadhan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImLinkedin size={30} />
          </a>
          <a
            href="https://www.instagram.com/fajar_raihan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.github.com/raihanfajar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
