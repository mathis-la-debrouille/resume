import { motion } from 'framer-motion';
import { MapPin, Calendar, Coffee, Code, Heart, Play, ExternalLink, Brain } from 'lucide-react';
import profilePhoto from '../../assets/profile-photo.jpg';
import workPhoto from '../../assets/work-photo.jpg';
import creativePhoto from '../../assets/creative-photo.jpg';
import pianoVideo from '../../assets/piano.mp4';
import guitarPhoto from '../../assets/guitar.jpg';
import guitartransparentphoto from '../../assets/guitar.png';
import tripPhoto from '../../assets/trip.mp4';
import tripStorePhoto from '../../assets/trip_store.jpg';
import carPhoto from '../../assets/car.png';
import super8Photo from '../../assets/super8.png';
import lms from '../../assets/lms.jpg';
import lll from '../../assets/lll.jpg';
import tpobaw from '../../assets/tpobaw.jpg';
import br2049 from '../../assets/br2049.jpg';

const WhoIAmSection = () => {
  const personalInfo = [
    {
      icon: MapPin,
      label: 'Based in',
      value: 'Paris, France (open to relocation)'
    },
    {
      icon: Calendar,
      label: 'Experience',
      value: '3+ years (teaching, intern→DevOps, founder)'
    },
    {
      icon: Code,
      label: 'Tech',
      value: '12+ languages & frameworks'
    },
    {
      icon: Heart,
      label: 'Passion',
      value: 'Product & Technology'
    }
  ];

  const traits = [
    'Product-minded',
    'Tech-fluent',
    'User-centered',
    'Data-driven',
    'Team Leader',
    'Continuous Learner'
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
          <h2 className="heading-section">Who I Am</h2>
        </motion.div>

        <div className="grid grid-2" style={{ maxWidth: '1200px', margin: '0 auto', gap: '48px' }}>
          {/* Left Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            {/* Main Profile Image */}
            <div 
              className="glass-card"
              style={{
                height: '600px',
                background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '0'
              }}
            >
              <div style={{
                position: 'absolute',
                inset: '0',
                background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                opacity: '0.8'
              }} />
              <img 
                src={profilePhoto} 
                alt="Mathis Laurent - Product Manager"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-lg)'
                }}
              />
            </div>

                        {/* Secondary Images Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div 
                className="glass-card"
                style={{
                  height: '180px',
                  background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  padding: '0'
                }}
              >
                <img 
                  src={workPhoto} 
                  alt="Mathis at work"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-lg)'
                  }}
                />
              </div>
              
              <div 
                className="glass-card"
                style={{
                  height: '180px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  opacity: '0.8',
                  padding: '0'
                }}
              >
                <img 
                  src={creativePhoto} 
                  alt="Mathis in creative mode"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-lg)'
                  }}
                />
              </div>
            </div>

            {/* Video Embed */}
            <div 
              className="glass-card"
              style={{
                height: '200px',
                background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
                position: 'relative',
                overflow: 'hidden',
                padding: '0',
                marginTop: '24px'
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/iGcuANERHGc?controls=1&rel=0&modestbranding=1"
                title="Introduction Video"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: 'var(--radius-lg)'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Description */}
            <p style={{ 
              fontSize: '14px', 
              marginTop: '12px', 
              textAlign: 'center',
              lineHeight: '1.4',
              color: 'white'
            }}>
              I spoke at a debate event and edited a short recap video
            </p>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            {/* About Text */}
            <div className="glass-card">
              <h3 className="heading-card mb-md">Hello! I'm Mathis</h3>
              <div className="text-body" style={{ lineHeight: '1.8', marginBottom: '24px' }}>
                <p style={{ marginBottom: '16px' }}>
                  I'm a curious and driven Product Manager with a strong technical background. I started with hands-on development and quickly realized that what I love most is building meaningful products that live at the intersection of tech, people, and vision.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  I've co-founded projects like Tupi, a gamified ecological app, and worked on fintech tools like Valyo. I've pitched in front of juries, fixed broken demos overnight, and pushed through jungle phases where everything still had to be built.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  What drives me is impact. I want to build tools that make sense, that people love to use, and that solve real problems. I'm currently looking for early-stage missions where I can bring both vision and execution.
                </p>
              </div>
            </div>

            {/* Personal Stats */}
            <div className="glass-card">
              <h4 className="heading-card mb-md" style={{ fontSize: '1.25rem' }}>Quick Facts</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                {personalInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                      style={{ gap: '16px' }}
                    >
                      <div style={{
                        padding: '8px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }}>
                        <Icon size={16} style={{ color: 'var(--color-text-secondary)' }} />
                      </div>
                      <div>
                        <div className="text-small" style={{ color: 'var(--color-text-secondary)' }}>
                          {info.label}
                        </div>
                        <div className="text-body" style={{ color: 'var(--color-text-primary)', fontWeight: '500' }}>
                          {info.value}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Personality Traits */}
            <div className="glass-card">
              <h4 className="heading-card mb-md" style={{ fontSize: '1.25rem' }}>What Defines Me</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {traits.map((trait, index) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="tag"
                    style={{
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I Love Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-xl"
          style={{ marginTop: '80px' }}
        >
          <h2 className="heading-section">What I love</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Card 1: Playing for me */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ 
              padding: '20px',
              position: 'relative',
              width: '85%',
              height: '400px',
              marginLeft: '10%',
              marginRight: '5%',
              borderTop: '2px solid rgba(255, 255, 255, 0.1)',
              borderLeft: '0px solid rgba(255, 255, 255, 0.1)',
              borderRight: '2px solid rgba(255, 255, 255, 0.1)',
              borderBottom: '0px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              overflow: 'visible'
            }}
            whileHover={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 className="heading-card" style={{ 
              color: 'white', 
              fontSize: '40px', 
              position: 'absolute',
              top: '15px',
              right: '0.5%',
              transform: 'translateX(-50%)',
              fontFamily: 'var(--font-serif)',
              fontWeight: '400',
              margin: 0,
              zIndex: 10
            }}>
              Playing for me
            </h3>
            
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 20 }}
                transition={{ duration: 0.4, delay: 0 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  top: '-5%',
                  left: '-20%',
                  width: 'clamp(70px, 15vw, 200px)',
                  height: 'clamp(105px, 30vw, 250px)',
                  zIndex: 5,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(101, 98, 98, 0.75)'
                }}
              >
                <img
                  src={guitarPhoto}
                  alt="Description of image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  top: '-20%',
                  right: '-15%',
                  width: 'clamp(70px, 15vw, 200px)',
                  height: 'clamp(105px, 14vw, 180px)',
                  zIndex: 5,
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={guitartransparentphoto}
                  alt="Description of image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  top: '10%',
                  left: '-12%',
                  width: 'clamp(140px, 40vw, 500px)',
                  height: 'clamp(84px, 20vw, 300px)',
                  zIndex: 2,
                  transform: 'rotate(3deg)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 0px 50px rgba(122, 151, 118, 0.49)'
                }}
                whileHover={{
                  boxShadow: '0 0px 60px rgba(151, 133, 101, 0.7)',
                  zIndex: 10
                }}
              >
                <video
                  src={pianoVideo}
                  controls
                  autoPlay
                  loop
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </motion.div>

              {/* YouTube Video Link */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1, delay: 0 }}
                viewport={{ once: true }}
                onClick={() => window.open('https://www.youtube.com/watch?v=Dkfy58w6Tok', '_blank')}
                style={{
                  position: 'absolute',
                  bottom: '0%',
                  left: '25%',
                  width: 'clamp(120px, 15vw, 200px)',
                  height: 'clamp(68px, 10vw, 120px)',
                  zIndex: 4,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 0px 10px rgba(101, 101, 151, 0.49)',
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
                whileHover={{
                  boxShadow: '0 0px 60px rgba(101, 101, 151, 0.7)'
                }}
              >
                <img
                  src="https://img.youtube.com/vi/Dkfy58w6Tok/hqdefault.jpg"
                  alt="YouTube Video Thumbnail"
                  style={{
                    width: '100%',
                    height: '110%',
                    objectFit: 'cover'
                  }}
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  top: '45%',
                  right: '5%',
                  width: 'clamp(42px, 30vw, 400px)',
                  height: 'clamp(28px, 4vw, 40px)',
                  zIndex: 3,
                  transform: 'rotate(-5deg)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(12px, 1.2vw, 16px)',
                  fontWeight: '500',
                  backgroundColor: 'transparent',
                  color: 'var(--color-text-secondary)',
                  textAlign: 'center',
                  whiteSpace: 'pre-line',
                }}
              >
                <div>
                  Completly<span style={{ fontWeight: 'bold', color: 'white' }}> Instrument dependant.</span>
                  <br/>
                  When I <span style={{ fontWeight: 'bold', color: 'white' }}>moved to Canada</span> for a year, my first move was to search for any of them.
                  <br/>
                  Its <span style={{ fontWeight: 'bold', color: 'white' }}>vital</span>, it is usefull to have a way to express yourself.
                  <br/>
                </div>
              </motion.div>

              {/* Highlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  padding: '10px',
                  bottom: '-10%',
                  right: '0%',
                  height: 'clamp(35px, 5vw, 50px)',
                  zIndex: 3,
                  transform: 'rotate(-3deg)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(12px, 1.2vw, 14px)',
                  fontWeight: '500',
                  fontStyle: 'italic',
                  filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <a href="https://www.youtube.com/watch?v=s3slVTYZOzc&list=RDs3slVTYZOzc&start_radio=1" target="_blank" style={{ color: 'white', textDecoration: 'none', cursor: 'pointer'}}>{'<3'} Chamber of reflection - Your anxiety buddy</a>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2: My kind of trip: Autostop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ 
              padding: '20px',
              position: 'relative',
              width: '80%',
              marginLeft: '10%',
              height: '440px',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              borderBottom: '0px solid rgba(255, 255, 255, 0.1)',
              borderBottomRightRadius: '0px',
              borderRadius: '16px',
              overflow: 'visible'
            }}
            whileHover={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 className="heading-card" style={{ 
              color: 'white', 
              fontSize: '40px', 
              position: 'absolute',
              top: '15px',
              left: '40px',
              fontFamily: 'var(--font-serif)',
              fontWeight: '400',
              margin: 0,
              zIndex: 10
            }}>
              My kind of trip: Autostop
            </h3>
            
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              {/* Text - Far left, middle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '7%',
                  width: 'clamp(60px, 25vw, 350px)',
                  height: 'clamp(40px, 6vw, 60px)',
                  zIndex: 2,
                  transform: 'translateY(-50%) rotate(0deg)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(12px, 1.2vw, 16px)',
                  fontWeight: '500',
                  backgroundColor: 'transparent',
                  color: 'var(--color-text-secondary)',
                  textAlign: 'center',
                  whiteSpace: 'pre-line'
                }}
              >
                <div>
                  I had a week with no plans,
                  <br/>
                  so I decided to <span style={{ fontWeight: 'bold', color: 'white' }}>hitchhike to the south of France.</span>
                  <br/>
                  I met <span style={{ fontWeight: 'bold', color: 'white' }}>amazing people</span>, and it's a fantastic way to discover beautiful places 
                  <br/>
                  and linger in spots where you normally wouldn't.
                  <br/>
                  <span style={{ fontWeight: 'bold', color: 'white' }}>It's a way to connect with others.</span>
                </div>
              </motion.div>

              {/* Photo 1 - Bottom center-left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  bottom: '-7%',
                  right: '-10%',
                  width: 'clamp(140px, 20vw, 300px)',
                  height: 'clamp(95px, 30vw, 500px)',
                  zIndex: 3,
                  transform: 'rotate(2deg)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(135, 206, 235, 0.3)',
                  boxShadow: '0 0px 60px rgba(101, 151, 101, 0.48)'
                }}
              >
                <video
                  src={tripPhoto}
                  muted
                  autoPlay
                  loop
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </motion.div>

              {/* Photo 2 - Top right area */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  bottom: '-10%',
                  right: '15%',
                  width: 'clamp(160px, 24vw, 240px)',
                  height: 'clamp(110px, 16vw, 200px)',
                  zIndex: 4,
                  transform: 'rotate(-1deg)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(135, 206, 235, 0.3)'
                }}
              >
                <img
                  src={tripStorePhoto}
                  alt="Trip photo 2"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  bottom: '-25%',
                  left: '-15%',
                  width: 'clamp(160px, 24vw, 240px)',
                  height: 'clamp(110px, 16vw, 200px)',
                  zIndex: 4,
                  transform: 'rotate(-1deg)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={carPhoto}
                  alt="Car photo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Card 3: Letterboxd addict */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ 
              padding: '20px',
              position: 'relative',
              width: '100%',
              height: '340px',
              marginBottom: '10%',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              overflow: 'visible'
            }}
          >
            {/* Letterboxd-style title with box and circles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{ once: true }}
              style={{
                position: 'absolute',
                top: '-10%',
                left: '32%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#2c3440',
                padding: '16px 32px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                zIndex: 10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(44, 52, 64, 0.8)'
              }}
            >
              {/* Three overlapping circles like Letterboxd logo */}
              <div style={{ display: 'flex', marginRight: '24px', position: 'relative' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#ff8500',
                  position: 'relative',
                  zIndex: 3
                }} />
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#00e054',
                  position: 'relative',
                  marginLeft: '-12px',
                  zIndex: 2
                }} />
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#00b8ff',
                  position: 'relative',
                  marginLeft: '-12px',
                  zIndex: 1
                }} />
              </div>
              
              {/* Letterboxd text */}
              <span style={{
                color: 'white',
                fontSize: '32px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: '700',
                letterSpacing: '-1px'
              }}>
                Letterboxd addict
              </span>
            </motion.div>
            
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  top: '15%',
                  left: '37%',
                  width: 'clamp(140px, 25vw, 300px)',
                  height: 'clamp(25px, 3.5vw, 35px)',
                  zIndex: 2,
                  transform: 'rotate(0deg)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(12px, 1.2vw, 14px)',
                  fontWeight: '500',
                  backgroundColor: 'transparent',
                  color: 'var(--color-text-secondary)',
                  textAlign: 'center',
                  whiteSpace: 'pre-line'
                }}
              >
                <div>
                Im watching a lot of movies: <a href="https://letterboxd.com/mathis__/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline', whiteSpace: 'nowrap',textShadow: '0 0 10px rgba(255, 255, 255, 0.8)'  }}>@mathis__</a>
                </div>
              </motion.div>

              {/* Movie Posters Container */}
              <div
                style={{
                  position: 'absolute',
                  top: '30%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'clamp(15px, 3.75vw, 30px)', // Responsive gap between photos (scaled x1.5)
                  width: 'fit-content'
                }}
              >
                {/* Photo 1 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    width: 'clamp(112px, 15vw, 187px)',
                    height: 'clamp(168px, 22.5vw, 281px)',
                    zIndex: 3,
                    transform: 'rotate(-3deg)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={lms}
                    alt="Movie poster 1"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </motion.div>

                {/* Photo 2 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{
                    width: 'clamp(112px, 15vw, 187px)',
                    height: 'clamp(168px, 22.5vw, 281px)',
                    zIndex: 4,
                    transform: 'rotate(2deg)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={lll}
                    alt="Movie poster 2"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </motion.div>

                {/* Photo 3 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  style={{
                    width: 'clamp(112px, 15vw, 187px)',
                    height: 'clamp(168px, 22.5vw, 281px)',
                    zIndex: 3,
                    transform: 'rotate(-1deg)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={tpobaw}
                    alt="Movie poster 3"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </motion.div>

                {/* Photo 4 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  style={{
                    width: 'clamp(112px, 15vw, 187px)',
                    height: 'clamp(168px, 22.5vw, 281px)',
                    zIndex: 4,
                    transform: 'rotate(3deg)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={br2049}
                    alt="Movie poster 4"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhoIAmSection;