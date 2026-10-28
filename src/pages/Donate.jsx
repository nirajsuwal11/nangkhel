import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Heart,
  Landmark,
  Leaf,
  QrCode,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import communityImage from "../assets/image.png";

const impactAreas = [
  {
    title: "Community Service",
    description:
      "Support initiatives that respond to local needs and improve community well-being.",
    icon: <Heart size={23} strokeWidth={1.8} aria-hidden="true" />,
  },
  {
    title: "Education & Youth",
    description:
      "Help create opportunities for learning, growth, and youth participation.",
    icon: <BookOpen size={23} strokeWidth={1.8} aria-hidden="true" />,
  },
  {
    title: "Cultural Preservation",
    description:
      "Celebrate and preserve our traditions, culture, and shared heritage.",
    icon: <Landmark size={23} strokeWidth={1.8} aria-hidden="true" />,
  },
  {
    title: "Social Welfare",
    description:
      "Promote kindness, inclusion, and collective responsibility in our community.",
    icon: <UsersRound size={23} strokeWidth={1.8} aria-hidden="true" />,
  },
  {
    title: "Lasting Development",
    description:
      "Inspire sustainable initiatives that create positive change for the future.",
    icon: <Leaf size={23} strokeWidth={1.8} aria-hidden="true" />,
  },
];

const donationSteps = [
  "Open your mobile banking app or supported digital payment service.",
  "Scan the official donation QR code.",
  "Enter the amount you would like to contribute.",
  "Verify the recipient details before completing your payment.",
];

export default function Donate() {
  return (
    <div className="-mx-4 -mt-[76px] bg-white text-slate-900">
      <section className="relative isolate min-h-[560px] overflow-hidden bg-emerald-950 text-white sm:min-h-[620px]">
        <img
          src={communityImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-950/95 via-emerald-950/80 to-emerald-950/35" />

        <div className="mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-24 sm:min-h-[620px] sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100/25 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100 backdrop-blur-sm">
              <Heart size={16} aria-hidden="true" />
              Together, we make a difference
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Support our cause,
              <span className="block text-amber-300">make a difference.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              The Lions of Nangkhel is a non-profit, community-based youth
              organization creating positive change through social service,
              education, cultural preservation, and community development.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-white/75">
              Your generosity helps us organize meaningful programs, support
              community welfare, empower young people, and preserve our cultural
              heritage. Every contribution, no matter its size, brings us closer
              to a stronger, more inclusive, and compassionate community.
            </p>
            <a
              href="#how-to-donate"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 font-bold text-emerald-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950"
            >
              Make an impact
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-white/10 to-transparent" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            Why your support matters
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Every contribution counts
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Your donation helps turn shared values into practical action across
            the community.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {impactAreas.map(({ title, description, icon }, index) => (
            <article
              key={title}
              className={`group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg ${
                index === impactAreas.length - 1
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white">
                {icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="how-to-donate"
        className="bg-emerald-50/70 px-6 py-16 sm:px-10 sm:py-20 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Simple, secure, meaningful
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              How to donate
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-slate-600">
              Support our initiatives by scanning the official QR code with
              your mobile banking app or a supported digital payment service.
            </p>

            <ol className="mt-8 space-y-5">
              {donationSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 leading-relaxed text-slate-700">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-950/5 sm:p-8">
            <div className="text-center">
              <div className="mx-auto flex aspect-square w-full max-w-[280px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/70 p-6">
                <QrCode
                  size={56}
                  strokeWidth={1.4}
                  className="text-emerald-700"
                  aria-hidden="true"
                />
                <p className="mt-4 font-bold text-slate-800">
                  Donation QR code
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Official payment code coming soon
                </p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
                <ShieldCheck size={17} aria-hidden="true" />
                Always verify recipient details
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 to-emerald-950 px-6 py-10 text-center text-white shadow-xl sm:px-12 sm:py-14">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-amber-300">
            <Heart size={27} aria-hidden="true" />
          </div>
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
            Your support, our commitment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/80">
            Every contribution is valuable, and every act of generosity
            strengthens our mission. Together, we can turn small contributions
            into meaningful change and build a better future for our community.
          </p>
          <p className="mt-5 font-semibold text-amber-200">
            Thank you for being part of our journey and supporting The Lions of
            Nangkhel.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-bold text-emerald-900 transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900"
          >
            Get in touch
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
