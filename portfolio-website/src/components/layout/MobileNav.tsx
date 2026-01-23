import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface MobileNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", number: "01" },
  { id: "projects", label: "Work", number: "02" },
  { id: "experience", label: "Experience", number: "03" },
  { id: "about", label: "About", number: "04" },
];

export const MobileNav = ({ activeSection, onNavigate }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 h-16 z-50 lg:hidden flex items-center justify-between px-6 bg-background"
      >
        <span className="text-foreground font-serif text-2xl">M</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-background"
          >
            <nav className="flex flex-col items-start justify-center h-full px-12 gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavigate(item.id)}
                  className="group flex items-baseline gap-4"
                >
                  <span className="text-accent text-sm font-sans">{item.number}</span>
                  <span
                    className={`font-serif text-4xl transition-colors duration-300 ${
                      activeSection === item.id ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
