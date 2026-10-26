
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Activities from "./pages/Activities";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import OurJourney from "./pages/ourjourney";
import Footer from "./components/Footer";
import './App.css'

function App() {

  return (
    <>
     <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />
      <main className="flex flex-1 flex-col px-4 pt-[76px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/ourjourney" element={<OurJourney />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
