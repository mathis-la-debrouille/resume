import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const secondaryNavItems = [
    { id: 'skills', label: 'Skills' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'personal', label: 'Personal' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.02)', 
      padding: '48px 0 24px',
      marginTop: '64px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <div className="grid grid-2" style={{ gap: '48px', alignItems: 'start' }}>
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-card" style={{ marginBottom: '16px' }}>
              Let's Connect
            </h3>
            <p className="text-body" style={{ marginBottom: '24px', color: 'var(--color-text-secondary)' }}>
              Open to Product Manager opportunities and interesting conversations about building great products.
            </p>
            <div className="flex" style={{ gap: '16px' }}>
              <motion.a
                href="mailto:mathis.laurent.3m@gmail.com"
                className="glass-card"
                style={{ 
                  padding: '12px', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
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
                  justifyContent: 'center',
                  color: 'white'
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
                  justifyContent: 'center',
                  color: 'white'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Secondary Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="heading-card" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>
              More About Me
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {secondaryNavItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="text-body"
                  style={{
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    padding: '8px 0',
                    borderBottom: '1px solid transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  whileHover={{ 
                    color: 'var(--color-text-primary)',
                    x: 4
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginTop: '48px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <p className="text-small" style={{ color: 'var(--color-text-secondary)' }}>
            © 2025 Mathis Laurent. Built with React Vite.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;