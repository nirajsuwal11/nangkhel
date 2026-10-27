import EventActivityNav from "../components/EventActivityNav";
import mainEventImage from "../assets/event/main event.JPG";

const objectives = [
  {
    number: "01",
    title: "Preserve Local Culture",
    description:
      "To contribute toward the preservation and continuation of local cultural traditions, practices and artistic expressions.",
  },
  {
    number: "02",
    title: "Engage the New Generation",
    description:
      "To encourage children and young people to actively participate in cultural activities rather than remaining passive observers.",
  },
  {
    number: "03",
    title: "Provide a Platform for Local Talent",
    description:
      "To discover, showcase and encourage emerging singers, dancers, musicians, performers and other talented individuals from Nangkhel and surrounding communities.",
  },
  {
    number: "04",
    title: "Encourage Youth Leadership",
    description:
      "To provide young people with opportunities to take responsibility in event planning, coordination, performance and volunteer activities.",
  },
  {
    number: "05",
    title: "Connect Generations",
    description:
      "To create an environment where children, youth, adults and senior citizens can celebrate together and share cultural experiences.",
  },
  {
    number: "06",
    title: "Promote Community Identity",
    description:
      "To strengthen the identity of Nangkhel by showcasing its cultural richness, creativity and community spirit.",
  },
  {
    number: "07",
    title: "Create Positive Social Engagement",
    description:
      "To provide young people with a constructive, creative and community-oriented environment during the festive season.",
  },
];

const performanceTypes = [
  "Singing",
  "Dancing",
  "Traditional performances",
  "Musical presentations",
  "Cultural presentations",
  "Creative performances",
  "Talent-show segments",
];

export default function Projects() {
  return (
    <main className="-mx-4 flex-1 bg-slate-50">
      <section className="relative isolate flex min-h-[440px] flex-col justify-center overflow-hidden bg-slate-950 px-4 py-16 text-white sm:min-h-[520px] sm:py-24">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${mainEventImage})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/45"
          aria-hidden="true"
        />
        <EventActivityNav active="Event" />
        <div className="absolute right-4 top-5 flex max-w-7xl justify-end sm:right-8 sm:top-8 lg:right-12">
          <aside className="max-w-md border-r-4 border-amber-400 pr-4 text-right sm:pr-6">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-amber-300 sm:text-[7px]">
              Every community has talent.
            </p>
            <p className="mt-1 text-xs font-black uppercase leading-tight tracking-wide text-white sm:text-sm">
              Every talent deserves a stage.
            </p>
          </aside>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-amber-300">
            Main Event
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Nangkhel Sanskritik Sajh
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Celebrating culture, nurturing talent, and bringing generations
            together.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
            Keeping our culture alive
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Why Nangkhel Sanskritik Sanjh?
          </h2>
          
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            In a rapidly changing society, cultural practices can gradually
            become disconnected from younger generations. Children and youth
            are increasingly exposed to diverse forms of entertainment and
            lifestyles, making it important to create spaces where they can
            experience their own culture in an engaging and meaningful way.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Every year, the Lions of Nangkhel team organizes this cultural
            program with continuous improvements and thoughtful planning,
            introducing new ideas and activities to make each edition more
            engaging, meaningful, and impactful while preserving and promoting
            our cultural heritage for future generations.
          </p>
          <p className="mt-4 text-lg font-semibold leading-8 text-slate-900 sm:text-xl">
            Nangkhel Sanskritik Sanjh is designed as one such platform.
          </p>
        </div>

        <div className="mb-5 flex items-center gap-3">
          <span className="h-8 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
          <h3 className="text-2xl font-bold text-slate-900">Key Objectives</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.map((objective) => (
            <article
              key={objective.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-sm font-extrabold text-amber-800">
                {objective.number}
              </span>
              <h4 className="mb-3 text-lg font-bold text-slate-900">
                {objective.title}
              </h4>
              <p className="leading-7 text-slate-600">{objective.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-amber-50 px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-800">
              7. Program Highlights
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              A Night of Culture, Music &amp; Talent
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
              Nangkhel Sanskritik Sanjh will bring together cultural
              performances, emerging local talents and established artists to
              create a memorable evening for the entire community.
            </p>
          </header>

          <div className="grid gap-5 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100 sm:p-8">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                ✦
              </span>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Cultural Performances
              </h3>
              <p className="leading-7 text-slate-600">
                The event will provide a platform for performances representing
                the cultural richness and artistic creativity of the community.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Traditional and contemporary presentations will be brought
                together in a way that makes the program engaging for different
                generations.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100 sm:p-8">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                ♬
              </span>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Youth &amp; Children&apos;s Performances
              </h3>
              <p className="mb-4 leading-7 text-slate-600">
                Children and young people will be encouraged to participate
                through:
              </p>
              <ul className="grid gap-2 text-slate-700 sm:grid-cols-2 lg:grid-cols-1">
                {performanceTypes.map((performance) => (
                  <li key={performance} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" aria-hidden="true" />
                    <span>{performance}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 leading-7 text-slate-600">
                The objective is to give young participants the confidence to
                perform before a live audience and encourage them to remain
                connected with cultural practices.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100 sm:p-8">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
                ✧
              </span>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Local Talent Showcase
              </h3>
              <p className="leading-7 text-slate-600">
                One of the major components of the event will be the discovery
                and promotion of local talents.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                The program will provide aspiring artists with an opportunity
                to perform on a larger platform and receive recognition from
                their own community.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
