import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import AiWorkflow from "@/sections/AiWorkflow";
import Container from "@/components/Container";
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
      <Projects />
      <SectionDivider />
      <AiWorkflow />

      <Container id="contact" className="py-20 md:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Contact</h2>
        <p className="text-muted">Coming soon...</p>
      </Container>
    </>
  );
}
