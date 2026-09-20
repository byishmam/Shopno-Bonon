import { motion } from "framer-motion";
import { Avatar } from "../Avatar";
import { useLanguage } from "../../context/LanguageContext";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../BrandIcons";
import type { TeamMember } from "../../data/types";

export function TeamCard({ member, index = 0 }: { member: TeamMember; index?: number }) {
  const { tr } = useLanguage();

  const socials = [
    { key: "facebook", icon: FacebookIcon, url: member.social.facebook },
    { key: "instagram", icon: InstagramIcon, url: member.social.instagram },
    { key: "linkedin", icon: LinkedinIcon, url: member.social.linkedin },
  ].filter((s) => s.url);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-paper p-6 text-center transition-shadow hover:shadow-xl hover:shadow-ink/5 dark:border-paper/10 dark:bg-ink-2"
    >
      <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full ring-4 ring-paper-2 transition group-hover:ring-gold/40 dark:ring-ink">
        <Avatar image={member.image} initials={member.initials} name={tr(member.name)} className="h-full w-full text-xl" />
      </div>
      <h3 className="mt-4 text-base font-semibold tracking-tight text-ink dark:text-paper">{tr(member.name)}</h3>
      <p className="text-xs font-medium uppercase tracking-wide text-gold">{tr(member.position)}</p>
      <p className="mt-3 text-sm text-ink/60 dark:text-paper/60">{tr(member.bio)}</p>
      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-ink/[0.05] px-2.5 py-1 text-[10px] text-ink/60 dark:bg-paper/10 dark:text-paper/60"
          >
            {skill}
          </span>
        ))}
      </div>
      {socials.length > 0 && (
        <div className="mt-4 flex justify-center gap-2 border-t border-ink/10 pt-4 dark:border-paper/10">
          {socials.map(({ key, icon: Icon, url }) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full text-ink/50 transition hover:bg-gold/10 hover:text-gold dark:text-paper/50"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
}
