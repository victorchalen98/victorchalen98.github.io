export default function CodeWindow() {
  return (
    <div className="w-full max-w-md rounded-lg border border-surface0 bg-mantle shadow-2xl shadow-crust/40">
      <div className="flex items-center gap-2 border-b border-surface0 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green/80" />
        <span className="ml-2 font-mono text-xs text-overlay1">
          victor.ts
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <code>
          <span className="text-overlay0">// buscando nuevos retos</span>
          {"\n"}
          <span className="text-mauve">const</span>{" "}
          <span className="text-blue">victor</span> <span className="text-overlay2">=</span> {"{"}
          {"\n"}
          {"  "}
          <span className="text-sky">role</span>
          <span className="text-overlay2">:</span>{" "}
          <span className="text-green">&quot;Fullstack &amp; Frontend Engineer&quot;</span>
          <span className="text-overlay2">,</span>
          {"\n"}
          {"  "}
          <span className="text-sky">location</span>
          <span className="text-overlay2">:</span>{" "}
          <span className="text-green">&quot;Guayaquil, EC&quot;</span>
          <span className="text-overlay2">,</span>
          {"\n"}
          {"  "}
          <span className="text-sky">stack</span>
          <span className="text-overlay2">:</span> [
          <span className="text-green">&quot;React&quot;</span>,{" "}
          <span className="text-green">&quot;Next.js&quot;</span>,{" "}
          <span className="text-green">&quot;Node&quot;</span>,{" "}
          <span className="text-green">&quot;Python&quot;</span>]
          <span className="text-overlay2">,</span>
          {"\n"}
          {"  "}
          <span className="text-sky">status</span>
          <span className="text-overlay2">:</span>{" "}
          <span className="text-peach">&quot;open_to_work&quot;</span>
          <span className="text-overlay2">,</span>
          {"\n"}
          {"}"}
          <span className="text-overlay2">;</span>
          <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-blink bg-lavender align-middle" />
        </code>
      </pre>
    </div>
  );
}
