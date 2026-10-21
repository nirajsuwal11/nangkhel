import React from "react";

export default function PersonCard({ name, role, img }) {
  return (
    <article className="group relative aspect-[4/4.5] overflow-hidden rounded-xl bg-slate-200 shadow-md ring-1 ring-slate-900/5 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:ring-sky-500/50 motion-reduce:transform-none motion-reduce:transition-none">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none"
        />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent px-2 pb-3 pt-12 text-center text-white transition-all duration-300 group-hover:pb-5 sm:px-3 sm:pb-4">
        <h3 className="text-xs font-bold leading-tight transition-transform duration-300 group-hover:-translate-y-1 sm:text-base">{name}</h3>
        <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-white/80 sm:text-xs">
          {role}
        </p>
      </div>
    </article>
  );
}
