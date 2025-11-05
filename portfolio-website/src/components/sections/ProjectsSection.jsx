import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import powmPhoto from '../../assets/powm-photo.jpg';
import tupiPhoto from '../../assets/tupi-photo.jpg';
import creativePhoto from '../../assets/lab-photo.jpg';
import sifokabPhoto from '../../assets/sifokab-photo.jpg';
import idlPhoto from '../../assets/idle.jpg';
import pawcarePhoto from '../../assets/pawcare.png';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Powm',
      subtitle: 'Privacy-first identity wallet for minimal, non-correlatable proofs',
      problem: 'Lobbyism and technical foundations; wrote PRD and roadmap. Designed IA/UX; built the all-hand verification widget and merchant API',
      description: 'Powm taught me to turn privacy principles into shippable systems: local-first storage, DPIAs, and a product cadence that keeps engineering, legal, and ops tightly aligned.',
      metrics: [],
      role: 'Founder - 3 associates',
      image: powmPhoto,
      buttons: [
        { label: 'Read Case Study', link: 'https://light-atlasaurus-699.notion.site/Powm-study-case-2a2a3065f55b802ab2c4d2c66c59ab4b?pvs=74' },
      ]
    },
    {
      id: 2,
      title: 'Tupi',
      subtitle: 'Duolingo-style eco actions app (closed beta)',
      problem: 'Defined NSM/guardrails and experiment plan; led ideation → pivot to ecological gamification. Shipped v1 to 120 beta users achieving strong retention and user satisfaction.',
      description: 'Tupi taught me the B2C craft: talk to users, keep scopes small, write clear copy, and watch funnels/cohorts to guide the next iteration. Currently building it out, reaching partners and local actors.',
      metrics: ['D7 64%', 'D30 22%', 'NPS 52', '4.2/5 (84 reviews)', '~150 interviews', '2nd place jury'],
      role: 'Founder',
      image: tupiPhoto,
      buttons: [
        { label: 'Read Case Study', link: 'https://light-atlasaurus-699.notion.site/Tupi-252a3065f55b80e29c8aecf662a024a5?pvs=74' },
        { label: 'Demo', link: 'https://tupi-app.com/' },
        { label: 'PRD', link: 'https://light-atlasaurus-699.notion.site/PRD-Tupi-252a3065f55b809fa9b4d4b52734b20d?pvs=74' }
      ]
    },
    {
      id: 5,
      title: 'Pawcare',
      subtitle: '(practice project) Pet-health companion',
      problem: 'Pet owners need a way to track their pet\'s health and well-being',
      metrics: ['Quant survey n≈100', 'MoSCoW', 'user flows, wireframes'],
      role: 'Solo',
      image: pawcarePhoto,
      buttons: [
        { label: 'Read Case Study', link: 'https://light-atlasaurus-699.notion.site/Pawcare-252a3065f55b80f094a5ecc816c5a529?pvs=74' },
      ]
    },
    // {
    //   id: 3,
    //   title: 'Sifokab',
    //   subtitle: 'Data-driven CRM for ESN companies',
    //   problem: 'ESN companies need better tools for data collection and visualization',
    //   metrics: ['ESN Market', 'KPI Tested', 'B2B CRM'],
    //   role: 'Founder & Dev',
    //   image: sifokabPhoto,
    //   buttons: [
    //   ]
    // },
    {
      id: 4,
      title: 'CreativeLab',
      subtitle: 'Hardware innovation lab within school',
      problem: 'Students lack access to cutting-edge hardware tools for innovation',
      metrics: ['50+ Students', '20+ Projects', '8 Months'],
      role: 'Co-founder',
      image: creativePhoto,
      buttons: [
      ]
    },
  ];

  return (
    <section className="section" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-xl"
        >
          <h2 className="heading-section">Projects</h2>
        </motion.div>

        <div className="grid grid-2" style={{ gap: '32px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card"
              style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Darker cards
                overflow: 'hidden'
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="card-project-image">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-md)'
                    }}
                  />
                )}
                <div style={{ 
                  position: 'absolute', 
                  top: '16px', 
                  right: '16px',
                  fontSize: '12px',
                  padding: '6px 12px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(8px)',
                  fontWeight: '600'
                }}>
                  {project.role}
                </div>
              </div>
              
              <div>
                <h3 className="heading-card">{project.title}</h3>
                <p className="text-body" style={{ color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
                  {project.subtitle}
                </p>
                <p className="text-body" style={{ marginBottom: '16px' }}>
                  {project.problem}
                </p>
                
                {project.description && (
                  <p className="text-body" style={{ 
                    marginBottom: '24px', 
                    fontSize: '0.9rem', 
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontStyle: 'italic'
                  }}>
                    {project.description}
                  </p>
                )}

                <div className="flex flex-wrap mb-md" style={{ gap: '8px', marginBottom: '24px' }}>
                  {project.metrics.map((metric) => (
                    <span key={metric} className="tag" style={{ 
                      fontSize: '11px',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#10B981',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      fontWeight: '500'
                    }}>
                      {metric}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap" style={{ gap: '12px' }}>
                  {project.buttons.map((button, btnIndex) => {
                    const isPrimary = button.label === 'Read Case Study';
                    const isDemo = button.label === 'Demo';
                    
                    return (
                      <motion.a
                        key={button.label}
                        href={button.link}
                        target={button.link.startsWith('http') ? '_blank' : '_self'}
                        rel={button.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        style={{ 
                          fontSize: '14px',
                          fontWeight: '600',
                          padding: isPrimary ? '14px 28px' : '12px 22px',
                          textDecoration: 'none',
                          borderRadius: '10px',
                          border: isPrimary ? '2px solid #10B981' : isDemo ? '2px solid #3B82F6' : '2px solid rgba(255, 255, 255, 0.2)',
                          backgroundColor: isPrimary ? 'rgba(16, 185, 129, 0.15)' : isDemo ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                          color: isPrimary ? '#10B981' : isDemo ? '#3B82F6' : 'rgba(255, 255, 255, 0.9)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px',
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'all 0.3s ease',
                          boxShadow: isPrimary ? '0 6px 25px rgba(16, 185, 129, 0.3)' : isDemo ? '0 6px 25px rgba(59, 130, 246, 0.25)' : '0 4px 15px rgba(255, 255, 255, 0.1)'
                        }}
                        whileHover={{ 
                          scale: 1.08,
                          y: -3,
                          boxShadow: isPrimary ? '0 10px 35px rgba(16, 185, 129, 0.4)' : isDemo ? '0 10px 35px rgba(59, 130, 246, 0.35)' : '0 6px 25px rgba(255, 255, 255, 0.2)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          boxShadow: [
                            isPrimary ? '0 6px 25px rgba(16, 185, 129, 0.3)' : isDemo ? '0 6px 25px rgba(59, 130, 246, 0.25)' : '0 4px 15px rgba(255, 255, 255, 0.1)',
                            isPrimary ? '0 8px 30px rgba(16, 185, 129, 0.4)' : isDemo ? '0 8px 30px rgba(59, 130, 246, 0.3)' : '0 5px 20px rgba(255, 255, 255, 0.15)',
                            isPrimary ? '0 6px 25px rgba(16, 185, 129, 0.3)' : isDemo ? '0 6px 25px rgba(59, 130, 246, 0.25)' : '0 4px 15px rgba(255, 255, 255, 0.1)'
                          ]
                        }}
                        transition={{
                          boxShadow: {
                            repeat: Infinity,
                            duration: 2.5,
                            ease: 'easeInOut',
                            delay: btnIndex * 0.2
                          }
                        }}
                      >
                        {/* Shimmer effect for primary button */}
                        {isPrimary && (
                          <motion.div
                            style={{
                              position: 'absolute',
                              top: '0',
                              left: '-100%',
                              width: '100%',
                              height: '100%',
                              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                              zIndex: 1
                            }}
                            animate={{ left: ['100%', '-100%'] }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                              ease: 'linear',
                              repeatDelay: 4
                            }}
                          />
                        )}
                        
                        <span style={{ position: 'relative', zIndex: 2 }}>
                          {button.label}
                        </span>
                        
                        {isPrimary && (
                          <motion.span
                            style={{ 
                              fontSize: '12px',
                              backgroundColor: '#10B981',
                              color: 'white',
                              padding: '3px 7px',
                              borderRadius: '12px',
                              position: 'relative',
                              zIndex: 2
                            }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{
                              repeat: Infinity,
                              duration: 1.8,
                              ease: 'easeInOut'
                            }}
                          >
                            ★
                          </motion.span>
                        )}
                        
                        {isDemo && (
                          <ExternalLink size={16} style={{ position: 'relative', zIndex: 2 }} />
                        )}
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;