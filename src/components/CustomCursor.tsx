import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Subtle Apple-inspired custom cursor. Desktop (fine pointer) only.
 * Any element can opt in with a `data-cursor="Label"` attribute to
 * expand the cursor and show contextual text (e.g. "View", "Read", "Play").
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const sy = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      if (target) {
        setLabel(target.getAttribute("data-cursor"));
        setActive(true);
      } else {
        const clickable = (e.target as HTMLElement)?.closest("a, button");
        setActive(!!clickable);
        setLabel(null);
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="cursor-dot flex items-center justify-center rounded-full bg-paper"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: label ? 72 : active ? 40 : 14,
        height: label ? 72 : active ? 40 : 14,
      }}
      transition={{ type: "spring", damping: 22, stiffness: 320 }}
    >
      {label && (
        <span className="font-en select-none text-[10px] font-medium uppercase tracking-wide text-ink">
          {label}
        </span>
      )}
    </motion.div>
  );
}
