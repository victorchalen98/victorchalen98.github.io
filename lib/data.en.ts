export const profile = {
  name: "Víctor Chalén",
  role: "Software Engineer · Frontend Developer",
  location: "Guayaquil, Ecuador",
  email: "victor98chalen@gmail.com",
  phone: "+593 99 948 9629",
  github: "https://github.com/victorchalen98",
  linkedin: "https://www.linkedin.com/in/victor-chalén-5652ab267/",
  summary:
    "Software Engineering graduate with experience in frontend web development. I specialize in building modern, responsive, and efficient interfaces with React, Next.js, and Tailwind CSS, alongside backend development with Node.js and Python and relational databases. I focus on usability, code quality, and development best practices.",
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
    category: "Databases",
    accent: "blue",
    items: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    category: "Tools",
    accent: "peach",
    items: ["Linux", "Git", "GitHub", "Docker", "Figma", "Power BI"],
  },
] as const;

export const experience = [
  {
    company: "Fundación ANEUPI",
    role: "Frontend Developer (Pre-professional Internship)",
    period: "May 2025 — July 2025",
    link: "https://universidadleceni.com/",
    bullets: [
      "Designed and implemented a reusable component architecture with Next.js and Tailwind CSS for the institution's web platform.",
      "Improved navigation and mobile layouts, reducing the steps needed to access academic programs.",
      "Refactored key views to improve load times and user retention on the home page.",
    ],
  },
  {
    company: "Software Engineering Department",
    role: "Technical and Administrative Support Intern",
    period: "July 2026 — August 2026",
    link: null,
    bullets: [
      "Provided operational support and managed academic information while ensuring data confidentiality.",
      "Helped resolve technical issues and communicated directly with students and faculty.",
    ],
  },
] as const;

export const projects = [
  {
    name: "Premier League Matchday",
    description:
      "A web application for exploring Premier League team information and statistics, including upcoming opponents, recent form, top scorers, head-to-head records, and league standings. Built with React and Vite, with an Express backend that proxies requests to the football-data.org API, protects credentials, and caches responses.",
    stack: ["React", "Vite", "Node.js", "Express", "Football-Data API"],
    link: "https://premier-league-nine.vercel.app/",
  },
  {
    name: "Conversational AI Agent",
    description:
      "An intelligent assistant built around the ReAct pattern, integrating the Google Gemini API to make autonomous decisions between logical reasoning and external tool execution. It includes math expression evaluation and file management (read/write), with controlled environments to protect system integrity.",
    stack: ["Python", "Gemini API", "ReAct"],
    link: "https://github.com/victorchalen98/AI_Agent",
  },
] as const;

export const education = {
  institution: "University of Guayaquil",
  program: "Software Engineering",
  period: "2020 — Present",
  status: "Graduate",
};