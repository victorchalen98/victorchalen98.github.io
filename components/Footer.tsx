import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-surface0 bg-crust">
      <div className="mx-auto max-w-content px-6 py-8 text-sm text-overlay1">
        <p>
          {profile.name}. Construido con Next.js y Tailwind CSS. {profile.location}.
        </p>
      </div>
    </footer>
  );
}
