import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { VideoCard } from "../components/cards/VideoCard";
import { VideoModal } from "../components/VideoModal";
import { useLanguage } from "../context/LanguageContext";
import { mediaVideos } from "../data/media";
import type { MediaVideo } from "../data/types";

export default function Media() {
  const { t } = useLanguage();
  const [playing, setPlaying] = useState<MediaVideo | null>(null);

  return (
    <>
      <PageHero eyebrow={t("page.media.title")} title={t("home.speakingTitle")} description={t("home.introBody")} />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mediaVideos.map((video, i) => (
            <VideoCard key={video.slug} video={video} index={i} onPlay={setPlaying} />
          ))}
        </div>
        <VideoModal video={playing} onClose={() => setPlaying(null)} />
      </section>
    </>
  );
}
