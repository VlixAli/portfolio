import Splash from "@/components/Splash";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SocialRail from "@/components/SocialRail";
import EmailRail from "@/components/EmailRail";

export default function Home() {
  return (
    <Splash>
      <Navbar />
      <SocialRail />
      <EmailRail />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

    </Splash>
  );
}
