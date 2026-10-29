import { useId, useState } from "react";

export default function PersonCard({
  name,
  role,
  img,
  bio = "Message coming soon.",
}) {
  const [isBioOpen, setIsBioOpen] = useState(false);
  const bioId = useId();

  return (
    <article className="group relative aspect-[4/4.5] w-full overflow-hidden rounded-xl bg-slate-200 text-left shadow-md ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-emerald-500/50">
      {img ? (
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-300 to-slate-500 text-5xl font-bold text-white"
        >
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </div>
      )}

      <div
        id={bioId}
        hidden={!isBioOpen}
        className="absolute inset-0 z-10 flex flex-col rounded-xl bg-slate-950/85 p-4 text-white sm:p-5"
      >
        <p
          tabIndex={0}
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-2 text-sm leading-relaxed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 sm:text-base"
        >
          {bio}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent px-3 pb-3 pt-12 text-center text-white sm:px-4 sm:pb-4">
        {!isBioOpen && (
          <>
            <h3 className="text-xs font-bold leading-tight sm:text-base">
              {name}
            </h3>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-white/80 sm:text-xs">
              {role}
            </p>
          </>
        )}
        <button
          type="button"
          aria-expanded={isBioOpen}
          aria-controls={bioId}
          onClick={() => setIsBioOpen((open) => !open)}
          className="mt-2 rounded px-2 py-1 text-xs font-semibold text-white hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:text-sm"
        >
          {isBioOpen ? "Close Message" : "Read Message"}
        </button>
      </div>
    </article>
  );
}
