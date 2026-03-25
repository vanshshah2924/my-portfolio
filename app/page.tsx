import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import SkillsStrip from "@/components/ui/SkillsStrip";
import Projects from "@/components/ui/Projects";
import Services from "@/components/ui/Services";
import Contact from "@/components/ui/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      <SkillsStrip />   {/* 🔥 ADD THIS */}

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      <section id="services" className="scroll-mt-24">
        <Services />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      {/* (Next we will add more sections here) */}

    </main>
  );
}