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
    <section className="section section-center" style={{ background: 'linear-gradient(135deg, transparent 0%, rgba(16, 185, 129, 0.05) 100%)' }}>
      <div className="container">
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
            <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Product Manager & Tech fluent
            </p>
            <p className="text-body">Building impactful experiences</p>
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
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View My Work
              <ArrowRight size={16} />
            </button>
            
            <div className="flex" style={{ gap: '16px' }}>
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
                href="mailto:mathis.laurent.3m@gmail.com"
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
                <Mail size={20} />
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
    </section>
  );
};

export default HeroSection;