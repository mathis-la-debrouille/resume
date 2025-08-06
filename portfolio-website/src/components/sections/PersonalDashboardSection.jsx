import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Film, 
  Music, 
  MapPin, 
  Calendar,
  Tag,
  Clock,
  Star,
  X,
  ArrowLeft,
  Code
} from 'lucide-react';

const PersonalDashboardSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

  const blogPosts = [
    {
      id: 1,
      title: "Blade Runner 2049: A World Too Close",
      excerpt: "Blade Runner 2049 doesn't just imagine the future. It gently warns us about the present - identity, memory, loneliness. Plus, have you seen the short films that expand the universe?",
      content: `**Blade Runner 2049** is a film I keep thinking about.

It's not just beautiful, it's disturbing in a quiet, poetic way. The world feels empty, yet painfully familiar - synthetic love, blurred memories, forgotten people. It talks about identity in a society that replaces more than it remembers.

And then there are the **three short prequels** that came out before the film. *Black Out 2022* (animated), *2036: Nexus Dawn*, and *2048: Nowhere to Run* - each one adds texture to a universe that feels all too real. They're worth watching.

This isn't a review. It's a small nudge to revisit the film - or discover it if you haven't.`,
      category: "cinema",
      theme: "movies",
      date: "2025-07-31",
      readTime: "4 min",
      rating: 5,
      tags: ["cinema", "society", "dystopia"],
      image: null,
      icon: Film
    },
    {
      id: 2,
      title: "Berlin by Scooter",
      excerpt: "I didn't fall in love with Berlin. But I did ride a lot. The people? Super friendly. The vibe? A bit strange. But worth the detour.",
      content: `**Berlin** surprised me.

Not really the city itself - I found the urbanism odd, maybe too stretched, too undefined. But I met a lot of kind people. Warm, open, easy to talk to. It changes everything.

Also, I basically explored it all **by trottinette** (e-scooter). Which made the weird urban layout way more fun.

Would I go back? Maybe. For the people. And the movement.`,
      category: "travel",
      theme: "travels",
      date: "2025-07-30",
      readTime: "3 min",
      rating: 2,
      tags: ["travel", "urbanism", "scooter"],
      image: null,
      icon: MapPin
    },
    {
      id: 3,
      title: "Currently Reading: Cracking the PM Interview",
      excerpt: "A very insightful book if you're curious about the PM world. I'm not done with it yet, but it's already giving me a lot.",
      content: `Right now I'm reading **"Cracking the PM Interview"**. And even though I haven't finished it, I can already say it's *extremely useful*.

It breaks down what it means to be a Product Manager, what recruiters look for, and how to position yourself clearly. The examples are practical, the structure is clean.

If you're even slightly curious about the PM world, this is a great book to have in your hands.`,
      category: "books",
      theme: "books",
      date: "2025-07-28",
      readTime: "2 min",
      rating: 5,
      tags: ["books", "product-management", "career"],
      image: null,
      icon: BookOpen
    },
    {
      id: 4,
      title: "I Built This Website",
      excerpt: "This site is more than code. It taught me a lot about how to tell my story, and how to stand out as a PM.",
      content: `Creating this site was honestly fun. I used **Vite** and **React**, which made everything super fast to set up and iterate.

But beyond the tech, what I really learned was how to **present myself**, especially in the Product Management world. How to balance clarity, authenticity, and uniqueness. How to sell without pretending.

I learned a lot, and I'm proud of the result. You're on it now.`,
      category: "personal",
      theme: "Learning",
      date: "2025-07-25",
      readTime: "3 min",
      rating: 5,
      tags: ["portfolio", "vite", "pm", "self-presentation"],
      image: null,
      icon: Code
    },
    {
      id: 5,
      title: "Au revoir mon amour",
      excerpt: "Zélie's 'Au revoir mon amour' is short, delicate, and strangely moving. Sometimes a voice hits you and doesn't let go.",
      content: `The song **"Au revoir mon amour"** by **Zélie** is only a few minutes long, but it stayed with me for hours.

There's something about her voice. It feels light but full. Delicate but grounded. It resonates somewhere soft.

Music doesn't have to be loud to move you. Sometimes a quiet song is enough.`,
      category: "music",
      theme: "music",
      date: "2025-07-26",
      readTime: "2 min",
      rating: 5,
      tags: ["music", "emotion", "zelie"],
      image: null,
      icon: Music
    },
    {
  id: 6,
  title: 'Sunny Beach Paradox: Sun, Scams, and Slavic Chatter',
  excerpt: 'On Bulgaria’s Sunny Beach, the sun blazes as brightly as the hustle—where every deal feels like a loop of scams and surprises, and the sea breeze carries snippets of Russian and Bulgarian alike.',
  content: `
# Sunny Beach Paradox: Sun, Scams, and Slavic Chatter

Waves gently hit the shore of Sunny Beach, but behind each smile is a practiced sales pitch. The hustle is not mean-spirited; it's a tradition passed down. You get scammed because they were scammed before. It's a cycle that becomes part of the local vibe.

> *Taxi -> 15euro for a 1,5km ride, I tried to negotiate but it was a lost cause, corrupted police appeared*

## The Scam Loop

1. **First Link**: A friendly vendor offers you a “special deal” and you bite.
2. **Second Link**: That vendor learned the trick from someone who learned it from another.
3. **Repeat**: By the end of your holiday, you’re both impressed and amused by the system.

It’s cheeky, it gives Sunny Beach a particular vibe, I did it, but would I do it again? No.

## Lost in Translation (and Language)

Russian flows as freely as Bulgarian. As you practise your Cyrillic phrases, you realize:

- **Bulgarian & Russian kinship**: Shared roots in Slavic tongues make picking up words almost intuitive.
- **Scammer could suddenly speak an Alien language**: When comes the moment you show you see you're being scammed, they speak Alien.

## Media Monotony

You’ll find just **one local TV channel** news, weather, and the occasional cultural program. Everything else is American reruns or Coca-Cola–branded entertainment.

## Why It’s Cool to Feel Lost

- **Adrenaline of ambiguity**: Not knowing exactly what you’re buying or why Spain’s soap ads are on Bulgarian TV—adds a playful uncertainty.
- **Hopeless**: To enjoy your time, you have to be hopeless. Completly cynic but happy at least.

In Sunny Beach, getting lost is the point. So grab your towel, practise your Russian, and let the scam loop serenade you under the Bulgarian sun.
  `,
  category: 'travel',
  theme: 'travels',
  date: '2025-08-06',
  readTime: '4 min',
  rating: 3,
  tags: ['Bulgaria', 'Sunny Beach', 'travel', 'scams', 'language-learning'],
  image: null,
  icon: MapPin
}
  ];

  const themes = [
    { id: 'all', label: 'All Posts', icon: Tag },
    { id: 'books', label: 'Books & Learning', icon: BookOpen },
    { id: 'movies', label: 'Movies & Shows', icon: Film },
    { id: 'music', label: 'Music & Audio', icon: Music },
    { id: 'travels', label: 'Travels & Places', icon: MapPin }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesFilter = activeFilter === 'all' || post.theme === activeFilter;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  const getThemeColor = (theme) => {
    switch (theme) {
      case 'books':
        return 'rgba(16, 185, 129, 0.3)'; // Green
      case 'movies':
        return 'rgba(239, 68, 68, 0.3)'; // Red
      case 'music':
        return 'rgba(147, 51, 234, 0.3)'; // Purple
      case 'travels':
        return 'rgba(59, 130, 246, 0.3)'; // Blue
      default:
        return 'rgba(107, 114, 128, 0.3)'; // Gray
    }
  };

  const getThemeBorder = (theme) => {
    switch (theme) {
      case 'books':
        return 'rgba(16, 185, 129, 0.5)'; // Green
      case 'movies':
        return 'rgba(239, 68, 68, 0.5)'; // Red
      case 'music':
        return 'rgba(147, 51, 234, 0.5)'; // Purple
      case 'travels':
        return 'rgba(59, 130, 246, 0.5)'; // Blue
      default:
        return 'rgba(107, 114, 128, 0.5)'; // Gray
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
          <h2 className="heading-section">Personal Dashboard</h2>
          <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Recent books, movies, music, and travels - my thoughts and discoveries
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ marginBottom: '48px' }}
        >
          {/* Search Bar */}
          <div className="glass-card" style={{ 
            padding: '16px', 
            marginBottom: '24px',
            maxWidth: '600px',
            margin: '0 auto 24px auto'
          }}>
            <div style={{ position: 'relative' }}>
              <Search 
                size={20} 
                style={{ 
                  position: 'absolute', 
                  left: '12px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: 'rgba(255, 255, 255, 0.5)'
                }} 
              />
              <input
                type="text"
                placeholder="Search posts, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 44px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-md)',
                  color: 'white',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Theme Filters */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '12px' 
          }}>
            {themes.map((theme) => {
              const Icon = theme.icon;
              const isActive = activeFilter === theme.id;
              
              return (
                <motion.button
                  key={theme.id}
                  onClick={() => setActiveFilter(theme.id)}
                  className="glass-card"
                  style={{
                    padding: '12px 20px',
                    border: `1px solid ${isActive ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)'}`,
                    background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: isActive ? '600' : '400',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                  {theme.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-2" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {filteredPosts.map((post, index) => {
            const Icon = post.icon;
            
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card"
                style={{
                  background: `linear-gradient(135deg, ${getThemeColor(post.theme)}, rgba(255, 255, 255, 0.05))`,
                  border: `1px solid ${getThemeBorder(post.theme)}`,
                  cursor: 'pointer',
                  overflow: 'hidden'
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPost(post)}
              >
                {/* Header */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Icon size={20} style={{ color: getThemeBorder(post.theme) }} />
                    <span style={{ 
                      fontSize: '12px', 
                      color: getThemeBorder(post.theme),
                      fontWeight: '600',
                      textTransform: 'uppercase'
                    }}>
                      {post.theme}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        size={12} 
                        style={{ 
                          color: i < post.rating ? '#F59E0B' : 'rgba(255, 255, 255, 0.3)',
                          fill: i < post.rating ? '#F59E0B' : 'transparent'
                        }} 
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <h3 className="heading-card" style={{ 
                  marginBottom: '12px',
                  fontSize: '1.1rem',
                  lineHeight: '1.4'
                }}>
                  {post.title}
                </h3>

                <p className="text-body" style={{ 
                  marginBottom: '16px',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '6px',
                  marginBottom: '16px'
                }}>
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="tag"
                      style={{
                        fontSize: '10px',
                        background: `${getThemeColor(post.theme)}`,
                        border: `1px solid ${getThemeBorder(post.theme)}`,
                        color: getThemeBorder(post.theme)
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card text-center"
            style={{ padding: '48px 32px', maxWidth: '600px', margin: '0 auto' }}
          >
            <p className="text-body" style={{ marginBottom: '16px' }}>
              No posts found matching your search criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="btn btn-secondary"
              style={{ fontSize: '14px' }}
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Post Detail Modal */}
        <AnimatePresence>
          {selectedPost && (
            <>
              {/* Background overlay to prevent body scroll */}
              <div
                style={{
                  position: 'fixed',
                  inset: 0,
                  zIndex: 2999
                }}
                onWheel={(e) => e.preventDefault()}
                onTouchMove={(e) => e.preventDefault()}
              />
              <motion.div
                style={{
                  position: 'fixed',
                  inset: 0,
                  backdropFilter: 'blur(20px)',
                  zIndex: 3000,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
              >
              <motion.div
                style={{
                  width: '100%',
                  maxWidth: '800px',
                  height: '100vh',
                  overflowY: 'auto',
                  backdropFilter: 'blur(30px)',
                  position: 'relative'
                }}
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  style={{
                    position: 'fixed',
                    top: '24px',
                    right: '24px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#ffffff',
                    transition: 'all 0.3s ease',
                    zIndex: 20
                  }}
                >
                  <X size={20} />
                </button>

                {/* Article Header */}
                <div style={{
                  padding: '32px 32px 24px 32px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  marginBottom: '24px'
                }}>
                  {/* Theme and Rating */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '16px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {(() => {
                        const Icon = selectedPost.icon;
                        return <Icon size={20} style={{ color: getThemeBorder(selectedPost.theme) }} />;
                      })()}
                      <span style={{ 
                        fontSize: '14px', 
                        color: '#ffffff',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        textAlign: 'center'
                      }}>
                        {selectedPost.theme}
                      </span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={16} 
                          style={{ 
                            color: i < selectedPost.rating ? '#F59E0B' : 'rgba(255, 255, 255, 0.3)',
                            fill: i < selectedPost.rating ? '#F59E0B' : 'transparent'
                          }} 
                        />
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <h1 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '16px',
                    lineHeight: '1.2'
                  }}>
                    {selectedPost.title}
                  </h1>

                  {/* Meta Info */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '20px',
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Calendar size={14} />
                        {new Date(selectedPost.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Clock size={14} />
                        {selectedPost.readTime}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '8px'
                  }}>
                    {selectedPost.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="tag"
                        style={{
                          fontSize: '12px',
                          background: `${getThemeColor(selectedPost.theme)}`,
                          border: `1px solid ${getThemeBorder(selectedPost.theme)}`,
                          color: '#ffffff'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div style={{
                  padding: '0 32px 32px 32px',
                  color: '#ffffff',
                  lineHeight: '1.7',
                  fontSize: '16px'
                }}>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => (
                        <h1 style={{
                          color: '#ffffff',
                          fontSize: '1.8rem',
                          fontWeight: '700',
                          marginTop: '32px',
                          marginBottom: '16px'
                        }}>
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 style={{
                          color: '#ffffff',
                          fontSize: '1.4rem',
                          fontWeight: '600',
                          marginTop: '32px',
                          marginBottom: '16px'
                        }}>
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 style={{
                          color: '#ffffff',
                          fontSize: '1.2rem',
                          fontWeight: '600',
                          marginTop: '24px',
                          marginBottom: '12px'
                        }}>
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p style={{
                          color: '#ffffff',
                          marginBottom: '16px'
                        }}>
                          {children}
                        </p>
                      ),
                      strong: ({ children }) => (
                        <strong style={{
                          color: '#ffffff',
                          fontWeight: '700'
                        }}>
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => (
                        <em style={{
                          color: '#ffffff',
                          fontStyle: 'italic'
                        }}>
                          {children}
                        </em>
                      ),
                      ul: ({ children }) => (
                        <ul style={{
                          marginBottom: '16px',
                          paddingLeft: '24px',
                          color: '#ffffff'
                        }}>
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol style={{
                          marginBottom: '16px',
                          paddingLeft: '24px',
                          color: '#ffffff'
                        }}>
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li style={{
                          marginBottom: '8px',
                          color: '#ffffff'
                        }}>
                          {children}
                        </li>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote style={{
                          borderLeft: '4px solid rgba(255, 255, 255, 0.3)',
                          paddingLeft: '16px',
                          margin: '24px 0',
                          fontStyle: 'italic',
                          color: '#ffffff',
                          backdropFilter: 'blur(10px)',
                          padding: '16px'
                        }}>
                          {children}
                        </blockquote>
                      ),
                      code: ({ children }) => (
                        <code style={{
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          padding: '2px 6px',
                          borderRadius: '0',
                          fontSize: '0.9em',
                          color: '#ffffff'
                        }}>
                          {children}
                        </code>
                      ),
                      pre: ({ children }) => (
                        <pre style={{
                          backdropFilter: 'blur(15px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          padding: '16px',
                          borderRadius: '0',
                          overflow: 'auto',
                          margin: '16px 0',
                          color: '#ffffff'
                        }}>
                          {children}
                        </pre>
                      )
                    }}
                  >
                    {selectedPost.content}
                  </ReactMarkdown>
                </div>
              </motion.div>
            </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PersonalDashboardSection;