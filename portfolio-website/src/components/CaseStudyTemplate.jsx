import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, FileText, PlayCircle } from 'lucide-react';

const CaseStudyTemplate = ({ caseStudy, onBack }) => {
  if (!caseStudy) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="case-study-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        zIndex: 1000,
        overflow: 'auto'
      }}
    >
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center mb-lg"
          style={{ gap: '16px' }}
        >
          <button
            onClick={onBack}
            className="glass-card"
            style={{
              padding: '8px',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="heading-section" style={{ margin: 0 }}>
            {caseStudy.title} Case Study
          </h1>
        </motion.div>

        {/* TL;DR Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card mb-xl"
        >
          <h2 className="heading-card">TL;DR</h2>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            {caseStudy.tldr.map((point, index) => (
              <li key={index} className="text-body" style={{ marginBottom: '8px' }}>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Problem Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card mb-xl"
        >
          <h2 className="heading-card">Problem & Users</h2>
          <div className="text-body" style={{ lineHeight: '1.8', marginBottom: '24px' }}>
            <strong>Problem:</strong> {caseStudy.problem}
          </div>
          <div className="text-body" style={{ lineHeight: '1.8', marginBottom: '24px' }}>
            <strong>Users & JTBD:</strong> {caseStudy.users}
          </div>
          <div className="text-body" style={{ lineHeight: '1.8' }}>
            <strong>Success Metrics:</strong> {caseStudy.successMetrics}
          </div>
        </motion.div>

        {/* MVP & Core Loop */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-card mb-xl"
        >
          <h2 className="heading-card">MVP & Core Loop</h2>
          <div className="text-body" style={{ lineHeight: '1.8' }}>
            {caseStudy.mvp}
          </div>
        </motion.div>

        {/* Experiments */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-card mb-xl"
        >
          <h2 className="heading-card">Key Experiments</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {caseStudy.experiments.map((exp, index) => (
              <div key={index} className="glass-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '16px', alignItems: 'start' }}>
                  <div>
                    <div className="text-small" style={{ color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
                      Hypothesis
                    </div>
                    <div className="text-body" style={{ fontSize: '14px' }}>
                      {exp.hypothesis}
                    </div>
                  </div>
                  <div>
                    <div className="text-small" style={{ color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
                      Metric
                    </div>
                    <div className="text-body" style={{ fontSize: '14px' }}>
                      {exp.metric}
                    </div>
                  </div>
                  <div>
                    <div className="text-small" style={{ color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
                      Result
                    </div>
                    <div className="text-body" style={{ fontSize: '14px' }}>
                      {exp.result}
                    </div>
                  </div>
                  <div>
                    <div className="text-small" style={{ color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
                      Decision
                    </div>
                    <div className="text-body" style={{ fontSize: '14px' }}>
                      {exp.decision}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* My Role */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="glass-card mb-xl"
        >
          <h2 className="heading-card">My Role & Scope</h2>
          <div className="text-body" style={{ lineHeight: '1.8' }}>
            {caseStudy.myRole}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="glass-card mb-xl"
        >
          <h2 className="heading-card">Next Steps / What I'd Do at Meta</h2>
          <div className="text-body" style={{ lineHeight: '1.8' }}>
            {caseStudy.nextSteps}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center flex-wrap"
          style={{ gap: '16px' }}
        >
          {caseStudy.links?.prd && (
            <a href={caseStudy.links.prd} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              View PRD
            </a>
          )}
          {caseStudy.links?.figma && (
            <a href={caseStudy.links.figma} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              View Figma
            </a>
          )}
          {caseStudy.links?.demo && (
            <a href={caseStudy.links.demo} className="btn btn-tertiary" target="_blank" rel="noopener noreferrer">
              <PlayCircle size={16} />
              Live Demo
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CaseStudyTemplate;