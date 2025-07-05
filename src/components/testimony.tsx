import Image from "next/image";
import React from "react";

function Testimony() {
  return (
    <section className="container mx-auto mt-50 px-10 md:mt-65">
      <div className="flex flex-col items-center justify-center gap-10 md:gap-20 lg:flex-row">
        <div className="relative flex h-[290px] w-[320px] items-center justify-center md:w-[400px]">
          <div className="absolute top-0 left-0 h-[80px] w-[80px] overflow-hidden rounded-full border-2 border-black md:h-[100px] md:w-[100px]">
            <Image
              src="/orang2.png"
              alt="Profile Picture"
              fill={true}
              objectFit="cover"
            />
          </div>
          <div className="m-9 flex h-[calc(100%-72px)] w-full flex-col items-center justify-center rounded-2xl border-2 border-black bg-[#f5ee84] px-3 text-[#03045E]">
            <div className="h-5 lg:h-10"></div>
            <p>
              "Working with Raihan was a pleasure; his collaborative spirit and
              problem-solving skills are truly outstanding."
            </p>
            <h1 className=" text-xl font-semibold text-blue-700 mb-5">
              David Rodriguez
            </h1>
          </div>
          <div className="absolute right-0 bottom-5 flex h-10 w-40 items-center justify-center rounded-2xl border-2 border-black bg-[#fbf8cc]">
            <div className="rating pointer-events-none gap-1">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-heart bg-red-400"
                aria-label="1 star"
                disabled
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-heart bg-orange-400"
                aria-label="2 star"
                disabled
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-heart bg-yellow-400"
                aria-label="3 star"
                disabled
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-heart bg-lime-400"
                aria-label="4 star"
                disabled
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-heart bg-green-400"
                aria-label="5 star"
                defaultChecked
              />
            </div>
          </div>
        </div>
        <div className="relative flex h-[290px] w-[320px] items-center justify-center md:w-[400px]">
          <div className="absolute top-0 left-0 h-[80px] w-[80px] overflow-hidden rounded-full border-2 border-black md:h-[100px] md:w-[100px]">
            <Image
              src="/orang3.png"
              alt="Profile Picture"
              fill={true}
              objectFit="cover"
            />
          </div>
          <div className="m-9 flex h-[calc(100%-72px)] w-full flex-col items-center justify-center rounded-2xl border-2 border-black bg-[#f5ee84] px-3 text-[#03045E]">
            <div className="h-5 lg:h-10"></div>
            <p>
              "Raihan consistently delivers clean, robust code, turning complex
              ideas into seamless web experiences."
            </p>
            <h1 className=" text-xl font-semibold text-blue-700 ">
              Aisha Khan
            </h1>
          </div>
          <div className="absolute right-0 bottom-5 flex h-10 w-40 items-center justify-center rounded-2xl border-2 border-black bg-[#fbf8cc]">
            <div className="rating pointer-events-none gap-1">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-heart bg-red-400"
                aria-label="1 star"
                disabled
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-heart bg-orange-400"
                aria-label="2 star"
                disabled
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-heart bg-yellow-400"
                aria-label="3 star"
                disabled
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-heart bg-lime-400"
                aria-label="4 star"
                disabled
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-heart bg-green-400"
                aria-label="5 star"
                defaultChecked
              />
            </div>
          </div>
        </div>
        <div className="relative flex h-[290px] w-[320px] items-center justify-center md:w-[400px]">
          <div className="absolute top-0 left-0 h-[80px] w-[80px] overflow-hidden rounded-full border-2 border-black md:h-[100px] md:w-[100px]">
            <Image
              src="/orang4.png"
              alt="Profile Picture"
              fill={true}
              objectFit="cover"
            />
          </div>
          <div className="m-9 flex h-[calc(100%-72px)] w-full flex-col items-center justify-center rounded-2xl border-2 border-black bg-[#f5ee84] px-3 text-[#03045E]">
            <div className="h-5 lg:h-10"></div>
            <p>
              "His dedication to crafting intuitive and high-performance apps
              made a significant impact on our project."
            </p>
            <h1 className=" text-xl font-semibold text-blue-700">
              Sarah Chen
            </h1>
          </div>
          <div className="absolute right-0 bottom-5 flex h-10 w-40 items-center justify-center rounded-2xl border-2 border-black bg-[#fbf8cc]">
            <div className="rating pointer-events-none gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
                aria-label="1 star"
                disabled
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-orange-400"
                aria-label="2 star"
                disabled
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-yellow-400"
                aria-label="3 star"
                disabled
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-lime-400"
                aria-label="4 star"
                disabled
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-green-400"
                aria-label="5 star"
                defaultChecked
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
