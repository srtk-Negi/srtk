import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import Contact from "@/components/contact";

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
