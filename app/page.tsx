import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Achievements } from "@/components/achievements";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Industries } from "@/components/industries";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <Achievements />
        <About />
        <Experience />
        <Industries />
        <Projects />
        <Skills />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
