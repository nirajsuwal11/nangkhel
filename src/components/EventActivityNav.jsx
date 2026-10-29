import { Link } from "react-router-dom";

export default function EventActivityNav({
  active,
  className = "absolute left-4 top-5 sm:left-8 sm:top-8 lg:left-12",
}) {
  const links = [
    { label: "Event", to: "/projects" },
    { label: "Activities", to: "/activities" },
  ];

  return (
    <nav
      aria-label="Event and activities"
      className={`z-10 flex shrink-0 gap-1 rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur ${className}`}
    >
      {links.map(({ label, to }) => (
        <Link
          key={to}
          to={to}
          aria-current={active === label ? "page" : undefined}
          className={`rounded-full px-3 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:px-4 sm:text-sm ${
            active === label
              ? "bg-amber-400 text-slate-950 shadow"
              : "text-white hover:bg-white/10"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
