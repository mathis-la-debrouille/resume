import { useState, useEffect, useCallback } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "experience", "about"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = useCallback((section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleProjectChange = useCallback((index: number) => {
    setCurrentProjectIndex(index);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Sidebar 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
        currentProjectIndex={currentProjectIndex}
        totalProjects={4}
      />
      <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main content */}
      <main className="lg:pl-20">
        <Hero onNavigate={handleNavigate} />
        <Projects onProjectChange={handleProjectChange} />
        <Experience />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
