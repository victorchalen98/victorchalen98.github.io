"use client";

import { profile as spanishProfile } from "@/lib/data";
import { profile as englishProfile } from "@/lib/data.en";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { language, t } = useLanguage();
  const profile = language === "en" ? englishProfile : spanishProfile;

  return (
    <footer className="border-t border-surface0 bg-crust">
      <div className="mx-auto max-w-content px-6 py-8 text-sm text-overlay1">
        <p>
          {profile.name}. {t.footer.builtWith} {profile.location}.
        </p>
      </div>
    </footer>
  );
}
