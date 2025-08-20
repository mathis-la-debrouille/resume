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
      {/* Animated Background with Spheres */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#000000',
        overflow: 'hidden',
        zIndex: -1
      }}>
        
        {/* Grain overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 1,
          mixBlendMode: 'overlay',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.7'/%3E%3C/svg%3E")`,
          zIndex: 2
        }} />
        
        {/* Moving spheres */}
        {[...Array(6)].map((_, i) => {
          const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 800;
          const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 400;
          const rectWidth = typeof window !== 'undefined' ? window.innerWidth * 0.45 : 360;
          const rectHeight = typeof window !== 'undefined' ? window.innerHeight * 0.45 : 180;
          
          return (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: i === 4 || i === 5 ? '350px' : '500px', // Last 2 spheres smaller
                height: i === 4 || i === 5 ? '350px' : '500px',
                borderRadius: '50%',
                background: 
                  i === 0 ? 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, rgba(79, 70, 229, 0.3) 40%, rgba(147, 51, 234, 0.15) 70%, transparent 100%)' : // Purple (softer)
                  i === 1 ? 'radial-gradient(circle, rgba(20, 20, 20, 0.8) 0%, rgba(40, 40, 40, 0.4) 40%, rgba(20, 20, 20, 0.2) 70%, transparent 100%)' : // Black
                  'radial-gradient(circle, rgba(30, 100, 200, 0.6) 0%, rgba(60, 120, 180, 0.3) 40%, rgba(30, 100, 200, 0.15) 70%, transparent 100%)', // Darker blue
                filter: 'blur(100px)',
                zIndex: 1,
                left: 0,
                top: 0
              }}
              animate={{
                x: [
                  // Smooth continuous circular path with rounded corners
                  centerX - rectWidth/2 - 250,
                  centerX - rectWidth/2.5 - 250,
                  centerX - rectWidth/3 - 250,
                  centerX - rectWidth/6 - 250,
                  centerX - 250,
                  centerX + rectWidth/6 - 250,
                  centerX + rectWidth/3 - 250,
                  centerX + rectWidth/2.5 - 250,
                  centerX + rectWidth/2 - 250,
                  centerX + rectWidth/2 - 240,  // Smooth corner
                  centerX + rectWidth/2 - 230,
                  centerX + rectWidth/2 - 240,
                  centerX + rectWidth/2 - 250,
                  centerX + rectWidth/2 - 250,
                  centerX + rectWidth/2 - 250,
                  centerX + rectWidth/2.5 - 250,
                  centerX + rectWidth/3 - 250,
                  centerX - 250,
                  centerX - rectWidth/3 - 250,
                  centerX - rectWidth/2.5 - 250,
                  centerX - rectWidth/2 - 250,
                  centerX - rectWidth/2 - 260,  // Smooth corner
                  centerX - rectWidth/2 - 270,
                  centerX - rectWidth/2 - 260,
                  centerX - rectWidth/2 - 250
                ],
                y: [
                  // Smooth continuous circular path with rounded corners
                  centerY - rectHeight/2 - 250,
                  centerY - rectHeight/2 - 250,
                  centerY - rectHeight/2 - 250,
                  centerY - rectHeight/2 - 250,
                  centerY - rectHeight/2 - 250,
                  centerY - rectHeight/2 - 250,
                  centerY - rectHeight/2 - 250,
                  centerY - rectHeight/2 - 250,
                  centerY - rectHeight/2 - 250,
                  centerY - rectHeight/2 - 240,  // Smooth corner
                  centerY - rectHeight/2 - 230,
                  centerY - rectHeight/2.5 - 240,
                  centerY - rectHeight/2.5 - 250,
                  centerY - rectHeight/3 - 250,
                  centerY - 250,
                  centerY + rectHeight/3 - 250,
                  centerY + rectHeight/2.5 - 250,
                  centerY + rectHeight/2 - 250,
                  centerY + rectHeight/2 - 250,
                  centerY + rectHeight/2 - 250,
                  centerY + rectHeight/2 - 250,
                  centerY + rectHeight/2 - 240,  // Smooth corner
                  centerY + rectHeight/2 - 230,
                  centerY + rectHeight/2.5 - 240,
                  centerY - rectHeight/2.5 - 250
                ]
              }}
              transition={{
                duration: (9 + i * 1), // 2x faster: 9, 10, 11, 12, 13, 14 seconds
                repeat: Infinity,
                ease: "linear", // Constant smooth movement
                delay: i * 1.5 // Closer together
              }}
            />
          );
        })}
      </div>
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navigation />
        
        <main>
          <section id="home">
            <HeroSection />
            <SocialProofSection />
            {/* <SpatialGrid /> */}
          </section>
          
          <section id="projects">
            <ProjectsSection />
          </section>
          
          <section id="experiences">
            <ExperiencesSection />
          </section>
          
          <section id="about">
            <WhoIAmSection />
          </section>
          
          {/* <section id="skills">
            <SkillsSection />
          </section> */}
          
          
          {/* <section id="personal">
            <PersonalDashboardSection />
          </section> */}
          
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