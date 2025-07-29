import { motion } from 'framer-motion';
import { MapPin, Calendar, Coffee, Code, Heart } from 'lucide-react';
import profilePhoto from '../../assets/profile-photo.jpg';
import workPhoto from '../../assets/work-photo.jpg';
import creativePhoto from '../../assets/creative-photo.jpg';

const WhoIAmSection = () => {
  const personalInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Paris, France'
    },
    {
      icon: Calendar,
      label: 'Experience',
      value: '3+ Years'
    },
    {
      icon: Coffee,
      label: 'Coffee Consumed',
      value: '∞ Cups'
    },
    {
      icon: Code,
      label: 'Languages',
      value: '12+ Programming'
    },
    {
      icon: Heart,
      label: 'Passion',
      value: 'Product & Technology'
    }
  ];

  const traits = [
    'Product-minded',
    'Tech-fluent',
    'User-centered',
    'Data-driven',
    'Team Leader',
    'Continuous Learner'
  ];

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
          <h2 className="heading-section">Who I Am</h2>
          <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Beyond the code - discover the person behind the digital experiences
          </p>
        </motion.div>

        <div className="grid grid-2" style={{ maxWidth: '1200px', margin: '0 auto', gap: '48px' }}>
          {/* Left Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            {/* Main Profile Image */}
            <div 
              className="glass-card"
              style={{
                height: '600px',
                background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '0'
              }}
            >
              <div style={{
                position: 'absolute',
                inset: '0',
                background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                opacity: '0.8'
              }} />
              <img 
                src={profilePhoto} 
                alt="Mathis Laurent - Product Manager"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-lg)'
                }}
              />
            </div>

                        {/* Secondary Images Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div 
                className="glass-card"
                style={{
                  height: '180px',
                  background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  padding: '0'
                }}
              >
                <img 
                  src={workPhoto} 
                  alt="Mathis at work"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-lg)'
                  }}
                />
              </div>
              
              <div 
                className="glass-card"
                style={{
                  height: '180px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  opacity: '0.8',
                  padding: '0'
                }}
              >
                <img 
                  src={creativePhoto} 
                  alt="Mathis in creative mode"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-lg)'
                  }}
                />
              </div>
            </div>

            {/* Video Embed */}
            <div 
              className="glass-card"
              style={{
                height: '200px',
                background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
                position: 'relative',
                overflow: 'hidden',
                padding: '0',
                marginTop: '24px'
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/iGcuANERHGc?controls=1&rel=0&modestbranding=1"
                title="Introduction Video"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: 'var(--radius-lg)'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Description */}
            <p style={{ 
              fontSize: '14px', 
              marginTop: '12px', 
              textAlign: 'center',
              lineHeight: '1.4',
              color: 'white'
            }}>
              I participated in an event of debate and made a small video of it
            </p>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            {/* About Text */}
            <div className="glass-card">
              <h3 className="heading-card mb-md">Hello! I'm Mathis</h3>
              <div className="text-body" style={{ lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '16px' }}>
                  I'm a passionate Product Manager with strong technical fluency who bridges the gap between business vision and technical execution. 
                  With experience across various industries, I specialize in building products that not only meet user needs but drive real business value.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  My journey began with hands-on development experience, which gave me a unique perspective on product management. 
                  I believe the best products are built when technical possibilities meet user empathy and business strategy.
                </p>
                <p>
                  When I'm not working on products, you'll find me exploring new technologies, climbing rocks, 
                  or discovering new places around the world.
                </p>
              </div>
            </div>

            {/* Personal Stats */}
            <div className="glass-card">
              <h4 className="heading-card mb-md" style={{ fontSize: '1.25rem' }}>Quick Facts</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                {personalInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                      style={{ gap: '16px' }}
                    >
                      <div style={{
                        padding: '8px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }}>
                        <Icon size={16} style={{ color: 'var(--color-text-secondary)' }} />
                      </div>
                      <div>
                        <div className="text-small" style={{ color: 'var(--color-text-secondary)' }}>
                          {info.label}
                        </div>
                        <div className="text-body" style={{ color: 'var(--color-text-primary)', fontWeight: '500' }}>
                          {info.value}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Personality Traits */}
            <div className="glass-card">
              <h4 className="heading-card mb-md" style={{ fontSize: '1.25rem' }}>What Defines Me</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {traits.map((trait, index) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="tag"
                    style={{
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-xl"
        >
          <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 32px' }}>
            <blockquote style={{
              fontSize: '1.25rem',
              fontStyle: 'italic',
              color: 'var(--color-text-secondary)',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              "Great products are born at the intersection of user needs, business goals, and technical possibilities. 
              I believe in building solutions that create real value for users while driving sustainable business growth."
            </blockquote>
            <div style={{
              width: '40px',
              height: '2px',
              background: 'linear-gradient(90deg, #10B981, #06B6D4)',
              margin: '0 auto'
            }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIAmSection;