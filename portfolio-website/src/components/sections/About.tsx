import { motion } from "framer-motion";
import { Music, Film, Download, ExternalLink, BarChart3, Users, Target } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import guitarPhoto from "@/assets/guitar.jpg";
import { TravelMap, type TravelMapPin } from "@/components/TravelMap";

const traits = [
  { label: "Data-Driven", icon: BarChart3, description: "Analytics first, always" },
  { label: "User-Centric", icon: Users, description: "Build what's needed, not wanted" },
  { label: "Outcome-Focused", icon: Target, description: "Metrics that matter" },
];

const resources = [
  { label: "Resume", href: "#", icon: Download },
  { label: "LinkedIn", href: "https://linkedin.com", icon: ExternalLink },
  { label: "GitHub", href: "https://github.com", icon: ExternalLink },
];

// Travel locations with city names
const travelLocations = [
  "Vienna", "Sofia", "Budapest", "Sunny Beach", "London", "Edinburgh", "Manchester",
  "Montreal", "Quebec City", "Switzerland", "Berlin", "Munich", "Amsterdam", 
  "Brussels", "Barcelona", "Madrid", "Paris", "Lyon", "Bordeaux", "Nice"
];

const travelPins: TravelMapPin[] = [
  { id: "vienna", label: "Vienna, Austria", coordinates: [16.3738, 48.2082] },
  { id: "budapest", label: "Budapest, Hungary", coordinates: [19.0402, 47.4979] },
  { id: "sofia", label: "Sofia, Bulgaria", coordinates: [23.3219, 42.6977] },
  { id: "sunny_beach", label: "Sunny Beach, Bulgaria", coordinates: [27.7100, 42.6950] },
  { id: "london", label: "London, UK", coordinates: [-0.1278, 51.5074] },
  { id: "montreal", label: "Montreal, Canada", coordinates: [-73.5673, 45.5017] },
  { id: "quebec", label: "Quebec City, Canada", coordinates: [-71.2080, 46.8139] },
  { id: "paris", label: "Paris, France", coordinates: [2.3522, 48.8566] },
  { id: "zurich", label: "Zurich, Switzerland", coordinates: [8.5417, 47.3769] },
  { id: "berlin", label: "Berlin, Germany", coordinates: [13.4050, 52.5200] },
  { id: "amsterdam", label: "Amsterdam, Netherlands", coordinates: [4.9041, 52.3676] },
  { id: "brussels", label: "Brussels, Belgium", coordinates: [4.3517, 50.8503] },
  { id: "barcelona", label: "Barcelona, Spain", coordinates: [2.1734, 41.3851] },
];

export const About = () => {
  return (
    <section id="about" className="min-h-screen py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="editorial-subhead block mb-4">Who I Am</span>
          <h2 className="editorial-heading text-5xl lg:text-7xl">About</h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left: Photo + Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Photo */}
            <div className="aspect-[4/5] bg-secondary rounded-sm overflow-hidden relative">
              <img
                src={profilePhoto}
                alt="Mathis - Builder"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & title */}
            <div>
              <h3 className="font-serif text-4xl text-foreground mb-2">Mathis</h3>
              <p className="text-accent text-sm font-sans uppercase tracking-widest">Builder</p>
            </div>

            {/* Quick actions */}
            <div className="flex flex-wrap gap-3">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <a
                    key={resource.label}
                    href={resource.href}
                    target={resource.href.startsWith("http") ? "_blank" : undefined}
                    rel={resource.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 px-4 py-2 border border-border hover:border-accent hover:text-accent transition-colors text-sm"
                  >
                    <Icon size={14} />
                    <span>{resource.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Bio */}
            <div>
              <div className="accent-line mb-6" />
              <p className="editorial-body text-lg mb-6">
                I'm a builder passionate about creating products that genuinely improve people's lives.
                My approach combines deep user empathy with rigorous data analysis.
              </p>
              <p className="editorial-body">
                With 2+ years of experience shipping products from 0 to 1, I've learned that the best products 
                come from relentless iteration and staying close to users. The first thing I launch is always the analytics.
              </p>
            </div>

            {/* Core traits */}
            <div>
              <span className="editorial-subhead block mb-6">How I Work</span>
              <div className="space-y-4">
                {traits.map((trait, index) => {
                  const Icon = trait.icon;
                  return (
                    <motion.div
                      key={trait.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 border border-border hover:border-accent transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon size={18} className="text-accent" />
                      </div>
                      <div>
                        <span className="text-foreground font-sans font-medium">{trait.label}</span>
                        <p className="text-muted-foreground text-sm">{trait.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <span className="editorial-subhead block mb-2">Public Speaking</span>
            <h3 className="font-serif text-2xl">A Documentary on Debate</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
              I participated in a famous debate event in Paris and made a short documentary about the experience.
            </p>
          </div>
          
          <div className="aspect-video rounded-sm overflow-hidden bg-secondary">
            <iframe
              src="https://www.youtube.com/embed/iGcuANERHGc"
              title="Debate Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.div>

        {/* Beyond Work - Interests Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <span className="editorial-subhead block mb-8 text-center">Beyond Work</span>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Music Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="aspect-square bg-secondary rounded-sm overflow-hidden relative group"
            >
              <img 
                src={guitarPhoto} 
                alt="Music" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <Music size={18} className="text-accent" />
                <span className="font-sans text-sm font-medium">Making Music</span>
              </div>
            </motion.div>

            {/* Travel Map Card - Using real world map image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-square bg-secondary rounded-sm overflow-hidden relative group"
            >
              <TravelMap pins={travelPins} />

              {/* Allow map drag/zoom interactions through overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/12 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-sans text-sm font-medium">Traveling</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {travelLocations.slice(0, 8).map((loc, i) => (
                    <span key={loc} className="text-[10px] text-muted-foreground">
                      {loc}{i < 7 ? " •" : "..."}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 text-[10px] text-muted-foreground border border-border bg-background/40 backdrop-blur px-2 py-1 pointer-events-none">
                Drag to explore
              </div>
            </motion.div>

            {/* Movies Card with Letterboxd link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="aspect-square bg-secondary rounded-sm overflow-hidden relative group flex flex-col items-center justify-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Film size={32} className="text-accent" />
              </div>
              <span className="font-sans text-lg font-medium mb-2">Movies</span>
              <p className="text-sm text-muted-foreground text-center mb-4">Cinematic storytelling enthusiast</p>
              <a
                href="https://letterboxd.com/mathis__/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors text-sm font-medium rounded-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.224 14.352a4 4 0 1 1 0-4.704l.06.088a4 4 0 0 0 0 4.528l-.06.088zm3.28 1.69a5.965 5.965 0 0 1-1.504-.192 4 4 0 0 1 0-7.7 6 6 0 1 1 1.504 7.892zm4.272-1.69l-.06-.088a4 4 0 0 0 0-4.528l.06-.088a4 4 0 1 1 0 4.704z"/>
                </svg>
                <span>My Letterboxd</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
