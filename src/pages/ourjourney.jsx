export default function OurJourney() {
  return (
    <>
      <section className="-mx-4 relative isolate flex min-h-[440px] flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 py-16 text-center text-white sm:min-h-[520px] sm:py-24">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-700/35 via-slate-950 to-slate-950"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-5xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-amber-300">
            The Lions of Nangkhel
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Where It All Began
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            A shared cultural purpose grew into a lasting commitment to
            Nangkhel and its people.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl space-y-6 py-8 sm:py-10">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
          <div className="relative space-y-7 border-l-2 border-amber-200 pl-6 sm:pl-8">
            <span
              className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-amber-500 shadow-sm"
              aria-hidden="true"
            />
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              The Lions of Nangkhel was informally established through the
              collective initiative of the youths of Nangkhel, with the initial
              vision of continuing and strengthening the cultural program
              “Nangkhel Sanskritik Sanjh” during Tihar.
            </p>
            <p className="text-base font-semibold leading-8 text-slate-900 sm:text-lg">
              What began with a cultural purpose gradually developed into a
              broader community initiative.
            </p>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              As the organization grew, its members and supporters began raising
              their voices for the preservation of local cultures, traditions and
              heritage sites around Nangkhel. The club recognized that cultural
              preservation requires more than remembering the past—it requires
              creating opportunities for the younger generation to experience and
              carry those traditions forward.
            </p>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Over time, many individuals have contributed their time, ideas,
              skills and resources toward the establishment and development of
              the organization.
            </p>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Although the club has a broad base of supporters and active members,
              its activities have primarily been coordinated by a committee
              formed within the organization, with the committee being re-formed
              periodically according to the needs and circumstances of the club.
            </p>
          </div>
        </div>

        <section className="overflow-hidden rounded-3xl bg-amber-50 shadow-sm ring-1 ring-amber-100">
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12 lg:p-12">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-amber-800">
                Our story continues
              </p>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                From a Cultural Program to a Community Movement
              </h2>
            </div>
            <div className="border-t-2 border-amber-200 pt-7 lg:border-l-2 lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-amber-800">
                The belief that guides us
              </p>
              <blockquote className="text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                A community becomes stronger when its people come together for a
                common purpose.
              </blockquote>
              <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
                Today, the organization continues to work toward preserving
                Nangkhel&apos;s identity while creating meaningful opportunities
                for its youth and community.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}