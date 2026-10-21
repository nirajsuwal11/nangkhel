import { useRef, useState } from "react";
import { MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14136.93286688579!2d85.43941848961299!3d27.648255327089267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0fefb9f17c9d%3A0xe2dc0b0738112c0c!2sNangkhel%20Gaun%2C%20Suryabinayak%2C%20Bagmati%20Province!5e0!3m2!1sen!2snp!4v1792575656199!5m2!1sen!2snp";
const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Nangkhel%2C+Suryabinayak%2C+Nepal";

export default function Contact() {
  const form = useRef(null);
  const [sending, setSending] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState(null);

  const sendEmail = async (event) => {
    event.preventDefault();
    if (!form.current) {
      setSubmissionMessage({
        type: "error",
        text: "The form could not be submitted. Please refresh and try again.",
      });
      return;
    }

    setSending(true);
    setSubmissionMessage(null);

    try {
      await emailjs.sendForm(
        "service_jxqj1fl",
        "template_mflem5l",
        form.current,
        "727qTLZtmzsEbPLWu"
      );
      form.current.reset();
      setSubmissionMessage({
        type: "success",
        text: "Your message was sent successfully. Thank you for contacting us!",
      });
    } catch (error) {
      console.error("EmailJS contact form submission failed:", error);
      setSubmissionMessage({
        type: "error",
        text: "We couldn't send your message. Please try again later.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative -mx-4 flex-1 overflow-hidden bg-slate-50 px-4 py-12 sm:py-16">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-green-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            We’d love to hear from you
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Have a question or want to get involved? Send us a message or reach
            out using the details below.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-3xl bg-green-800 p-7 text-white shadow-xl sm:p-9">
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <p className="mt-3 leading-7 text-green-50/85">
              We’re a community organization based in Nangkhel, Suryabinayak.
              Contact us to learn more about our work.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <MapPin size={21} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">Our location</h3>
                  <p className="mt-1 text-sm leading-6 text-green-50/85">
                    Nangkhel, Suryabinayak,
                    <br />
                    Bhaktapur, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Phone size={21} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">Call us</h3>
                  <a
                    href="tel:+9779860117094"
                    className="mt-1 inline-block text-sm text-green-50/85 transition hover:text-white hover:underline"
                  >
                    +977-9860117094
                  </a>
                </div>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-lg bg-orange-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800"
            >
              Get directions
              <span className="ml-2" aria-hidden="true">↗</span>
            </a>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/20 bg-white/10">
              <iframe
                title="Map showing Nangkhel, Suryabinayak, Nepal"
                src={mapUrl}
                className="h-64 w-full border-0 sm:h-72"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </aside>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-9">
            <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Fill out the form below and we’ll get back to you.
            </p>

            <form ref={form} onSubmit={sendEmail} className="mt-7 space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-slate-700">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="user_name"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-slate-700">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="user_email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-slate-700">
                  Your contact no.
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="user_phone"
                  autoComplete="tel"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                  placeholder="+977 98XXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-slate-700">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                  placeholder="How can we help?"
                />
              </div>

              {submissionMessage && (
                <p
                  className={`text-sm ${
                    submissionMessage.type === "success"
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                  role={submissionMessage.type === "success" ? "status" : "alert"}
                >
                  {submissionMessage.text}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-xl bg-green-700 px-5 py-3.5 font-bold text-white transition hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-200 disabled:cursor-wait disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
