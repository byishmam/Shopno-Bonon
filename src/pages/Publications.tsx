import { useMemo, useState } from "react";
import { PageHero } from "../components/PageHero";
import { useLanguage } from "../context/LanguageContext";
import { publications } from "../data/publications";
import { PublicationCard } from "../components/cards/PublicationCard";
import { cn } from "../utils/cn";

export default function Publications() {
  const { tr, t } = useLanguage();
  const [category, setCategory] = useState<string>("all");

  const categories = useMemo(() => {
    const set = new Set(publications.map((p) => p.categoryKey));
    return Array.from(set);
  }, []);

  const categoryLabel = (key: string) => publications.find((p) => p.categoryKey === key)?.category;

  const filtered = category === "all" ? publications : publications.filter((p) => p.categoryKey === category);

  return (
    <>
      <PageHero
        eyebrow={t("page.publications.title")}
        title={t("page.publications.title")}
        description={t("home.introBody")}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory("all")}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition",
              category === "all"
                ? "border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink"
                : "border-ink/15 text-ink/60 hover:border-ink dark:border-paper/15 dark:text-paper/60"
            )}
          >
            {t("publications.allCategories")}
          </button>
          {categories.map((key) => {
            const label = categoryLabel(key);
            return (
              <button
                key={key}
                onClick={() => setCategory(key)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition",
                  category === key
                    ? "border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink"
                    : "border-ink/15 text-ink/60 hover:border-ink dark:border-paper/15 dark:text-paper/60"
                )}
              >
                {label ? tr(label) : key}
              </button>
            );
          })}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((pub, i) => (
              <PublicationCard key={pub.slug} pub={pub} index={i} />
            ))}
          </div>
        ) : (
          <p className="mt-20 text-center text-ink/50 dark:text-paper/50">{t("empty.noArticles")}</p>
        )}
      </section>
    </>
  );
}
