import { useParams } from "react-router-dom";
import { CalendarDays, Clock, MapPin, Mic2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { events } from "../data/events";
import { formatDate, getEventStatus } from "../utils/dates";
import NotFound from "./NotFound";

export default function EventDetail() {
  const { slug } = useParams();
  const { lang, tr, t } = useLanguage();

  const event = events.find((e) => e.slug === slug);
  if (!event) return <NotFound />;

  const status = getEventStatus(event);

  return (
    <article>
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0">
          <img src={event.image} alt={tr(event.title)} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-36 text-center sm:pt-44">
          <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
            {status === "upcoming" ? t("events.status.upcoming") : t("events.status.past")}
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-balance mt-5 text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            {tr(event.title)}
          </motion.h1>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-paper/75">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={15} /> {formatDate(event.date, lang)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={15} /> {event.time}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={15} /> {tr(event.location)}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-lg leading-relaxed text-ink/80 dark:text-paper/80">{tr(event.description)}</p>

        {event.speaker && (
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-ink/10 p-4 dark:border-paper/10">
            <Mic2 size={18} className="text-gold" />
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-ink/40 dark:text-paper/40">
                {t("events.speaker")}
              </p>
              <p className="text-ink dark:text-paper">{tr(event.speaker)}</p>
            </div>
          </div>
        )}

        {event.registrationUrl && status === "upcoming" && (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-ink hover:bg-gold-2"
          >
            {t("cta.register")}
          </a>
        )}

        {event.recap && (
          <div className="mt-10 border-t border-ink/10 pt-8 dark:border-paper/10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gold">{t("events.recap")}</h2>
            <p className="mt-3 text-ink/75 dark:text-paper/75">{tr(event.recap)}</p>
          </div>
        )}

        {event.gallery && event.gallery.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-3">
            {event.gallery.map((img) => (
              <img key={img} src={img} alt={tr(event.title)} loading="lazy" className="aspect-[4/3] rounded-xl object-cover" />
            ))}
          </div>
        )}
      </section>
    </article>
  );
}
