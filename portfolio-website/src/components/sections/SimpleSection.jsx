import { motion } from 'framer-motion';

const SimpleSection = ({ title, description, children }) => {
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
          <h2 className="heading-section">{title}</h2>
          <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            {description}
          </p>
        </motion.div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {children || (
            <div className="glass-card text-center" style={{ padding: '64px 32px' }}>
              <p className="text-body">
                This section is under construction. More content coming soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SimpleSection;