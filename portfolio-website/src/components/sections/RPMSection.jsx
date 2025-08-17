import { motion } from 'framer-motion';
import { FileText, Play, ExternalLink, Download, Eye } from 'lucide-react';

const RPMSection = () => {
  const rpmAssets = [
    {
      icon: FileText,
      title: 'Resume PDF',
      description: 'Complete professional resume with technical and product experience',
      link: '/public/assets/mathis_resume.pdf',
      type: 'download'
    },
    {
      icon: Eye,
      title: 'Tupi Case Study',
      description: 'Detailed product case study: D7 64% retention, NPS 52',
      link: 'https://light-atlasaurus-699.notion.site/Tupi-252a3065f55b80e29c8aecf662a024a5?pvs=74',
      type: 'view'
    },
    {
      icon: Eye,
      title: 'Valyo Case Study',
      description: 'Fintech platform design and user discovery process',
      link: 'https://light-atlasaurus-699.notion.site/Valyo-252a3065f55b80288d4fd1943e97bff1?pvs=74',
      type: 'view'
    },
    {
      icon: Eye,
      title: 'Pawcare Case Study',
      description: 'Solo product build',
      link: 'https://light-atlasaurus-699.notion.site/Pawcare-252a3065f55b80f094a5ecc816c5a529?pvs=74',
      type: 'view'
    },
    {
      icon: FileText,
      title: 'Product Requirements',
      description: 'Sample PRDs showing structured product thinking',
      link: 'https://light-atlasaurus-699.notion.site/PRD-Tupi-252a3065f55b809fa9b4d4b52734b20d?pvs=74',
      type: 'view'
    },
    {
      icon: Play,
      title: '60-Second Intro Video',
      description: 'Quick intro covering background and product philosophy',
      link: '#need_data',
      type: 'play'
    }
  ];

  const getButtonStyle = (type) => {
    switch (type) {
      case 'download':
        return 'btn btn-primary';
      case 'play':
        return 'btn btn-secondary';
      default:
        return 'btn btn-tertiary';
    }
  };

  const getButtonIcon = (type) => {
    switch (type) {
      case 'download':
        return <Download size={16} />;
      case 'play':
        return <Play size={16} />;
      default:
        return <ExternalLink size={16} />;
    }
  };

  return (
    <section className="section" id="rpm">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-xl"
        >
          <h2 className="heading-section">Application Pack</h2>
          <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Everything you need to evaluate my product management skills and background
          </p>
        </motion.div>

        <div className="grid grid-2" style={{ maxWidth: '1200px', margin: '0 auto', gap: '24px' }}>
          {rpmAssets.map((asset, index) => {
            const Icon = asset.icon;
            return (
              <motion.div
                key={asset.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card"
                style={{ padding: '24px' }}
              >
                <div className="flex items-start" style={{ gap: '16px' }}>
                  <div style={{
                    padding: '12px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    flexShrink: 0
                  }}>
                    <Icon size={24} style={{ color: 'var(--color-text-primary)' }} />
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 className="heading-card" style={{ fontSize: '1.1rem', marginBottom: '8px' }}>
                      {asset.title}
                    </h3>
                    <p className="text-body" style={{ 
                      fontSize: '14px', 
                      marginBottom: '16px',
                      color: 'var(--color-text-secondary)' 
                    }}>
                      {asset.description}
                    </p>
                    
                    <motion.a
                      href={asset.link}
                      target={asset.link.startsWith('http') ? '_blank' : '_self'}
                      rel={asset.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      download={asset.type === 'download' ? 'Mathis_Laurent_Resume.pdf' : undefined}
                      className={getButtonStyle(asset.type)}
                      style={{ 
                        textDecoration: 'none',
                        fontSize: '14px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {getButtonIcon(asset.type)}
                      {asset.type === 'download' ? 'Download' : asset.type === 'play' ? 'Watch' : 'View'}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card mt-xl"
          style={{ 
            padding: '32px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
          }}
        >
          <h3 className="heading-card" style={{ marginBottom: '16px' }}>
            Quick Summary
          </h3>
          <div className="flex justify-center flex-wrap" style={{ gap: '32px' }}>
            <div>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: 'var(--color-text-primary)',
                marginBottom: '4px'
              }}>
                3+
              </div>
              <div className="text-small" style={{ color: 'var(--color-text-secondary)' }}>
                Years Experience
              </div>
            </div>
            <div>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: 'var(--color-text-primary)',
                marginBottom: '4px'
              }}>
                4
              </div>
              <div className="text-small" style={{ color: 'var(--color-text-secondary)' }}>
                Products Shipped
              </div>
            </div>
            <div>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: 'var(--color-text-primary)',
                marginBottom: '4px'
              }}>
                64%
              </div>
              <div className="text-small" style={{ color: 'var(--color-text-secondary)' }}>
                D7 Retention (Tupi)
              </div>
            </div>
            <div>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: 'var(--color-text-primary)',
                marginBottom: '4px'
              }}>
                52
              </div>
              <div className="text-small" style={{ color: 'var(--color-text-secondary)' }}>
                NPS Score
              </div>
            </div>
          </div>
          
          <motion.a
            href="mailto:mathis.laurent.3m@gmail.com"
            className="btn btn-primary"
            style={{ 
              marginTop: '24px',
              textDecoration: 'none',
              fontSize: '16px'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk Product
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default RPMSection;