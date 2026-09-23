// Todo el contenido del portafolio vive aquí para que sea fácil
// de editar sin tocar los componentes.

export const profile = {
  name: "Víctor Chalén",
  role: "Ingeniero de Software · Frontend Developer",
  location: "Guayaquil, Ecuador",
  email: "victor98chalen@gmail.com",
  phone: "+593 99 948 9629",
  github: "https://github.com/victorchalen98",
  linkedin: "https://www.linkedin.com/in/victor-chalén-5652ab267/",
  summary:
  "Egresado de Ingeniería en Software con experiencia en desarrollo web frontend. Me especializo en crear interfaces modernas, responsivas y eficientes utilizando React, Next.js y Tailwind CSS, con conocimientos en desarrollo backend con Node.js y Python, así como en bases de datos relacionales. Me enfoco en la usabilidad, la calidad del código y las buenas prácticas de desarrollo. "
};

export const skills = [
  {
    category: "Frontend",
    accent: "mauve",
    items: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    accent: "green",
    items: ["Node.js", "Express", "Python", "Flask", "REST APIs"],
  },
  {
    category: "Bases de datos",
    accent: "blue",
    items: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    category: "Herramientas",
    accent: "peach",
    items: ["Linux", "Git", "GitHub", "Docker", "Figma", "Power BI"],
  },
] as const;

export const experience = [
  {
    company: "Fundación ANEUPI",
    role: "Desarrollador Front-end (Prácticas Preprofesionales)",
    period: "Mayo 2025 — Julio 2025",
    link: "https://universidadleceni.com/",
    bullets: [
      "Diseñé e implementé la arquitectura de componentes reutilizables utilizando Next.js y Tailwind CSS para la plataforma web institucional.",
      "Optimicé la estructura de navegación y la maquetación en dispositivos móviles, reduciendo los pasos requeridos para acceder a la oferta académica.",
      "Refactoricé vistas clave para mejorar los tiempos de carga y la retención de usuarios en la página de inicio.",
    ],
  },
  {
    company: "Dirección de Carrera de Ingeniería en Software",
    role: "Pasante de Apoyo Técnico y Administrativo",
    period: "Julio 2026 — Agosto 2026",
    link: null,
    bullets: [
      "Brindé soporte operativo y gestión digital de información académica asegurando la confidencialidad de datos.",
      "Colaboré en la resolución de incidencias técnicas y comunicación directa con estudiantes y personal docente.",
    ],
  },
] as const;

export const projects = [
  { name: "Premier League Matchday", 
    description: "Aplicación web para consultar información y estadísticas de equipos de la Premier League, incluyendo próximo rival, racha de partidos, goleador, historial de enfrentamientos y tabla de posiciones. Desarrollada con React y Vite, con un backend en Express que funciona como proxy hacia la API de football-data.org, protegiendo las credenciales y aplicando caché para optimizar las solicitudes.", 
    stack: ["React", "Vite", "Node.js", "Express", "Football-Data API"], 
    link: "https://premier-league-nine.vercel.app/", 
  },

  {
    name: "Agente de IA Conversacional (AI Agent)",
    description:
      "Asistente inteligente basado en el patrón ReAct, integrando la API de Google Gemini para la toma de decisiones autónoma entre el razonamiento lógico y la ejecución de herramientas externas. Incluye automatización como evaluación de expresiones matemáticas y gestión de archivos (lectura/escritura), con entornos controlados para garantizar la integridad del sistema.",
    stack: ["Python", "Gemini API", "ReAct"],
    link: "https://github.com/victorchalen98/AI_Agent",
  }
  
  
    
  
  
] as const;

export const education = {
  institution: "Universidad de Guayaquil",
  program: "Ingeniería en Software",
  period: "2020 — Actualidad",
  status: "Egresado",
};
