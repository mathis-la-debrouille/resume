import { motion } from 'framer-motion';

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
      type: 'Tech'
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
      type: 'Tech'
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
      type: 'Education'
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
      type: 'Education'
    },
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
          <h2 id="experiences-heading" className="heading-section">Professional Journey</h2>
        </motion.div>

        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                paddingBottom: '40px',
                paddingTop: index > 0 ? '30px' : '0'
              }}
            >
              {/* Horizontal separator line for all except first */}
              {index > 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '15px',
                    left: '0',
                    right: '0',
                    height: '1px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                />
              )}

              {/* Job Title */}
              <h3
                style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: '400',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                {exp.title}
              </h3>

              {/* Company and Details */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  marginBottom: '16px',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  flexWrap: 'wrap'
                }}
              >
                <span style={{ fontWeight: '500' }}>{exp.company}</span>
                <span>•</span>
                <span>{exp.location}</span>
                <span>•</span>
                <span>{exp.period}</span>
              </div>

              {/* Description */}
              <div style={{ marginBottom: '20px' }}>
                {exp.description.map((item, i) => (
                  <p
                    key={i}
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      marginBottom: '8px',
                      paddingLeft: '16px',
                      position: 'relative'
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '10px',
                        width: '2px',
                        height: '2px',
                        backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        borderRadius: '50%'
                      }}
                    />
                    {item}
                  </p>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            [style*="gap: 20px"] {
              gap: 12px !important;
            }
            
            [style*="fontSize: 24px"] {
              font-size: 20px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ExperiencesSection;