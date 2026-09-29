"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile as spanishProfile } from "@/lib/data";
import { profile as englishProfile } from "@/lib/data.en";
import SectionTag from "./SectionTag";
import { useLanguage } from "./LanguageProvider";

export default function Contact() {
  const { language, t } = useLanguage();
  const profile = language === "en" ? englishProfile : spanishProfile;

  return (
    <section id="contacto" className="mx-auto max-w-content px-6 py-20">
      <SectionTag>{t.contact.tag}</SectionTag>
      <h2 className="text-2xl font-semibold text-text sm:text-3xl">
        {t.contact.title}
      </h2>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-subtext0">
        {t.contact.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md bg-mauve px-5 py-2.5 text-sm font-medium text-crust transition-colors hover:bg-lavender"
        >
          <Mail size={16} />
          {t.contact.email}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-surface1 px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-mauve hover:text-mauve"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-surface1 px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-mauve hover:text-mauve"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-subtext0">
        <Phone size={15} />
        {profile.phone}
      </div>
    </section>
  );
}
