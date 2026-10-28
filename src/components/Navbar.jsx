import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import logo from "../assets/logo.png";

const links = [
  { label: "About", to: "/about" },
  { label: "Our Journey", to: "/ourjourney" },
  { label: "Activities/Events", to: "/projects" },
  { label: "Donate", to: "/donate" },
  { label: "Contact", to: "/contact" },
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
      <Search size={18} aria-hidden="true" />
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
        className="rounded-full p-1.5 text-slate-500 transition hover:bg-green-100 hover:text-green-800"
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
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-1">
            <SearchForm mobile onSearch={submitSearch} />
            {links.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                onClick={closeMenu}
                className={`${linkClass(to)} rounded-lg px-4 py-3 text-center`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
