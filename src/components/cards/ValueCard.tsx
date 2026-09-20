import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import type { ValueItem } from "../../data/content";

export function ValueCard({ value, index = 0 }: { value: ValueItem; index?: number }) {
  const { tr } = useLanguage();
  const Icon = value.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-paper p-6 transition-colors hover:border-gold/40 dark:border-paper/10 dark:bg-ink-2"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink dark:text-paper">{tr(value.title)}</h3>
      <p className="mt-1.5 text-sm text-ink/60 dark:text-paper/60">{tr(value.description)}</p>
      <span className="pointer-events-none absolute -bottom-6 -right-4 font-en text-6xl font-bold text-ink/[0.03] dark:text-paper/[0.04]">
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
}
