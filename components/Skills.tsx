import { skills } from "@/lib/data";
import SectionTag from "./SectionTag";

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
  return (
    <section id="skills" className="border-y border-surface0/70 bg-mantle/40">
      <div className="mx-auto max-w-content px-6 py-20">
        <SectionTag>stack</SectionTag>
        <h2 className="text-2xl font-semibold text-text sm:text-3xl">
          Con qué trabajo
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {skills.map((group) => {
            const accent = accentClasses[group.accent];
            return (
              <div
                key={group.category}
                className={`rounded-lg border-l-2 bg-mantle/60 p-5 ${accent.border}`}
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
