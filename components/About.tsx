import { profile } from "@/lib/data";
import SectionTag from "./SectionTag";

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-content px-6 py-20">
      <SectionTag>sobre-mí</SectionTag>
      <h2 className="text-2xl font-semibold text-text sm:text-3xl">
        Cómo pienso el desarrollo web
      </h2>
      <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-subtext0">
        Soy egresado de Ingeniería en Software y me enfoco en desarrollar
        productos web claros, funcionales y fáciles de mantener. Trabajo
        principalmente con React y Next.js en el frontend, y con Node.js o
        Python en el backend, utilizando bases de datos relacionales para
        estructurar y gestionar la información. <br /> <br /> Antes de escribir código, pienso
        en las personas que van a utilizar la interfaz. Para mí, la usabilidad y
        el rendimiento no son detalles que se resuelven al final, sino aspectos
        que deben considerarse desde el diseño y la arquitectura del producto.
      </p>
    </section>
  );
}
