import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../data/site";
import { socialLinks } from "../data/social";
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "../components/BrandIcons";

const socials = [
  { key: "facebook", icon: FacebookIcon, url: socialLinks.facebook },
  { key: "instagram", icon: InstagramIcon, url: socialLinks.instagram },
  { key: "youtube", icon: YoutubeIcon, url: socialLinks.youtube },
  { key: "linkedin", icon: LinkedinIcon, url: socialLinks.linkedin },
].filter((s) => s.url);

export default function Contact() {
  const { tr, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero eyebrow={t("page.contact.title")} title={t("page.contact.title")} description={t("home.introBody")} />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-ink dark:text-paper">
            {t("contact.detailsTitle")}
          </h2>
          <div className="mt-6 space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Mail size={16} />
              </span>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-ink/80 hover:text-gold dark:text-paper/80">
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Phone size={16} />
              </span>
              <a href={`tel:${siteConfig.contact.phone}`} className="text-ink/80 hover:text-gold dark:text-paper/80">
                {siteConfig.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                <MapPin size={16} />
              </span>
              <span className="text-ink/80 dark:text-paper/80">{tr(siteConfig.contact.location)}</span>
            </div>
          </div>

          {socials.length > 0 && (
            <div className="mt-8 flex gap-2">
              {socials.map(({ key, icon: Icon, url }) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition hover:border-gold hover:text-gold dark:border-paper/10 dark:text-paper/60"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight text-ink dark:text-paper">{t("contact.formTitle")}</h2>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-2xl border border-gold/30 bg-gold/10 p-8 text-center text-ink dark:text-paper"
            >
              <p className="text-lg font-medium">{t("form.success")}</p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 space-y-5">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink/70 dark:text-paper/70">{t("form.name")}</span>
                <input
                  required
                  className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-2.5 outline-none focus:border-gold dark:border-paper/15 dark:bg-ink"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink/70 dark:text-paper/70">{t("form.email")}</span>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-2.5 outline-none focus:border-gold dark:border-paper/15 dark:bg-ink"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink/70 dark:text-paper/70">{t("form.subject")}</span>
                <input className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-2.5 outline-none focus:border-gold dark:border-paper/15 dark:bg-ink" />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink/70 dark:text-paper/70">{t("form.message")}</span>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-2.5 outline-none focus:border-gold dark:border-paper/15 dark:bg-ink"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold-2"
              >
                {t("cta.sendMessage")}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
