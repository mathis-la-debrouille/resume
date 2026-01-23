import { motion } from "framer-motion";

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  currentProjectIndex?: number;
  totalProjects?: number;
}

const navItems = [
  { id: "home", label: "Home", number: "01" },
  { id: "projects", label: "Work", number: "02" },
  { id: "experience", label: "Experience", number: "03" },
  { id: "about", label: "About", number: "04" },
];

export const Sidebar = ({ 
  activeSection, 
  onNavigate,
  currentProjectIndex = 0,
  totalProjects = 3 
}: SidebarProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed left-0 top-0 h-screen w-20 sidebar-glass z-50 hidden lg:flex flex-col items-center justify-between py-10"
    >
      {/* Logo */}
      <div className="text-foreground font-serif text-2xl">M</div>

      {/* Navigation */}
      <nav className="flex flex-col gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="group relative flex flex-col items-center gap-1"
          >
            <span
              className={`text-[10px] font-sans tracking-widest transition-colors duration-300 ${
                activeSection === item.id ? "text-accent" : "text-muted-foreground"
              }`}
            >
              {item.number}
            </span>
            
            {/* Active indicator */}
            <motion.div
              initial={false}
              animate={{
                width: activeSection === item.id ? 24 : 4,
                backgroundColor: activeSection === item.id 
                  ? "hsl(24, 100%, 50%)" 
                  : "hsl(0, 0%, 30%)",
              }}
              transition={{ duration: 0.3 }}
              className="h-px rounded-full"
            />

            {/* Tooltip */}
            <span className="absolute left-full ml-4 px-2 py-1 bg-secondary text-foreground text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Project counter (only visible in projects section) */}
      <div className="flex flex-col items-center gap-2">
        {activeSection === "projects" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground text-xs font-sans"
          >
            <span className="text-foreground">{String(currentProjectIndex + 1).padStart(2, '0')}</span>
            <span className="mx-1">/</span>
            <span>{String(totalProjects).padStart(2, '0')}</span>
          </motion.div>
        )}
      </div>
    </motion.aside>
  );
};
