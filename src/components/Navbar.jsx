import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Phone, MessageCircle } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto my-auto px-3 py-4 pt-5 flex justify-between items-center">
        {/* Logo */}
       <Link 
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-yellow-600"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={logo}
            alt="The lions of Nangkhel"
            className="w-10 h-10 object-contain"
          />
          <span className="hidden sm:inline text-xs"> The Lions Of Nangkhel <br /> Together we make the difference  </span>
        </Link>

 {/* Search bar */}
{/* Search bar (mobile + desktop) */}
<div className="flex flex-1 justify-center mx-3 md:mx-6">
  <div className="relative w-full max-w-md">
    <input
      type="text"
      placeholder="Search..."
      className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2"
    />
  </div>
</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex mt-3 space-x-8 text-gray-700 font-medium">
          <Link to="/about" className="hover:text-green-600 transition">About</Link>
          <Link to="/projects" className="hover:text-green-600 transition">Projects</Link>
          <Link to="/donate" className=" hover:text-green-600 transition">
            Donate
          </Link>
          <Link to="/contact" className="hover:text-green-600 transition ">Contact</Link>
          <div className="flex items-center gap">
  
  {/* WhatsApp Chat */}
  <a
    href="https://wa.me/97798XXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600"
  >
    <MessageCircle size={18} />
   Chat on Whatsapp
  </a>

 

</div>

        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <Link to="/about" onClick={toggleMenu} className="hover:text-green-600 transition">About</Link>
            <Link to="/projects" onClick={toggleMenu} className="hover:text-green-600 transition">Projects</Link>
            <Link to="/donate" onClick={toggleMenu} className="hover:text-green-600 transition">
              Donate
            </Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-green-600 transition">Contact</Link>
            <div className="flex items-center gap-3">
  
  {/* WhatsApp Chat */}
  <a
    href="https://wa.me/9779749844028"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600"
  >
    Whatsapp
  </a>

 

</div>
          </div>
        </div>
      )}
    </nav>
  );
}
