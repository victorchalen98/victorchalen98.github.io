import { Github } from "lucide-react";
import { profile, projects } from "@/lib/data";
import SectionTag from "./SectionTag";

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="border-y border-surface0/70 bg-mantle/40"
    >
      <div className="mx-auto max-w-content px-6 py-20">
        <SectionTag>proyectos</SectionTag>
        <h2 className="text-2xl font-semibold text-text sm:text-3xl">
          Algo que he construido
        </h2>

        <div className="mt-8 space-y-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-surface0 p-6 transition-colors hover:border-mauve/50 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium text-text group-hover:text-mauve">
                  {project.name}
                </h3>
                <Github
                  size={20}
                  className="mt-1 shrink-0 text-overlay0 group-hover:text-mauve"
                />
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-subtext0">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-surface0 px-2.5 py-1 font-mono text-xs text-subtext1"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm text-subtext1 transition-colors hover:text-mauve"
        >
          <Github size={16} />
          Ver más proyectos en GitHub
        </a>
      </div>
    </section>
  );
}
