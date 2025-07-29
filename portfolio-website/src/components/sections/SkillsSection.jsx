import { motion } from 'framer-motion';
import { Code, Settings, Heart, Database, Cloud, Wrench, Target } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Human Skills',
      icon: Heart,
      color: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)',
      borderColor: 'rgba(239, 68, 68, 0.3)',
      skills: [
        'Leadership',
        'Initiative',
        'Autonomy',
        'Energetic',
        'Empathy',
        'Good Relational',
        'Team Management',
        'Fast Learner',
        'No Ego',
        'Fail Fearless',
        'Adaptative',
        'Compliant',
        'Honest',
        'Always Have Good Subjects to Discuss :)'
      ]
    },
    {
      title: 'Technical Skills',
      icon: Code,
      color: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(29, 78, 216, 0.2) 100%)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
      skills: [
        { category: 'Backend', items: ['NestJS', 'Express', 'Fastify', 'PHP Laravel'] },
        { category: 'Frontend', items: ['Vue.js', 'React', 'Vite (React)'] },
        { category: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Dagger', 'Linux Architecture'] },
        { category: 'Cloud', items: ['Azure', 'AWS', 'Vercel', 'Firebase', 'OVH'] },
        { category: 'AI Integration', items: ['LLM Integration', 'AI Tools', 'Machine Learning APIs'] }
      ]
    },
    {
      title: 'Product Lead',
      icon: Target,
      color: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(219, 39, 119, 0.2) 100%)',
      borderColor: 'rgba(236, 72, 153, 0.3)',
      skills: [
        'User Empathy & Customer Research',
        'Product Vision & Strategy',
        'Prioritization Frameworks (RICE, MoSCoW)',
        'Roadmap Planning & Go-to-Market',
        'Agile & Scrum Methodology',
        'UX/UI Design & Prototyping',
        'Business Model & Market Analysis',
        'Stakeholder Management',
        'Data-Driven Decision Making',
        'Growth Mindset & Continuous Learning',
        'Translating Between Business & Tech',
      ]
    },
    {
      title: 'Software & Tools',
      icon: Settings,
      color: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)',
      borderColor: 'rgba(16, 185, 129, 0.3)',
      skills: [
        'Jira',
        'Linear',
        'Airtable',
        'Google Workspace',
        'Microsoft Office',
        'Metabase',
        'Lovable',
        'Notion (I love Notion)',
        'Asana',
        'Figma',
        'Miro',
        'Stitch',
        'ALL AI Tools (almost)',
        'LLM in General'
      ]
    }
  ];

  const getSubCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'backend':
        return Database;
      case 'frontend':
        return Code;
      case 'devops':
        return Settings;
      case 'cloud':
        return Cloud;
      case 'ai integration':
        return Wrench;
      default:
        return Code;
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
          <h2 className="heading-section">Skills & Expertise</h2>
          <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            A comprehensive overview of my human qualities, technical capabilities, and favorite tools
          </p>
        </motion.div>

        <div className="grid grid-4" style={{ 
          maxWidth: '1600px', 
          margin: '0 auto', 
          gap: '24px'
        }}>
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="glass-card"
                style={{ 
                  height: 'fit-content',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Category Header */}
                <div style={{
                  background: category.color,
                  border: `1px solid ${category.borderColor}`,
                  borderRadius: 'var(--radius-md)',
                  padding: '20px',
                  marginBottom: '24px',
                  textAlign: 'center'
                }}>
                  <Icon size={32} style={{ 
                    color: 'var(--color-text-primary)', 
                    marginBottom: '12px' 
                  }} />
                  <h3 className="heading-card" style={{ margin: 0, fontSize: '1.25rem' }}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div style={{ padding: '0 8px' }}>
                  {category.skills.map((skill, skillIndex) => {
                    // Handle technical skills with subcategories
                    if (typeof skill === 'object' && skill.category) {
                      const SubIcon = getSubCategoryIcon(skill.category);
                      return (
                        <motion.div
                          key={skill.category}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          style={{ marginBottom: '20px' }}
                        >
                          {/* Subcategory Header */}
                          <div className="flex items-center mb-sm" style={{ gap: '8px' }}>
                            <SubIcon size={16} style={{ color: 'var(--color-text-secondary)' }} />
                            <h4 style={{
                              fontSize: '14px',
                              fontWeight: '600',
                              color: 'var(--color-text-primary)',
                              margin: 0
                            }}>
                              {skill.category}
                            </h4>
                          </div>
                          
                          {/* Subcategory Skills */}
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginLeft: '24px' }}>
                            {skill.items.map((item) => (
                              <span key={item} className="tag" style={{ fontSize: '11px' }}>
                                {item}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      );
                    }

                    // Handle simple skills (human skills and software)
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                        style={{ 
                          marginBottom: '12px',
                          padding: '8px 12px',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <span style={{
                          position: 'relative',
                          paddingLeft: '16px',
                          fontSize: '14px',
                          color: 'var(--color-text-tertiary)',
                          lineHeight: '1.4'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: '0',
                            top: '6px',
                            width: '4px',
                            height: '4px',
                            backgroundColor: category.borderColor.replace('0.3', '0.8'),
                            borderRadius: '50%'
                          }} />
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;