import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChefHat, X } from 'lucide-react';

const FlanRecipeCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isAtTop = scrollTop === 0; // Must be exactly at top
      console.log('Scroll position:', scrollTop, 'Is at top:', isAtTop);
      setIsVisible(isAtTop);
      if (!isAtTop) {
        setIsExpanded(false);
        setIsOpen(false);
      }
    };

    // Check initial position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (e) => {
    e.stopPropagation();
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleBackdropClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  };

  return (
    <>
      {/* Unfoldable Recipe Card */}
      <motion.div
        key={isExpanded ? 'expanded' : 'collapsed'}
        style={{
          position: 'fixed',
          top: '25%',
          right: '12px',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          cursor: 'pointer',
          width: '500px',
          maxHeight: '60vh',
          overflowY: 'auto',
          background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.25) 0%, rgba(234, 88, 12, 0.25) 100%)',
          border: '2px solid rgba(249, 115, 22, 0.4)',
          borderRadius: 'var(--radius-xl)',
          backdropFilter: 'blur(25px)',
          padding: '32px'
        }}
        animate={{
          x: isVisible ? (isExpanded ? 50 : 480) : 500,
          opacity: isVisible ? 1 : 0,
          scale: isExpanded ? 1 : 0.95,
          rotate: isExpanded ? -15 : 0
        }}
        whileInView={{
          rotate: isExpanded ? [0, 1578, -15] : 0
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        onClick={handleCardClick}
        whileHover={{ scale: 1.01 }}
      >
        {/* Recipe Content */}
        <div style={{ color: 'white', fontFamily: 'monospace' }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: 'rgba(249, 115, 22, 0.9)',
            marginBottom: '20px',
            textAlign: 'center',
            fontFamily: 'cursive',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}>
            <ChefHat size={32} />
            🥧 Flan Pâtissier Recipe
          </h2>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: 'rgba(249, 115, 22, 0.8)',
              marginBottom: '10px',
              textDecoration: 'underline'
            }}>
              For the Pâte Brisée (Pastry):
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6', fontSize: '14px' }}>
              <li>• 250g plain flour</li>
              <li>• 125g cold butter <span style={{ color: 'rgba(249, 115, 22, 0.7)', fontStyle: 'italic' }}>(cubed!)</span></li>
              <li>• 1 egg yolk</li>
              <li>• 3-4 tbsp cold water</li>
              <li>• Pinch of salt</li>
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: 'rgba(249, 115, 22, 0.8)',
              marginBottom: '10px',
              textDecoration: 'underline'
            }}>
              For the Custard Filling:
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6', fontSize: '14px' }}>
              <li>• 500ml whole milk</li>
              <li>• 4 eggs <span style={{ color: 'rgba(249, 115, 22, 0.7)', fontStyle: 'italic' }}>(room temp!)</span></li>
              <li>• 100g caster sugar</li>
              <li>• 40g cornflour <span style={{ color: 'rgba(249, 115, 22, 0.7)', fontStyle: 'italic' }}>(for thickness)</span></li>
              <li>• 1 vanilla pod or 2 tsp extract</li>
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: 'rgba(249, 115, 22, 0.8)',
              marginBottom: '10px',
              textDecoration: 'underline'
            }}>
              Instructions:
            </h3>
            <ol style={{ paddingLeft: '18px', lineHeight: '1.6', fontSize: '14px' }}>
              <li>Make pastry: Rub butter into flour + salt <span style={{ color: 'rgba(249, 115, 22, 0.7)', fontStyle: 'italic' }}>(like breadcrumbs)</span></li>
              <li>Add egg yolk + water, form dough</li>
              <li>Rest pastry 30 min in fridge</li>
              <li>Roll out & line 23cm tart tin</li>
              <li>Blind bake: 180°C for 15 min <span style={{ color: 'rgba(249, 115, 22, 0.7)', fontStyle: 'italic' }}>(use baking beans!)</span></li>
              <li>Make custard: Heat milk + vanilla</li>
              <li>Whisk eggs, sugar, cornflour separately</li>
              <li>Slowly add hot milk to egg mixture</li>
              <li>Return to pan, cook until thick <span style={{ color: 'rgba(249, 115, 22, 0.7)', fontStyle: 'italic' }}>(stir constantly!)</span></li>
              <li>Pour into pastry case</li>
              <li>Bake 25-30 min until golden on top</li>
            </ol>
          </div>

          <div style={{
            background: 'rgba(249, 115, 22, 0.15)',
            border: '1px solid rgba(249, 115, 22, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            marginTop: '20px'
          }}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: 'rgba(249, 115, 22, 0.9)',
              marginBottom: '8px'
            }}>
              💡 Mathis's Secret Notes:
            </h4>
            <div style={{ fontSize: '13px', lineHeight: '1.5', fontStyle: 'italic' }}>
              <p style={{ margin: '4px 0', color: 'rgba(249, 115, 22, 0.8)' }}>
                "Cold butter = flaky pastry. Trust the process!"
              </p>
              <p style={{ margin: '4px 0', color: 'rgba(249, 115, 22, 0.8)' }}>
                "Blind baking prevents soggy bottom 🤌"
              </p>
              <p style={{ margin: '4px 0', color: 'rgba(249, 115, 22, 0.8)' }}>
                "Cornflour is KEY - makes it slice perfectly"
              </p>
              <p style={{ margin: '4px 0', color: 'rgba(249, 115, 22, 0.8)' }}>
                "Golden top = ready! Don't overbake ✨"
              </p>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '16px',
            color: 'rgba(249, 115, 22, 0.9)'
          }}>
            Bon appétit! 🇫🇷✨
          </div>

          {!isExpanded && (
            <div style={{
              position: 'absolute',
              right: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '6px',
              height: '80px',
              background: 'linear-gradient(to bottom, rgba(249, 115, 22, 0.9), rgba(234, 88, 12, 0.9))',
              borderRadius: '6px 0 0 6px'
            }} />
          )}
        </div>
      </motion.div>

      {/* Click outside to close */}
      {isExpanded && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999
          }}
          onClick={handleBackdropClick}
        />
      )}
    </>
  );
};

export default FlanRecipeCard;