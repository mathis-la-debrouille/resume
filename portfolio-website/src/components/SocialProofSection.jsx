import { motion } from 'framer-motion';
import { Trophy, Users, Server } from 'lucide-react';

const SocialProofSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Epitech Experiences',
      subtitle: '2nd place',
      description: '120 beta users'
    },
    {
      icon: Users,
      title: 'Tupi App',
      subtitle: 'D7 64% retention',
      description: 'NPS 52'
    },
    {
      icon: Server,
      title: 'Brigad CI/CD',
      subtitle: '99.9% SLA',
      description: '36% speed improvement'
    }
  ];

  return (
    <section style={{ padding: '24px 0', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center items-center flex-wrap"
          style={{ gap: '48px' }}
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="flex items-center"
                style={{ gap: '12px' }}
              >
                <div style={{
                  padding: '8px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}>
                  <Icon size={16} style={{ color: 'var(--color-text-secondary)' }} />
                </div>
                <div>
                  <div style={{ 
                    fontSize: '14px', 
                    fontWeight: '600', 
                    color: 'var(--color-text-primary)'
                  }}>
                    {achievement.subtitle}
                  </div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: 'var(--color-text-secondary)'
                  }}>
                    {achievement.title} • {achievement.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;