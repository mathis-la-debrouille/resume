import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type TravelPin = {
  id: string;
  label: string;
  /** x in a 0..100 viewBox */
  x: number;
  /** y in a 0..50 viewBox */
  y: number;
};

type WorldTravelMapProps = {
  pins: TravelPin[];
  className?: string;
};

/**
 * Lightweight, inline SVG world map to avoid image assets.
 * Styled using theme tokens (HSL) and supports animated pin pulses.
 */
export function WorldTravelMap({ pins, className }: WorldTravelMapProps) {
  return (
    <div className={cn("absolute inset-0", className)} aria-hidden>
      <svg viewBox="0 0 100 50" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <defs>
          <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
            <path
              d="M 5 0 L 0 0 0 5"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="0.2"
              opacity="0.35"
            />
          </pattern>
          <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.18" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* subtle grid */}
        <rect width="100" height="50" fill="url(#grid)" />

        {/* stylized continents */}
        <g
          fill="url(#land)"
          stroke="hsl(var(--foreground))"
          strokeOpacity="0.18"
          strokeWidth="0.25"
        >
          {/* North America */}
          <path d="M10 13 C13 9, 20 7, 26 9 C30 10, 33 13, 34 16 C35 19, 32 22, 28 22 C25 22, 22 21, 19 22 C15 23, 11 20, 10 16 Z" />
          {/* South America */}
          <path d="M24 24 C27 24, 30 26, 31 29 C32 33, 30 38, 28 41 C26 44, 23 45, 21 42 C19 39, 20 34, 21 30 C22 27, 22 25, 24 24 Z" />
          {/* Europe + Africa */}
          <path d="M44 13 C47 11, 52 10, 56 11 C59 12, 61 14, 61 16 C61 18, 59 20, 56 20 C53 20, 51 19, 49 20 C47 21, 46 23, 47 25 C48 27, 50 29, 51 31 C53 35, 52 41, 48 44 C44 47, 41 43, 41 38 C41 33, 42 29, 43 25 C44 22, 43 19, 41 17 C40 15, 42 14, 44 13 Z" />
          {/* Asia */}
          <path d="M59 12 C64 10, 70 10, 76 12 C82 14, 87 18, 89 22 C91 26, 89 29, 84 29 C79 29, 76 27, 72 28 C68 29, 66 31, 64 29 C62 27, 64 25, 64 23 C64 20, 61 18, 59 17 C57 16, 56 13, 59 12 Z" />
          {/* Australia */}
          <path d="M79 34 C83 34, 86 36, 87 39 C88 42, 86 45, 82 46 C78 47, 75 45, 74 42 C73 39, 75 35, 79 34 Z" />
        </g>

        {/* pins */}
        <g>
          {pins.map((pin, index) => (
            <g key={pin.id}>
              <motion.circle
                cx={pin.x}
                cy={pin.y}
                r={0.85}
                fill="hsl(var(--accent))"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15 + index * 0.03, duration: 0.3 }}
                viewport={{ once: true }}
              />
              <motion.circle
                cx={pin.x}
                cy={pin.y}
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth={0.3}
                initial={{ r: 1.2, opacity: 0.55 }}
                animate={{ r: [1.2, 3.4], opacity: [0.55, 0] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  delay: 0.4 + index * 0.12,
                  ease: "easeOut",
                }}
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
