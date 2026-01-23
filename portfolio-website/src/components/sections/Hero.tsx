import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, BarChart3 } from "lucide-react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden grain"
    >
      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Overline with data emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <BarChart3 size={16} className="text-accent" />
          <p className="editorial-subhead">
            Data-Driven Product Manager
          </p>
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="editorial-heading text-[clamp(3rem,12vw,9rem)]"
          >
            Mathis
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="editorial-body text-lg md:text-xl max-w-xl mx-auto mb-4"
        >
          Building <span className="text-accent">user-centric products</span> driven by data.
          <br />
          <span className="text-muted-foreground">Analytics first, always.</span>
        </motion.p>

        {/* Key differentiators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm font-sans"
        >
          <div className="flex items-center gap-2 px-4 py-2 border border-border">
            <span className="text-accent font-medium">User-Centric</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border border-border">
            <span className="text-accent font-medium">Data-Driven</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border border-border">
            <span className="text-accent font-medium">Outcome-Focused</span>
          </div>
        </motion.div>

        {/* Stats line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center justify-center gap-8 mt-8 text-muted-foreground text-sm font-sans"
        >
          <div className="flex items-center gap-2">
            <span className="text-foreground font-medium">2+</span>
            <span>Years</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-foreground font-medium">3</span>
            <span>Products shipped</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-foreground font-medium">150+</span>
            <span>User interviews</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => onNavigate("projects")}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
      >
        <span className="text-xs uppercase tracking-widest font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="group-hover:text-accent transition-colors" />
        </motion.div>
      </motion.button>

      {/* Decorative corner elements */}
      <div className="absolute top-12 left-6 lg:left-28 flex flex-col gap-1">
        <div className="w-8 h-px bg-border" />
        <div className="w-4 h-px bg-border" />
      </div>
      <div className="absolute top-12 right-6 flex flex-col gap-1 items-end">
        <div className="w-8 h-px bg-border" />
        <div className="w-4 h-px bg-border" />
      </div>
    </section>
  );
};
