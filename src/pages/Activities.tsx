import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";
import { whatWeDo } from "../data/content";

export default function Activities() {
  const { tr, t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("home.whatWeDoEyebrow")}
        title={t("page.activities.title")}
        description={t("home.introBody")}
      />

      <section className="mx-auto max-w-6xl space-y-20 px-6 py-24">
        {whatWeDo.map((item, i) => {
          const Icon = item.icon;
          const reversed = i % 2 === 1;
          return (
            <div
              key={item.key}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`}
            >
              <Reveal className={reversed ? "[direction:ltr]" : ""}>
                <div className="overflow-hidden rounded-3xl">
                  <img src={item.image} alt={tr(item.title)} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.1} className={reversed ? "[direction:ltr]" : ""}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink dark:text-paper sm:text-3xl">
                  {tr(item.title)}
                </h2>
                <p className="mt-3 text-ink/65 dark:text-paper/65">{tr(item.description)}</p>
                <ul className="mt-5 space-y-2">
                  {item.points.map((point) => (
                    <li key={tr(point)} className="flex items-center gap-2 text-sm text-ink/70 dark:text-paper/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {tr(point)}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          );
        })}
      </section>
    </>
  );
}
