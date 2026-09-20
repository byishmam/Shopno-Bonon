import { AnimatePresence, motion } from "framer-motion";
import { X, Film } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import type { MediaVideo } from "../data/types";

export function VideoModal({ video, onClose }: { video: MediaVideo | null; onClose: () => void }) {
  const { tr } = useLanguage();

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-ink/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="w-full max-w-3xl overflow-hidden rounded-2xl bg-ink-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-paper/10 px-5 py-3">
              <p className="text-sm font-medium text-paper">{tr(video.title)}</p>
              <button onClick={onClose} aria-label="Close" className="text-paper/60 hover:text-paper">
                <X size={18} />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              {video.videoUrl ? (
                <iframe
                  src={video.videoUrl}
                  title={tr(video.title)}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-paper/60">
                  <Film size={28} />
                  <p className="text-sm">{tr(video.description)}</p>
                  <p className="font-en text-xs uppercase tracking-widest text-gold-2">Coming soon</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
