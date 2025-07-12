"use client"

// import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
// import Certifications from "@/components/Certifications";
// import Projects from "@/components/Projects";
// import Testimonials from "@/components/Testimonials";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}
      <main>
        <div id="home">
          <Hero />
        </div>
        {/* <About /> */}
        {/* <Skills /> */}
        <Experience />
        {/* <Certifications /> */}
        {/* <Projects /> */}
        {/* <Testimonials /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
