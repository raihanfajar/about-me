"use client";
import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section className="container mx-auto mt-50 px-10 md:mt-72">
      <div className="flex flex-col items-center justify-center px-4 md:px-10">
        <h1 className="mb-10 text-2xl font-semibold text-[#03045E]">
          Experience
        </h1>

        <ul className="timeline timeline-vertical w-full max-w-5xl">
          {/* ITEM 1 */}
          <li>
            <div className="timeline-start text-left text-sm font-semibold md:text-right md:text-xl">
              January 2025 - Present
            </div>
            <div className="timeline-middle text-[#f5ee84]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
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
              <div className="overflow-x-hidden">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className="timeline-box mb-10 w-full max-w-md bg-transparent">
                    <h1 className="text-left text-lg font-semibold">
                      Senior Full-Stack Engineer / Lead Developer at
                    </h1>
                    <h1 className="text-justify text-base font-semibold text-blue-700 md:text-left">
                      Quantum Innovations Group
                    </h1>
                    <p className="text-justify text-base">
                      Leading end-to-end development of critical features, I
                      oversaw system design, mentored junior developers, and
                      played a key role in optimizing performance and
                      scalability.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <hr className="bg-[#474306]" />
          </li>

          {/* ITEM 2 */}
          <li>
            <hr className="bg-[#474306]" />
            <div className="timeline-start">
              <div className="overflow-x-hidden">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className="timeline-box mb-10 w-full max-w-md bg-transparent">
                    <h1 className="text-left text-lg font-semibold">
                      Full-Stack Developer at
                    </h1>
                    <h1 className="text-justify text-base font-semibold text-blue-700 md:text-left">
                      SecureFin Solutions
                    </h1>
                    <p className="text-justify text-base">
                      Transitioning to full-stack, I designed and implemented
                      comprehensive features from database schema to UI,
                      contributing to API development and system architecture.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="timeline-middle text-[#f5ee84]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end text-left text-sm font-semibold md:text-right md:text-xl">
              August 2023 – December 2024
            </div>
            <hr className="bg-[#474306]" />
          </li>

          {/* ITEM 3 */}
          <li>
            <hr className="bg-[#474306]" />
            <div className="timeline-start text-left text-sm font-semibold md:text-right md:text-xl">
              August 2021 – July 2023
            </div>
            <div className="timeline-middle text-[#f5ee84]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
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
              <div className="overflow-x-hidden">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className="timeline-box mb-10 w-full max-w-md bg-transparent">
                    <h1 className="text-left text-lg font-semibold">
                      Frontend Developer / UI Specialist at
                    </h1>
                    <h1 className="text-justify text-base font-semibold text-blue-700 md:text-left">
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
            </div>
            <hr className="bg-[#474306]" />
          </li>

          {/* ITEM 4 */}
          <li>
            <hr className="bg-[#474306]" />
            <div className="timeline-start">
              <div className="overflow-x-hidden">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className="timeline-box mb-10 w-full max-w-md bg-transparent">
                    <h1 className="text-left text-lg font-semibold">
                      Junior Frontend Developer at
                    </h1>
                    <h1 className="text-justify text-base font-semibold text-blue-700 md:text-left">
                      InnovateTech Startup
                    </h1>
                    <p className="text-justify text-base">
                      Focused on building responsive interfaces and integrating
                      APIs, I contributed to MVPs and assisted in resolving
                      front-end issues.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="timeline-middle text-[#f5ee84]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end text-left text-sm font-semibold md:text-right md:text-xl">
              August 2020 – July 2021
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
