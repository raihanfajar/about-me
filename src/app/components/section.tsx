import React from "react";
import Image from "next/image";

const Section = () => {
  return (
    <>
      <section className="container mx-auto gap-20 px-10">
        {/* HERO */}
        <div
          className="mt-6 mb-5 md:mb-20 flex h-auto w-full flex-col-reverse items-center justify-center gap-10 lg:mt-24 lg:flex-row"
          id="about"
        >
          {/* TULISAN */}
          <div className="flex flex-col text-[#03045E]">
            <p className="text-xl font-bold md:text-2xl">Hi, I'm Fajar,</p>
            <span className="mt-2 text-5xl font-extrabold md:mt-4 md:text-8xl">
              {" "}
              WEB
            </span>
            <span className="mt-2 text-5xl font-extrabold md:mt-4 md:text-8xl">
              DEVEPLOPER
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
          <div className="mb-5 flex h-full w-full items-center justify-center">
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
          </div>
        </div>
        <div className="text-justify text-sm text-[#03045E] md:text-lg xl:w-[50%]">
          Hello! I'm Raihan Fajar Ramadhan, a passionate Full-Stack Web
          Developer with around one year of experience in bringing digital ideas
          to life. I specialize in crafting robust and intuitive web
          applications, with a strong focus on the modern front-end using React
          and Next.js, coupled with the efficiency of Tailwind CSS for sleek,
          responsive designs <br /> <br /> I thrive on turning concepts into functional,
          engaging realities. Currently, I'm dedicated to continuous learning,
          actively seeking a challenging full-stack position, and exploring new
          opportunities to further develop my skills and contribute to
          innovative projects
        </div>
      </section>
    </>
  );
};

export default Section;
