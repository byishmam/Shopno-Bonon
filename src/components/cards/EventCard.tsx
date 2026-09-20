import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { formatDate, getEventStatus } from "../../utils/dates";
import type { EventItem } from "../../data/types";
import { cn } from "../../utils/cn";

export function EventCard({ event, index = 0 }: { event: EventItem; index?: number }) {
  const { lang, tr, t } = useLanguage();
  const status = getEventStatus(event);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group overflow-hidden rounded-2xl border border-ink/10 bg-paper transition hover:shadow-xl hover:shadow-ink/5 dark:border-paper/10 dark:bg-ink-2"
    >
      <Link to={`/events/${event.slug}`} data-cursor="View">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={event.image}
            alt={tr(event.title)}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
          />
          <span
            className={cn(
              "absolute right-3 top-3 rounded-full px-3 py-1 text-[11px] font-medium backdrop-blur",
              status === "upcoming" ? "bg-gold text-ink" : "bg-ink/70 text-paper"
            )}
          >
            {status === "upcoming" ? t("events.status.upcoming") : t("events.status.past")}
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-ink dark:text-paper">
            {tr(event.title)}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm text-ink/60 dark:text-paper/60">{tr(event.description)}</p>
          <div className="mt-4 space-y-1.5 text-xs text-ink/55 dark:text-paper/55">
            <div className="flex items-center gap-1.5">
              <CalendarDays size={13} /> {formatDate(event.date, lang)}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={13} /> {event.time}
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={13} /> {tr(event.location)}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
