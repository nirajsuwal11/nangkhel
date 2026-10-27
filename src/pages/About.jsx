import React, { useState } from "react";
import bgImage from "../assets/image.png";
import logo from "../assets/logo.png";
import { Eye, Leaf, Target } from "lucide-react";
import { Link } from "react-router-dom";
import PersonCard from "../components/PersonCard";
import manish from "../assets/comittee/manish.jpg";
import sunil from "../assets/comittee/sunil.jpg";
import bishal from "../assets/comittee/bishal.png";
import shristi from "../assets/comittee/shristi.png";
import manishSuku from "../assets/comittee/manish-suku.png";
import bikash from "../assets/comittee/bikash.jpg";
import kabina from "../assets/comittee/kabina.png";
import ujjwala from "../assets/comittee/ujjwala.png";
import ujwol from "../assets/comittee/ujwol.png";
import ambika from "../assets/comittee/ambika.png";
import shramit from "../assets/comittee/shramit.png";
import sushan from "../assets/comittee/sushan.png";
import rojina from "../assets/comittee/rojina.png";
import goldson from "../assets/comittee/goldson.png";


import educationalAwareness from "../assets/workareas/educational.jpg";
import community from "../assets/workareas/commmunity service.jpg";
import cultural from "../assets/workareas/cultural events.jpg";
import culturalHeritage from "../assets/workareas/cultural heritage.jpg";
import environmentalConservation from "../assets/workareas/environmental conservation.jpg";
import youth from "../assets/workareas/youth activities.jpg";


const team = [
  { name: "Manish Byanju", role: "Chairman", img: manish },
  { name: "Sunil Banmala", role: "Vice - Chairman", img: sunil },
  { name: "Bishal Sukkubhattu", role: "Secretary", img: bishal },
  { name: "Shristi Kasula", role: "Assistant - Secratary", img: shristi },
  { name: "Manish Sukubhattu", role: "Accountant", img: manishSuku },
  { name: "Bikash Byanju", role: "Member", img: bikash },
  { name: "Kabina Byanju", role: "Member", img: kabina },
  { name: "Ujjwala Byanju", role: "Member", img: ujjwala },
  { name: "Ujwol Byanju", role: "Member", img: ujwol },
  { name: "Ambika Suwal", role: "Member", img: ambika },
  { name: "Shramit Kasula", role: "Member", img: shramit },
  { name: "Sushan Byanju", role: "Member", img: sushan },
  { name: "Rojina Byanju", role: "Member", img: rojina },
  { name: "Goldson Sukubhattu", role: "Member", img: goldson },
  { name: "Niraj Suwal", role: "Member" },
];

const mission =
  "To engage youth and community members through social service, education, cultural preservation, talent development and meaningful community initiatives.";
const vision =
  "To build an active, culturally conscious and socially responsible community where young people are empowered to contribute toward sustainable community development.";

const impactAreas = [
  {
    title: "Educational Awareness",
    description:
      "Supporting initiatives that encourage learning, awareness and personal development among young people and community members.",
    image: educationalAwareness,
    imageAlt: "Educational awareness activity",
  },
  {
    title: "Environmental Conservation",
    description:
      "Promoting environmental responsibility and encouraging community participation in conservation activities.",
    image: environmentalConservation,
    imageAlt: "Environmental conservation activity",
  },
  {
    title: "Cultural Heritage Promotion",
    description:
      "Working to preserve, promote and create awareness about the cultural traditions and heritage of Nangkhel.",
    image: culturalHeritage,
    imageAlt: "Cultural heritage promotion",
  },
  {
    title: "Cultural Events",
    description:
      "Organizing and supporting cultural programs that provide platforms for community participation and local expression.",
    image: cultural,
    imageAlt: "Community cultural event",
  },
  {
    title: "Sports & Youth Activities",
    description:
      "Encouraging healthy participation, teamwork, discipline and leadership among young people.",
    image: youth,
    imageAlt: "Youth activity",
  },
  {
    title: "Community Service",
    description:
      "Engaging volunteers in activities that respond to the needs and interests of the local community.",
    image: community,
    imageAlt: "Community service activity",
  },
];

export default function About({ showHero = true }) {
  const [aboutExpanded, setAboutExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      {showHero && (
        <section className="relative w-full min-h-[400px] overflow-hidden shadow-md">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 flex min-h-[400px] flex-col items-center justify-center p-8 text-center text-white md:p-16">
            <img
              src={logo}
              alt="The Lions of Nangkhel logo"
              className="mb-5 h-24 w-24 rounded-full bg-white object-contain p-1 shadow-xl sm:mb-6 sm:h-32 sm:w-32"
            />
            <h1 className="mb-4 text-4xl font-bold md:mb-6 md:text-5xl">
              About Us
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
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
              {mission}
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg md:p-10">
            <h2 className="mb-4 text-2xl font-semibold text-green-600">
              Our Vision
            </h2>
            <p className="leading-relaxed text-gray-700">
              {vision}
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
              <p
                className="mb-7 overflow-hidden leading-7 transition-[max-height] duration-500 ease-in-out text-justify "
                style={{ maxHeight: aboutExpanded ? "1000px" : "7rem" }}
              >
                TThe Lions of Nangkhel is a non-profit, community-based youth organization dedicated to serving the people of Bhaktapur through social, educational, cultural and developmental initiatives.
Established with the vision of fostering responsible citizenship and collective community growth, the organization actively engages young people in meaningful activities that contribute to the betterment of society.
The club believes that young people are not only the future of a community but also an important force in shaping its present. Through collective action, volunteerism, cultural participation and community service, The Lions of Nangkhel works toward building a more connected, responsible and culturally conscious society.
              </p>
              <button
                type="button"
                aria-expanded={aboutExpanded}
                onClick={() => setAboutExpanded((expanded) => !expanded)}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-amber-700"
              >
                {aboutExpanded ? "Read Less" : "Read More"}
                <span aria-hidden="true">{aboutExpanded ? "↑" : "→"}</span>
              </button>
            </div>

            <div className="space-y-9 lg:px-3">
              <article className="flex gap-4">
                <Eye className="mt-1 h-8 w-8 shrink-0 text-slate-800" aria-hidden="true" />
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">Our Vision</h3>
                  <p className="leading-6 text-slate-700">
                    {vision}
                  </p>
                </div>
              </article>
              <article className="flex gap-4">
                <Target className="mt-1 h-8 w-8 shrink-0 text-slate-800" aria-hidden="true" />
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">Our Mission</h3>
                  <p className="leading-6 text-slate-700">
                    {mission}
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
                {[
                  "Service",
                  "Leadership",
                  "Integrity",
                  "Unity",
                  "Inclusion",
                  "Accountability",
                  "Innovation",
                  "Respect",
                  "Sustainability",
                ].map((value) => (
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
                Our Major Areas of Work
              </h2>
              <p className="text-base leading-7 text-slate-700 sm:text-lg">
                Guided by our vision and mission, we bring neighbors together
                to create a caring, inclusive, and thriving community.
              </p>
            </header>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {impactAreas.map((area) => (
                <article
                  key={area.title}
                  className="group overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl focus-within:-translate-y-2 focus-within:shadow-xl"
                >
                  {area.image && (
                    <div className="h-56 overflow-hidden">
                      <img
                        src={area.image}
                        alt={area.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
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
      <section className="-mx-4 bg-slate-100 px-4 py-12">
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
