import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const COLORS = [
  "bg-[hsl(0,0%,10%)]",
  "bg-orange-950",
  "bg-orange-800",
  "bg-orange-600",
  "bg-orange-400",
] as const;

const WEEKS = 18;
const DAYS = WEEKS * 7;
// px per week column (16px square + 4px gap)
const COL_PX = 20;

function dateHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h) / 2147483647;
}

function buildDays() {
  const today = new Date();
  return Array.from({ length: DAYS }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (DAYS - 1 - i));
    const date = d.toISOString().slice(0, 10);
    const dow = d.getDay();
    const isWeekend = dow === 0 || dow === 6;
    const noise  = dateHash(date);
    const noise2 = dateHash(date + "v");

    if (isWeekend) {
      // weekends: lighter but present — still building, just more chill
      if (noise > 0.72) return { date, level: 3 as const, tokens: 35000 + Math.floor(noise2 * 30000) };
      if (noise > 0.50) return { date, level: 2 as const, tokens: 12000 + Math.floor(noise2 * 18000) };
      if (noise > 0.30) return { date, level: 1 as const, tokens:  4000 + Math.floor(noise2 *  8000) };
      return { date, level: 0 as const, tokens: 0 };
    }

    // Weekdays: sinusoidal sprint cycles (~4.5-week period) layered on a slower wave
    const weekNum = i / 7;
    const sin1 = 0.5 + 0.5 * Math.sin(weekNum * (2 * Math.PI / 4.5) - 0.5);
    const sin2 = 0.3 + 0.3 * Math.sin(weekNum * (2 * Math.PI / 9.0) + 1.0);
    const sineVal = Math.min(1, (sin1 + sin2) / 1.2);

    // Slight upward trend — more active lately
    const recency = 0.65 + 0.35 * (i / DAYS);

    const activity = sineVal * recency * (0.55 + 0.45 * noise);

    if (activity > 0.70) return { date, level: 4 as const, tokens: 120000 + Math.floor(noise2 * 80000) };
    if (activity > 0.52) return { date, level: 3 as const, tokens:  60000 + Math.floor(noise2 * 60000) };
    if (activity > 0.35) return { date, level: 2 as const, tokens:  22000 + Math.floor(noise2 * 38000) };
    if (activity > 0.18) return { date, level: 1 as const, tokens:   7000 + Math.floor(noise2 * 15000) };
    return { date, level: 0 as const, tokens: 0 };
  });
}

function chunk<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

function getMonthLabels(weeks: ReturnType<typeof buildDays>[]) {
  const labels: { col: number; text: string }[] = [];
  let last = -1;
  weeks.forEach((week, col) => {
    const m = new Date(week[0].date).getMonth();
    if (m !== last) {
      labels.push({ col, text: new Date(week[0].date).toLocaleDateString("en", { month: "short" }) });
      last = m;
    }
  });
  return labels;
}

const days   = buildDays();
const weeks  = chunk(days, 7);
const labels = getMonthLabels(weeks);
const activeDays  = days.filter(d => d.level > 0).length;
const totalTokens = days.reduce((s, d) => s + d.tokens, 0);

function fmt(n: number) {
  return n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M` : `${Math.round(n / 1000)}K`;
}

export const ClaudeFidget = () => (
  <motion.div
    initial={{ opacity: 0, x: -24 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay: 0.9 }}
    className="w-full bg-card/80 backdrop-blur-sm border border-border rounded-lg p-5 shadow-2xl"
  >
    <div className="flex items-center gap-3 mb-5">
      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
        <Layers size={20} className="text-accent" />
      </div>
      <span className="font-serif text-lg text-foreground">Claude</span>
    </div>

    <div className="grid grid-cols-2 gap-3 mb-5">
      <div className="bg-secondary/70 rounded-md p-3">
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5">Tokens</p>
        <p className="text-foreground font-semibold text-xl leading-none">{fmt(totalTokens)}</p>
      </div>
      <div className="bg-secondary/70 rounded-md p-3">
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5">Days</p>
        <p className="text-foreground font-semibold text-xl leading-none">{activeDays}</p>
      </div>
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
            {week.map((day, di) => (
              <div
                key={di}
                className={`w-[16px] h-[16px] rounded-[3px] ${COLORS[day.level]}`}
                title={`${day.date}: ${fmt(day.tokens)}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>

    <div className="mt-5">
      <span className="text-[11px] font-medium px-2.5 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full">
        #Claude
      </span>
    </div>
  </motion.div>
);
