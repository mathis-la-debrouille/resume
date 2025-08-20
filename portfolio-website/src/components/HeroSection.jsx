import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="section section-center" style={{ position: 'relative', overflow: 'hidden' }}>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center"
        >
          {/* Scrolling Labels */}
          <div style={{ 
            overflow: 'hidden', 
            height: '40px', 
            marginBottom: '32px',
            width: '400px',
            margin: '0 auto 32px auto',
            maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'
          }}>
            <motion.div
              className="flex"
              style={{ 
                gap: '24px',
                width: 'fit-content'
              }}
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear'
                }
              }}
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex" style={{ gap: '24px', whiteSpace: 'nowrap' }}>
                  <span className="tag">A good human</span>
                  <span className="tag">Tech expertise</span>
                  <span className="tag">Cloud expertise</span>
                  <span className="tag">Discovery</span>
                  <span className="tag">Product management</span>
                  <span className="tag">Problem solver</span>
                  <span className="tag">Team player</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: '400',
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              lineHeight: '1.1',
              marginBottom: '24px'
            }}
          >
            <span style={{ color: '#9CA3AF' }}>I'm Mathis,</span><br/>
            <span style={{ color: 'white', textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}>Idea builder</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-xl"
          >
            <p className="text-subtitle" style={{ 
              maxWidth: '600px', 
              margin: '0 auto',
              fontFamily: 'Geist, Inter, sans-serif',
              fontSize: '1.1rem',
              fontWeight: '400'
            }}>
              PM-track product builder focused on activation & habit loops.
            </p>
          </motion.div>


          <motion.div
            className="flex justify-center items-center flex-col"
            style={{ gap: '24px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex justify-center items-center" style={{ gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={scrollToProjects}>
                See work
                <ArrowRight size={16} />
              </button>
            </div>
            
            <div className="flex" style={{ gap: '16px' }}>
              <motion.a
                href="https://www.linkedin.com/in/mathis-laurent-8613461b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{ 
                  padding: '12px', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/mathis-la-debrouille"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{ 
                  padding: '12px', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>


      {/* Flan Recipe Card - Disabled */}
      {/* <FlanRecipeCard /> */}
    </section>
  );
};

export default HeroSection;