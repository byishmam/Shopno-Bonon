import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../data/site";
import { socialLinks } from "../data/social";
import { WeaveThreads } from "../components/WeaveThreads";
import { Reveal, StaggerGroup, staggerItem } from "../components/Reveal";
import { values, whatWeDo } from "../data/content";
import { ValueCard } from "../components/cards/ValueCard";
import { PublicationCard } from "../components/cards/PublicationCard";
import { EventCard } from "../components/cards/EventCard";
import { TeamCard } from "../components/cards/TeamCard";
import { VideoCard } from "../components/cards/VideoCard";
import { VideoModal } from "../components/VideoModal";
import { publications } from "../data/publications";
import { events } from "../data/events";
import { teamMembers } from "../data/team";
import { galleryImages } from "../data/gallery";
import { mediaVideos } from "../data/media";
import { getEventStatus } from "../utils/dates";
import { FacebookIcon } from "../components/BrandIcons";
import { useState } from "react";

export default function Home() {
  const { tr, t } = useLanguage();
  const [playing, setPlaying] = useState<(typeof mediaVideos)[number] | null>(null);

  const featured = publications.filter((p) => p.featured).slice(0, 3);
  const upcoming = events.filter((e) => getEventStatus(e) === "upcoming").slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink text-paper">
        <WeaveThreads className="absolute inset-0 h-full w-full text-gold/60" count={11} />
        <div className="bg-noise absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/40 to-ink" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-en text-xs font-semibold uppercase tracking-[0.5em] text-gold-2"
          >
            {siteConfig.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-6xl font-semibold tracking-tight sm:text-8xl"
          >
            {siteConfig.bengaliName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="text-balance mt-6 max-w-2xl text-xl font-medium sm:text-2xl"
          >
            {tr(siteConfig.headline)}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.7 }}
            className="text-balance mt-4 max-w-xl text-sm text-paper/70 sm:text-base"
          >
            {tr(siteConfig.subheadline)}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="mt-6 font-en text-xs italic tracking-wide text-gold-2/90 sm:text-sm"
          >
            "{tr(siteConfig.shortMotto)}"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/about"
              data-cursor="View"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold-2"
            >
              {t("cta.explore")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/join"
              data-cursor="View"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/30 px-7 py-3.5 text-sm font-semibold text-paper transition hover:border-paper hover:bg-paper/10"
            >
              {t("cta.join")}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/50"
        >
          <ArrowDown className="animate-bounce" size={18} />
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p className="font-en text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            {t("home.introEyebrow")}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-balance mt-4 text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            {t("home.introTitle")}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-balance mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/65 dark:text-paper/65">
            {t("home.introBody")}
          </p>
        </Reveal>
      </section>

      {/* MISSION + VISION */}
      <section className="border-y border-ink/10 bg-paper-2 py-24 dark:border-paper/10 dark:bg-ink-2">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <Reveal>
            <p className="font-en text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              {t("home.missionEyebrow")}
            </p>
            <p className="text-balance mt-4 text-2xl font-medium leading-snug tracking-tight text-ink dark:text-paper sm:text-3xl">
              {tr(siteConfig.mission)}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-en text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              {t("home.visionEyebrow")}
            </p>
            <p className="text-balance mt-4 text-2xl font-medium leading-snug tracking-tight text-ink dark:text-paper sm:text-3xl">
              {tr(siteConfig.vision)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-en text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              {t("home.valuesEyebrow")}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
              {t("home.valuesTitle")}
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <ValueCard key={value.key} value={value} index={i} />
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="border-y border-ink/10 bg-paper-2 py-24 dark:border-paper/10 dark:bg-ink-2 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="font-en text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                {t("home.whatWeDoEyebrow")}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
                {t("home.whatWeDoTitle")}
              </h2>
            </Reveal>
          </div>
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.key}
                  variants={staggerItem}
                  className="group relative overflow-hidden rounded-2xl bg-ink"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={tr(item.title)}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-110 group-hover:opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-paper">
                    <Icon size={22} className="mb-2 text-gold-2" strokeWidth={1.75} />
                    <h3 className="text-lg font-semibold tracking-tight">{tr(item.title)}</h3>
                    <p className="mt-1.5 text-sm text-paper/70">{tr(item.description)}</p>
                  </div>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <p className="font-en text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                {t("home.pubEyebrow")}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
                {t("home.pubTitle")}
              </h2>
            </Reveal>
          </div>
          <Link to="/publications" className="link-underline text-sm font-medium text-ink dark:text-paper">
            {t("cta.viewAll")} →
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((pub, i) => (
            <PublicationCard key={pub.slug} pub={pub} index={i} />
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section className="border-y border-ink/10 bg-paper-2 py-24 dark:border-paper/10 dark:bg-ink-2 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Reveal>
                <p className="font-en text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                  {t("home.eventsEyebrow")}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
                  {t("home.eventsTitle")}
                </h2>
              </Reveal>
            </div>
            <Link to="/events" className="link-underline text-sm font-medium text-ink dark:text-paper">
              {t("cta.viewAll")} →
            </Link>
          </div>
          {upcoming.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((event, i) => (
                <EventCard key={event.slug} event={event} index={i} />
              ))}
            </div>
          ) : (
            <p className="mt-12 text-center text-ink/50 dark:text-paper/50">{t("empty.noEvents")}</p>
          )}
        </div>
      </section>

      {/* PUBLIC SPEAKING / VIDEOS */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-en text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              {t("home.speakingEyebrow")}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
              {t("home.speakingTitle")}
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {mediaVideos.slice(0, 4).map((video, i) => (
            <VideoCard key={video.slug} video={video} index={i} onPlay={setPlaying} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/media" className="link-underline text-sm font-medium text-ink dark:text-paper">
            {t("cta.viewAll")} →
          </Link>
        </div>
        <VideoModal video={playing} onClose={() => setPlaying(null)} />
      </section>

      {/* GALLERY PREVIEW */}
      <section className="border-y border-ink/10 bg-paper-2 py-24 dark:border-paper/10 dark:bg-ink-2 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Reveal>
                <p className="font-en text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                  {t("home.galleryEyebrow")}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
                  {t("home.galleryTitle")}
                </h2>
              </Reveal>
            </div>
            <Link to="/gallery" className="link-underline text-sm font-medium text-ink dark:text-paper">
              {t("cta.viewAll")} →
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {galleryImages.slice(0, 8).map((img, i) => (
              <motion.div
                key={img.image}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className={`overflow-hidden rounded-xl ${i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}
              >
                <Link to="/gallery" data-cursor="View">
                  <img
                    src={img.image}
                    alt={tr(img.title)}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 hover:scale-110"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <p className="font-en text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                {t("home.teamEyebrow")}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
                {t("home.teamTitle")}
              </h2>
            </Reveal>
          </div>
          <Link to="/team" className="link-underline text-sm font-medium text-ink dark:text-paper">
            {t("cta.viewAll")} →
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.slice(0, 4).map((member, i) => (
            <TeamCard key={member.slug} member={member} index={i} />
          ))}
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="relative overflow-hidden bg-ink py-28 text-paper">
        <WeaveThreads className="absolute inset-0 h-full w-full text-gold/40" count={8} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="font-en text-xs font-semibold uppercase tracking-[0.35em] text-gold-2">
              {t("home.joinEyebrow")}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-balance mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              {t("home.joinTitle")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-balance mx-auto mt-5 max-w-xl text-paper/70">{t("home.joinBody")}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/join"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold-2"
            >
              {t("cta.becomePart")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FOLLOW */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-28">
        <Reveal>
          <p className="font-en text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            {t("home.followEyebrow")}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            {t("home.followTitle")}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-md text-ink/60 dark:text-paper/60">{t("home.followBody")}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="View"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition hover:border-gold hover:text-gold dark:border-paper/15 dark:text-paper"
          >
            <FacebookIcon size={16} />
            facebook.com/shopno.bononn
          </a>
        </Reveal>
      </section>
    </>
  );
}
