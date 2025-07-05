import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import About from "@/components/about";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
    </>
  );
}
