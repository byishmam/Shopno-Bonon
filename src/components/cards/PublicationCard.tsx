import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Avatar } from "../Avatar";
import { useLanguage } from "../../context/LanguageContext";
import { formatDate } from "../../utils/dates";
import type { Publication } from "../../data/types";

export function PublicationCard({ pub, index = 0 }: { pub: Publication; index?: number }) {
  const { lang, tr } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/publications/${pub.slug}`} className="group block" data-cursor="Read">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <img
            src={pub.coverImage}
            alt={tr(pub.title)}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
          />
          <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-medium text-ink backdrop-blur">
            {tr(pub.category)}
          </span>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-ink transition group-hover:text-gold dark:text-paper">
            {tr(pub.title)}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm text-ink/60 dark:text-paper/60">{tr(pub.excerpt)}</p>
          <div className="mt-3 flex items-center gap-2 text-xs text-ink/50 dark:text-paper/50">
            <Avatar
              image={pub.authorImage}
              initials={pub.authorInitials}
              name={tr(pub.authorName)}
              className="h-6 w-6 rounded-full text-[9px]"
            />
            <span>{tr(pub.authorName)}</span>
            <span aria-hidden>·</span>
            <span>{formatDate(pub.publishedAt, lang)}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
