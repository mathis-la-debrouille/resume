import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Plane, 
  Film, 
  Music, 
  Book, 
  Calendar,
  Star,
  Clock,
  MapPin
} from 'lucide-react';

const PersonalSection = () => {
  const personalData = {
    blog: [
      {
        id: 1,
        title: 'The Future of Web Development: WebAssembly and Beyond',
        excerpt: 'Exploring how WebAssembly is revolutionizing web performance and opening new possibilities for web applications.',
        date: '2024-01-15',
        readTime: '8 min read',
        tags: ['WebAssembly', 'Performance', 'Future Tech']
      },
      {
        id: 2,
        title: 'Building Immersive 3D Experiences with Three.js',
        excerpt: 'A comprehensive guide to creating stunning 3D web experiences from concept to deployment.',
        date: '2024-01-08',
        readTime: '12 min read',
        tags: ['Three.js', 'WebGL', 'Tutorial']
      },
      {
        id: 3,
        title: 'The Art of Micro-Interactions in Modern UI Design',
        excerpt: 'How subtle animations and feedback can dramatically improve user experience and interface design.',
        date: '2024-01-02',
        readTime: '6 min read',
        tags: ['UI/UX', 'Animation', 'Design']
      }
    ],
    trips: [
      {
        id: 1,
        destination: 'Tokyo, Japan',
        date: 'December 2023',
        duration: '10 days',
        highlights: ['Cherry Blossom Festival', 'Tech District Exploration', 'Traditional Temples'],
        image: '/api/placeholder/300/200'
      },
      {
        id: 2,
        destination: 'Reykjavik, Iceland',
        date: 'September 2023',
        duration: '7 days',
        highlights: ['Northern Lights', 'Blue Lagoon', 'Gullfoss Waterfall'],
        image: '/api/placeholder/300/200'
      },
      {
        id: 3,
        destination: 'Barcelona, Spain',
        date: 'June 2023',
        duration: '5 days',
        highlights: ['Sagrada Familia', 'Park Güell', 'Gothic Quarter'],
        image: '/api/placeholder/300/200'
      }
    ],
    movies: [
      {
        id: 1,
        title: 'Dune: Part Two',
        director: 'Denis Villeneuve',
        year: 2024,
        rating: 9.2,
        genre: 'Sci-Fi',
        watchedDate: '2024-01-20',
        review: 'Visually stunning continuation of the epic saga with incredible world-building.'
      },
      {
        id: 2,
        title: 'Oppenheimer',
        director: 'Christopher Nolan',
        year: 2023,
        rating: 8.8,
        genre: 'Biography',
        watchedDate: '2024-01-15',
        review: 'Masterful storytelling about one of history\'s most complex figures.'
      },
      {
        id: 3,
        title: 'Spider-Man: Across the Spider-Verse',
        director: 'Joaquim Dos Santos',
        year: 2023,
        rating: 9.5,
        genre: 'Animation',
        watchedDate: '2024-01-10',
        review: 'Revolutionary animation techniques that push the boundaries of the medium.'
      }
    ],
    music: [
      {
        id: 1,
        artist: 'Radiohead',
        album: 'OK Computer',
        track: 'Paranoid Android',
        genre: 'Alternative Rock',
        lastPlayed: '2024-01-21',
        playCount: 127
      },
      {
        id: 2,
        artist: 'Aphex Twin',
        album: 'Selected Ambient Works',
        track: 'Xtal',
        genre: 'Electronic',
        lastPlayed: '2024-01-20',
        playCount: 89
      },
      {
        id: 3,
        artist: 'Miles Davis',
        album: 'Kind of Blue',
        track: 'So What',
        genre: 'Jazz',
        lastPlayed: '2024-01-19',
        playCount: 156
      }
    ],
    books: [
      {
        id: 1,
        title: 'Klara and the Sun',
        author: 'Kazuo Ishiguro',
        genre: 'Science Fiction',
        status: 'Currently Reading',
        progress: 68,
        startDate: '2024-01-10',
        rating: null,
        review: 'Fascinating exploration of AI consciousness and human connection.'
      },
      {
        id: 2,
        title: 'The Design of Everyday Things',
        author: 'Don Norman',
        genre: 'Design',
        status: 'Completed',
        progress: 100,
        startDate: '2023-12-15',
        completedDate: '2024-01-05',
        rating: 4.5,
        review: 'Essential reading for anyone interested in user-centered design principles.'
      },
      {
        id: 3,
        title: 'Atomic Habits',
        author: 'James Clear',
        genre: 'Self-Development',
        status: 'Completed',
        progress: 100,
        startDate: '2023-11-20',
        completedDate: '2023-12-10',
        rating: 4.8,
        review: 'Practical and actionable approach to building good habits and breaking bad ones.'
      }
    ]
  };

  return (
    <section className="min-h-screen py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="playfair text-5xl font-bold mb-4">Personal Universe</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            A glimpse into my interests, travels, and cultural consumption outside of work
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-20">
          {/* Blog Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-3 text-3xl font-bold mb-8">
              <BookOpen className="w-8 h-8 text-green-400" />
              Latest Blog Posts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalData.blog.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glassmorphism-card p-6 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                >
                  <h4 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h4>
                  <p className="text-tertiary text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-secondary mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Trips Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-3 text-3xl font-bold mb-8">
              <Plane className="w-8 h-8 text-blue-400" />
              Recent Adventures
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalData.trips.map((trip, index) => (
                <motion.div
                  key={trip.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glassmorphism-card overflow-hidden hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-blue-400 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      {trip.destination}
                    </div>
                    <div className="flex justify-between text-xs text-secondary mb-4">
                      <span>{trip.date}</span>
                      <span>{trip.duration}</span>
                    </div>
                    <div className="space-y-1">
                      {trip.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-tertiary">
                          <div className="w-1 h-1 bg-blue-400 rounded-full" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Movies and Music Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Movies Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="flex items-center gap-3 text-3xl font-bold mb-8">
                <Film className="w-8 h-8 text-purple-400" />
                Recently Watched
              </h3>
              <div className="space-y-4">
                {personalData.movies.map((movie, index) => (
                  <motion.div
                    key={movie.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glassmorphism-card p-4 hover:scale-[1.01] transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{movie.title}</h4>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm">{movie.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm text-secondary mb-2">
                      {movie.director} • {movie.year} • {movie.genre}
                    </div>
                    <p className="text-xs text-tertiary line-clamp-2">{movie.review}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Music Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="flex items-center gap-3 text-3xl font-bold mb-8">
                <Music className="w-8 h-8 text-pink-400" />
                Current Playlist
              </h3>
              <div className="space-y-4">
                {personalData.music.map((track, index) => (
                  <motion.div
                    key={track.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glassmorphism-card p-4 hover:scale-[1.01] transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{track.track}</h4>
                      <span className="text-xs text-secondary">{track.playCount} plays</span>
                    </div>
                    <div className="text-sm text-secondary mb-1">
                      {track.artist} • {track.album}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-400 rounded-full">
                        {track.genre}
                      </span>
                      <span className="text-xs text-tertiary">
                        Last played: {new Date(track.lastPlayed).toLocaleDateString()}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Books Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-3 text-3xl font-bold mb-8">
              <Book className="w-8 h-8 text-orange-400" />
              Reading List
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalData.books.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glassmorphism-card p-6 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold line-clamp-2">{book.title}</h4>
                    {book.rating && (
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm">{book.rating}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-secondary mb-2">{book.author}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full">
                      {book.genre}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      book.status === 'Currently Reading' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {book.status}
                    </span>
                  </div>
                  {book.status === 'Currently Reading' && (
                    <div className="mb-3">
                      <div className="flex justify-between text-xs text-secondary mb-1">
                        <span>Progress</span>
                        <span>{book.progress}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className="h-full bg-green-400 rounded-full transition-all duration-1000"
                          style={{ width: `${book.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                  <p className="text-xs text-tertiary line-clamp-3">{book.review}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;