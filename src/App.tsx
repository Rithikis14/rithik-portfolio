import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import CodingProfiles from "./pages/CodingProfiles";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollReveal from "./components/ScrollReveal";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Layout>
      <section id="hero">
        <Hero />
      </section>

      <ScrollReveal>
        <section id="skills">
          <Skills />
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section id="projects">
          <Projects />
        </section>
      </ScrollReveal>
       <ScrollReveal>
        <section id="experience">
          <Experience />
        </section>
      </ScrollReveal>
            <ScrollReveal>
        <section id="coding-profiles">
          <CodingProfiles />
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section id="certifications">
          <Certifications />
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section id="services">
          <Services />
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section id="contact">
          <Contact />
        </section>
      </ScrollReveal>
      </Layout>
    </TooltipProvider>
  </QueryClientProvider>
  </BrowserRouter>
);

export default App;
