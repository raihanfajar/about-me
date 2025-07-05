import React from "react";
import {
  MdOutlineMailOutline,
  MdOutlineChatBubbleOutline,
} from "react-icons/md";

function Contact() {
  return (
    <section className="container mx-auto mt-50 px-10 md:mt-65">
      <div className="mb-15 flex flex-col items-center justify-center gap-3">
        <h1 className="text-3xl text-[#03045E]">Get In Touch</h1>
        <p className="text-center text-base text-[#03045E] md:text-lg">
          Looking to collaborate or simply connect? I'm always open to new
          opportunities and conversations
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-20 md:flex-row">
        <div className="flex h-auto w-full flex-col rounded-xl border-2 border-black p-6 md:w-[30%]">
          <h1 className="mb-5 text-xl font-semibold">Contact Information </h1>
          <p className="mb-8 text-base">
            Feel free to reach out through the form or directly via email or
            social media.
          </p>
          <div className="flex w-full gap-2 md:gap-5">
            <div className="flex h-13 w-13 items-center justify-center rounded-full border-2 border-[#03045E]">
              <MdOutlineMailOutline className="text-3xl text-[#03045E]" />
            </div>
            <div>
              <h1 className="font-semibold">Email</h1>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rhnfjr@gmail.com"
                target="_blank"
                className="text-sm hover:text-blue-600"
              >
                rhnfjr@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-5 flex w-full gap-2 md:gap-5">
            <div className="flex h-13 w-13 items-center justify-center rounded-full border-2 border-[#03045E]">
              <MdOutlineChatBubbleOutline className="text-3xl text-[#03045E]" />
            </div>
            <div>
              <h1 className="font-semibold">Social Media</h1>
              <div className="flex items-center text-sm">
                <a
                  href="https://www.instagram.com/fajar_raihan/"
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  Instagram
                </a>
                <div className="mx-1 h-2 w-2 rounded-full bg-black"></div>
                <a
                  href="https://x.com/PatarSky/"
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  Twitter
                </a>
                <div className="mx-1 h-2 w-2 rounded-full bg-black"></div>
                <a
                  href="https://github.com/raihanfajar"
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[400px] w-full flex-col rounded-xl border-2 border-black p-6 md:w-[30%]"></div>
      </div>
    </section>
  );
}

export default Contact;
