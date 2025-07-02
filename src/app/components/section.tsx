"use client";
import React from "react";
import Image from "next/image";
import { FaReact, FaLightbulb } from "react-icons/fa";
import { LuBookUp } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { motion } from "framer-motion";

const Section = () => {
  return (
    <>
      <section className="container mx-auto gap-20 px-10">
        {/* HERO */}
        <div
          className="mt-6 mb-5 flex h-auto w-full flex-col-reverse items-center justify-center gap-10 md:mb-20 lg:mt-24 lg:flex-row"
          id="hero"
        >
          {/* TULISAN */}
          <div className="flex flex-col text-[#03045E]">
            <p className="text-xl font-bold md:text-2xl">Hi, I'm Fajar,</p>
            <span className="mt-2 text-5xl font-extrabold md:mt-4 md:text-8xl">
              {" "}
              WEB
            </span>
            <span className="mt-0 text-5xl font-extrabold md:mt-0 md:text-8xl">
              {" "}
              {/* KUNCI: Ubah mt-2 dan md:mt-4 menjadi mt-0 dan md:mt-0 */}
              DEVELOPER
            </span>
            <p className="mb-5 text-base md:text-xl">based in Jakarta</p>
            <a
              href="https://drive.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my Resume"
              className="mb-5 h-auto w-25"
            >
              <div className="relative h-14 w-30">
                <div className="absolute top-0 left-0 z-2 flex h-full w-full items-center justify-center rounded-xl border-2 border-[#474306]">
                  {" "}
                  Resume
                </div>
                <div className="absolute top-2 left-2 z-1 h-full w-full rounded-xl bg-[#F5EE84]"></div>
              </div>
            </a>
          </div>

          {/* FOTO */}

          <div className="mb-5 flex h-auto w-full items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="flex h-full w-full items-center justify-center"
            >
              <div className="relative flex aspect-square h-auto max-h-[350px] w-full max-w-[350px] items-center justify-center p-7 md:h-[450px] md:w-[450px]">
                {/* Tanda +++ */}
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-1">
                  <div className="relative h-5 w-5">
                    <div className="absolute top-1/2 left-1/2 h-[3px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#474306]"></div>
                    <div className="absolute top-1/2 left-1/2 h-full w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#474306]"></div>
                  </div>
                  <div className="relative ml-5 h-5 w-5">
                    {" "}
                    <div className="absolute top-1/2 left-1/2 h-[3px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#474306]"></div>
                    <div className="absolute top-1/2 left-1/2 h-full w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#474306]"></div>
                  </div>
                </div>

                {/* Tanda //// */}
                <div className="absolute bottom-8 left-8 z-10 rotate-[30deg] text-3xl font-bold text-[#474306]">
                  ////
                </div>

                <div className="absolute top-0 left-0 z-1 aspect-square h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/pajar.jpg"
                    alt="Profile Picture"
                    fill={true}
                    objectFit="cover"
                  />
                </div>
                <div className="absolute top-3 left-[-5px] z-2 h-full w-full rounded-full border-3 border-[#474306]"></div>
              </div>
            </motion.div>
          </div>

          {/* END OF PHOTO */}
        </div>
        <div className="text-md text-justify text-[#03045E] md:text-lg xl:w-[50%]">
          <motion.p
            initial={{ opacity: 0, y: 20 }} // Mulai dari tak terlihat dan sedikit ke bawah
            animate={{ opacity: 1, y: 0 }} // Animasi ke terlihat dan posisi normal
            transition={{ duration: 0.6, delay: 0.2 }} // Durasi dan delay animasi
          >
            Hello! I'm Raihan Fajar Ramadhan, a passionate Full-Stack Web
            Developer with a year of experience. I specialize in crafting
            responsive web apps using React, Next.js, and Tailwind CSS. Always
            keen on learning and seeking new challenges.
          </motion.p>
        </div>
        {/* END OF HERO */}

        {/* ABOUT */}
        <div className="mt-60 w-full" id="about">
          <h1 className="mb-10 text-6xl font-bold text-[#03045E]"> about. </h1>
          <p className="text-justify text-lg text-[#03045E] xl:w-[50%]">
            I'm an Informatics graduate who further specialized in web
            development at Purwadhika Digital School. Drawn to web's unique
            blend of logic and boundless creativity, I thrive on building
            dynamic applications. My hands-on experience includes developing
            this portfolio website and a comprehensive company profile site
            featuring a functional blog creation platform.
          </p>

          <div className="mt-15 w-full">
            <motion.div
              initial={{
                opacity: 0,
                x: -100, // Atur posisi awal dari kiri (misalnya -100px atau -10vw)
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in ke posisi aslinya
                transition: {
                  duration: 1, // Durasi animasi masuk
                  ease: "easeOut", // Transisi yang lebih mulus untuk sliding
                },
              }}
            >
              <div className="flex items-center gap-5 md:gap-10">
                <div
                  className="h-0 w-0 border-t-[30px] border-b-[30px] border-l-[60px] border-t-transparent border-b-transparent border-l-[#474306] md:border-t-[50px] md:border-b-[50px] md:border-l-[100px]"
                  style={{
                    filter: "drop-shadow(5px 10px 5px rgba(71, 67, 6, 0.4))",
                  }}
                ></div>
                <div className="text-[#03045E]">
                  <h1 className="text-xl font-semibold">
                    {" "}
                    Purwadhika Digital School{" "}
                  </h1>
                  <h1 className="text-lg font-semibold"> 2025 </h1>
                  <p className="text-md text-justify">
                    {" "}
                    At Purwadhika Digital School, I completed the Full-Stack Web
                    Development program, mastering technologies like React,
                    Next.js, HTML, CSS, and PostgreSQL. Through intensive
                    practical training, including mini-projects and a final
                    capstone, Purwadhika effectively bridged the gap between
                    theory and industry, equipping me with job-ready skills.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 100, // Atur posisi awal dari kiri (misalnya -100px atau -10vw)
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in ke posisi aslinya
                transition: {
                  duration: 1, // Durasi animasi masuk
                  ease: "easeOut", // Transisi yang lebih mulus untuk sliding
                },
              }}
            >
            <div className="mt-20 flex items-center gap-5 md:gap-10">
              <div className="text-[#03045E]">
                <h1 className="text-xl font-semibold md:text-right">
                  {" "}
                  Ahmad Dahlan University{" "}
                </h1>
                <h1 className="text-lg font-semibold md:text-right">
                  {" "}
                  2020 - 2025{" "}
                </h1>
                <p className="text-md text-justify">
                  {" "}
                  I graduated from Ahmad Dahlan University with a GPA of 3.78 in
                  Informatics, where I developed a strong interest in web
                  development. A significant part of my learning involved a
                  real-world project in the MPTI course, where I led a team to
                  build a photographer's portfolio website. This experience
                  further honed my problem-solving, teamwork, and critical
                  thinking skills
                </p>
              </div>
              <div
                className="h-0 w-0 border-t-[30px] border-r-[60px] border-b-[30px] border-t-transparent border-r-[#474306] border-b-transparent md:border-t-[50px] md:border-r-[100px] md:border-b-[50px]"
                style={{
                  filter: "drop-shadow(5px 10px 5px rgba(71, 67, 6, 0.4))",
                }}
              ></div>
            </div>
            </motion.div>
          </div>

          <div className="mt-20 flex flex-col items-center justify-evenly xl:flex-row">
            <div className="mb-10 flex w-full items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity, // Ulangi animasi tanpa henti
                  duration: 2, // Satu putaran dalam 2 detik
                  ease: "linear", // Kecepatan putaran konstan
                }}
              >
                <FaReact className="text-[100px]" />
              </motion.div>
            </div>
            <div className="flex w-full items-center justify-center">
              <div className="rounded-xl border-2 border-[#474306] p-5">
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3 text-lg font-medium">
                    <FaLightbulb className="text-2xl text-[#03045E]" />
                    <span>Passion & Creativity</span>
                  </li>
                  <li className="flex items-center gap-3 text-lg font-medium">
                    <LuBookUp className="text-2xl text-[#03045E]" />
                    <span>Continuous Learning</span>
                  </li>
                  <li className="flex items-center gap-3 text-lg font-medium">
                    <RiTeamFill className="text-2xl text-[#03045E]" />
                    <span>Collaboration & Leadership</span>
                  </li>
                  <li className="flex items-center gap-3 text-lg font-medium">
                    <IoSearch className="text-2xl text-[#03045E]" />
                    <span>Attention to Detail & Timeliness</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-10 flex w-full items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity, // Ulangi animasi tanpa henti
                  duration: 2, // Satu putaran dalam 2 detik
                  ease: "linear", // Kecepatan putaran konstan
                }}
              >
                <FaReact className="text-[100px]" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
