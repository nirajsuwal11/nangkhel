
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Activities from "./pages/Activities";
import ActivityGallery from "./pages/ActivityGallery";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import OurJourney from "./pages/ourjourney";
import Footer from "./components/Footer";
import './App.css'

function App() {
  const location = useLocation();
  const { pathname } = location;
  const isActivityGallery = /^\/activities\/[^/]+\/gallery\/?$/.test(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
     <div className="flex min-h-screen flex-col bg-gray-50">
      {!isActivityGallery && <Navbar />}
      <main className={`flex flex-1 flex-col ${isActivityGallery ? "" : "px-4 pt-[76px]"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/ourjourney" element={<OurJourney />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:activityId/gallery" element={<ActivityGallery />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
      {!isActivityGallery && <Footer />}
    </div>
    <a
      href="https://wa.me/9779749844028"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition hover:bg-green-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
    >
      <WhatsAppIcon fontSize="medium" aria-hidden="true" />
    </a>
    </>
  )
}

export default App
