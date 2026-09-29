"use client";

import SectionTag from "./SectionTag";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="mx-auto max-w-content px-6 py-20">
      <SectionTag>{t.about.tag}</SectionTag>
      <h2 data-reveal className="text-2xl font-semibold text-text sm:text-3xl">
        {t.about.title}
      </h2>
      <p data-reveal className="mt-5 max-w-2xl text-[15px] leading-relaxed text-subtext0">
        {t.about.first}
      </p>
      <p data-reveal className="mt-4 max-w-2xl text-[15px] leading-relaxed text-subtext0">
        {t.about.second}
      </p>
    </section>
  );
}
