"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const links = [
    { href: "#sobre-mi", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#experiencia", label: t.nav.experience },
    { href: "#proyectos", label: t.nav.projects },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-surface0/80 bg-mantle/90 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="font-mono text-sm text-subtext1 transition-colors hover:text-mauve"
        >
          <span className="text-overlay0">~/</span>victor-chalen
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-subtext0 transition-colors hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label={t.languageLabel}
            className="flex rounded-md border border-surface0 p-0.5"
          >
            {(["es", "en"] as const).map((option) => (
              <button
                key={option}
                type="button"
                aria-label={option === "es" ? "Español" : "English"}
                aria-pressed={language === option}
                onClick={() => setLanguage(option)}
                className={`rounded px-2 py-1 font-mono text-xs transition-colors ${
                  language === option
                    ? "bg-surface0 text-text"
                    : "text-subtext1 hover:text-text"
                }`}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="text-subtext1 hover:text-text md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-surface0 px-6 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-subtext0 hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
