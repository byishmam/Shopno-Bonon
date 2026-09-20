import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../utils/cn";

const options = [
  { key: "light", icon: Sun },
  { key: "dark", icon: Moon },
  { key: "system", icon: Monitor },
] as const;

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-full border border-ink/10 bg-ink/[0.03] p-0.5 dark:border-paper/10 dark:bg-paper/5",
        compact && "scale-90"
      )}
      role="group"
      aria-label="Theme"
    >
      {options.map(({ key, icon: Icon }) => (
        <button
          key={key}
          onClick={() => setTheme(key)}
          aria-label={key}
          aria-pressed={theme === key}
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-full transition-colors",
            theme === key
              ? "bg-ink text-paper dark:bg-paper dark:text-ink"
              : "text-ink/50 hover:text-ink dark:text-paper/50 dark:hover:text-paper"
          )}
        >
          <Icon size={14} strokeWidth={2} />
        </button>
      ))}
    </div>
  );
}
