import { education } from "@/lib/data";
import SectionTag from "./SectionTag";

export default function Education() {
  return (
    <section id="educacion" className="mx-auto max-w-content px-6 py-20">
      <SectionTag>educación</SectionTag>
      <h2 className="mb-8 text-2xl font-semibold text-text sm:text-3xl">
        Formación
      </h2>

      <div className="flex flex-col justify-between gap-1 border-l-2 border-blue/40 pl-5 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-base font-medium text-text">
            {education.institution}
          </h3>
          <p className="text-sm text-subtext1">{education.program}</p>
        </div>
        <div className="text-left sm:text-right">
          <p className="font-mono text-xs text-overlay0">{education.period}</p>
          <p className="text-sm text-blue">{education.status}</p>
        </div>
      </div>
    </section>
  );
}
