import { ArrowDown, ArrowRight, Images, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import EventActivityNav from "../components/EventActivityNav";
import { activities } from "./activitiesData";

export default function Activities() {
  const featuredActivity = activities.find((activity) => activity.coverImage);

  return (
    <main className="-mx-4 flex-1 bg-slate-50">
      <section className="relative isolate overflow-hidden bg-slate-950 px-5 pb-14 pt-28 text-white sm:px-8 sm:pb-20 sm:pt-32 lg:px-12">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/60 via-slate-950 to-slate-950"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
          aria-hidden="true"
        />
        <EventActivityNav active="Activities" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-200 sm:text-sm">
              <Sparkles size={15} aria-hidden="true" />
              Community in action
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Small acts.
              <span className="block text-amber-300">Lasting impact.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              From youth development and community service to culture and
              creativity, explore the work bringing Nangkhel together.
            </p>
            <a
              href="#activity-list"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore activities <ArrowDown size={16} aria-hidden="true" />
            </a>
            <div className="mt-9 flex items-center gap-3 text-sm text-slate-400">
              <span className="flex -space-x-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-400" />
                <span className="h-3 w-3 rounded-full border-2 border-slate-950 bg-amber-300" />
                <span className="h-3 w-3 rounded-full border-2 border-slate-950 bg-sky-300" />
              </span>
              Rooted in community. Powered by people.
            </div>
          </div>

          {featuredActivity && (
            <Link
              to={`/activities/${featuredActivity.id}/gallery`}
              aria-label={`View ${featuredActivity.title} gallery`}
              className="group relative block aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 bg-slate-800 shadow-2xl shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              <img
                src={featuredActivity.coverImage}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent"
                aria-hidden="true"
              />
              <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-slate-950/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md sm:left-7 sm:top-7">
                Featured activity
              </span>
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                <span>
                  <span className="block text-sm font-semibold text-amber-200">
                    {featuredActivity.category}
                  </span>
                  <span className="mt-1 block text-xl font-bold text-white sm:text-2xl">
                    {featuredActivity.title}
                  </span>
                </span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-slate-950 transition group-hover:bg-amber-300">
                  <ArrowRight size={19} aria-hidden="true" />
                </span>
              </span>
            </Link>
          )}
        </div>
      </section>

      <section
        id="activity-list"
        className="mx-auto max-w-7xl scroll-mt-8 px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <header className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
              Learn · Serve · Celebrate
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Activities
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Each activity brings people together to build stronger
              connections across our community.
            </p>
          </div>
          <span className="inline-flex w-fit items-center rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-100">
            {activities.length} community stories
          </span>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {activities.map((activity, index) => (
            <article
              key={activity.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
            >
              {activity.coverImage && (
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={activity.coverImage}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
                    {activity.category}
                  </span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="text-xs font-bold tracking-[0.16em] text-emerald-700">
                    STORY {String(index + 1).padStart(2, "0")}
                  </span>
                  {activity.gallery.length > 0 && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
                      <Images size={13} aria-hidden="true" />
                      {activity.gallery.length} photos
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold leading-snug text-slate-900">
                  {activity.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {activity.description}
                </p>
                {activity.gallery.length > 0 ? (
                  <Link
                    to={`/activities/${activity.id}/gallery`}
                    className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 rounded-lg border border-emerald-800/20 px-4 py-2.5 text-sm font-bold text-emerald-800 transition hover:border-emerald-800 hover:bg-emerald-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
                  >
                    <Images size={17} aria-hidden="true" />
                    View photos
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                ) : (
                  <span className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-500">
                    <Images size={17} aria-hidden="true" />
                    Photos coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
