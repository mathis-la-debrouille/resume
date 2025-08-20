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
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.0' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.8'/%3E%3C/svg%3E")`,
          zIndex: 2
        }} />
        
        {/* Moving spheres */}
        {[...Array(9)].map((_, i) => {
          const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 800;
          const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 400;
          const rectWidth = typeof window !== 'undefined' ? window.innerWidth * 0.5 : 400; // Reduced size
          const rectHeight = typeof window !== 'undefined' ? window.innerHeight * 0.5 : 200;
          
          // Create smooth curved path using sine waves for natural motion
          const pathPoints = 60; // More points for smoother curves
          const xPath = [];
          const yPath = [];
          
          for (let p = 0; p < pathPoints; p++) {
            const t = (p / pathPoints) * Math.PI * 2;
            // Rounded rectangle path with smooth curves
            let x, y;
            
            if (t < Math.PI * 0.5) {
              // Top side with curve
              const progress = t / (Math.PI * 0.5);
              x = centerX - rectWidth/2 + progress * rectWidth - 250;
              y = centerY - rectHeight/2 - 20 * Math.sin(progress * Math.PI) - 250;
            } else if (t < Math.PI) {
              // Right side with curve
              const progress = (t - Math.PI * 0.5) / (Math.PI * 0.5);
              x = centerX + rectWidth/2 + 20 * Math.sin(progress * Math.PI) - 250;
              y = centerY - rectHeight/2 + progress * rectHeight - 250;
            } else if (t < Math.PI * 1.5) {
              // Bottom side with curve
              const progress = (t - Math.PI) / (Math.PI * 0.5);
              x = centerX + rectWidth/2 - progress * rectWidth - 250;
              y = centerY + rectHeight/2 + 20 * Math.sin(progress * Math.PI) - 250;
            } else {
              // Left side with curve
              const progress = (t - Math.PI * 1.5) / (Math.PI * 0.5);
              x = centerX - rectWidth/2 - 20 * Math.sin(progress * Math.PI) - 250;
              y = centerY + rectHeight/2 - progress * rectHeight - 250;
            }
            
            xPath.push(x);
            yPath.push(y);
          }
          
          return (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: 
                  i === 0 ? '600px' : // Purple - biggest
                  i === 1 ? '400px' : // Black
                  i === 8 ? '300px' : // Black - smaller on top
                  i === 6 ? '300px' : // Orange - smallest
                  i === 5 || i === 4 ? '350px' : '500px', // Blue variations
                height: 
                  i === 0 ? '600px' : 
                  i === 1 ? '400px' : 
                  i === 8 ? '300px' : // Black - smaller on top
                  i === 6 ? '300px' : 
                  i === 5 || i === 4 ? '350px' : '500px',
                borderRadius: '50%',
                background: 
                  i === 0 ? 'radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, rgba(79, 70, 229, 0.25) 40%, rgba(147, 51, 234, 0.1) 70%, transparent 100%)' : // Purple
                  i === 1 || i === 8 ? 'radial-gradient(circle, rgba(20, 20, 20, 0.7) 0%, rgba(40, 40, 40, 0.35) 40%, rgba(20, 20, 20, 0.15) 70%, transparent 100%)' : // Black spheres
                  i === 6 ? 'radial-gradient(circle, rgba(255, 165, 0, 0.5) 0%, rgba(255, 140, 0, 0.25) 40%, rgba(255, 165, 0, 0.1) 70%, transparent 100%)' : // Orange
                  i === 7 ? 'radial-gradient(circle, rgba(30, 100, 200, 0.4) 0%, rgba(60, 120, 180, 0.2) 40%, rgba(30, 100, 200, 0.1) 70%, transparent 100%)' : // Additional blue sphere
                  'radial-gradient(circle, rgba(30, 100, 200, 0.4) 0%, rgba(60, 120, 180, 0.2) 40%, rgba(30, 100, 200, 0.1) 70%, transparent 100%)', // Blue
                filter: 'blur(120px)',
                zIndex: i === 8 ? 3 : 1, // Black sphere on top
                left: 0,
                top: 0
              }}
              animate={{
                x: xPath,
                y: yPath
              }}
              transition={{
                duration: 15, // Same speed for all
                repeat: Infinity,
                ease: "linear", // Constant movement
                delay: i * 2.1 // Staggered start
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