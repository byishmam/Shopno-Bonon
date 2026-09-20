import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link2, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { publications } from "../data/publications";
import { Avatar } from "../components/Avatar";
import { PublicationCard } from "../components/cards/PublicationCard";
import { formatDate } from "../utils/dates";
import { buildShareLinks } from "../utils/share";
import { FacebookIcon } from "../components/BrandIcons";
import NotFound from "./NotFound";

export default function PublicationDetail() {
  const { slug } = useParams();
  const { lang, tr, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const pub = publications.find((p) => p.slug === slug);
  if (!pub) return <NotFound />;

  const related = publications.filter((p) => p.slug !== pub.slug && p.categoryKey === pub.categoryKey).slice(0, 3);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const shareLinks = buildShareLinks(url, tr(pub.title));

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <article>
      <section className="relative overflow-hidden bg-ink pb-16 pt-32 text-paper sm:pt-40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-en text-xs font-semibold uppercase tracking-[0.3em] text-gold-2">{tr(pub.category)}</p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-balance mt-4 text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            {tr(pub.title)}
          </motion.h1>
          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-paper/70">
            <Avatar
              image={pub.authorImage}
              initials={pub.authorInitials}
              name={tr(pub.authorName)}
              className="h-9 w-9 rounded-full text-xs"
            />
            <Link to={`/authors/${pub.author}`} className="hover:text-gold-2">
              {t("publications.by")} {tr(pub.authorName)}
            </Link>
            <span aria-hidden>·</span>
            <span>{formatDate(pub.publishedAt, lang)}</span>
            <span aria-hidden>·</span>
            <span>{pub.readingTime}</span>
          </div>
        </div>
      </section>

      <div className="mx-auto -mt-10 max-w-4xl px-6">
        <img src={pub.coverImage} alt={tr(pub.title)} className="aspect-[16/9] w-full rounded-2xl object-cover shadow-2xl" />
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-[1fr_140px]">
        <div className="prose-content order-2 lg:order-1">
          {tr(pub.content)
            .split("\n\n")
            .map((para, i) => (
              <p key={i} className="mb-6 text-lg leading-relaxed text-ink/80 dark:text-paper/80">
                {para}
              </p>
            ))}

          <div className="mt-10 flex flex-wrap gap-2 border-t border-ink/10 pt-6 dark:border-paper/10">
            {pub.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-ink/5 px-3 py-1 text-xs text-ink/60 dark:bg-paper/10 dark:text-paper/60"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <aside className="order-1 flex flex-row flex-wrap gap-2 lg:order-2 lg:flex-col lg:gap-3">
          <p className="w-full text-xs font-semibold uppercase tracking-wide text-ink/40 dark:text-paper/40">
            {t("publications.share")}
          </p>
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink/60 hover:border-gold hover:text-gold dark:border-paper/10 dark:text-paper/60"
            aria-label="Share on Facebook"
          >
            <FacebookIcon size={16} />
          </a>
          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-xs font-semibold text-ink/60 hover:border-gold hover:text-gold dark:border-paper/10 dark:text-paper/60"
            aria-label="Share on WhatsApp"
          >
            WA
          </a>
          <a
            href={shareLinks.x}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-xs font-semibold text-ink/60 hover:border-gold hover:text-gold dark:border-paper/10 dark:text-paper/60"
            aria-label="Share on X"
          >
            X
          </a>
          <button
            onClick={copyLink}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink/60 hover:border-gold hover:text-gold dark:border-paper/10 dark:text-paper/60"
            aria-label={t("publications.copyLink")}
          >
            {copied ? <Check size={15} /> : <Link2 size={15} />}
          </button>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="border-t border-ink/10 bg-paper-2 py-20 dark:border-paper/10 dark:bg-ink-2">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-paper">
              {t("publications.related")}
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <PublicationCard key={r.slug} pub={r} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
