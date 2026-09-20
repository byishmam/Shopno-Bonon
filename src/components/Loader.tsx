import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WeaveThreads } from "./WeaveThreads";
import { siteConfig } from "../data/site";
import { useLanguage } from "../context/LanguageContext";

export function Loader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) {
      const t2 = setTimeout(onDone, 550);
      return () => clearTimeout(t2);
    }
  }, [visible, onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-ink text-paper"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative flex h-40 w-64 items-center justify-center sm:h-52 sm:w-80">
            <WeaveThreads className="absolute inset-0 h-full w-full text-gold" count={9} />
            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <p className="text-2xl font-medium tracking-tight sm:text-3xl">{siteConfig.bengaliName}</p>
              <p className="font-en mt-1 text-[11px] uppercase tracking-[0.35em] text-gold-2 sm:text-xs">
                {siteConfig.name}
              </p>
            </motion.div>
          </div>
          <motion.button
            onClick={() => setVisible(false)}
            className="font-en absolute bottom-10 text-xs uppercase tracking-[0.25em] text-paper/50 transition hover:text-paper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {t("loader.skip")}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
