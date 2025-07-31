import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const ExperiencesSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'Intern then DevOps Engineer (Fixed-term)',
      company: 'Brigad',
      location: 'Paris',
      period: 'Sept 2024 – Present',
      description: [
        'Automation of dynamic CI/CD pipelines, reducing build times by 30%',
        'Advanced containerization (Docker + cache) and Kubernetes deployment to ensure 99.9% SLA',
        'Infrastructure as Code (Terraform/Terragrunt) on AWS',
        'Rapid incident management and production hotfixes with standardized procedures'
      ],
      skills: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Terragrunt'],
      type: 'tech',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Sales Associate',
      company: 'Décathlon',
      location: 'Quebec',
      period: 'October 2023 – May 2024',
      description: [
        'A part-time job that allowed me to finance my international exchange',
        'Sales associate in the Outdoor department with a preference for customer service and climbing section'
      ],
      skills: ['Customer Service', 'Sales', 'Communication', 'Outdoor'],
      type: 'service',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Fullstack Engineer (Intern)',
      company: 'Monaliza',
      location: 'Paris',
      period: 'April 2023 – August 2023',
      description: [
        'I joined a small empowering team with great ambition',
        'Writing OpenAPI/Swagger specifications for GAN Insurance integration (REST endpoints, OAuth2/JWT)',
        'Facilitated functional workshops with marketing and technical teams, tracked sprint roadmap and KPIs',
        'Full-stack development of contract tracking tools and data analysis (React, Next.js, HubSpot, NestJS)'
      ],
      skills: ['React', 'Next.js', 'NestJS', 'OpenAPI', 'OAuth2', 'JWT', 'HubSpot'],
      type: 'tech',
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: 'Teaching Assistant & Team Leader',
      company: 'Epitech / Ionis‑STM',
      location: 'Paris',
      period: 'February 2022 – April 2023',
      description: [
        'Mentored 30+ students in advanced programming, software architecture and project management',
        'Psychological support, crisis management and creating a supportive environment to foster success',
        'Coordinated the TA team and optimized mentoring methodologies'
      ],
      skills: ['Leadership', 'Teaching', 'Team Management', 'Programming', 'Architecture'],
      type: 'education',
      image: '/api/placeholder/300/200'
    },
    {
      id: 5,
      title: 'Independent Instructor (Freelance)',
      company: 'Business School',
      location: 'Paris',
      period: 'September 2022 – December 2022',
      description: [
        'Designed and delivered modules on blockchain and Business Model Canvas',
        'Created practical exercises and course materials, monitored pedagogical relevance',
        'Mastered presentation techniques and public speaking'
      ],
      skills: ['Blockchain', 'Business Model Canvas', 'Training', 'Public Speaking'],
      type: 'education',
      image: '/api/placeholder/300/200'
    },
    {
      id: 6,
      title: 'Web Development Intern',
      company: 'Wiboo',
      location: 'Nogent‑sur‑Marne',
      period: 'July 2021 – January 2022',
      description: [
        'Front-end (VueJS) and back-end (PHP/Laravel) development',
        'Process automation',
        'Collaborated with designers to develop wireframes and user flows'
      ],
      skills: ['Vue.js', 'PHP', 'Laravel', 'Frontend', 'Backend', 'UX Design'],
      type: 'tech',
      image: '/api/placeholder/300/200'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'tech':
        return 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(29, 78, 216, 0.2) 100%)';
      case 'education':
        return 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)';
      case 'service':
        return 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.2) 100%)';
      default:
        return 'linear-gradient(135deg, rgba(107, 114, 128, 0.2) 0%, rgba(75, 85, 99, 0.2) 100%)';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'tech': return 'Tech';
      case 'education': return 'Education';
      case 'service': return 'Service';
      default: return 'Other';
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
          <h2 className="heading-section">Professional Journey</h2>
          <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            My professional journey across different sectors and technologies
          </p>
        </motion.div>

        <div className="grid grid-1" style={{ maxWidth: '1000px', margin: '0 auto', gap: '32px' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ 
                overflow: 'hidden',
                position: 'relative',
                padding: 0
              }}
            >
              {/* Gradient Overlay */}
              <div 
                style={{
                  position: 'absolute',
                  inset: '0',
                  background: getTypeColor(exp.type),
                  opacity: '0',
                  transition: 'opacity 0.3s ease',
                  zIndex: 1,
                  borderRadius: 'var(--radius-lg)'
                }}
                className="hover-gradient"
              />

              <div className="flex" style={{ position: 'relative', zIndex: 2 }}>
                {/* Image Section */}
                <div 
                  style={{
                    width: '200px',
                    height: '160px',
                    background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    flexShrink: 0
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    inset: '0',
                    background: getTypeColor(exp.type),
                    opacity: '0.3'
                  }} />
                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    color: 'var(--color-text-secondary)'
                  }}>
                    <Building size={32} style={{ marginBottom: '8px' }} />
                    <p className="text-small">{getTypeLabel(exp.type)}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div style={{ 
                  flex: 1, 
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}>
                  {/* Header */}
                  <div>
                    <div className="flex justify-between items-start mb-sm">
                      <h3 className="heading-card" style={{ margin: 0, fontSize: '1.25rem' }}>
                        {exp.title}
                      </h3>
                      <div style={{
                        fontSize: '12px',
                        padding: '4px 8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        color: 'var(--color-text-secondary)'
                      }}>
                        {getTypeLabel(exp.type)}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-md mb-sm" style={{ flexWrap: 'wrap' }}>
                      <div className="flex items-center gap-sm">
                        <Building size={14} style={{ color: 'var(--color-text-secondary)' }} />
                        <span className="text-small font-medium" style={{ color: 'var(--color-text-primary)' }}>
                          &nbsp;{exp.company}&nbsp;
                        </span>
                      </div>
                      <div className="flex items-center gap-sm">
                        <MapPin size={14} style={{ color: 'var(--color-text-secondary)' }} />
                        <span className="text-small" style={{ color: 'var(--color-text-secondary)' }}>
                          &nbsp;{exp.location}&nbsp;
                        </span>
                      </div>
                      <div className="flex items-center gap-sm">
                        <Calendar size={14} style={{ color: 'var(--color-text-secondary)' }} />
                        <span className="text-small" style={{ color: 'var(--color-text-secondary)' }}>
                          &nbsp;{exp.period}&nbsp;
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--color-text-tertiary)' }}>
                    {Array.isArray(exp.description) ? (
                      <ul style={{ margin: 0, paddingLeft: '16px', listStyle: 'none' }}>
                        {exp.description.map((item, i) => (
                          <li key={i} style={{ 
                            marginBottom: '8px',
                            position: 'relative',
                            paddingLeft: '16px'
                          }}>
                            <span style={{
                              position: 'absolute',
                              left: '0',
                              top: '6px',
                              width: '4px',
                              height: '4px',
                              backgroundColor: 'var(--color-text-secondary)',
                              borderRadius: '50%'
                            }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{exp.description}</p>
                    )}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap" style={{ gap: '6px' }}>
                    {exp.skills.map((skill) => (
                      <span key={skill} className="tag" style={{ fontSize: '10px' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .glass-card:hover .hover-gradient {
          opacity: 1 !important;
        }
        
        @media (max-width: 768px) {
          .flex {
            flex-direction: column !important;
          }
          
          .flex > div:first-child {
            width: 100% !important;
            height: 120px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperiencesSection;