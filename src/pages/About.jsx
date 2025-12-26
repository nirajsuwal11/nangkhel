import React from "react";
import bgImage from "../assets/image.png";
import { Grid, Container } from "@mui/material";
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

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">

      {/* Hero Section */}
      <section className="relative w-full max-w-5xl mx-auto mb-12 rounded-xl overflow-hidden shadow-md">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 p-8 md:p-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            The lions of Nangkhel is a nonprofit organization dedicated to making a
            positive impact in our community.
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
            To provide sustainable support and resources to underprivileged communities.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A world where every individual has the opportunity to thrive.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mb-12">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Meet Our Team
        </h2>

        <Container>
         <Grid container spacing={3} justifyContent="center">
    {team.map((member, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <PersonCard
          name={member.name}
          role={member.role}
          img={member.img}
        />
      </Grid>
    ))}
  </Grid>
        </Container>
      </section>

      {/* CTA or footer section here if needed */}

    </div> // <-- FINAL CLOSING DIV
  );
}
