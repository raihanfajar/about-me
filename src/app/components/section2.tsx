import React from "react";
import { FaHtml5, FaCss3Alt, FaReact,FaGithub,FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiExpress, SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export default function Section2() {
  return (
    <>
      <section className="container mx-auto mt-65 px-10">
        {/* SKILLS */}
        <div className="flex h-auto w-full flex-col items-center justify-center gap-15">
          <h1 className="font-semibold text-2xl">Skills</h1>
          {/* SKILLS ROW 1 */}
          <div className="flex h-auto justify-center gap-10">
            <div className="flex flex-col items-center justify-center">
              <FaHtml5 className="text-5xl" />
              <p className="text-xl font-semibold">HTML</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaCss3Alt className="text-5xl" />
              <p className="text-xl font-semibold">CSS</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <IoLogoJavascript className="text-5xl" />
              <p className="text-xl font-semibold">JavaScript</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaReact className="text-5xl" />
              <p className="text-xl font-semibold">React</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <RiNextjsFill className="text-5xl" />
              <p className="text-xl font-semibold">Next.Js</p>
            </div>
          </div>
          {/* SKILLS ROW 2 */}
          <div className="flex h-auto justify-center gap-10">
            <div className="flex flex-col items-center justify-center">
              <SiTypescript className="text-5xl" />
              <p className="text-xl font-semibold">TypeScript</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <SiExpress className="text-5xl" />
              <p className="text-xl font-semibold">Express.Js</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <SiPostgresql className="text-5xl" />
              <p className="text-xl font-semibold">Postgresql</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <GrMysql className="text-5xl" />
              <p className="text-xl font-semibold">MySql</p>
            </div>
          </div>
          {/* SKILLS ROW 3 */}
          <div className="flex h-auto justify-center gap-10">
            <div className="flex flex-col items-center justify-center">
              <FaGithub className="text-5xl" />
              <p className="text-xl font-semibold">Github</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaGitAlt className="text-5xl" />
              <p className="text-xl font-semibold">Git</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
