import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Film, 
  Music, 
  Youtube,
  Piano,
  Activity,
  Mountain,
  ChefHat,
  BookOpen,
  Lightbulb,
  Users
} from 'lucide-react';

const HobbiesSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = document.getElementById('hobbies-container');
      if (container) {
        const rect = container.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 100,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 100
        });
      }
    };

    const container = document.getElementById('hobbies-container');
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const hobbies = [
    {
      id: 1,
      title: 'Movies I LOVE',
      description: 'Letterboxd: @mathis__',
      icon: Film,
      color: 'linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(220, 38, 38, 0.3) 100%)',
      offset: { x: -140, y: -120 }, // Left, top
      size: 'large'
    },
    {
      id: 2,
      title: 'Latest Love',
      description: '"Au revoir mon amour - Zélie"',
      icon: Music,
      color: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(147, 51, 234, 0.3) 100%)',
      offset: { x: 140, y: -140 }, // Right, top
      size: 'medium'
    },
    {
      id: 3,
      title: 'Music Producer',
      description: 'YouTube: @dystopia-producer',
      icon: Youtube,
      color: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(29, 78, 216, 0.3) 100%)',
      offset: { x: -160, y: 100 }, // Left, bottom
      size: 'large'
    },
    {
      id: 4,
      title: 'Piano & Guitar',
      description: 'Important for me',
      icon: Piano,
      color: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(5, 150, 105, 0.3) 100%)',
      offset: { x: 160, y: 80 }, // Right, bottom
      size: 'medium'
    },
    {
      id: 5,
      title: 'Running',
      description: 'Achieved a 24km run!',
      icon: Activity,
      color: 'linear-gradient(135deg, rgba(245, 158, 11, 0.3) 0%, rgba(217, 119, 6, 0.3) 100%)',
      offset: { x: -200, y: -20 }, // Far left, center
      size: 'small'
    },
    {
      id: 6,
      title: 'Climbing Life',
      description: 'Part of my life since looong time',
      icon: Mountain,
      color: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(79, 70, 229, 0.3) 100%)',
      offset: { x: 40, y: -100 }, // Right-center, top
      size: 'medium'
    },
    {
      id: 7,
      title: 'Cooking',
      description: 'Proud to represent my country',
      icon: ChefHat,
      color: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(219, 39, 119, 0.3) 100%)',
      offset: { x: 200, y: -40 }, // Far right, slight top
      size: 'large'
    },
    {
      id: 8,
      title: 'Reading',
      description: '"Do Androids Dream of Electric Sheep?"',
      icon: BookOpen,
      color: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(8, 145, 178, 0.3) 100%)',
      offset: { x: -80, y: 80 }, // Left-center, bottom
      size: 'medium'
    },
    {
      id: 9,
      title: 'Creating Things',
      description: 'Big and small',
      icon: Lightbulb,
      color: 'linear-gradient(135deg, rgba(251, 191, 36, 0.3) 0%, rgba(245, 158, 11, 0.3) 100%)',
      offset: { x: 100, y: 60 }, // Right-center, bottom
      size: 'small'
    },
    {
      id: 10,
      title: 'Friends',
      description: 'Going out is vital',
      icon: Users,
      color: 'linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(22, 163, 74, 0.3) 100%)',
      offset: { x: -40, y: -80 }, // Left-center, slight top
      size: 'medium'
    }
  ];

  const getSizeStyles = (size) => {
    switch (size) {
      case 'large':
        return { width: '200px', height: '140px', fontSize: '14px' };
      case 'medium':
        return { width: '160px', height: '110px', fontSize: '13px' };
      case 'small':
        return { width: '130px', height: '90px', fontSize: '12px' };
      default:
        return { width: '160px', height: '110px', fontSize: '13px' };
    }
  };

  return (
    <section className="section" style={{ minHeight: '100vh', position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-xl"
        >
          <h2 className="heading-section">Hobbies & Interests</h2>
          <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            The passions and activities that fuel my creativity and keep me balanced
          </p>
        </motion.div>

        <div 
          id="hobbies-container"
          style={{ 
            position: 'relative', 
            height: '400px', 
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: '150px'
          }}
        >
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            const sizeStyles = getSizeStyles(hobby.size);
            
            // Calculate movement based on mouse position and distance from center
            const moveX = (mousePosition.x * 0.05) + (Math.sin(index * 0.5) * 3);
            const moveY = (mousePosition.y * 0.05) + (Math.cos(index * 0.5) * 3);

            return (
              <motion.div
                key={hobby.id}
                className="glass-card"
                initial={{ 
                  opacity: 0, 
                  scale: 0.8,
                  x: hobby.offset.x + moveX,
                  y: hobby.offset.y + moveY
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: hobby.offset.x + moveX,
                  y: hobby.offset.y + moveY
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.05,
                  zIndex: 10,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  background: hobby.color,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  ...sizeStyles
                }}
              >
                {/* Floating animation for the cards */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    marginBottom: '8px' 
                  }}>
                    <div style={{
                      padding: '6px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)'
                    }}>
                      <Icon size={16} style={{ color: 'var(--color-text-primary)' }} />
                    </div>
                    <h3 style={{
                      margin: 0,
                      fontSize: sizeStyles.fontSize,
                      fontWeight: '600',
                      color: 'var(--color-text-primary)',
                      lineHeight: '1.2'
                    }}>
                      {hobby.title}
                    </h3>
                  </div>
                  
                  <p style={{
                    margin: 0,
                    fontSize: `calc(${sizeStyles.fontSize} - 1px)`,
                    color: 'var(--color-text-secondary)',
                    lineHeight: '1.4',
                    fontStyle: hobby.description.includes('"') ? 'italic' : 'normal'
                  }}>
                    {hobby.description}
                  </p>
                </motion.div>

                {/* Glow effect on hover */}
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: '-2px',
                    background: hobby.color,
                    borderRadius: 'var(--radius-lg)',
                    opacity: 0,
                    filter: 'blur(8px)',
                    zIndex: -1
                  }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-xl"
        >
          <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '32px' }}>
            <p style={{
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: 'var(--color-text-secondary)',
              lineHeight: '1.6',
              margin: 0
            }}>
              "Life is a beautiful composition of diverse experiences. Each hobby adds a unique note to the symphony, 
              creating harmony between creativity, adventure, and human connection."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HobbiesSection;