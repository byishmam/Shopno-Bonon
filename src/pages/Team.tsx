import { PageHero } from "../components/PageHero";
import { TeamCard } from "../components/cards/TeamCard";
import { useLanguage } from "../context/LanguageContext";
import { teamMembers } from "../data/team";

export default function Team() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero eyebrow={t("home.teamEyebrow")} title={t("page.team.title")} description={t("team.placeholderNote")} />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.slug} member={member} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
