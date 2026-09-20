import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Lightbox } from "../components/Lightbox";
import { useLanguage } from "../context/LanguageContext";
import { galleryImages } from "../data/gallery";
import { cn } from "../utils/cn";

const filters = [
  { key: "All", labelKey: "gallery.filters.all" },
  { key: "Events", labelKey: "gallery.filters.events" },
  { key: "Team", labelKey: "gallery.filters.team" },
  { key: "Public Speaking", labelKey: "gallery.filters.publicSpeaking" },
  { key: "Workshops", labelKey: "gallery.filters.workshops" },
  { key: "Community", labelKey: "gallery.filters.community" },
  { key: "Behind the Scenes", labelKey: "gallery.filters.behindTheScenes" },
] as const;

export default function Gallery() {
  const { tr, t } = useLanguage();
  const [filter, setFilter] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)),
    [filter]
  );

  return (
    <>
      <PageHero eyebrow={t("page.gallery.title")} title={t("page.gallery.title")} description={t("home.introBody")} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition",
                filter === f.key
                  ? "border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink"
                  : "border-ink/15 text-ink/60 hover:border-ink dark:border-paper/15 dark:text-paper/60"
              )}
            >
              {t(f.labelKey)}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-12 columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
            {filtered.map((img, i) => (
              <motion.button
                key={img.image}
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 8) * 0.05 }}
                className="block w-full overflow-hidden rounded-xl"
                data-cursor="View"
              >
                <img
                  src={img.image}
                  alt={tr(img.title)}
                  loading="lazy"
                  className="w-full object-cover transition duration-500 hover:scale-105"
                />
              </motion.button>
            ))}
          </div>
        ) : (
          <p className="mt-20 text-center text-ink/50 dark:text-paper/50">{t("empty.noGallery")}</p>
        )}
      </section>

      <Lightbox images={filtered} index={activeIndex} onClose={() => setActiveIndex(null)} onNavigate={setActiveIndex} />
    </>
  );
}
