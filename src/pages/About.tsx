import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../data/site";
import { aboutContent, values } from "../data/content";
import { ValueCard } from "../components/cards/ValueCard";

const blocks = [
  { key: "whoWeAre", labelBn: "আমরা কারা", labelEn: "Who We Are" },
  { key: "whyWeExist", labelBn: "কেন স্বপ্নবুননের অস্তিত্ব", labelEn: "Why ShopnoBunon Exists" },
  { key: "whatWeBelieve", labelBn: "আমরা যা বিশ্বাস করি", labelEn: "What We Believe" },
  { key: "whatWeDo", labelBn: "আমরা যা করি", labelEn: "What We Do" },
  { key: "whoWeServe", labelBn: "আমরা কাদের জন্য", labelEn: "Who We Serve" },
  { key: "whatWeWantToBuild", labelBn: "আমরা যা গড়তে চাই", labelEn: "What We Want to Build" },
] as const;

export default function About() {
  const { lang, tr, t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("home.introEyebrow")}
        title={t("page.about.title")}
        description={tr(siteConfig.about)}
      />

      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="space-y-16">
          {blocks.map((block, i) => (
            <Reveal key={block.key} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-[200px_1fr]">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                  {lang === "bn" ? block.labelBn : block.labelEn}
                </h2>
                <p className="text-balance text-xl leading-relaxed tracking-tight text-ink dark:text-paper">
                  {tr(aboutContent[block.key])}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper-2 py-24 dark:border-paper/10 dark:bg-ink-2">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="font-en text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                {t("home.valuesEyebrow")}
              </p>
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
        </div>
      </section>
    </>
  );
}
