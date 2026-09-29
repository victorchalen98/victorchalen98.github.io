export type Language = "es" | "en";

export const translations = {
  es: {
    metadata: {
      title: "Víctor Chalén — Ingeniero de Software",
      description:
        "Portafolio de Víctor Chalén, ingeniero de software especializado en desarrollo web frontend con React, Next.js y Python.",
    },
    languageLabel: "Idioma",
    nav: {
      about: "Sobre mí",
      skills: "Skills",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      availability: "Disponible para oportunidades laborales",
      projects: "Ver proyectos",
      cv: "Ver CV",
      contact: "Contactarme",
    },
    code: {
      comment: "buscando nuevos retos",
      role: "Desarrollador Frontend",
      status: "disponible",
    },
    about: {
      tag: "sobre-mí",
      title: "Cómo pienso el desarrollo web",
      first:
        "Soy egresado de Ingeniería en Software y me enfoco en desarrollar productos web claros, funcionales y fáciles de mantener. Trabajo principalmente con React y Next.js en el frontend, y con Node.js o Python en el backend, utilizando bases de datos relacionales para estructurar y gestionar la información.",
      second:
        "Antes de escribir código, pienso en las personas que van a utilizar la interfaz. Para mí, la usabilidad y el rendimiento no son detalles que se resuelven al final, sino aspectos que deben considerarse desde el diseño y la arquitectura del producto.",
    },
    skills: { tag: "stack", title: "Con qué trabajo" },
    experience: { tag: "experiencia", title: "Por dónde he pasado" },
    projects: {
      tag: "proyectos",
      title: "Algo que he construido",
      more: "Ver más proyectos en GitHub",
    },
    education: { tag: "educación", title: "Formación" },
    contact: {
      tag: "contacto",
      title: "Hablemos de tu proyecto",
      description:
        "Estoy disponible para proyectos de desarrollo web. Si tienes una idea o necesitas ayuda con tu producto, escríbeme y con gusto la conversamos.",
      email: "Enviar un correo",
    },
    footer: { builtWith: "Construido con Next.js y Tailwind CSS." },
  },
  en: {
    metadata: {
      title: "Víctor Chalén — Software Engineer",
      description:
        "Portfolio of Víctor Chalén, a software engineer specializing in frontend web development with React, Next.js, and Python.",
    },
    languageLabel: "Language",
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      availability: "Open to work",
      projects: "View projects",
      cv: "View resume",
      contact: "Get in touch",
    },
    code: {
      comment: "looking for new challenges",
      role: "Frontend Developer",
      status: "open_to_work",
    },
    about: {
      tag: "about me",
      title: "How I approach web development",
      first:
        "I am a Software Engineering graduate focused on building clear, functional, and maintainable web products. I work primarily with React and Next.js on the frontend, and Node.js or Python on the backend, using relational databases to structure and manage information.",
      second:
        "Before writing code, I think about the people who will use the interface. Usability and performance are not details to address at the end; they belong in the product's design and architecture from the start.",
    },
    skills: { tag: "stack", title: "What I work with" },
    experience: { tag: "experience", title: "Where I've worked" },
    projects: {
      tag: "projects",
      title: "Things I've built",
      more: "See more projects on GitHub",
    },
    education: { tag: "education", title: "Education" },
    contact: {
      tag: "contact",
      title: "Let's talk about your project",
      description:
        "I'm available for web development projects. If you have an idea or need help with your product, send me a message and we can talk it through.",
      email: "Send an email",
    },
    footer: { builtWith: "Built with Next.js and Tailwind CSS." },
  },
} as const;