"use client";

import { ExternalLink } from "lucide-react";
import { experience as spanishExperience } from "@/lib/data";
import { experience as englishExperience } from "@/lib/data.en";
import SectionTag from "./SectionTag";
import { useLanguage } from "./LanguageProvider";

export default function Experience() {
  const { language, t } = useLanguage();
  const experience = language === "en" ? englishExperience : spanishExperience;

  return (
    <section id="experiencia" className="mx-auto max-w-content px-6 py-20">
      <SectionTag>{t.experience.tag}</SectionTag>
      <h2 data-reveal className="mb-10 text-2xl font-semibold text-text sm:text-3xl">
        {t.experience.title}
      </h2>

      <ol data-reveal-stagger className="experience-timeline relative border-l border-surface0 pl-8">
        {experience.map((job) => (
          <li data-reveal key={job.company} className="mb-12 last:mb-0">
            <span
              data-timeline-dot
              className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-base bg-mauve"
            />

            <p className="font-mono text-xs text-overlay0">{job.period}</p>

            <h3 className="mt-1.5 text-base font-medium text-text">
              {job.role}
            </h3>

            {job.link ? (
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-flex items-center gap-1 text-sm text-subtext1 transition-colors hover:text-mauve"
              >
                {job.company}
                <ExternalLink size={12} />
              </a>
            ) : (
              <p className="mt-0.5 text-sm text-subtext1">{job.company}</p>
            )}

            <ul className="mt-3 space-y-2">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="max-w-2xl text-sm leading-relaxed text-subtext0"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
