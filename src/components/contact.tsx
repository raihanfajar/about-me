"use client";

import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import {
  MdOutlineMailOutline,
  MdOutlineChatBubbleOutline,
} from "react-icons/md";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message is too short (min 10 characters)")
    .max(500, "Message is too long (max 500 characters)")
    .required("Message is required"),
});

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

function Contact() {
  const [status, setStatus] = useState("");

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
        {/* Contact Information */}
        <div className="flex h-auto w-full flex-col rounded-xl border-2 border-black p-6 md:w-[30%]">
          <h1 className="mb-5 text-xl font-semibold">Contact Information</h1>
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
                href="mailto:rhnfjr@gmail.com"
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

        {/* Formik Form */}
        <div className="flex h-auto w-full flex-col rounded-xl border-2 border-black p-6 md:w-[30%]">
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
                setStatus("❌ EmailJS config error.");
                setSubmitting(false);
                return;
              }

              emailjs
                .send(
                  SERVICE_ID,
                  TEMPLATE_ID,
                  {
                    name: values.name,
                    email: values.email,
                    message: values.message,
                  },
                  PUBLIC_KEY,
                )
                .then(
                  () => {
                    setStatus("✅ Message sent successfully! I will reply to your message as soon as possible.");
                    resetForm();
                  },
                  (error) => {
                    setStatus("❌ Failed to send message.");
                    console.error("EmailJS error:", error);
                  },
                )
                .finally(() => {
                  setSubmitting(false);
                });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="mb-1 text-sm font-semibold text-[#03045E]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className="input input-bordered w-full border-2 border-black bg-transparent"
                  />
                  {errors.name && touched.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-1 text-sm font-semibold text-[#03045E]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="input input-bordered w-full border-2 border-black bg-transparent"
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="mb-1 text-sm font-semibold text-[#03045E]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    className="textarea textarea-bordered w-full border-2 border-black bg-transparent"
                  />
                  {errors.message && touched.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary mt-4"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>

                {status && (
                  <p className="mt-2 text-center text-sm text-gray-700">
                    {status}
                  </p>
                )}
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default Contact;
