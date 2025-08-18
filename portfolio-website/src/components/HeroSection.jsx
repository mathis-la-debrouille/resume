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
      {/* Small Moving Spheres */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1
      }}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '40px',
              height: '40px',
              background: `radial-gradient(circle, rgba(${i % 3 === 0 ? '59, 130, 246' : i % 3 === 1 ? '156, 163, 175' : '29, 78, 216'}, 1) 0%, rgba(${i % 3 === 0 ? '29, 78, 216' : i % 3 === 1 ? '107, 114, 128' : '59, 130, 246'}, 0.6) 70%, transparent 100%)`,
              borderRadius: '50%',
              filter: 'blur(12px)',
              transform: 'translate(-50%, -50%)',
              boxShadow: `0 0 30px rgba(${i % 3 === 0 ? '59, 130, 246' : i % 3 === 1 ? '156, 163, 175' : '29, 78, 216'}, 0.7)`
            }}
            animate={{
              x: [
                Math.cos(i * 45 * Math.PI / 180) * 80,
                Math.cos((i * 45 + 90) * Math.PI / 180) * 120,
                Math.cos((i * 45 + 180) * Math.PI / 180) * 60,
                Math.cos((i * 45 + 270) * Math.PI / 180) * 100,
                Math.cos(i * 45 * Math.PI / 180) * 80
              ],
              y: [
                Math.sin(i * 45 * Math.PI / 180) * 60,
                Math.sin((i * 45 + 90) * Math.PI / 180) * 80,
                Math.sin((i * 45 + 180) * Math.PI / 180) * 40,
                Math.sin((i * 45 + 270) * Math.PI / 180) * 70,
                Math.sin(i * 45 * Math.PI / 180) * 60
              ],
              scale: [1, 1.2, 0.8, 1.1, 1],
              opacity: [0.7, 1, 0.5, 0.8, 0.7],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center"
        >
          <motion.h1
            className="heading-hero mb-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Mathis Laurent
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-xl"
          >
            <p className="text-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>
              PM-track product builder focused on activation & habit loops.<br/>Shipped Tupi<br/>Built Valyo.<br/> Sped CI/CD at Brigad 
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center flex-wrap mb-xl"
            style={{ gap: '8px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="tag">A good human</span>
            <span className="tag">Tech expertise</span>
            <span className="tag">Cloud expertise</span>
            <span className="tag">Discovery</span>
            <span className="tag">Product management</span>
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
                View 3 Projects
                <ArrowRight size={16} />
              </button>
              <a href="/assets/mathis_resume.pdf" download="Mathis_Laurent_Resume.pdf" className="btn btn-secondary">
                Download Resume
              </a>
              <a href="mailto:mathis.laurent.3m@gmail.com" className="btn btn-tertiary">
                Contact
              </a>
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

      {/* Scroll Indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '8px'
        }}>
          <div style={{
            width: '4px',
            height: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '2px',
            animation: 'pulse 2s infinite'
          }} />
        </div>
      </motion.div>

      {/* Flan Recipe Card - Disabled */}
      {/* <FlanRecipeCard /> */}
    </section>
  );
};

export default HeroSection;