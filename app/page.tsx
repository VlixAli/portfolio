"use client";

import { useState } from "react";
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
import Footer from "@/components/Footer";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <Splash onDone={() => setSplashDone(true)}>
      <Navbar />
      <SocialRail />
      <EmailRail />
      <main className="flex-1">
        <Hero start={splashDone} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Splash>
  );
}
