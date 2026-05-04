import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:hello@mathis.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

export const Contact = () => {
  return (
    <footer className="py-24 px-6 lg:px-12 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="editorial-subhead block mb-4">Get in Touch</span>
            <h2 className="font-serif text-4xl lg:text-6xl text-foreground mb-6">
              Let's build something<br />
              <span className="text-accent">together.</span>
            </h2>
            <p className="editorial-body max-w-md mb-8">
              Open to builder roles across product, engineering, and sales — and conversations about creating things that matter.
            </p>
            <a
              href="mailto:hello@mathis.com"
              className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors group"
            >
              <span className="text-sm uppercase tracking-widest font-sans">Start a Conversation</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right: Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start lg:items-end gap-8"
          >
            {/* Social links */}
            <div className="flex gap-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <p className="text-muted-foreground text-sm font-sans">
              © {new Date().getFullYear()} Mathis. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
