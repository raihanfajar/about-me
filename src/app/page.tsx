import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import About from "@/components/about";
import Testimony from "@/components/testimony";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Work from "@/components/work";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Testimony />
      <Contact />
      <Footer />
    </>
  );
}
