"use client"

import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div id="home">
          <Hero />
        </div>
        <FeaturedWork />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
