# Portafolio — Víctor Chalén

Portafolio inicial construido con **Next.js 14 (App Router)**, **TypeScript** y **Tailwind CSS**, usando la paleta **Catppuccin Mocha**.

## Cómo correrlo

Necesitas Node.js 18.18 o superior.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/
  layout.tsx     ← fuentes (Inter + JetBrains Mono) y metadata del sitio
  page.tsx       ← arma todas las secciones en orden
  globals.css    ← estilos base, foco visible, scrollbar
components/      ← una sección por archivo (Hero, Skills, Experience, etc.)
lib/data.ts      ← TODO el contenido del portafolio (textos, experiencia, proyectos)
tailwind.config.ts ← paleta Catppuccin Mocha registrada como colores de Tailwind
```

## Qué editar primero

Casi todo lo que vas a querer cambiar (textos, experiencia, proyectos, links de
contacto) está centralizado en **`lib/data.ts`** — no hace falta tocar los
componentes para actualizar el contenido.

Ideas para la siguiente iteración:
- Agregar foto o avatar en el `Hero`.
- Sumar más proyectos en `lib/data.ts` una vez que despliegues el dashboard
  React/Flask/JWT u otros repos.
- Conectar el formulario de contacto a un servicio real (o dejar el `mailto:`
  si prefieres simplicidad).
- Desplegar en Vercel (`vercel.com/new`) — es la opción más directa para un
  proyecto Next.js.

## Paleta

Los colores de Catppuccin Mocha están declarados en `tailwind.config.ts` como
clases de Tailwind (`bg-base`, `text-mauve`, `border-surface0`, etc.), así que
puedes reutilizarlos en cualquier componente nuevo sin volver a escribir los
valores hexadecimales.
