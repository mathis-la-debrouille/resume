import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Valyo - Fintech Wealth Visualization Platform',
      description: 'Design of a fintech platform for wealth visualization. User discovery, value proposition definition and associated business model. UI/UX design and roadmap definition for the next 4 months. Integration of data enrichment AI.',
      technologies: ['Product Design', 'UI/UX', 'AI Integration', 'Fintech', 'Business Model'],
      category: 'Fintech',
      status: 'In Progress',
      period: 'June 2025 – Present',
      role: 'Co-founder',
      stats: {
        stage: 'MVP',
        timeline: '4 months',
        role: 'Product Lead'
      },
      links: {
        live: 'https://preview--valyo-glass-launch.lovable.app/'
      }
    },
    {
      id: 2,
      title: 'Tupi - Ecological Gamification Platform',
      description: 'Project management & ideation: pivot towards ecological gamification (Duolingo style). 82% retention in Beta, average rating of 4.2/5 according to user feedback. About 150 exchanges and 80 photos at the interactive stand at Epitech Experiences. Final pitch: 🥈 2nd place at the jury.',
      technologies: ['Gamification', 'Product Management', 'User Research', 'Mobile App'],
      category: 'EdTech',
      status: 'Completed',
      period: 'April 2024 – November 2024',
      role: 'Founder',
      stats: {
        retention: '82%',
        rating: '4.2/5',
        pitch: '2nd Place'
      },
      links: {
        live: 'https://website-black-two-13.vercel.app/'
      }
    },
    {
      id: 3,
      title: 'Sifokab - Data-Driven CRM',
      description: 'Project Manager & Fullstack Dev: definition of user stories, roadmap and prototype for data collection/visualization. Quantitative and qualitative survey among ESN companies. Validation of KPIs with potential users.',
      technologies: ['React', 'Node.js', 'Data Visualization', 'CRM', 'User Research'],
      category: 'B2B SaaS',
      status: 'Completed',
      period: 'Epitech Project',
      role: 'Founder & Dev',
      stats: {
        surveys: 'ESN Market',
        validation: 'KPI Tested',
        scope: 'B2B CRM'
      }
    },
    {
      id: 4,
      title: 'CreativeLab - Hardware Innovation Lab',
      description: 'Launch of a hardware innovation laboratory within the school. Founded an association to provide students with access to cutting-edge hardware tools and mentorship for innovative projects.',
      technologies: ['Hardware', 'Innovation Lab', 'Project Management', 'Community Building'],
      category: 'Education',
      status: 'Completed',
      period: 'October 2022 – May 2023',
      role: 'Co-founder',
      stats: {
        students: '50+',
        projects: '20+',
        duration: '8 months'
      }
    }
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
          <h2 className="heading-section">Featured Projects</h2>
          <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Showcasing innovative solutions and creative implementations across various technologies
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
              {/* Project Image Placeholder */}
              <div className="card-project-image">
                <div style={{ 
                  position: 'absolute', 
                  top: '16px', 
                  left: '16px',
                  fontSize: '12px',
                  padding: '4px 8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  {project.category}
                </div>
                <div style={{ 
                  position: 'absolute', 
                  top: '16px', 
                  right: '16px',
                  fontSize: '12px',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  ...getStatusStyle(project.status)
                }}>
                  {project.role}
                </div>
                
                {/* Hover Action Buttons */}
                {project.links && (
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
                      href={project.links.live}
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

              <div style={{ padding: '0' }}>
                <div style={{ marginBottom: '12px' }}>
                  <h3 className="heading-card" style={{ margin: 0, fontSize: '1.1rem' }}>
                    {project.title}
                  </h3>
                  {project.period && (
                    <p className="text-small" style={{ color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                      {project.period}
                    </p>
                  )}
                </div>
                <p className="text-body" style={{ marginBottom: '16px', fontSize: '14px' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap mb-md" style={{ gap: '8px', marginBottom: '16px' }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag" style={{ fontSize: '10px' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between text-small">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div style={{ 
                        fontWeight: '600', 
                        color: 'var(--color-text-primary)',
                        marginBottom: '2px'
                      }}>
                        {value}
                      </div>
                      <div style={{ 
                        textTransform: 'capitalize',
                        color: 'var(--color-text-secondary)',
                        fontSize: '11px'
                      }}>
                        {key}
                      </div>
                    </div>
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