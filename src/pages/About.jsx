import React from "react";
import bgImage from "../assets/image.png";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="relative w-full max-w-5xl mx-auto mb-12 rounded-xl overflow-hidden shadow-md">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 p-8 md:p-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            The lions of Nangkhel is a nonprofit organization dedicated to
            making a positive impact in our community. We strive to empower
            individuals, support families, and build a brighter future through
            education, healthcare, and social initiatives.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mb-12 grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To provide sustainable support and resources to underprivileged
            communities, fostering education, health, and equality for all.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A world where every individual has the opportunity to thrive,
            regardless of their background, through empowerment and community
            development.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mb-12">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Team Member 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/504428283_3943489539233514_7858681470690092918_n.jpg?... "
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Manish Byanju
            </h3>
            <p className="text-gray-600">Chairman</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-1/571279401_1992683961568486_3173401311586837895_n.jpg?... "
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Sunil Banmala
            </h3>
            <p className="text-gray-600">Vice - chairman</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/272157682_3122622131389973_3316391635142067934_n.jpg?... "
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Bishal Sukkubhattu
            </h3>
            <p className="text-gray-600">Secretary</p>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/272157682_3122622131389973_3316391635142067934_n.jpg?... "
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Ambika Suwal
            </h3>
            <p className="text-gray-600">Secretary</p>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-violet-600 text-white py-12 px-4 md:px-16 text-center rounded-xl max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Together, we can create a brighter future. Volunteer, donate, or
          spread this community to support our mission.
        </p>
        <a
          href="/donate"
          className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Donate Now
        </a>
      </section>
    </div>
  );
}
