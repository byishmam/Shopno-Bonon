import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { EventCard } from "../components/cards/EventCard";
import { useLanguage } from "../context/LanguageContext";
import { events } from "../data/events";
import { getEventStatus } from "../utils/dates";
import { cn } from "../utils/cn";

export default function Events() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  const filtered = events
    .filter((e) => getEventStatus(e) === tab)
    .sort((a, b) => (tab === "upcoming" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)));

  return (
    <>
      <PageHero eyebrow={t("page.events.title")} title={t("page.events.title")} description={t("home.introBody")} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto flex w-fit gap-1 rounded-full border border-ink/10 p-1 dark:border-paper/10">
          {(["upcoming", "past"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition",
                tab === key ? "bg-ink text-paper dark:bg-paper dark:text-ink" : "text-ink/50 dark:text-paper/50"
              )}
            >
              {key === "upcoming" ? t("publications.upcoming") : t("publications.past")}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((event, i) => (
              <EventCard key={event.slug} event={event} index={i} />
            ))}
          </div>
        ) : (
          <p className="mt-20 text-center text-ink/50 dark:text-paper/50">{t("empty.noEvents")}</p>
        )}
      </section>
    </>
  );
}
