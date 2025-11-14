import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';   // ✅ FIXED
import IconButton from '@mui/material/IconButton';

export default function Footer() {
  return (
    <footer className="bg-violet-700 text-white py-10 mt-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Lions of Nangkhel</h2>
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
          <p className="text-sm">Nangkhel, Bhaktapur, Nepal</p>
          <p className="text-sm">📞 +977-9860117094</p>
          <p className="text-sm">✉️ thelionsofnangkhel@</p>
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

          <div className="mt-4">
            <b>Get Connected</b>
          </div>

          {/* Facebook */}
          <IconButton
            component="a"
            href="https://www.facebook.com/theLionsofNangkhel"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#1877F2' }}
          >
            <FacebookIcon />
          </IconButton>

          {/* Instagram */}
          <IconButton
            component="a"
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#E4405F' }}
          >
            <InstagramIcon />
          </IconButton>

          {/* YouTube */}
          <IconButton
            component="a"
            href="http://www.youtube.com/@thelionsofnangkhel"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#FF0000' }}
          >
            <YouTubeIcon />   {/* ✅ FIXED */}
          </IconButton>

        </div>

      </div>

      <div className="border-t border-green-600 mt-8 pt-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Lions of Nangkhel. All rights reserved.
      </div>
    </footer>
  );
}
