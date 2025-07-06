"use client";
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SiNextdotjs, SiTypescript, SiPostgresql } from "react-icons/si";
import { FaGithub, FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import Image from "next/image";

function Work() {
  return (
    <section className="container mx-auto mt-50 px-10 md:mt-65" id="work">
      <h1 className="mb-10 text-6xl font-bold text-[#03045E]"> My Works </h1>
      <div className="grid grid-cols-1 gap-10 rounded-2xl border-2 border-black bg-amber-50 p-7 md:grid-cols-2 md:gap-20 xl:grid-cols-3">
        {/* ITEM 1 */}
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <div className="card h-[395px] w-full cursor-pointer border-2 border-black bg-transparent shadow-sm transition hover:bg-gray-100 active:scale-95">
                <figure>
                  <img src="/porto.png" alt="Portofolio Pic" />
                </figure>
                <hr className="w-full border-t-2 border-black" />
                <div className="card-body bg-transparent">
                  <h2 className="card-title">Portofolio</h2>
                  <p>
                    This portfolio showcases my journey as a Full-Stack Web
                    Developer, detailing key projects and their impactful
                    results through the structured STAR method.
                  </p>
                  <div className="card-actions justify-end">
                    <SiNextdotjs className="text-2xl" />
                    <FaGithub className="text-2xl" />
                    <SiTypescript className="text-2xl" />
                    <FaReact className="text-2xl" />
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Portofolio</DialogTitle>
                <div className="relative h-[150px] w-full overflow-hidden rounded-2xl border-2 border-black">
                  <Image
                    src="/porto.png"
                    alt="Portofolio pic"
                    fill
                    className="object-cover"
                  />
                </div>

                <DialogDescription>
                  This portfolio showcases my journey as a Full-Stack Web
                  Developer, detailing key projects and their impactful results
                  through the structured STAR method.
                </DialogDescription>
              </DialogHeader>
              <hr className="w-full border-t-2 border-black" />
              <DialogDescription>
                As an Informatics graduate, I built this portfolio to bridge
                theory with practice, tasked with creating robust projects like
                e-commerce and chat using React, Node.js, and databases, which
                effectively demonstrates my full-stack experience and readiness.
              </DialogDescription>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" className="cursor-pointer">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
        {/* END OF ITEM 1 */}

        {/* ITEM 2 */}
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <div className="card h-[395px] w-full cursor-pointer border-2 border-black bg-transparent shadow-sm transition hover:bg-gray-100 active:scale-95">
                <figure>
                  <img src="/commerce.png" alt="E-Commerce pic" />
                </figure>
                <hr className="w-full border-t-2 border-black" />
                <div className="card-body bg-transparent">
                  <h2 className="card-title">
                    E-commerce Platform for XYZ Retail
                  </h2>
                  <p>
                    A scalable, user-friendly e-commerce platform designed to
                    expand XYZ Retail's online presence and streamline sales
                    processes.
                  </p>
                  <div className="card-actions justify-end">
                    <FaNodeJs className="text-2xl" />
                    <SiPostgresql className="text-2xl" />
                    <FaAws className="text-2xl" />
                    <FaReact className="text-2xl" />
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>E-commerce Platform for XYZ Retail</DialogTitle>
                <div className="relative h-[150px] w-full overflow-hidden rounded-2xl border-2 border-black">
                  <Image
                    src="/commerce.png"
                    alt="E-Commerce pic"
                    fill
                    className="object-cover"
                  />
                </div>
                <DialogDescription>
                  A scalable, user-friendly e-commerce platform designed to
                  expand XYZ Retail's online presence and streamline sales
                  processes.
                </DialogDescription>
              </DialogHeader>
              <hr className="w-full border-t-2 border-black" />
              <DialogDescription>
                Situation: XYZ Retail needed a scalable e-commerce platform to
                expand its reach and streamline sales. Task: I was responsible
                for building both frontend and backend, ensuring seamless
                integration with existing systems to deliver an efficient,
                high-performing application. Action: I developed a responsive UI
                with React and Next.js, crafted RESTful APIs with Node.js and
                MongoDB, and integrated AWS for optimization and CI/CD
                pipelines. Result: The platform was completed on time, leading
                to a 35% increase in online sales and improved inventory
                management efficiency.
              </DialogDescription>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" className="cursor-pointer">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
        {/* END OF ITEM 2 */}

        {/* ITEM 3 */}
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <div className="card h-[395px] w-full cursor-pointer border-2 border-black bg-transparent shadow-sm transition hover:bg-gray-100 active:scale-95">
                <figure>
                  <img src="/dashboard.jpg" alt="Dashboard Pic" />
                </figure>
                <hr className="w-full border-t-2 border-black" />
                <div className="card-body bg-transparent">
                  <h2 className="card-title">
                    Collaborative Project Management Dashboard
                  </h2>
                  <p>
                    A centralized web-based application designed to help small
                    teams efficiently manage tasks, track progress, and enhance
                    collaboration on various projects.
                  </p>
                  <div className="card-actions justify-end">
                    <FaNodeJs className="text-2xl" />
                    <SiPostgresql className="text-2xl" />
                    <FaAws className="text-2xl" />
                    <FaReact className="text-2xl" />
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  Collaborative Project Management Dashboard
                </DialogTitle>
                <div className="relative h-[150px] w-full overflow-hidden rounded-2xl border-2 border-black">
                  <Image
                    src="/dashboard.jpg"
                    alt="Dashboard Pic"
                    fill
                    className="object-cover"
                  />
                </div>
                <DialogDescription>
                  A centralized web-based application designed to help small
                  teams efficiently manage tasks, track progress, and enhance
                  collaboration on various projects.
                </DialogDescription>
              </DialogHeader>
              <hr className="w-full border-t-2 border-black" />
              <DialogDescription>
                Situation: Small businesses struggled with inefficient task
                tracking and scattered communication. Task: I built a scalable,
                centralized project management dashboard. Action: Developed a
                robust Node.js/Express.js backend with PostgreSQL, and a
                responsive React/Next.js frontend with real-time task
                management. Result: Reduced project overhead by 20% and
                significantly improved team clarity and adherence to deadlines.
              </DialogDescription>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" className="cursor-pointer">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
        {/* END OF ITEM 3 */}
      </div>
    </section>
  );
}

export default Work;
