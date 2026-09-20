import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { WeaveThreads } from "./WeaveThreads";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-paper-2 pb-16 pt-32 dark:border-paper/10 dark:bg-ink-2 sm:pt-40">
      <WeaveThreads className="absolute inset-0 h-full w-full text-gold/30" count={5} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-en text-xs font-semibold uppercase tracking-[0.35em] text-gold"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-balance mt-4 text-4xl font-semibold tracking-tight text-ink dark:text-paper sm:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-balance mx-auto mt-5 max-w-2xl text-base text-ink/60 dark:text-paper/60"
          >
            {description}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
