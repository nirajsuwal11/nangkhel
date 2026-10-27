import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import slidePhoto1 from "../assets/slidephotos/1.JPG";
import slidePhoto2 from "../assets/slidephotos/2.png";
import slidePhoto3 from "../assets/slidephotos/3.jpg";
import slidePhoto4 from "../assets/slidephotos/4.jpg";
import slidePhoto5 from "../assets/slidephotos/5.jpg";
import About from "./About";

const slides = [
  slidePhoto1,
  slidePhoto2,
  slidePhoto3,
  slidePhoto4,
  slidePhoto5,
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <>
      <section
        className="relative -mx-4 h-[min(72vh,680px)] min-h-[520px] overflow-hidden bg-slate-950 text-white"
        aria-label="Featured community stories"
      >
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          aria-hidden="true"
        >
          {slides.map((slide) => (
            <img
              key={slide}
              src={slide}
              alt=""
              className="h-full w-full flex-none object-cover object-center"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 py-14 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <div className="mb-7">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-amber-300 sm:text-base">
                Together, we make a difference
              </p>
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-xl sm:flex lg:h-20 lg:w-20">
                  <img src={logo} alt="The Lions of Nangkhel logo" className="h-full w-full object-contain" />
                </div>
                <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
                  The Lions of Nangkhel
                </h1>
              </div>
              <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-white/90 sm:text-2xl">
                A community-led nonprofit working together to create a
                brighter future for everyone.
              </p>
            </div>

            <p className="mb-8 text-xl font-semibold italic text-white sm:text-2xl">
              Together we make the difference
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/donate"
                className="rounded-lg bg-amber-600 px-7 py-3.5 font-bold text-white transition hover:bg-amber-700"
              >
               Donate
                <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          <button
            type="button"
            onClick={showPreviousSlide}
            aria-label="Previous slide"
            className="rounded-full border border-white/50 bg-slate-950/30 p-2 transition hover:bg-white/20"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-1.5" aria-label={`Slide ${activeSlide + 1} of ${slides.length}`}>
            {slides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeSlide ? "w-8 bg-white" : "w-4 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={showNextSlide}
            aria-label="Next slide"
            className="rounded-full border border-white/50 bg-slate-950/30 p-2 transition hover:bg-white/20"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      <About showHero={false} />
    </>
  );
}
