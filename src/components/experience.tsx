"use client";
import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section className="container mx-auto mt-50 px-10 md:mt-65">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-10 text-2xl font-semibold text-[#03045E]">
          Experience
        </h1>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start text-xl font-semibold">
              January 2025 - Present
            </div>
            <div className="timeline-middle text-[#f5ee84]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end">
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
                <div className="timeline-box mb-10 flex w-80 flex-col items-center justify-center bg-transparent">
                  <h1 className="text-lg font-semibold">
                    Senior Full-Stack Engineer / Lead Developer at
                  </h1>
                  <h1 className="mr-auto text-lg font-semibold text-blue-700">
                    Quantum Innovations Group
                  </h1>
                  <p className="text-justify text-base">
                    Leading end-to-end development of critical features, I
                    oversaw system design, mentored junior developers, and
                    played a key role in optimizing performance and scalability
                    for innovative digital products.
                  </p>
                </div>
              </motion.div>
            </div>
            <hr className="bg-[#474306]" />
          </li>
          <li>
            <hr className="bg-[#474306]" />
            <div className="timeline-start">
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
                <div className="timeline-box mb-10 flex w-80 flex-col items-center justify-center bg-transparent">
                  <h1 className="mr-auto text-lg font-semibold">
                    Full-Stack Developer at
                  </h1>
                  <h1 className="mr-auto text-lg font-semibold text-blue-700">
                    SecureFin Solutions
                  </h1>
                  <p className="text-justify text-base">
                    Transitioning to full-stack, I designed and implemented
                    comprehensive features from database schema to user
                    interface, actively contributing to API development and
                    overall system architecture.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="timeline-middle text-[#f5ee84]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end text-xl font-semibold">
              August 2023 - December 2024
            </div>
            <hr className="bg-[#474306]" />
          </li>

          <li>
            <hr className="bg-[#474306]" />
            <div className="timeline-start text-xl font-semibold">
              August 2021 - July 2023
            </div>
            <div className="timeline-middle text-[#f5ee84]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end">
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
                <div className="timeline-box mb-10 flex w-80 flex-col items-center justify-center bg-transparent">
                  <h1 className="text-lg font-semibold">
                    Frontend Developer / UI Specialist at
                  </h1>
                  <h1 className="mr-auto text-lg font-semibold text-blue-700">
                    EazyBuy E-commerce Solutions
                  </h1>
                  <p className="text-justify text-base">
                    I was responsible for developing and optimizing complex,
                    user-facing features for an e-commerce platform, ensuring
                    seamless integration with backend services.
                  </p>
                </div>
              </motion.div>
            </div>
            <hr className="bg-[#474306]" />
          </li>
          <li>
            <hr className="bg-[#474306]" />
            <div className="timeline-start">
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
                <div className="timeline-box mb-10 flex w-80 flex-col items-center justify-center bg-transparent">
                  <h1 className="mr-auto text-lg font-semibold">
                    Junior Frontend Developer at
                  </h1>
                  <h1 className="mr-auto text-lg font-semibold text-blue-700">
                    InnovateTech Startup
                  </h1>
                  <p className="text-justify text-base">
                    Focused on building responsive user interfaces and
                    integrating basic APIs, I contributed to the initial
                    development and bug fixing of new product MVPs.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="timeline-middle text-[#f5ee84]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end text-xl font-semibold">
              August 2020 - July 2021
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
