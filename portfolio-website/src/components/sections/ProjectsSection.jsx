import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import valyoPhoto from '../../assets/valyo-photo.jpg';
import tupiPhoto from '../../assets/tupi-photo.jpg';
import creativePhoto from '../../assets/lab-photo.jpg';
import sifokabPhoto from '../../assets/sifokab-photo.jpg';
import idlPhoto from '../../assets/idle.jpg';
import pawcarePhoto from '../../assets/pawcare.png';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Tupi',
      subtitle: 'Turn eco intent into 4-week habit',
      problem: 'Users want to be more ecological but lack motivation and habits',
      metrics: ['D7 64%', 'NPS 52', '+38% NSM after Prompt Engine v1'],
      role: 'Founder',
      image: tupiPhoto,
      buttons: [
        { label: 'Read Case Study', link: 'https://light-atlasaurus-699.notion.site/Tupi-252a3065f55b80e29c8aecf662a024a5?pvs=74' },
        { label: 'Demo', link: 'https://tupi-app.com/' },
        { label: 'PRD', link: 'https://light-atlasaurus-699.notion.site/PRD-Tupi-252a3065f55b809fa9b4d4b52734b20d?pvs=74' }
      ]
    },
    {
      id: 2,
      title: 'Valyo',
      subtitle: 'Fintech rules engine for wealth visualization',
      problem: 'Wealth managers need better data visualization tools',
      metrics: ['MVP Stage', '4mo Timeline', 'AI Integration'],
      role: 'Co-founder/PM',
      image: valyoPhoto,
      buttons: [
        { label: 'Read Case Study', link: 'https://light-atlasaurus-699.notion.site/Valyo-252a3065f55b80288d4fd1943e97bff1?pvs=74' },
        { label: 'Demo', link: 'https://preview--valyo-glass-launch.lovable.app/' }
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
    {
      id: 3,
      title: 'Sifokab',
      subtitle: 'Data-driven CRM for ESN companies',
      problem: 'ESN companies need better tools for data collection and visualization',
      metrics: ['ESN Market', 'KPI Tested', 'B2B CRM'],
      role: 'Founder & Dev',
      image: sifokabPhoto,
      buttons: [
      ]
    },
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

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Featured':
        return { backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#10B981', border: '1px solid rgba(16, 185, 129, 0.3)' };
      case 'In Progress':
        return { backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#F59E0B', border: '1px solid rgba(245, 158, 11, 0.3)' };
      case 'Completed':
        return { backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#3B82F6', border: '1px solid rgba(59, 130, 246, 0.3)' };
      default:
        return { backgroundColor: 'rgba(107, 114, 128, 0.2)', color: '#6B7280', border: '1px solid rgba(107, 114, 128, 0.3)' };
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
          <h2 className="heading-section">Projects</h2>
          <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Product challenges, solutions, and measurable impact across different domains
          </p>
        </motion.div>

        <div className="grid grid-2" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ overflow: 'hidden' }}
            >
              {/* Project Image */}
              <div className="card-project-image" style={{ position: 'relative', overflow: 'hidden' }}>
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0'
                    }}
                  />
                )}
                <div style={{ 
                  position: 'absolute', 
                  top: '16px', 
                  right: '16px',
                  fontSize: '12px',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(8px)'
                }}>
                  {project.role}
                </div>
                
                {/* Hover Action Button */}
                {project.buttons.find(btn => btn.label === 'Demo') && (
                  <div style={{
                    position: 'absolute',
                    inset: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    opacity: '0',
                    transition: 'opacity 0.3s ease',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                  }} className="project-actions">
                    <motion.a
                      href={project.buttons.find(btn => btn.label === 'Demo').link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card"
                      style={{ 
                        padding: '12px', 
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'white',
                        textDecoration: 'none'
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                )}
              </div>

              <div style={{ padding: '24px' }}>
                <div style={{ marginBottom: '16px' }}>
                  <h3 className="heading-card" style={{ margin: 0, fontSize: '1.3rem' }}>
                    {project.title}
                  </h3>
                  <p className="text-body" style={{ color: 'var(--color-text-secondary)', marginTop: '4px', fontSize: '14px' }}>
                    {project.subtitle}
                  </p>
                </div>
                
                <p className="text-body" style={{ marginBottom: '16px', fontSize: '14px', fontWeight: '500' }}>
                  {project.problem}
                </p>

                <div className="flex flex-wrap mb-md" style={{ gap: '8px', marginBottom: '20px' }}>
                  {project.metrics.map((metric) => (
                    <span key={metric} className="tag" style={{ 
                      fontSize: '11px',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#10B981',
                      border: '1px solid rgba(16, 185, 129, 0.2)'
                    }}>
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap" style={{ gap: '8px' }}>
                  {project.buttons.map((button) => (
                    <motion.a
                      key={button.label}
                      href={button.link}
                      target={button.link.startsWith('http') ? '_blank' : '_self'}
                      rel={button.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="btn btn-tertiary"
                      style={{ 
                        fontSize: '12px',
                        padding: '6px 12px',
                        textDecoration: 'none'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {button.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .glass-card:hover .project-actions {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;