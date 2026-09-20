import { Link } from "react-router-dom";
import { WeaveThreads } from "../components/WeaveThreads";
import { useLanguage } from "../context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center text-paper">
      <WeaveThreads className="absolute inset-0 h-full w-full text-gold/30" count={6} />
      <div className="relative">
        <p className="font-en text-8xl font-bold text-paper/10">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{t("notfound.title")}</h1>
        <p className="mt-3 text-paper/60">{t("notfound.body")}</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-2"
        >
          {t("cta.backHome")}
        </Link>
      </div>
    </section>
  );
}
