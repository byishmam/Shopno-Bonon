import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import type { MediaVideo } from "../../data/types";

export function VideoCard({
  video,
  index = 0,
  onPlay,
}: {
  video: MediaVideo;
  index?: number;
  onPlay: (video: MediaVideo) => void;
}) {
  const { tr } = useLanguage();

  return (
    <motion.button
      onClick={() => onPlay(video)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative block overflow-hidden rounded-2xl text-left"
      data-cursor="Play"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={tr(video.title)}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper/90 text-ink shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play size={20} fill="currentColor" className="ml-0.5" />
          </span>
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-medium text-ink">
          {tr(video.category)}
        </span>
      </div>
      <div className="mt-3">
        <h3 className="font-medium tracking-tight text-ink dark:text-paper">{tr(video.title)}</h3>
        <p className="mt-1 line-clamp-1 text-sm text-ink/55 dark:text-paper/55">{tr(video.description)}</p>
      </div>
    </motion.button>
  );
}
