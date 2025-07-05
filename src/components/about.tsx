"use client";
import { motion } from "framer-motion";
import { FaLightbulb, FaReact } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuBookUp } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri";

const containerVariants = {
  hidden: { opacity: 0, y: 50 }, // Mulai dari tidak terlihat dan sedikit di bawah
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren", // Animasi container selesai sebelum anak-anak (kata) mulai
      staggerChildren: 0.03, // Jeda antar animasi setiap anak (kata). Sesuaikan nilai ini.
      duration: 2, // Durasi animasi transisi container itu sendiri
    },
  },
};

function About() {
  const text =
    "I'm an Informatics graduate who further specialized in web development at Purwadhika Digital School. Drawn to web's unique blend of logic and boundless creativity, I thrive on building dynamic applications. My hands-on experience includes developing this portfolio website and a comprehensive company profile site featuring a functional blog creation platform.".split(
      " ",
    );
  return (
    <section className="container mx-auto gap-20 px-10">
      <div className="mt-70 w-full" id="about">
        <h1 className="mb-10 text-6xl font-bold text-[#03045E]"> about. </h1>
        
          <motion.div
            variants={containerVariants}
            initial="hidden" // State awal saat komponen dimuat
            whileInView="visible" // State saat elemen masuk viewport
            viewport={{ once: true, amount: 0.8 }} // Animasi hanya sekali, saat 50% elemen terlihat
          >
            <p className="text-justify text-lg text-[#03045E] xl:w-[50%]">
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: i / 17,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </p>
          </motion.div>
        

        <div className="mt-15 w-full">
          <div className="overflow-x-hidden">
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
          </div>

          <div className="overflow-x-hidden">
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
                    I graduated from Ahmad Dahlan University with a GPA of 3.78
                    in Informatics, where I developed a strong interest in web
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
            
              <motion.div
                initial={{
                  opacity: 0,
                  y: 100, // Atur posisi awal dari kiri (misalnya -100px atau -10vw)
                }}
                whileInView={{
                  opacity: 1,
                  y: 0, // Slide in ke posisi aslinya
                  transition: {
                    duration: 1, // Durasi animasi masuk
                    ease: "easeOut", // Transisi yang lebih mulus untuk sliding
                  },
                }}
                viewport={{
                  // --- KUNCI PERUBAHAN DI SINI ---
                  amount: 0.5, // Animasi berjalan saat 50% elemen terlihat di viewport
                }}
              >
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
              </motion.div>
            
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
  );
}

export default About;
