export default function SectionTag({ children }: { children: string }) {
  return (
    <p data-reveal className="mb-3 font-mono text-sm text-overlay0">
      <span className="text-surface2">// </span>
      {children}
    </p>
  );
}
