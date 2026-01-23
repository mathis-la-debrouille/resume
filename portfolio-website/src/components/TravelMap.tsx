import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { Plus, Minus } from "lucide-react";

export type TravelMapPin = {
  id: string;
  label: string;
  /** [longitude, latitude] */
  coordinates: [number, number];
};

const geoUrl = "/maps/countries-110m.json";

type TravelMapProps = {
  pins: TravelMapPin[];
};

export function TravelMap({ pins }: TravelMapProps) {
  const [position, setPosition] = useState<{ coordinates: [number, number]; zoom: number }>({
    coordinates: [10, 35],
    zoom: 1.15,
  });
  const [hoveredPin, setHoveredPin] = useState<TravelMapPin | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleZoomIn = useCallback(() => {
    setPosition((pos) => ({ ...pos, zoom: Math.min(pos.zoom * 1.5, 4) }));
  }, []);

  const handleZoomOut = useCallback(() => {
    setPosition((pos) => ({ ...pos, zoom: Math.max(pos.zoom / 1.5, 1) }));
  }, []);

  const handleMoveEnd = useCallback((newPosition: { coordinates: [number, number]; zoom: number }) => {
    setPosition(newPosition);
  }, []);

  const handlePinHover = useCallback(
    (pin: TravelMapPin | null, event?: React.MouseEvent) => {
      setHoveredPin(pin);
      if (event && pin) {
        const rect = (event.currentTarget as HTMLElement).closest(".travel-map-container")?.getBoundingClientRect();
        if (rect) {
          setTooltipPos({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
          });
        }
      }
    },
    []
  );

  return (
    <div className="absolute inset-0 cursor-grab active:cursor-grabbing travel-map-container">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 155 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup
          center={position.coordinates}
          zoom={position.zoom}
          minZoom={1}
          maxZoom={4}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "hsl(var(--foreground) / 0.10)",
                      stroke: "hsl(var(--border))",
                      strokeWidth: 0.4,
                      outline: "none",
                    },
                    hover: {
                      fill: "hsl(var(--foreground) / 0.14)",
                      stroke: "hsl(var(--border))",
                      strokeWidth: 0.4,
                      outline: "none",
                    },
                    pressed: {
                      fill: "hsl(var(--foreground) / 0.14)",
                      stroke: "hsl(var(--border))",
                      strokeWidth: 0.4,
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Pins */}
          {pins.map((pin, index) => (
            <Marker key={pin.id} coordinates={pin.coordinates}>
              <motion.circle
                r={1.4}
                fill="hsl(var(--accent))"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                style={{ cursor: "pointer", pointerEvents: "auto" }}
                onMouseEnter={(e) => handlePinHover(pin, e as unknown as React.MouseEvent)}
                onMouseLeave={() => handlePinHover(null)}
              />
              <motion.circle
                r={1.4}
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth={0.35}
                style={{ pointerEvents: "none" }}
                initial={{ opacity: 0.55 }}
                animate={{ r: [1.4, 5], opacity: [0.55, 0] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  delay: 0.4 + index * 0.12,
                  ease: "easeOut",
                }}
              />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Zoom controls */}
      <div className="absolute top-4 left-4 flex flex-col gap-1">
        <button
          onClick={handleZoomIn}
          className="w-7 h-7 flex items-center justify-center bg-background/80 backdrop-blur border border-border hover:border-accent hover:text-accent transition-colors rounded-sm"
          aria-label="Zoom in"
        >
          <Plus size={14} />
        </button>
        <button
          onClick={handleZoomOut}
          className="w-7 h-7 flex items-center justify-center bg-background/80 backdrop-blur border border-border hover:border-accent hover:text-accent transition-colors rounded-sm"
          aria-label="Zoom out"
        >
          <Minus size={14} />
        </button>
      </div>

      {/* Hover tooltip */}
      <AnimatePresence>
        {hoveredPin && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 px-2 py-1 text-xs font-sans bg-background/95 backdrop-blur border border-border rounded-sm shadow-lg pointer-events-none whitespace-nowrap"
            style={{
              left: tooltipPos.x,
              top: tooltipPos.y - 28,
              transform: "translateX(-50%)",
            }}
          >
            {hoveredPin.label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
