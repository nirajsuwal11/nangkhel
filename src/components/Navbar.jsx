import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  HeartHandshake,
  Info,
  Mail,
  Menu,
  Route,
  Search,
  X,
} from "lucide-react";
import logo from "../assets/logo.png";

const links = [
  { label: "About", to: "/about", icon: <Info size={18} strokeWidth={1.9} aria-hidden="true" /> },
  { label: "Our Journey", to: "/ourjourney", icon: <Route size={18} strokeWidth={1.9} aria-hidden="true" /> },
  { label: "Activities/Events", to: "/projects", icon: <CalendarDays size={18} strokeWidth={1.9} aria-hidden="true" /> },
  { label: "Donate", to: "/donate", icon: <HeartHandshake size={18} strokeWidth={1.9} aria-hidden="true" /> },
  { label: "Contact", to: "/contact", icon: <Mail size={18} strokeWidth={1.9} aria-hidden="true" /> },
];

function SearchForm({ mobile = false, onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      onSearch(trimmedQuery);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={`flex items-center gap-2 border border-slate-200 bg-slate-50 text-slate-400 transition focus-within:border-green-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-green-100 ${
        mobile
          ? "mb-2 rounded-lg px-4 py-3"
          : "mx-4 hidden max-w-sm flex-1 rounded-full px-4 py-2 lg:flex"
      }`}
    >
      <label className="sr-only" htmlFor={mobile ? "mobile-site-search" : "desktop-site-search"}>
        Search this site
      </label>
      <input
        id={mobile ? "mobile-site-search" : "desktop-site-search"}
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search..."
        required
        className="min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
      />
      <button
        type="submit"
        aria-label="Submit search"
        className="rounded-full p-1 text-slate-500 transition hover:bg-green-100 hover:text-green-800"
      >
        <Search size={17} aria-hidden="true" />
      </button>
    </form>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const submitSearch = (query) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
    closeMenu();
  };
  const linkClass = (to) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      pathname === to
        ? "bg-green-50 text-green-800"
        : "text-slate-700 hover:bg-slate-100 hover:text-green-800"
    }`;

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3"
            onClick={closeMenu}
            aria-label="The Lions of Nangkhel home"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
              <img
                src={logo}
                alt=""
                className="h-10 w-10 object-contain"
              />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block text-xs font-extrabold tracking-tight text-slate-900 sm:text-sm">
                The Lions Of Nangkhel
              </span>
              <span className="mt-1 block text-[10px] font-medium text-slate-500 sm:text-xs">
                Together we make the difference
              </span>
            </span>
          </Link>

          <SearchForm onSearch={submitSearch} />

          <div className="hidden items-center gap-1 md:flex">
            {links.map(({ label, to }) => (
              <Link key={to} to={to} className={linkClass(to)}>
                {label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100 md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation-drawer"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className="fixed inset-0 top-[76px] z-40 md:hidden"
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className={`absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] transition-opacity duration-300 motion-reduce:transition-none ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
        <div
          className={`absolute inset-y-0 left-0 flex w-[min(88vw,390px)] flex-col overflow-y-auto border-r border-slate-200 bg-slate-50 shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-1 flex-col px-4 pb-5 pt-5">
            <SearchForm mobile onSearch={submitSearch} />
            <p className="mb-2 mt-4 px-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Navigate
            </p>
            <div className="flex flex-col gap-1.5">
              {links.map(({ label, to, icon }, index) => {
                const isActive = pathname === to;

                return (
                  <Link
                    key={to}
                    to={to}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={`group flex min-h-14 items-center gap-3 rounded-xl px-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                      isActive
                        ? "bg-white text-emerald-900 shadow-sm ring-1 ring-emerald-100"
                        : "text-slate-700 hover:bg-white hover:text-emerald-900 hover:shadow-sm"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                        isActive
                          ? "bg-emerald-800 text-white"
                          : "bg-white text-emerald-800 ring-1 ring-slate-200 group-hover:bg-emerald-50 group-hover:ring-emerald-100"
                      }`}
                    >
                      {icon}
                    </span>
                    <span className="flex-1 text-sm font-semibold">{label}</span>
                    <span className="mr-1 text-[10px] font-semibold tabular-nums text-slate-400">
                      0{index + 1}
                    </span>
                    <ChevronRight
                      size={16}
                      className={`text-slate-400 transition-transform group-hover:translate-x-0.5 ${
                        isActive ? "text-emerald-700" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>
            <Link
              to="/donate"
              onClick={closeMenu}
              className="group mt-auto flex items-center justify-between gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-400 to-amber-300 p-4 text-slate-950 shadow-md shadow-amber-900/10 transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
            >
              <span>
                <span className="block text-xs font-semibold text-amber-950/75">
                  Give a little. Change a lot.
                </span>
                <span className="mt-1 block text-base font-extrabold">
                  Support our work
                </span>
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/70 transition group-hover:bg-white">
                <ArrowUpRight size={19} aria-hidden="true" />
              </span>
            </Link>
            <p className="mt-5 text-center text-xs text-slate-400">
              Serving our community with care.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
