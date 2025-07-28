import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projetcs";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      <section id="about" className="py-24">
        <About />
      </section>

      <section id="projects" className="py-24 bg-gray-50 dark:bg-neutral-900">
        <Projects />
      </section>

      <section id="resume" className="py-24">
        <Resume />
      </section>

      <section id="contact" className="py-24 bg-gray-50 dark:bg-neutral-900">
        <Contact />
      </section>
    </>
  );
}
