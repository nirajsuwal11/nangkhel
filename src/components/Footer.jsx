import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';   // ✅ FIXED
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer-pattern py-8 text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-x-10 gap-y-8 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">

        {/* Column 1 */}
        <div>
          <div className="mb-2 flex items-center gap-3">
          <img
            src={logo}
            alt="The Lions of Nangkhel logo"
            className="h-10 w-10 object-contain"
          />
            <h2 className="text-2xl font-bold">Lions of Nangkhel</h2>
          </div>
          <p className="mb-2 text-sm font-semibold italic text-white">
            Together we make a difference.
          </p>
          <p className="text-sm text-white/80">
            Empowering communities through education, healthcare, and kindness.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Nangkhel-9, Suryabinayak, Nepal</p>
          <p className="text-sm">📞 +977-9860117094</p>
          <p className="text-sm">✉️ thelionsofnangkhel@gmail.com</p>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get Involved</h3>
          <Link
            to="/donate"
            className="inline-block bg-white text-green-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Donate Now
          </Link>

          <div className="mt-4 mb-2">
            <b>Get Connected</b>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/theLionsofNangkhel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit The Lions of Nangkhel on Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-110 hover:border-[#1877F2] hover:bg-[#1877F2] hover:shadow-lg hover:shadow-[#1877F2]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <FacebookIcon fontSize="small" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit The Lions of Nangkhel on Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-110 hover:border-[#E4405F] hover:bg-gradient-to-br hover:from-[#feda75] hover:via-[#d62976] hover:to-[#4f5bd5] hover:shadow-lg hover:shadow-[#d62976]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <InstagramIcon fontSize="small" aria-hidden="true" />
            </a>
            <a
              href="http://www.youtube.com/@thelionsofnangkhel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit The Lions of Nangkhel on YouTube"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-110 hover:border-[#FF0000] hover:bg-[#FF0000] hover:shadow-lg hover:shadow-[#FF0000]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <YouTubeIcon fontSize="small" aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/9779860117094"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message The Lions of Nangkhel on WhatsApp"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-110 hover:border-[#25D366] hover:bg-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <WhatsAppIcon fontSize="small" aria-hidden="true" />
            </a>
          </div>

        </div>

      </div>

      <div className="mt-8 border-t border-white/15 pt-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Lions of Nangkhel. All rights reserved.
      </div>
    </footer>
  );
}
