import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Code, 
  Brain, 
  Heart, 
  BookOpen, 
  Plane, 
  Film, 
  Music, 
  Book 
} from 'lucide-react';

const SpatialGrid = () => {
  const gridItems = [
    {
      id: 'experiences',
      title: 'Experiences',
      description: 'Professional journey and achievements',
      icon: Briefcase,
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(29, 78, 216, 0.2) 100%)',
      size: 'large'
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'Creative works and technical solutions',
      icon: Code,
      gradient: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(109, 40, 217, 0.2) 100%)',
      size: 'large'
    },
    {
      id: 'skills',
      title: 'Skills',
      description: 'Technical expertise and capabilities',
      icon: Brain,
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)',
      size: 'medium'
    },
    {
      id: 'hobbies',
      title: 'Hobbies',
      description: 'Personal interests and passions',
      icon: Heart,
      gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)',
      size: 'medium'
    },
    {
      id: 'blog',
      title: 'Blog',
      description: 'Thoughts and insights',
      icon: BookOpen,
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.2) 100%)',
      size: 'small'
    },
    {
      id: 'trips',
      title: 'Last Trips',
      description: 'Recent adventures',
      icon: Plane,
      gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(8, 145, 178, 0.2) 100%)',
      size: 'small'
    },
    {
      id: 'movies',
      title: 'Movies',
      description: 'Recently watched',
      icon: Film,
      gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(79, 70, 229, 0.2) 100%)',
      size: 'small'
    },
    {
      id: 'music',
      title: 'Music',
      description: 'Currently listening',
      icon: Music,
      gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(219, 39, 119, 0.2) 100%)',
      size: 'small'
    },
    {
      id: 'books',
      title: 'Books',
      description: 'Recent reads',
      icon: Book,
      gradient: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(234, 88, 12, 0.2) 100%)',
      size: 'medium'
    }
  ];

  const getCardStyle = (size) => {
    const baseStyle = {
      height: '160px', // Shorter uniform height for all cards
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer'
    };
    
    return baseStyle;
  };

  const getSphereColor = (gradient) => {
    // Extract color from gradient for sphere animation - Much more powerful colors
    const colorMap = {
      'rgba(59, 130, 246, 0.2)': 'rgba(59, 130, 246, 0.8)', // Blue - More intense
      'rgba(147, 51, 234, 0.2)': 'rgba(147, 51, 234, 0.8)', // Purple - More intense
      'rgba(16, 185, 129, 0.2)': 'rgba(16, 185, 129, 0.8)', // Green - More intense
      'rgba(239, 68, 68, 0.2)': 'rgba(239, 68, 68, 0.8)', // Red - More intense
      'rgba(245, 158, 11, 0.2)': 'rgba(245, 158, 11, 0.8)', // Yellow - More intense
      'rgba(6, 182, 212, 0.2)': 'rgba(6, 182, 212, 0.8)', // Cyan - More intense
      'rgba(99, 102, 241, 0.2)': 'rgba(99, 102, 241, 0.8)', // Indigo - More intense
      'rgba(236, 72, 153, 0.2)': 'rgba(236, 72, 153, 0.8)', // Pink - More intense
      'rgba(249, 115, 22, 0.2)': 'rgba(249, 115, 22, 0.8)' // Orange - More intense
    };
    
    // Find matching color from gradient
    for (const [key, value] of Object.entries(colorMap)) {
      if (gradient.includes(key)) {
        return value;
      }
    }
    return 'rgba(255, 255, 255, 0.4)'; // Fallback
  };

  const getComplementaryColor = (gradient) => {
    // Complementary colors for each primary color - Powerful like before
    const complementaryMap = {
      'rgba(59, 130, 246, 0.2)': 'rgba(249, 115, 22, 0.8)', // Blue → Orange - Powerful
      'rgba(147, 51, 234, 0.2)': 'rgba(34, 197, 94, 0.8)', // Purple → Green - Powerful
      'rgba(16, 185, 129, 0.2)': 'rgba(236, 72, 153, 0.8)', // Green → Pink - Powerful
      'rgba(239, 68, 68, 0.2)': 'rgba(200, 180, 190, 0.6)', // Red (Hobbies) → Light Gray Pink - Softer
      'rgba(245, 158, 11, 0.2)': 'rgba(59, 130, 246, 0.8)', // Yellow → Blue - Powerful
      'rgba(6, 182, 212, 0.2)': 'rgba(239, 68, 68, 0.8)', // Cyan → Red - Powerful
      'rgba(99, 102, 241, 0.2)': 'rgba(245, 158, 11, 0.8)', // Indigo → Yellow - Powerful
      'rgba(236, 72, 153, 0.2)': 'rgba(16, 185, 129, 0.8)', // Pink → Green - Powerful
      'rgba(249, 115, 22, 0.2)': 'rgba(99, 102, 241, 0.8)' // Orange → Indigo - Powerful
    };
    
    // Find matching complementary color from gradient
    for (const [key, value] of Object.entries(complementaryMap)) {
      if (gradient.includes(key)) {
        return value;
      }
    }
    return 'rgba(255, 255, 255, 0.4)'; // Fallback
  };

  const handleCardClick = (itemId) => {
    let sectionId = itemId;
    
    // Map personal items to the personal section
    if (['blog', 'trips', 'movies', 'music', 'books'].includes(itemId)) {
      sectionId = 'personal';
    }
    
    // Map experiences to the correct section
    if (itemId === 'experiences') {
      sectionId = 'experiences';
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-xl"
        >
          <h2 className="heading-section" style={{ marginBottom: '0px' }}>Explore My Universe</h2>
          <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Navigate through different aspects of my professional and personal journey
          </p>
        </motion.div>

        <div className="grid grid-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {gridItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.3
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                onClick={() => handleCardClick(item.id)}
                className="glass-card"
                style={getCardStyle(item.size)}
              >
                {/* Primary Animated Blurred Sphere Gradient */}
                <motion.div
                  style={{
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    background: `radial-gradient(circle, ${getSphereColor(item.gradient)} 0%, ${getSphereColor(item.gradient).replace('0.8', '0.4')} 40%, transparent 70%)`,
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    zIndex: 1
                  }}
                  animate={{
                    scale: [1, 1.3, 1.1, 1],
                    opacity: [0.6, 1, 0.8, 0.6],
                    rotate: [0, 180, 360],
                    x: [
                      -60, // Start position (left/right based on index)
                      index % 2 === 0 ? 40 : -40, // Move to opposite side
                      index % 3 === 0 ? 60 : -20, // Diagonal movement
                      -60 // Return to start
                    ],
                    y: [
                      -60, // Start position (top/bottom based on index)
                      index % 2 === 0 ? 60 : -20, // Move vertically
                      index % 3 === 0 ? -40 : 40, // Cross movement
                      -60 // Return to start
                    ]
                  }}
                  transition={{
                    duration: 6 + (index * 0.8),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4
                  }}
                />

                {/* Complementary Animated Blurred Sphere Gradient - Independent behavior */}
                <motion.div
                  style={{
                    position: 'absolute',
                    width: '150px',
                    height: '150px',
                    background: `radial-gradient(circle, ${getComplementaryColor(item.gradient)} 0%, ${getComplementaryColor(item.gradient).replace('0.8', '0.4')} 40%, transparent 70%)`,
                    borderRadius: '50%',
                    filter: 'blur(35px)',
                    zIndex: 1
                  }}
                  animate={{
                    scale: [1, 1.2, 1.4, 1],
                    opacity: [0.5, 0.9, 0.7, 0.5],
                    rotate: [0, -90, -180, -270, -360], // Smooth counter-clockwise
                    x: [
                      80, // Start far right
                      20, // Move toward center-right
                      -40, // Cross to left
                      10, // Back toward center
                      80 // Return to start
                    ],
                    y: [
                      -80, // Start top
                      20, // Move down to center
                      80, // Go to bottom
                      -30, // Back up
                      -80 // Return to start
                    ]
                  }}
                  transition={{
                    duration: 10 + (index * 0.7), // Much longer, slower cycle
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (index * 0.6) + 3 // Different delay pattern
                  }}
                />

                {/* Hover Gradient Overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: '0',
                    background: item.gradient,
                    opacity: '0',
                    transition: 'opacity 0.3s ease',
                    borderRadius: 'var(--radius-lg)',
                    zIndex: 2
                  }}
                  className="hover-gradient"
                />
                
                <div style={{ 
                  position: 'relative', 
                  zIndex: 10, 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between' 
                }}>
                  <div className="flex justify-between items-start">
                    <Icon size={32} style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                    <div style={{ 
                      fontSize: '12px', 
                      color: 'var(--color-text-tertiary)',
                      opacity: '0',
                      transition: 'opacity 0.3s ease'
                    }} className="hover-size">
                      {item.size}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="heading-card" style={{ color: 'var(--color-text-primary)' }}>
                      {item.title}
                    </h3>
                    <p className="text-small" style={{ color: 'var(--color-text-secondary)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .glass-card:hover .hover-gradient {
          opacity: 1 !important;
        }
        .glass-card:hover .hover-size {
          opacity: 1 !important;
        }
        .glass-card:hover h3,
        .glass-card:hover p {
          color: var(--color-text-primary) !important;
        }
      `}</style>
    </section>
  );
};

export default SpatialGrid;