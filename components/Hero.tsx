import { MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import CodeWindow from "./CodeWindow";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto flex max-w-content flex-col-reverse items-center gap-12 px-6 pb-24 pt-16 md:flex-row md:items-center md:pt-24"
    >
      <div className="w-full animate-fade-up md:w-1/2">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-surface0 bg-mantle px-3 py-1 text-xs text-subtext1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
          </span>
          Disponible para oportunidades laborales
        </div>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-text sm:text-5xl">
          {profile.name}
        </h1>

        <p className="mt-3 font-mono text-sm text-mauve">
          {profile.role}
        </p>

        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-subtext0">
          {profile.summary}
        </p>

        <div className="mt-6 flex items-center gap-1.5 text-sm text-overlay1">
          <MapPin size={15} />
          {profile.location}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#proyectos"
            className="rounded-md bg-mauve px-5 py-2.5 text-sm font-medium text-crust transition-colors hover:bg-lavender"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="rounded-md border border-surface1 px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-mauve hover:text-mauve"
          >
            Contactarme
          </a>
        </div>
      </div>

      <div className="flex w-full justify-center md:w-1/2 md:justify-end">
        <CodeWindow />
      </div>
    </section>
  );
}
