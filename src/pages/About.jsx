import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="relative w-full max-w-5xl mx-auto mb-12 rounded-xl overflow-hidden shadow-md">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/480660455_1551708208922776_5570362587715112218_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BxVZaIRzahcQ7kNvwGcLme3&_nc_oc=Adn0ekps954kiu18r6dpfxQZAtP65XK78A2vga3rF3aEjb2NOBDZm3H5Y3PLP1YhKczxeMvbzcS5-avwe8xp1Ust&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=u9kOklctOuY5J9ZpFwuNIg&oh=00_Afjvvm1jC0ZcF0AyiN3jRi5eINEes5-RoMyNgymYUGTj5w&oe=6917E160')" }} // Replace with your image path
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 p-8 md:p-16 text-center text-white">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      About Us
    </h1>
    <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
      The lions of Nangkhel is a nonprofit organization dedicated to making a
      positive impact in our community. We strive to empower individuals,
      support families, and build a brighter future through education,
      healthcare, and social initiatives.
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
          {/* Example Team Member */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/504428283_3943489539233514_7858681470690092918_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JS3k7OZZE_QQ7kNvwGKIFnM&_nc_oc=AdknsKoPAkukOUBzJDnCBqc13_p4_0cFaqHn4aE6MPz-rLKHUQH9_9VCdl8-4cGWoGH9s361jzT7fFdb1-31iE1j&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=QBRPatFe4NHgbDQZwudncw&oh=00_AfjH33QLSRSMqV8tw_OkgzwBuLS-k_lT8G-C1NzMGmKpEA&oe=6917E643"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">
           Manish Byanju
            </h3>
            <p className="text-gray-600"> Chairman </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-1/571279401_1992683961568486_3173401311586837895_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=1d2534&_nc_ohc=fZ6hSCRlER0Q7kNvwHY1VrN&_nc_oc=Adk_Hck4O0WTY8WsFvi67E8BIgbI5GlhmblrLYChCmilXtsr-4qcKoOdJhM5X89fe2BAuMevsSnwIPCtf4OPFvCR&_nc_zt=24&_nc_ht=scontent.fktm24-1.fna&_nc_gid=vY1WKfcPZxPYEgnX33fg3A&oh=00_AfiEmmQnRYaDPaEaxQIGNvQ6WaVLXOrKjHMS_wfvEkpMnw&oe=6917FB10"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">
            Sunil Banmala
            </h3>
            <p className="text-gray-600">Vice - chairman</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/272157682_3122622131389973_3316391635142067934_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SAvCSPcnF5MQ7kNvwF896He&_nc_oc=Adlc8Acyakqly-SAyZn368WR09-d5SXuv0LB0nlx7gfkCj8aKBRMvXJ3nlA0L4Tq8becN102VEn4S8nyRjtt0OPg&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=HGFMQihuTzLshri7QHfzGA&oh=00_AfgwaJ20tF0_iYf68-sbUKxkaoSV1j824HgnkoWyuDFeRg&oe=6917F46F"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Bishal Sukkubhattu
            </h3>
            <p className="text-gray-600">Secratary </p>
          </div>
           <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src="https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/272157682_3122622131389973_3316391635142067934_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SAvCSPcnF5MQ7kNvwF896He&_nc_oc=Adlc8Acyakqly-SAyZn368WR09-d5SXuv0LB0nlx7gfkCj8aKBRMvXJ3nlA0L4Tq8becN102VEn4S8nyRjtt0OPg&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=HGFMQihuTzLshri7QHfzGA&oh=00_AfgwaJ20tF0_iYf68-sbUKxkaoSV1j824HgnkoWyuDFeRg&oe=6917F46F"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">
             Ambika Suwal
            </h3>
            <p className="text-gray-600">Secratary </p>
          </div>
        </div>
      </section>

      {/* Optional Call to Action */}
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

