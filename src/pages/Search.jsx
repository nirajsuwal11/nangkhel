import { Link, useSearchParams } from "react-router-dom";

const searchableContent = [
  {
    title: "The Lions of Nangkhel",
    page: "Home",
    path: "/",
    text: "A community-led nonprofit working together to create a brighter future. Together we make the difference. People helping people, compassion in action, making a difference, growing together, be part of the change.",
  },
  {
    title: "About The Lions of Nangkhel",
    page: "About",
    path: "/about",
    text: "We are a community-led nonprofit bringing people together to support our neighbors and create positive, lasting change in Nangkhel. Learn more about our organization.",
  },
  {
    title: "Our Mission",
    page: "About",
    path: "/about",
    text: "To bring people together and provide meaningful support and resources to our local community. To provide sustainable support and resources to underprivileged communities.",
  },
  {
    title: "Our Vision",
    page: "About",
    path: "/about",
    text: "A caring, inclusive community where everyone has the opportunity to live well and thrive. A world where every individual has the opportunity to thrive.",
  },
  {
    title: "Our Core Values",
    page: "About",
    path: "/about",
    text: "Compassion, service, integrity, unity, respect, and community.",
  },
  ...[
    ["Manish Byanju", "Chairman"],
    ["Sunil Banmala", "Vice-Chairman"],
    ["Bishal Sukkubhattu", "Secretary"],
    ["Shristi Kasula", "Assistant Secretary"],
    ["Manish Sukubhattu", "Accountant"],
    ["Bikash Byanju", "Member"],
    ["Ambika Suwal", "Member"],
    ["Shramit Kasula", "Member"],
    ["Sushant Byanju", "Member"],
    ["Rojina Byanju", "Member"],
  ].map(([name, role]) => ({
    title: name,
    page: "Meet Our Team",
    path: "/about",
    text: `${name} is a ${role} of The Lions of Nangkhel.`,
  })),
  {
    title: "Activities & Events",
    page: "Activities & Events",
    path: "/projects",
    text: "Explore activities and events by The Lions of Nangkhel, including the 7 Days Public Speaking Workshop at Nangkhel, with photos from the event gallery.",
  },
  {
    title: "Donate",
    page: "Donate",
    path: "/donate",
    text: "Support the work of The Lions of Nangkhel and make a difference in the community.",
  },
  {
    title: "Contact Us",
    page: "Contact",
    path: "/contact",
    text: "Contact The Lions of Nangkhel. Send us your name, email, contact number, and message. Nangkhel, Bhaktapur, Nepal. Phone +977-9860117094.",
  },
];

function normalize(value) {
  return value.toLocaleLowerCase().normalize("NFKC");
}

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  const results = terms.length
    ? searchableContent.filter(({ title, page, text }) => {
        const content = normalize(`${title} ${page} ${text}`);
        return terms.every((term) => content.includes(term));
      })
    : [];

  return (
    <section className="mx-auto min-h-[55vh] max-w-5xl py-10 sm:py-14">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-green-700">
        Search
      </p>
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
        {query ? `Results for “${query}”` : "Search the site"}
      </h1>

      {results.length > 0 ? (
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:px-7">
          {results.map((result) => (
            <article key={`${result.page}-${result.title}`} className="py-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-green-700">
                {result.page}
              </p>
              <h2 className="text-lg font-semibold text-slate-900">
                <Link to={result.path} className="hover:text-green-700">
                  {result.title}
                </Link>
              </h2>
              <p className="mt-1 leading-relaxed text-slate-600">{result.text}</p>
            </article>
          ))}
        </div>
      ) : (
        <p className="mt-6 rounded-xl bg-white p-5 text-slate-600 shadow-sm">
          {query
            ? "No matching content found. Try a different word or phrase."
            : "Enter a word or phrase in the search bar to find content."}
        </p>
      )}
    </section>
  );
}
