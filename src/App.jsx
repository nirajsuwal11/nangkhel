
import { Routes, Route, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();
  const isActivityGallery = /^\/activities\/[^/]+\/gallery\/?$/.test(pathname);

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
    </>
  )
}

export default App
