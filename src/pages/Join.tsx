import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { PenLine, Mic2, Palette, Camera, Video, CalendarDays, Share2, Search } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";

const roles = [
  { key: "volunteer", icon: Share2, bn: "স্বেচ্ছাসেবক", en: "Volunteer" },
  { key: "writer", icon: PenLine, bn: "লেখক", en: "Writer" },
  { key: "speaker", icon: Mic2, bn: "বক্তা", en: "Speaker" },
  { key: "designer", icon: Palette, bn: "ডিজাইনার", en: "Designer" },
  { key: "photographer", icon: Camera, bn: "ফটোগ্রাফার", en: "Photographer" },
  { key: "videographer", icon: Video, bn: "ভিডিওগ্রাফার", en: "Videographer" },
  { key: "organizer", icon: CalendarDays, bn: "ইভেন্ট আয়োজক", en: "Event Organizer" },
  { key: "researcher", icon: Search, bn: "গবেষক", en: "Researcher" },
];

export default function Join() {
  const { lang, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState(roles[0].key);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero eyebrow={t("page.join.title")} title={t("home.joinTitle")} description={t("home.joinBody")} />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="text-center text-2xl font-semibold tracking-tight text-ink dark:text-paper">
            {t("join.rolesTitle")}
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {roles.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.button
                type="button"
                key={r.key}
                onClick={() => setRole(r.key)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`flex flex-col items-center gap-2 rounded-2xl border p-5 text-center transition ${
                  role === r.key
                    ? "border-gold bg-gold/10 text-ink dark:text-paper"
                    : "border-ink/10 text-ink/60 hover:border-gold/50 dark:border-paper/10 dark:text-paper/60"
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{lang === "bn" ? r.bn : r.en}</span>
              </motion.button>
            );
          })}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper-2 py-20 dark:border-paper/10 dark:bg-ink-2">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-ink dark:text-paper">
            {t("join.formTitle")}
          </h2>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 rounded-2xl border border-gold/30 bg-gold/10 p-8 text-center text-ink dark:text-paper"
            >
              <p className="text-lg font-medium">{t("form.success")}</p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="mt-10 space-y-5">
              <input type="hidden" name="role" value={role} />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label={t("form.name")} name="name" required />
                <Field label={t("form.email")} name="email" type="email" required />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label={t("form.phone")} name="phone" />
                <Field label={t("form.institution")} name="institution" />
              </div>
              <Field label={t("form.skills")} name="skills" placeholder={lang === "bn" ? "যেমন: লেখা, ডিজাইন" : "e.g. Writing, Design"} />
              <Field label={t("form.interest")} name="interest" />
              <TextArea label={t("form.why")} name="why" required />
              <Field label={t("form.portfolio")} name="portfolio" />
              <button
                type="submit"
                className="w-full rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold-2"
              >
                {t("cta.submitApplication")}
              </button>
              <p className="text-center text-xs text-ink/40 dark:text-paper/40">
                {lang === "bn"
                  ? "এই ফর্মটি বর্তমানে ডেমো মোডে আছে। ব্যাকএন্ড সংযুক্ত করতে CONTENT_GUIDE.md দেখুন।"
                  : "This form is currently in demo mode. See CONTENT_GUIDE.md to connect a backend."}
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-ink/70 dark:text-paper/70">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-2.5 outline-none transition focus:border-gold dark:border-paper/15 dark:bg-ink"
      />
    </label>
  );
}

function TextArea({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-ink/70 dark:text-paper/70">{label}</span>
      <textarea
        name={name}
        required={required}
        rows={4}
        className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-2.5 outline-none transition focus:border-gold dark:border-paper/15 dark:bg-ink"
      />
    </label>
  );
}
