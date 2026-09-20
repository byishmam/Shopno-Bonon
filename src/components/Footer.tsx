import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "./BrandIcons";
import { siteConfig } from "../data/site";
import { navigation } from "../data/navigation";
import { socialLinks } from "../data/social";
import { useLanguage } from "../context/LanguageContext";

const socialIcons = [
  { key: "facebook", icon: FacebookIcon, url: socialLinks.facebook },
  { key: "instagram", icon: InstagramIcon, url: socialLinks.instagram },
  { key: "youtube", icon: YoutubeIcon, url: socialLinks.youtube },
  { key: "linkedin", icon: LinkedinIcon, url: socialLinks.linkedin },
].filter((s) => s.url);

export function Footer() {
  const { tr, t } = useLanguage();

  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-paper-2 pt-16 text-ink dark:border-paper/10 dark:bg-ink-2 dark:text-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={siteConfig.logo} alt={siteConfig.name} className="h-9 w-9 object-contain" />
            <div>
              <p className="text-lg font-semibold tracking-tight">{siteConfig.bengaliName}</p>
              <p className="font-en text-[10px] uppercase tracking-[0.35em] text-ink/50 dark:text-paper/50">
                {siteConfig.name}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm italic text-ink/60 dark:text-paper/60">"{tr(siteConfig.shortMotto)}"</p>
          <p className="mt-4 max-w-sm text-sm text-ink/70 dark:text-paper/70">{t("footer.builtWith")}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/40 dark:text-paper/40">
            {t("footer.navigation")}
          </p>
          <ul className="mt-4 space-y-2.5">
            {navigation
              .filter((n) => n.href !== "/")
              .map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="link-underline text-sm text-ink/70 hover:text-ink dark:text-paper/70 dark:hover:text-paper"
                  >
                    {tr(item.label)}
                  </Link>
                </li>
              ))}
            <li>
              <Link
                to="/media"
                className="link-underline text-sm text-ink/70 hover:text-ink dark:text-paper/70 dark:hover:text-paper"
              >
                {t("page.media.title")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="link-underline text-sm text-ink/70 hover:text-ink dark:text-paper/70 dark:hover:text-paper"
              >
                {t("page.contact.title")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/40 dark:text-paper/40">
            {t("footer.contact")}
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink/70 dark:text-paper/70">
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.phone}</li>
            <li>{tr(siteConfig.contact.location)}</li>
          </ul>
          {socialIcons.length > 0 && (
            <div className="mt-5 flex gap-2">
              {socialIcons.map(({ key, icon: Icon, url }) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  data-cursor="View"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition hover:-translate-y-0.5 hover:border-gold hover:text-ink dark:border-paper/10 dark:text-paper/60 dark:hover:text-paper"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-ink/10 dark:border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-ink/50 sm:flex-row dark:text-paper/50">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {t("footer.rights")}
          </p>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gold"
          >
            facebook.com/shopno.bononn <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      <p className="font-en pointer-events-none absolute -bottom-10 left-1/2 -z-0 w-full -translate-x-1/2 select-none text-center text-[18vw] font-bold leading-none text-ink/[0.025] dark:text-paper/[0.03]">
        SHOPNOBUNON
      </p>
    </footer>
  );
}
