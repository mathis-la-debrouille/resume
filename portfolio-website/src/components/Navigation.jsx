import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experiences', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'application-pack', label: 'Application Pack' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            top: '24px',
            left: 0,
            right: 0,
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <motion.div 
            className="glass"
            animate={{ 
              height: isCollapsed ? '6px' : 'auto',
              borderRadius: isCollapsed ? '3px' : '20px'
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ 
              overflow: 'hidden',
              cursor: isCollapsed ? 'pointer' : 'default',
              minWidth: isCollapsed ? '200px' : 'auto'
            }}
            onClick={isCollapsed ? () => setIsCollapsed(false) : undefined}
          >
            <AnimatePresence>
              {!isCollapsed && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="nav-list"
                  style={{ overflow: 'hidden' }}
                >
                  {navItems.map((item) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="nav-item"
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                        className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                  
                  {/* Hamburger as nav item */}
                  <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="nav-item"
                  >
                    <button
                      onClick={() => setIsCollapsed(!isCollapsed)}
                      onDoubleClick={() => setIsVisible(false)}
                      className="nav-link"
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2px',
                        padding: '8px 12px'
                      }}
                      title="Click: Collapse | Double-click: Hide"
                    >
                      <div style={{
                        width: '14px',
                        height: '2px',
                        backgroundColor: 'var(--color-text-secondary)',
                        borderRadius: '1px'
                      }} />
                      <div style={{
                        width: '14px',
                        height: '2px',
                        backgroundColor: 'var(--color-text-secondary)',
                        borderRadius: '1px'
                      }} />
                      <div style={{
                        width: '14px',
                        height: '2px',
                        backgroundColor: 'var(--color-text-secondary)',
                        borderRadius: '1px'
                      }} />
                    </button>
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
      
      {/* Show Navigation Button when hidden - thick line */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          onClick={() => setIsVisible(true)}
          style={{
            position: 'fixed',
            top: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '3px',
            cursor: 'pointer',
            width: '200px',
            height: '6px',
            padding: 0
          }}
          whileHover={{ 
            height: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
          }}
          whileTap={{ scale: 0.98 }}
          title="Show Navigation"
        />
      )}
    </AnimatePresence>
  );
};

export default Navigation;