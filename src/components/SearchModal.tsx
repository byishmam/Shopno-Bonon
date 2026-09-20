import { AnimatePresence, motion } from "framer-motion";
import { Search, X, FileText, CalendarDays, Users, Tag } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { publications } from "../data/publications";
import { events } from "../data/events";
import { teamMembers } from "../data/team";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const { lang, tr, t } = useLanguage();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const articles = publications
      .filter(
        (p) =>
          tr(p.title).toLowerCase().includes(q) ||
          tr(p.category).toLowerCase().includes(q) ||
          p.tags.some((tag) => tag.toLowerCase().includes(q))
      )
      .slice(0, 4);

    const matchedEvents = events
      .filter((e) => tr(e.title).toLowerCase().includes(q) || tr(e.location).toLowerCase().includes(q))
      .slice(0, 3);

    const people = teamMembers
      .filter((m) => tr(m.name).toLowerCase().includes(q) || tr(m.position).toLowerCase().includes(q))
      .slice(0, 3);

    return { articles, events: matchedEvents, people };
  }, [query, tr]);

  const go = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center bg-ink/60 p-4 pt-[10vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-2xl dark:border-paper/10 dark:bg-ink-2"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-ink/10 px-4 py-3 dark:border-paper/10">
              <Search size={18} className="shrink-0 text-ink/40 dark:text-paper/40" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("search.placeholder")}
                className="w-full bg-transparent text-sm outline-none placeholder:text-ink/40 dark:placeholder:text-paper/40"
              />
              <button onClick={onClose} aria-label="Close search" className="text-ink/40 hover:text-ink dark:text-paper/40 dark:hover:text-paper">
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto p-2">
              {!results && (
                <p className="px-3 py-8 text-center text-sm text-ink/40 dark:text-paper/40">{t("search.hint")}</p>
              )}

              {results &&
                results.articles.length === 0 &&
                results.events.length === 0 &&
                results.people.length === 0 && (
                  <p className="px-3 py-8 text-center text-sm text-ink/50 dark:text-paper/50">{t("empty.noResults")}</p>
                )}

              {results && results.articles.length > 0 && (
                <div className="mb-1">
                  <p className="px-3 pb-1 pt-2 text-[11px] font-medium uppercase tracking-wide text-ink/40 dark:text-paper/40">
                    {lang === "bn" ? "প্রকাশনা" : "Publications"}
                  </p>
                  {results.articles.map((a) => (
                    <button
                      key={a.slug}
                      onClick={() => go(`/publications/${a.slug}`)}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm hover:bg-ink/5 dark:hover:bg-paper/5"
                    >
                      <FileText size={15} className="shrink-0 text-gold" />
                      <span className="truncate">{tr(a.title)}</span>
                    </button>
                  ))}
                </div>
              )}

              {results && results.events.length > 0 && (
                <div className="mb-1">
                  <p className="px-3 pb-1 pt-2 text-[11px] font-medium uppercase tracking-wide text-ink/40 dark:text-paper/40">
                    {lang === "bn" ? "ইভেন্ট" : "Events"}
                  </p>
                  {results.events.map((e) => (
                    <button
                      key={e.slug}
                      onClick={() => go(`/events/${e.slug}`)}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm hover:bg-ink/5 dark:hover:bg-paper/5"
                    >
                      <CalendarDays size={15} className="shrink-0 text-gold" />
                      <span className="truncate">{tr(e.title)}</span>
                    </button>
                  ))}
                </div>
              )}

              {results && results.people.length > 0 && (
                <div className="mb-1">
                  <p className="px-3 pb-1 pt-2 text-[11px] font-medium uppercase tracking-wide text-ink/40 dark:text-paper/40">
                    {lang === "bn" ? "টিম" : "Team"}
                  </p>
                  {results.people.map((m) => (
                    <button
                      key={m.slug}
                      onClick={() => go(`/team`)}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm hover:bg-ink/5 dark:hover:bg-paper/5"
                    >
                      <Users size={15} className="shrink-0 text-gold" />
                      <span className="truncate">{tr(m.name)}</span>
                    </button>
                  ))}
                </div>
              )}

              {!query && (
                <div className="flex flex-wrap gap-2 px-3 py-3">
                  {["Personal Growth", "Leadership", "Creativity"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="flex items-center gap-1 rounded-full border border-ink/10 px-3 py-1 text-xs text-ink/60 hover:border-gold hover:text-ink dark:border-paper/10 dark:text-paper/60 dark:hover:text-paper"
                    >
                      <Tag size={11} /> {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
