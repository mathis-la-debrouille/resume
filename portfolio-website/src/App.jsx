import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SocialProofSection from './components/SocialProofSection';
import SpatialGrid from './components/SpatialGrid';
import ProjectsSection from './components/sections/ProjectsSection';
import WhoIAmSection from './components/sections/WhoIAmSection';
import ExperiencesSection from './components/sections/ExperiencesSection';
import SkillsSection from './components/sections/SkillsSection';
import HobbiesSection from './components/sections/HobbiesSection';
import SimpleSection from './components/sections/SimpleSection';
import PersonalDashboardSection from './components/sections/PersonalDashboardSection';
import RPMSection from './components/sections/RPMSection';
import Footer from './components/Footer';
import './styles/design-system.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Handle direct navigation to application-pack
    if (location.pathname === '/application-pack') {
      // Small delay to ensure the component is mounted
      setTimeout(() => {
        const element = document.getElementById('application-pack');
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Background Particles */}
      <div className="bg-particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navigation />
        
        <main>
          <section id="home">
            <HeroSection />
            <SocialProofSection />
            <SpatialGrid />
          </section>
          
          <section id="about">
            <WhoIAmSection />
          </section>
          
          <section id="experiences">
            <ExperiencesSection />
          </section>
          
          <section id="projects">
            <ProjectsSection />
          </section>
          
          <section id="skills">
            <SkillsSection />
          </section>
          
          <section id="hobbies">
            <HobbiesSection />
          </section>
          
          <section id="personal">
            <PersonalDashboardSection />
          </section>
          
          <div id="application-pack">
            <RPMSection />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;