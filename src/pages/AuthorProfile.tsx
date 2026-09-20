import { useParams } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Avatar } from "../components/Avatar";
import { PublicationCard } from "../components/cards/PublicationCard";
import { useLanguage } from "../context/LanguageContext";
import { teamMembers } from "../data/team";
import { publications } from "../data/publications";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../components/BrandIcons";
import NotFound from "./NotFound";

export default function AuthorProfile() {
  const { slug } = useParams();
  const { tr, t } = useLanguage();

  const authorPublications = publications.filter((p) => p.author === slug);
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member && authorPublications.length === 0) return <NotFound />;

  const name = member ? tr(member.name) : authorPublications[0]?.authorName ? tr(authorPublications[0].authorName) : slug;
  const initials = member?.initials ?? authorPublications[0]?.authorInitials ?? "?";
  const image = member?.image ?? authorPublications[0]?.authorImage;
  const bio = member ? tr(member.bio) : "";

  const socials = member
    ? [
        { key: "facebook", icon: FacebookIcon, url: member.social.facebook },
        { key: "instagram", icon: InstagramIcon, url: member.social.instagram },
        { key: "linkedin", icon: LinkedinIcon, url: member.social.linkedin },
      ].filter((s) => s.url)
    : [];

  return (
    <>
      <PageHero
        eyebrow={member ? tr(member.position) : t("page.publications.title")}
        title={
          <span className="flex flex-col items-center gap-4">
            <Avatar image={image} initials={initials} name={name} className="h-20 w-20 rounded-full text-2xl" />
            {name}
          </span>
        }
        description={bio}
      >
        {member && member.skills.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-ink/5 px-3 py-1 text-xs text-ink/60 dark:bg-paper/10 dark:text-paper/60"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        {socials.length > 0 && (
          <div className="mt-6 flex justify-center gap-2">
            {socials.map(({ key, icon: Icon, url }) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/60 hover:border-gold hover:text-gold dark:border-paper/10 dark:text-paper/60"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        )}
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-xl font-semibold tracking-tight text-ink dark:text-paper">
          {t("author.publishedArticles")} ({authorPublications.length})
        </h2>
        {authorPublications.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {authorPublications.map((pub, i) => (
              <PublicationCard key={pub.slug} pub={pub} index={i} />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-ink/50 dark:text-paper/50">{t("empty.noArticles")}</p>
        )}
      </section>
    </>
  );
}
