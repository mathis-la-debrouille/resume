import { useState, useEffect } from "react";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const COLORS = [
  "bg-[hsl(0,0%,10%)]",
  "bg-emerald-950",
  "bg-emerald-800",
  "bg-emerald-600",
  "bg-emerald-400",
] as const;

const WEEKS = 18;
// px per week column (16px square + 4px gap)
const COL_PX = 20;

interface Day {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

function chunkDays(days: Day[]): (Day | null)[][] {
  const firstDow = new Date(days[0].date).getDay();
  const padded: (Day | null)[] = [...Array<null>(firstDow).fill(null), ...days];
  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }
  return weeks;
}

function getLabels(weeks: (Day | null)[][]) {
  const labels: { col: number; text: string }[] = [];
  let last = -1;
  weeks.forEach((week, col) => {
    const first = week.find((d): d is Day => d !== null);
    if (!first) return;
    const m = new Date(first.date).getMonth();
    if (m !== last) {
      labels.push({ col, text: new Date(first.date).toLocaleDateString("en", { month: "short" }) });
      last = m;
    }
  });
  return labels;
}

function emptyGrid(): (Day | null)[][] {
  return Array.from({ length: WEEKS }, () => Array<null>(7).fill(null));
}

interface Props {
  username: string;
}

export const GithubFidget = ({ username }: Props) => {
  const [weeks, setWeeks]   = useState<(Day | null)[][]>(emptyGrid());
  const [labels, setLabels] = useState<{ col: number; text: string }[]>([]);
  const [bio, setBio]       = useState("");
  const [ready, setReady]   = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const [cRes, uRes] = await Promise.all([
          fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`),
          fetch(`https://api.github.com/users/${username}`),
        ]);

        if (cancelled) return;

        if (cRes.ok) {
          const data = await cRes.json();
          const all: Day[] = data.contributions;
          const slice = all.slice(-WEEKS * 7);
          const w = chunkDays(slice);
          setWeeks(w);
          setLabels(getLabels(w));
        }

        if (uRes.ok) {
          const u = await uRes.json();
          setBio(u.bio ?? "");
        }
      } catch {
        // keep empty grid on error
      } finally {
        if (!cancelled) setReady(true);
      }
    })();

    return () => { cancelled = true; };
  }, [username]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.9 }}
      className="w-full bg-card/80 backdrop-blur-sm border border-border rounded-lg p-5 shadow-2xl"
    >
      <div className="flex items-center justify-between mb-5">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <Github size={24} className="text-foreground group-hover:text-accent transition-colors" />
          <span className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">GitHub</span>
        </a>
        <span className="text-sm text-muted-foreground font-sans">@{username}</span>
      </div>

      <div>
        <div className="relative h-5 mb-1">
          {labels.map(({ col, text }) => (
            <span
              key={col}
              className="absolute text-[9px] text-muted-foreground"
              style={{ left: col * COL_PX }}
            >
              {text}
            </span>
          ))}
        </div>
        <div className="flex gap-[4px]">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[4px]">
              {Array.from({ length: 7 }, (_, di) => {
                const day = week[di];
                return (
                  <div
                    key={di}
                    className={`w-[16px] h-[16px] rounded-[3px] ${day ? COLORS[day.level] : "bg-transparent"}`}
                    title={day ? `${day.date}: ${day.count} contributions` : ""}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {(bio || !ready) && (
        <div className="mt-5 bg-secondary/70 rounded-md p-3">
          <p className="text-xs text-muted-foreground leading-relaxed">
            {ready ? bio : "Loading…"}
          </p>
        </div>
      )}
    </motion.div>
  );
};
