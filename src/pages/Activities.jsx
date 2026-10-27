import { ArrowDown, Images } from "lucide-react";
import { Link } from "react-router-dom";
import EventActivityNav from "../components/EventActivityNav";
import { activities } from "./activitiesData";

export default function Activities() {
  return (
    <main className="-mx-4 flex-1 bg-slate-50">
      <section className="relative isolate flex min-h-[440px] w-full flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 py-20 text-center text-white sm:min-h-[500px] sm:py-24">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-700/35 via-slate-950 to-slate-950"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
          aria-hidden="true"
        />
        <EventActivityNav active="Activities" />
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-amber-300">
            The Lions of Nangkhel
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Activities
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            From youth development and community service to culture and
            creativity, explore the work bringing Nangkhel together.
          </p>
          <a
            href="#activity-list"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Explore activities <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        id="activity-list"
        className="mx-auto max-w-7xl scroll-mt-8 px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
            Community in action
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Activities
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Each activity is an opportunity to learn, serve, celebrate, and
            build stronger connections across our community.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {activities.map((activity, index) => (
            <article
              key={activity.id}
              className={`relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                activity.coverImage
                  ? "isolate min-h-[360px] bg-slate-950"
                  : "bg-white p-6 sm:p-7"
              }`}
            >
              {activity.coverImage && (
                <>
                  <img
                    src={activity.coverImage}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/55 to-slate-950/20"
                    aria-hidden="true"
                  />
                </>
              )}
              <div
                className={`relative z-10 flex flex-1 flex-col ${
                  activity.coverImage ? "p-6 sm:p-7" : ""
                }`}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-extrabold ${
                      activity.coverImage
                        ? "bg-amber-400 text-slate-950"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                      activity.coverImage
                        ? "bg-white/90 text-slate-800"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {activity.category}
                  </span>
                </div>
                <h3
                  className={`text-xl font-bold ${
                    activity.coverImage ? "text-white" : "text-slate-900"
                  }`}
                >
                  {activity.title}
                </h3>
                <p
                  className={`mt-3 flex-1 leading-7 ${
                    activity.coverImage ? "text-white/90" : "text-slate-600"
                  }`}
                >
                  {activity.description}
                </p>
                <Link
                  to={`/activities/${activity.id}/gallery`}
                  className={`mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 ${
                    activity.coverImage
                      ? "border-white/80 text-white hover:bg-white hover:text-slate-950 focus-visible:ring-offset-slate-950"
                      : "border-amber-700 text-amber-800 hover:bg-amber-700 hover:text-white focus-visible:ring-offset-white"
                  }`}
                >
                  <Images size={17} aria-hidden="true" />
                  View gallery
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
