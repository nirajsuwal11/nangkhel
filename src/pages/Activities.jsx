import EventActivityNav from "../components/EventActivityNav";

export default function Activities() {
  return (
    <main className="-mx-4 flex flex-1 bg-slate-50">
      <section className="relative isolate flex min-h-[440px] w-full flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 py-16 text-white sm:min-h-[520px] sm:py-24">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-700/35 via-slate-950 to-slate-950"
          aria-hidden="true"
        />
        <EventActivityNav active="Activities" />
        <div className="text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-amber-300">
            The Lions of Nangkhel
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Activities
          </h1>
        </div>
      </section>
    </main>
  );
}
