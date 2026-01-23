import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "KRNO",
    role: "Product Consultant",
    location: "Paris",
    periodStart: "Oct 2024",
    periodEnd: "Present",
    intro: "Productivity SaaS helping teams manage projects and streamline workflows.",
    bullets: [
      "Conceived the **entire product methodology**, sprint planning, backlog prioritization, and delivery cycles.",
      "Hand-in-hand with developers and CEO, translating strategy into **actionable tickets**.",
      "Championed **dogfooding culture** and synthesize client feedback for **data-informed** iterations.",
    ],
    skills: ["Product Strategy", "Sprint Planning", "Stakeholder Alignment", "Dogfooding", "Data Analysis"],
    type: "product",
    color: "24, 100%, 50%",
  },
  {
    id: 2,
    company: "Brigad",
    role: "DevOps Engineer",
    location: "Paris",
    periodStart: "Sep 2024",
    periodEnd: "Sep 2025",
    intro: "Marketplace connecting hospitality & healthcare with vetted freelance professionals.",
    bullets: [
      "Cut CI/CD from **14 to 9 min (–36%)** via caching/parallelism, resulting in **+28% releases/week**.",
      "Built granular **cost and efficiency dashboards**, enabling deeper optimizations.",
    ],
    skills: ["DevOps", "CI/CD", "Docker", "Kubernetes", "AWS", "SLA"],
    type: "tech",
    color: "0, 0%, 60%",
  },
  {
    id: 3,
    company: "Monaliza",
    role: "FullStack Engineer",
    location: "Paris",
    periodStart: "Apr 2023",
    periodEnd: "Aug 2023",
    intro: "Fintech B2B/B2C platform for retirement savings plans, offered in white-label.",
    bullets: [
      "Shipped **Contract Subscription** leading quote-to-contract **+30%**, while leading weekly demos.",
      "Authored **OpenAPI/Swagger** for partner integration (REST, OAuth2/JWT).",
    ],
    skills: ["React", "Next.js", "NestJS", "OpenAPI", "OAuth2", "JWT"],
    type: "tech",
    color: "0, 0%, 50%",
  },
  {
    id: 4,
    company: "Epitech",
    role: "Head of Teaching Assistant",
    location: "Paris",
    periodStart: "Feb 2022",
    periodEnd: "Apr 2023",
    intro: "Led the TA team, handled hiring/scheduling, and managed student escalations.",
    bullets: [
      "Supervised **30+ advanced students**; led the assistant team and provided daily mentoring.",
      "Built a team intranet cutting **no-shows ~50%** and boosting engagement.",
    ],
    skills: ["Leadership", "Teaching", "Team Management", "Programming", "Mentoring"],
    type: "education",
    color: "270, 40%, 50%",
  },
  {
    id: 5,
    company: "ISG Business School",
    role: "Independent Teacher",
    location: "Paris",
    periodStart: "Sep 2022",
    periodEnd: "Dec 2022",
    intro: "Designed & taught courses on blockchain and Business Model Canvas.",
    bullets: [],
    skills: ["Blockchain", "Business Model Canvas", "Training", "Public Speaking"],
    type: "education",
    color: "200, 40%, 50%",
  },
];

const entrepreneurProjects = [
  {
    name: "Powm",
    role: "Founder & CEO",
    period: "Oct 2025 — Present",
    description: "Privacy-first identity wallet",
  },
  {
    name: "Tupi",
    role: "Founder",
    period: "2023 — 2025",
    description: "Eco-learning gamification app",
  },
  {
    name: "CreativeLab",
    role: "Co-founder",
    period: "2022",
    description: "Hardware innovation lab",
  },
];

const formatBullet = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-foreground font-medium">
        {part}
      </span>
    ) : (
      part
    )
  );
};

export const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="min-h-screen py-32 px-6 lg:px-12 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="editorial-subhead block mb-4">Background</span>
          <h2 className="editorial-heading text-5xl lg:text-7xl mb-6">Experiences</h2>
          <p className="editorial-body max-w-lg mx-auto">
            Blending product thinking with technical execution — from startups to education.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Professional Timeline */}
          <div className="lg:col-span-2 relative">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="editorial-subhead mb-12 flex items-center gap-2"
            >
              <Briefcase size={16} className="text-accent" />
              Professional
            </motion.h3>

            {/* Animated line - positioned after the date column */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[4.5rem] top-20 w-px bg-accent origin-top"
            />
            {/* Static background line */}
            <div className="absolute left-[4.5rem] top-20 bottom-0 w-px bg-border" />

            {/* Experience items */}
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative pl-24 group"
                >
                  {/* Date on the left - positioned outside the timeline */}
                  <div className="absolute left-0 top-0 w-16 text-right pr-4 flex flex-col text-xs">
                    <span style={{ color: `hsl(${exp.color})` }}>{exp.periodEnd}</span>
                    <span className="text-muted-foreground">{exp.periodStart}</span>
                  </div>

                  {/* Dot - positioned after the dates */}
                  <div
                    className="absolute left-[4.5rem] top-2 w-3 h-3 rounded-full transition-all group-hover:scale-125 border-2 border-background z-10"
                    style={{ backgroundColor: `hsl(${exp.color})` }}
                  />

                  {/* Content */}
                  <div className="space-y-4">
                    {/* Company & Role Header */}
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h4 className="font-serif text-2xl text-foreground">{exp.company}</h4>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                        <span
                          className="text-base font-sans font-medium"
                          style={{ color: `hsl(${exp.color})` }}
                        >
                          {exp.role}
                        </span>
                      </div>
                    </div>

                    {/* Intro description */}
                    <p className="text-sm text-muted-foreground italic">{exp.intro}</p>

                    {/* Bullet points */}
                    {exp.bullets.length > 0 && (
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: `hsl(${exp.color})` }}
                            />
                            <span>{formatBullet(bullet)}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.slice(0, 5).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-xs border border-border text-muted-foreground hover:border-accent hover:text-foreground transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Entrepreneurial side */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="editorial-subhead mb-12 flex items-center gap-2"
            >
              <Rocket size={16} className="text-accent" />
              Entrepreneurial
            </motion.h3>

            <div className="space-y-8">
              {entrepreneurProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="p-6 border border-border hover:border-accent transition-colors group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">
                      {project.name}
                    </h4>
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>
                  <span className="text-xs text-accent block mb-2">{project.role}</span>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Data-driven callout */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-secondary/50 border-l-2 border-accent"
            >
              <span className="editorial-subhead block mb-2">My Approach</span>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Data-first.</span> The first thing I
                launch is analytics. Every decision backed by metrics, every feature validated by
                users.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
