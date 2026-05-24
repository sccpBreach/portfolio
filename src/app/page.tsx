import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Testimonials from "@/sections/Testimonials";
import AiWorkflow from "@/sections/AiWorkflow";
import GitHubProjects from "@/sections/GitHubProjects";
import Contact from "@/sections/Contact";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <AiWorkflow />
      <SectionDivider />
      <GitHubProjects />
      <SectionDivider />
      <Contact />
    </>
  );
}
