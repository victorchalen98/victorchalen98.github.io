"use client";

import { skills as spanishSkills } from "@/lib/data";
import { skills as englishSkills } from "@/lib/data.en";
import SectionTag from "./SectionTag";
import { useLanguage } from "./LanguageProvider";

// Tailwind necesita ver las clases completas en el código fuente para no
// purgarlas, así que mapeamos cada acento a sus clases en vez de construirlas
// dinámicamente con template strings.
const accentClasses = {
  mauve: { border: "border-mauve/40", text: "text-mauve", dot: "bg-mauve" },
  green: { border: "border-green/40", text: "text-green", dot: "bg-green" },
  blue: { border: "border-blue/40", text: "text-blue", dot: "bg-blue" },
  peach: { border: "border-peach/40", text: "text-peach", dot: "bg-peach" },
} as const;

export default function Skills() {
  const { language, t } = useLanguage();
  const skills = language === "en" ? englishSkills : spanishSkills;

  return (
    <section id="skills" className="border-y border-surface0/70 bg-mantle/40">
      <div className="mx-auto max-w-content px-6 py-20">
        <SectionTag>{t.skills.tag}</SectionTag>
        <h2 data-reveal className="text-2xl font-semibold text-text sm:text-3xl">
          {t.skills.title}
        </h2>

        <div data-reveal-stagger className="mt-8 grid gap-5 sm:grid-cols-2">
          {skills.map((group) => {
            const accent = accentClasses[group.accent];
            return (
              <div
                key={group.category}
                data-reveal
                className={`rounded-lg border-l-2 bg-mantle/60 p-5 motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg motion-safe:hover:shadow-crust/30 ${accent.border}`}
              >
                <h3 className={`mb-3 text-sm font-medium ${accent.text}`}>
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-1.5 text-sm text-subtext0"
                    >
                      <span
                        className={`h-1 w-1 rounded-full ${accent.dot}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
