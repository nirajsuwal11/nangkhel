import React from "react";
import bgImage from "../assets/image.png";
import { Eye, Leaf, Target } from "lucide-react";
import { Link } from "react-router-dom";
import PersonCard from "../components/PersonCard";
import manish from "../assets/manish.jpg";
import sunil from "../assets/sunil1.jpg";
import ambika from "../assets/ambika.jpg";
import bishal from "../assets/bishal.jpg";
import shristi from "../assets/shristi.jpg";
import manish1 from "../assets/manish1.jpg";
import shramit from "../assets/shramit.jpg";
import sushant from "../assets/sushant.jpg";
import rojina from "../assets/rojina.jpg";
import b from "../assets/b.jpg";

const team = [
  { name: "Manish Byanju", role: "Chairman", img: manish },
  { name: "Sunil Banmala", role: "Vice - Chairman", img: sunil },
  { name: "Bishal Sukkubhattu", role: "Secretary", img: bishal },
   { name: "Shristi Kasula", role: "Assistant - Secratary", img: shristi },
     { name: "Manish Sukubhattu", role: "Accountant", img: manish1 },
      { name: "Bikash Byanju", role: "Member", img: b },
     { name: "Ambika Suwal", role: "Member", img: ambika },

   { name: "Shramit Kasula", role: "Member", img: shramit },
     { name: "Sushant Byanju", role: "Member", img: sushant },
     { name: "Rojina Byanju", role: "Member", img: rojina },
    
   


 
   
];

const impactAreas = [
  {
    title: "Community Support",
    description:
      "Showing up for our neighbors with practical help, compassion, and a commitment to belonging.",
    /* image: bgImage, */
    imageAlt: "The Lions of Nangkhel team coming together",
  },
  {
    title: "Care & Kindness",
    description:
      "Putting our values into action and creating a culture where people look out for one another.",
    /* image: ambika, */
    imageAlt: "A member of the Lions of Nangkhel community",
  },
  {
    title: "Opportunity to Thrive",
    description:
      "Working toward a caring, inclusive community where everyone has room to live well and thrive.",
    /* image: bishal, */
    imageAlt: "A member of the Lions of Nangkhel community",
  },
  {
    title: "Lasting Change",
    description:
      "Bringing people together around shared purpose to help build a stronger Nangkhel.",
    /* image: manish, */
    imageAlt: "A member of the Lions of Nangkhel community",
  },
];

export default function About({ showHero = true }) {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      {showHero && (
        <section className="relative w-full min-h-[320px] overflow-hidden shadow-md">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 min-h-[320px] flex flex-col justify-center p-8 md:p-16 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              The lions of Nangkhel is a nonprofit organization dedicated to making a
              positive impact in our community.
            </p>
          </div>
        </section>
      )}

      {/* Mission & Vision Section */}
      {showHero ? (
        <section className="mx-auto grid max-w-5xl gap-10 px-4 py-12 md:grid-cols-2 md:px-0">
          <div className="rounded-xl bg-white p-6 shadow-lg md:p-10">
            <h2 className="mb-4 text-2xl font-semibold text-green-600">
              Our Mission
            </h2>
            <p className="leading-relaxed text-gray-700">
              To provide sustainable support and resources to underprivileged communities.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg md:p-10">
            <h2 className="mb-4 text-2xl font-semibold text-green-600">
              Our Vision
            </h2>
            <p className="leading-relaxed text-gray-700">
              A world where every individual has the opportunity to thrive.
            </p>
          </div>
        </section>
      ) : (
        <>
        <section className="relative -mx-4 overflow-hidden bg-slate-100 text-slate-900">
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-slate-50/90 to-white/85" />

          <div className="relative mx-auto grid min-h-[420px] max-w-7xl gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1fr_1.25fr_0.9fr] lg:items-center lg:gap-8 lg:px-12 lg:py-20">
            <div className="border-b border-slate-400/60 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                About The Lions of Nangkhel
              </h2>
              <p className="mb-7 leading-7 text-slate-700">
                We are a community-led nonprofit bringing people together to
                support our neighbors and create positive, lasting change in
                Nangkhel.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-amber-700"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="space-y-9 lg:px-3">
              <article className="flex gap-4">
                <Eye className="mt-1 h-8 w-8 shrink-0 text-slate-800" aria-hidden="true" />
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">Our Vision</h3>
                  <p className="leading-6 text-slate-700">
                    A caring, inclusive community where everyone has the
                    opportunity to live well and thrive.
                  </p>
                </div>
              </article>
              <article className="flex gap-4">
                <Target className="mt-1 h-8 w-8 shrink-0 text-slate-800" aria-hidden="true" />
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">Our Mission</h3>
                  <p className="leading-6 text-slate-700">
                    To bring people together and provide meaningful support and
                    resources to our local community.
                  </p>
                </div>
              </article>
            </div>

            <aside className="rounded-2xl border border-white/80 bg-white/75 p-6 shadow-lg backdrop-blur-sm sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <Leaf className="h-7 w-7 text-slate-800" aria-hidden="true" />
                <h3 className="text-xl font-bold text-slate-900">Our Core Values</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                {["Compassion", "Service", "Integrity", "Unity", "Respect", "Community"].map((value) => (
                  <li key={value} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-700" aria-hidden="true" />
                    {value}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
        <section className="-mx-4 bg-amber-50 px-4 py-14 text-slate-900 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <header className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                Together, we make a difference
              </p>
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Our Impact
              </h2>
              <p className="text-base leading-7 text-slate-700 sm:text-lg">
                Guided by our vision and mission, we bring neighbors together
                to create a caring, inclusive, and thriving community.
              </p>
            </header>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {impactAreas.map((area) => (
                <article
                  key={area.title}
                  className="group overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl focus-within:-translate-y-2 focus-within:shadow-xl"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="border-t-4 border-amber-600 px-5 py-6">
                    <h3 className="mb-3 text-xl font-bold text-slate-950">
                      {area.title}
                    </h3>
                    <p className="leading-6 text-slate-700">
                      {area.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        </>
      )}

      {/* Team Section */}
      <section className="-mx-4 bg-orange-500/20 px-4 py-12">
        <div className="mx-auto w-full max-w-6xl sm:px-2 lg:px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-green-700">
            Meet Our Team
             <p className="text-center text-base text-black italic bold font-normal">
            "Behind our mission is a dedicated team of dreamers, doers, 
            and community advocates. We don’t just work for the cause—we 
            live it every single day. 
            Get to know the people turning compassion into action."
          </p>

          </h2>
         
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {team.map((member) => (
              <PersonCard
                key={member.name}
                name={member.name}
                role={member.role}
                img={member.img}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA or footer section here if needed */}

    </div> // <-- FINAL CLOSING DIV
  );
}
