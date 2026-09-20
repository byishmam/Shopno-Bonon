import { motion } from "framer-motion";
import { useMemo } from "react";

interface WeaveThreadsProps {
  className?: string;
  count?: number;
  color?: string;
  interactive?: boolean;
}

/**
 * Signature "Weaving Dreams" animated thread background.
 * A set of thin bezier curves draw themselves in, then drift gently —
 * evoking threads being woven together. Lightweight, purely decorative,
 * and respects prefers-reduced-motion via CSS (see index.css).
 */
export function WeaveThreads({ className = "", count = 7, color = "currentColor" }: WeaveThreadsProps) {
  const paths = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const seed = i * 37.13;
      const y1 = 10 + ((seed * 7) % 80);
      const y2 = 10 + ((seed * 13) % 80);
      const y3 = 10 + ((seed * 19) % 80);
      const cx1 = 20 + ((seed * 3) % 20);
      const cx2 = 55 + ((seed * 5) % 25);
      return `M -5 ${y1} C ${cx1} ${y2}, ${cx2} ${y3}, 105 ${(y1 + y2) / 2}`;
    });
  }, [count]);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={0.15}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.6, 0.35] }}
          transition={{
            duration: 2.4,
            delay: i * 0.12,
            ease: [0.65, 0, 0.35, 1],
            opacity: { duration: 3, delay: i * 0.12 },
          }}
        />
      ))}
    </svg>
  );
}
