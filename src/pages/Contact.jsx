import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jxqj1fl",  // service id
        "template_mflem5l",       // template
        form.current,
        "727qTLZtmzsEbPLWu"         // 🔹 Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 pt-24">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Contact Us
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div>
            <label className="block text-gray-600 mb-2">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
