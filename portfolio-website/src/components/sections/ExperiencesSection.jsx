import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const ExperiencesSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'DevOps Engineer',
      company: 'Brigad',
      location: 'Paris',
      period: 'Sep 2024 – Present',
      description: [
        'Marketplace staffing platform.',
        'Cut CI/CD from 14 to 9 min (–36%) via caching/parallelism; +28% releases/week.',
        'Achieved 99.9% SLA; set product guardrails (p95 latency, error rate) and release health.'
      ],
      skills: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'AWS', 'SLA', 'Performance'],
      type: 'tech',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Co-founder',
      company: 'Valyo',
      location: 'Paris',
      period: 'Jun 2025 – Present',
      description: [
        'Trust-first wealth hub (AISP + rules engine; DCA planner).',
        '23 discovery interviews; wrote portfolio-aggregation PRD & 90-day roadmap.',
        'Designed IA/UX; POC rules engine; LLM tagging & entity-matching for data enrichment.'
      ],
      skills: ['Product Strategy', 'User Research', 'Fintech', 'AI/LLM', 'UX Design', 'PRD'],
      type: 'product',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Founder',
      company: 'Tupi',
      location: 'Paris',
      period: 'Apr 2024 – Present',
      description: [
        'Duolingo-style eco actions app (closed beta).',
        'Defined NSM/guardrails and experiment plan; led ideation → pivot to ecological gamification.',
        'Shipped v1 to 120 beta users → D7 64%, D30 22%, NPS 52; 4.2/5 from 84 reviews.',
        'Ran ~150 interviews; captured 80+ proofs at Epitech Experiences; 2nd place (jury).'
      ],
      skills: ['Product Management', 'Gamification', 'User Research', 'A/B Testing', 'Retention'],
      type: 'product',
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: 'Full-Stack Engineer (Internship)',
      company: 'Monaliza',
      location: 'Paris',
      period: 'Apr. 2023 – Aug 2023',
      description: [
        'Insurtech platform.',
        'Authored OpenAPI/Swagger for partner integration (REST, OAuth2/JWT).',
        'Shipped Contract Subscription → quote-to-contract +30%; led weekly stakeholder demos.'
      ],
      skills: ['React', 'Next.js', 'NestJS', 'OpenAPI', 'OAuth2', 'JWT', 'Stakeholder Management'],
      type: 'tech',
      image: '/api/placeholder/300/200'
    },
    {
      id: 5,
      title: 'Pedagogical Assistant & Head of',
      company: 'Epitech',
      location: 'Paris',
      period: 'Feb. 2022 – Apr. 2023',
      description: [
        'Supervised 30+ students (advanced programming/architecture); crisis handling & mentoring.',
        'Coordinated assistant team and improved teaching methods (new 3-day cadence).'
      ],
      skills: ['Leadership', 'Teaching', 'Team Management', 'Programming', 'Architecture', 'Mentoring'],
      type: 'education',
      image: '/api/placeholder/300/200'
    },
    {
      id: 6,
      title: 'Independent Teacher',
      company: 'Business School (ISG)',
      location: 'Paris',
      period: 'Sep 2022 – Dec 2022',
      description: [
        'Designed & taught courses on blockchain and Business Model Canvas; public-speaking coaching.'
      ],
      skills: ['Blockchain', 'Business Model Canvas', 'Training', 'Public Speaking', 'Course Design'],
      type: 'education',
      image: '/api/placeholder/300/200'
    },
    {
      id: 7,
      title: 'Co-founder',
      company: 'CreativeLab (Association)',
      location: 'Paris',
      period: 'Oct 2022 – May 2023',
      description: [
        'Launched hardware innovation lab; recruited mentors; 10+ workshops in first semester.',
        'Mentored 5 projects and lab produced ~15 prototypes'
      ],
      skills: ['Community Building', 'Hardware', 'Innovation Lab', 'Mentoring', 'Project Management'],
      type: 'education',
      image: '/api/placeholder/300/200'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'tech':
        return 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(29, 78, 216, 0.2) 100%)';
      case 'product':
        return 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)';
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
      case 'product': return 'Product';
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