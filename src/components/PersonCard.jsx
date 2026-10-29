import { useState } from "react";

export default function PersonCard({
  name,
  role,
  img,
  message = "Hello, I am from the Lions of Nangkhel.",
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      type="button"
      aria-pressed={isFlipped}
      aria-label={`${isFlipped ? "Show photo of" : "Read message from"} ${name}, ${role}`}
      onClick={() => setIsFlipped((flipped) => !flipped)}
      className="group relative block aspect-[4/4.5] w-full rounded-xl text-left shadow-md ring-1 ring-slate-900/5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:ring-emerald-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
    >
      <span
        className={`relative block h-full w-full rounded-xl [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        } transition-transform duration-700 ease-in-out motion-reduce:transition-none`}
      >
        <span className="absolute inset-0 block overflow-hidden rounded-xl bg-slate-200 [backface-visibility:hidden]">
          {img ? (
            <img
              src={img}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-300 to-slate-500 text-5xl font-bold text-white"
            >
              {name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </span>
          )}
          <span className="absolute inset-x-0 bottom-0 block bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent px-2 pb-3 pt-12 text-center text-white sm:px-3 sm:pb-4">
            <span className="block text-xs font-bold leading-tight sm:text-base">
              {name}
            </span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-wide text-white/80 sm:text-xs">
              {role}
            </span>
          </span>
        </span>

        <span className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-white p-4 text-center text-slate-800 shadow-inner [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-5">
          <span className="text-sm font-bold text-emerald-800 sm:text-base">
            {name}
          </span>
          <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            {role}
          </span>
          <span className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            {message}
          </span>
        </span>
      </span>
    </button>
  );
}
