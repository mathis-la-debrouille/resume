import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowUpRight, Shield, Leaf, Cpu } from "lucide-react";
import powmPhoto from "@/assets/powm-photo.png";
import tupiPhoto from "@/assets/tupi-photo.jpg";
import creativeLabPhoto from "@/assets/creativelab-photo.png";

const projects = [
  {
    id: 1,
    title: "Powm",
    subtitle: "Privacy-first identity wallet for minimal, non-correlatable proofs",
    year: "Oct 2025 - Present",
    role: "Founder & CEO • 3 associates",
    description: "Leading Powm as CEO, handling sales, stakeholder relationships, and go-to-market strategy. Managing the product roadmap, coordinating engineering efforts, and driving business development to acquire our first paying clients.",
    learnings: "My first real startup where we fight hard every day. We have funding, a team, and clients. Powm taught me the reality of building: make pivots fast, adapt to the market, pitch relentlessly, and always stay hungry.",
    keyPoints: ["Adaptability", "Cost Reduction", "Zero Data Leaks"],
    color: "270, 60%, 55%",
    accentClass: "text-violet-400",
    bgClass: "from-violet-500/20 to-purple-600/10",
    icon: Shield,
    image: powmPhoto,
    buttons: [
      { label: "Go to App", link: "https://powm.io" },
    ],
  },
  {
    id: 2,
    title: "Tupi",
    subtitle: "Duolingo-style eco actions app (closed beta)",
    year: "2023 — 2025",
    role: "Founder",
    description: "Defined NSM/guardrails and experiment plan; led ideation → pivot to ecological gamification. Shipped v1 to 120 beta users achieving strong retention and user satisfaction.",
    learnings: "Tupi taught me the B2C craft: talk to users, keep scopes small, write clear copy, and watch funnels/cohorts to guide the next iteration. Currently building it out, reaching partners and local actors.",
    metrics: [
      { label: "D7 Retention", value: "64%" },
      { label: "D30 Retention", value: "22%" },
      { label: "NPS", value: "52" },
      { label: "App Rating", value: "4.2/5" },
      { label: "Interviews", value: "~150" },
    ],
    color: "142, 45%, 50%",
    accentClass: "text-emerald-400",
    bgClass: "from-emerald-500/20 to-green-600/10",
    icon: Leaf,
    image: tupiPhoto,
    buttons: [
      { label: "Case Study", link: "https://light-atlasaurus-699.notion.site/Tupi-252a3065f55b80e29c8aecf662a024a5?pvs=74" },
      { label: "Demo", link: "https://tupi-app.com/" },
      { label: "PRD", link: "https://light-atlasaurus-699.notion.site/PRD-Tupi-252a3065f55b809fa9b4d4b52734b20d?pvs=74" },
    ],
  },
  {
    id: 3,
    title: "CreativeLab",
    subtitle: "Hardware innovation lab within school",
    year: "2022",
    role: "Co-founder",
    description: "Created a laboratory to spark innovative hardware projects in a software-focused school. Piloted 20+ projects from connected flowerpots to microchip computers.",
    learnings: "Leading a team of 50+ students taught me stakeholder management, resource allocation, and how to inspire people to build things outside their comfort zone.",
    metrics: [
      { label: "Students", value: "50+" },
      { label: "Projects", value: "20+" },
      { label: "Duration", value: "8 Months" },
    ],
    color: "200, 60%, 50%",
    accentClass: "text-cyan-400",
    bgClass: "from-cyan-500/20 to-blue-600/10",
    icon: Cpu,
    image: creativeLabPhoto,
    buttons: [],
  },
];

interface ProjectSlideProps {
  project: typeof projects[0];
  index: number;
  onEnterView: (index: number) => void;
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMobile;
};

const ProjectSlide = ({ project, index, onEnterView }: ProjectSlideProps) => {
  const slideRef = useRef(null);
  const isInView = useInView(slideRef, { amount: 0.5 });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isInView) {
      onEnterView(index);
    }
  }, [isInView, index, onEnterView]);

  const { scrollYProgress } = useScroll({
    target: slideRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const imageScale = useTransform(scrollYProgress, [0.2, 0.5], [0.9, 1]);
  const accentWidth = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "100%"]);

  const Icon = project.icon;

  return (
    <section
      ref={slideRef}
      className="min-h-screen lg:h-screen w-full flex items-center justify-center relative project-snap overflow-hidden py-24 lg:py-0"
    >
      {/* Background gradient glow with project color */}
      <motion.div
        style={{ opacity: isMobile ? 1 : contentOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.bgClass} opacity-30`}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[1000px] lg:h-[800px] rounded-full blur-[150px] lg:blur-[250px] opacity-20"
          style={{ backgroundColor: `hsl(${project.color})` }}
        />
      </motion.div>

      <motion.div
        style={{ y: isMobile ? 0 : contentY, opacity: isMobile ? 1 : contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Project info */}
          <div className="space-y-6 lg:space-y-8">
            {/* Project number & icon */}
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: `hsl(${project.color})` }}
              >
                <Icon size={20} className="lg:w-6 lg:h-6" style={{ color: `hsl(${project.color})` }} />
              </div>
              <div className="flex flex-col">
                <span className="text-4xl lg:text-7xl font-serif text-muted/20">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Title */}
            <div>
              <motion.div
                style={{ width: accentWidth, backgroundColor: `hsl(${project.color})` }}
                className="h-px mb-4 origin-left"
              />
              <h2 className="editorial-heading text-4xl sm:text-5xl lg:text-7xl mb-2">{project.title}</h2>
              <p className="text-muted-foreground text-base lg:text-lg max-w-md">{project.subtitle}</p>
            </div>

            {/* Role & Year */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm">
              <span className={project.accentClass}>{project.role}</span>
              <span className="text-muted-foreground">{project.year}</span>
            </div>

            {/* Description */}
            <p className="editorial-body text-sm lg:text-base lg:text-lg max-w-lg">
              {project.description}
            </p>

            {/* Key Points or Metrics */}
            {project.keyPoints ? (
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {project.keyPoints.map((point, i) => (
                  <span
                    key={i}
                    className="px-2 lg:px-3 py-1 lg:py-1.5 text-[10px] lg:text-xs uppercase tracking-wider border rounded-full"
                    style={{ borderColor: `hsl(${project.color} / 0.5)`, color: `hsl(${project.color})` }}
                  >
                    {point}
                  </span>
                ))}
              </div>
            ) : project.metrics ? (
              <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {project.metrics.slice(0, 5).map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div
                      className="text-xl lg:text-2xl lg:text-3xl font-serif mb-1"
                      style={{ color: `hsl(${project.color})` }}
                    >
                      {metric.value}
                    </div>
                    <div className="editorial-subhead text-[10px] lg:text-xs">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            ) : null}

            {/* Buttons */}
            {project.buttons.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {project.buttons.map((btn, i) => (
                  <a
                    key={i}
                    href={btn.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 border border-border hover:border-current transition-colors text-sm"
                    style={{ color: i === 0 ? `hsl(${project.color})` : undefined }}
                  >
                    <span>{btn.label}</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right: Image & Learnings */}
          <div className="space-y-8">
            {/* Project image */}
            <motion.div
              style={{ scale: isMobile ? 1 : imageScale }}
              className="relative aspect-video rounded-sm overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 opacity-20"
                style={{ background: `linear-gradient(135deg, hsl(${project.color} / 0.3), transparent)` }}
              />
            </motion.div>

            {/* Learnings */}
            <div 
              className="border-l-2 pl-6"
              style={{ borderColor: `hsl(${project.color} / 0.5)` }}
            >
              <span className="editorial-subhead block mb-3">What I Learned</span>
              <p className="editorial-body text-sm lg:text-base italic text-muted-foreground">
                "{project.learnings}"
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Side accent line */}
      <motion.div
        style={{ scaleY: scrollYProgress, backgroundColor: `hsl(${project.color})` }}
        className="absolute right-4 lg:right-8 top-1/4 bottom-1/4 w-0.5 origin-top hidden lg:block"
      />
    </section>
  );
};

interface ProjectsProps {
  onProjectChange?: (index: number) => void;
}

export const Projects = ({ onProjectChange }: ProjectsProps) => {
  const [, setCurrentProject] = useState(0);

  const handleProjectEnterView = (index: number) => {
    setCurrentProject(index);
    onProjectChange?.(index);
  };

  return (
    <div id="projects" className="relative">
      {/* Section header */}
      <div className="h-screen flex items-center justify-center section-snap">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center px-6"
        >
          <span className="editorial-subhead block mb-4">Selected Work</span>
          <h2 className="editorial-heading text-5xl lg:text-7xl mb-6">Projects</h2>
          <p className="editorial-body max-w-md mx-auto">
            Products I've shaped, from concept to launch. Each one taught me something new about building for real users.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-muted-foreground text-sm"
          >
            Scroll to explore each project ↓
          </motion.div>
        </motion.div>
      </div>

      {/* Project slides */}
      {projects.map((project, index) => (
        <ProjectSlide
          key={project.id}
          project={project}
          index={index}
          onEnterView={handleProjectEnterView}
        />
      ))}
    </div>
  );
};
