import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import SectionTag from "./SectionTag";

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-content px-6 py-20">
      <SectionTag>contacto</SectionTag>
      <h2 className="text-2xl font-semibold text-text sm:text-3xl">
        Hablemos de tu proyecto
      </h2>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-subtext0">
        Estoy disponible para proyectos de desarrollo web. Si tienes
        una idea o necesitas ayuda con tu producto, escríbeme y con gusto la
        conversamos.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md bg-mauve px-5 py-2.5 text-sm font-medium text-crust transition-colors hover:bg-lavender"
        >
          <Mail size={16} />
          Enviar un correo
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
