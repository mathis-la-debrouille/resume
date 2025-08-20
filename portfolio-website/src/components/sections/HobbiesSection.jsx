import { motion } from 'framer-motion';
import { 
  Film, 
  Music, 
  Youtube,
  Piano,
  Activity,
  Mountain,
  ChefHat,
  BookOpen,
  Lightbulb,
  Users,
  Brain,
  ExternalLink,
  Play
} from 'lucide-react';
import pianoVideo from '../../assets/piano.mp4';
import guitarPhoto from '../../assets/guitar.jpg';
import guitartransparentphoto from '../../assets/guitar.png';
import tripPhoto from '../../assets/trip.mp4';
import tripStorePhoto from '../../assets/trip_store.jpg';
import carPhoto from '../../assets/car.png';
// import super8Photo from '../../assets/super8.png';

import lms from '../../assets/lms.jpg';
import lll from '../../assets/lll.jpg';
import tpobaw from '../../assets/tpobaw.jpg';
import br2049 from '../../assets/br2049.jpg';


const HobbiesSection = () => {
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
          <h2 className="heading-section">What I love</h2>
          <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            The passions and activities that fuel my creativity and keep me balanced
          </p>
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
              borderBottomLeftRadius: '0px',
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
              fontWeight: '600',
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
                  As its not my motivation its also <span style={{ fontWeight: 'bold', color: 'white' }}>a way to connect with others.</span>
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
                {'<3'} Chamber of reflection - Your anxiety buddy
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
              fontWeight: '600',
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
                  top: '25%',
                  left: '30%',
                  width: 'clamp(140px, 20vw, 200px)',
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
                Im watching movies a lot of movies : <a href="https://letterboxd.com/mathis__/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-secondary)', textDecoration: 'underline' }}>@mathis__</a>
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
                    border: '31px solid rgba(255, 255, 255, 0.1)',
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

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-xl"
        >
          <div className="glass-card" style={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            padding: '32px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              inset: '-25px',
              background: 'rgba(255, 255, 255, 0.15)',
              borderRadius: 'var(--radius-xl)',
              filter: 'blur(50px)',
              zIndex: -1
            }} />
            
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '20px',
              zIndex: 10,
              filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 30px rgba(255, 255, 255, 0.4))'
            }}>
              <Brain size={32} style={{ color: 'rgba(255, 255, 255, 0.9)' }} />
            </div>
            <p style={{
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: 'var(--color-text-secondary)',
              lineHeight: '1.6',
              margin: 0
            }}>
I think, working in a team is not just about the work, it's about the people, finding those which you'll have good moments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HobbiesSection;