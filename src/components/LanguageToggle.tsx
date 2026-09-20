import { useLanguage } from "../context/LanguageContext";
import { cn } from "../utils/cn";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-full border border-ink/10 bg-ink/[0.03] p-0.5 text-xs font-medium dark:border-paper/10 dark:bg-paper/5",
        compact && "scale-90"
      )}
      role="group"
      aria-label="Language"
    >
      <button
        onClick={() => setLang("bn")}
        aria-pressed={lang === "bn"}
        className={cn(
          "rounded-full px-2.5 py-1 transition-colors",
          lang === "bn" ? "bg-ink text-paper dark:bg-paper dark:text-ink" : "text-ink/50 hover:text-ink dark:text-paper/50 dark:hover:text-paper"
        )}
      >
        বাংলা
      </button>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "font-en rounded-full px-2.5 py-1 transition-colors",
          lang === "en" ? "bg-ink text-paper dark:bg-paper dark:text-ink" : "text-ink/50 hover:text-ink dark:text-paper/50 dark:hover:text-paper"
        )}
      >
        EN
      </button>
    </div>
  );
}
