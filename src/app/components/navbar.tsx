import React from "react";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="sticky top-4 container mx-auto mt-4">
      <nav className=" mt-4 flex w-full items-center justify-center gap-10 rounded-full p-5 md:justify-between md:border-2 md:border-black md:shadow-xs">
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
