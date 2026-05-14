import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import BottomCTA from "@/components/BottomCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section id="home">
          <Hero />
        </section>
        <FeaturedWork />
        <Skills />
        <Experience />
        <Projects />
        <BottomCTA />
      </main>
    </div>
  );
}
