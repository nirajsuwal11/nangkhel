import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Mic2,
  X,
} from "lucide-react";
import speakerAtPodium from "../assets/gallery/657313883_1852436348849959_2642932384571542032_n.jpg";
import youngSpeaker from "../assets/gallery/656856691_1852436288849965_3081357968752154187_n.jpg";
import studentSpeaker from "../assets/gallery/656651056_1852436718849922_2070191455296499884_n.jpg";
import workshopSpeaker from "../assets/gallery/656351594_1852436918849902_6918085071734480960_n.jpg";
import communitySpeaker from "../assets/gallery/655710275_1852437282183199_25629550421314664_n.jpg";
import confidentSpeaker from "../assets/gallery/654937403_1852437402183187_6961340000571929201_n.jpg";
import eventParticipant from "../assets/gallery/653715159_1852437335516527_8302334797734978514_n.jpg";
import podiumSpeaker from "../assets/gallery/653043079_1852436542183273_6622861384089404377_n.jpg";

const galleryPhotos = [
  {
    src: speakerAtPodium,
    alt: "Participant speaking at the workshop podium",
  },
  {
    src: youngSpeaker,
    alt: "Young participant practicing a speech at the podium",
  },
  {
    src: studentSpeaker,
    alt: "Participant sharing a speech with the audience",
  },
  {
    src: workshopSpeaker,
    alt: "Workshop participant speaking into a microphone",
  },
  {
    src: communitySpeaker,
    alt: "Community member addressing the workshop audience",
  },
  {
    src: confidentSpeaker,
    alt: "Participant building confidence through public speaking",
  },
  {
    src: eventParticipant,
    alt: "Participant taking part in the public speaking workshop",
  },
  {
    src: podiumSpeaker,
    alt: "Speaker presenting at the Nangkhel workshop",
  },
];

export default function Projects() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const activePhoto =
    activePhotoIndex === null ? null : galleryPhotos[activePhotoIndex];

  useEffect(() => {
    if (activePhotoIndex === null) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActivePhotoIndex(null);
      if (event.key === "ArrowLeft") {
        setActivePhotoIndex((index) => (index - 1 + galleryPhotos.length) % galleryPhotos.length);
      }
      if (event.key === "ArrowRight") {
        setActivePhotoIndex((index) => (index + 1) % galleryPhotos.length);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activePhotoIndex]);

  return (
    <div className="-mx-4 flex-1 bg-slate-50">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-700/50 via-slate-950 to-slate-950" />
        <div className="absolute -right-24 top-12 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12 lg:py-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-200">
              <Mic2 size={16} aria-hidden="true" />
              Activities &amp; Events
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              7 Days of
              <span className="block text-amber-300">Public Speaking</span>
              at Nangkhel
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              A week to find your voice, build confidence, and share your ideas.
              This community workshop brought public speaking practice to
              Nangkhel—one speech, one brave moment, and one new skill at a time.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold ring-1 ring-white/15">
                <span className="text-amber-300">7 days</span>
                of learning and practice
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold ring-1 ring-white/15">
                <MapPin size={16} className="text-amber-300" aria-hidden="true" />
                Nangkhel
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-gradient-to-br from-amber-400/60 to-green-500/40 blur-sm" />
            <img
              src={youngSpeaker}
              alt="A young participant speaking at the workshop podium"
              className="relative h-[360px] w-full rounded-[1.7rem] object-cover object-center shadow-2xl sm:h-[440px]"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-slate-950/75 p-4 text-white shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                Find your voice
              </p>
              <p className="mt-1 text-lg font-bold sm:text-xl">
                Confidence grows with every opportunity to speak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <header className="border-b border-slate-200 bg-gradient-to-r from-green-50 via-white to-amber-50 px-6 py-7 sm:px-9 sm:py-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white">
                  Event · Public Speaking Workshop
                </span>
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-900">
                  Nangkhel
                </span>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                    7 Days Public Speaking Workshop
                  </h2>
                  <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                    A community learning experience focused on speaking with
                    confidence, sharing ideas, and finding your voice. Explore
                    moments from the workshop gallery below.
                  </p>
                </div>
                <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  <Mic2 size={16} className="text-green-700" aria-hidden="true" />
                  7-day event
                </span>
              </div>
              <div className="mt-7 grid gap-4 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 sm:grid-cols-2 lg:grid-cols-4 sm:p-6">
                <div className="sm:col-span-2 lg:col-span-4">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-800">
                    Featured program
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold text-slate-950 sm:text-2xl">
                    एक विषय, एक वक्ता
                  </h3>
                  <p className="mt-1 font-semibold text-slate-700">
                    One Topic, One Speaker · Public Speaking Program
                  </p>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                    Participants from the seven-day public speaking workshop
                    take the stage to speak on a topic.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-white p-4">
                  <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Date</p>
                    <p className="mt-1 font-semibold text-slate-900">2082 Falgun 30 · Saturday</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-white p-4">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Time</p>
                    <p className="mt-1 font-semibold text-slate-900">4:00 PM onwards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-white p-4 sm:col-span-2">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Venue</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      Stage at Nandikeshwor Temple premises
                    </p>
                  </div>
                </div>
              </div>
            </header>

            <div className="p-5 sm:p-8">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-green-700">
                    Event Gallery
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    Moments from the workshop
                  </h3>
                </div>
                <p className="text-sm text-slate-500">
                  Select a photo to view the full gallery
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                {galleryPhotos.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => setActivePhotoIndex(index)}
                    aria-label={`View photo ${index + 1}: ${photo.alt}`}
                    className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-200 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-2 top-2 max-w-[calc(100%-1rem)] truncate rounded-full bg-slate-950/85 px-3 py-1.5 text-[10px] font-bold text-white shadow-md sm:left-3 sm:top-3 sm:text-xs">
                      Event · Public Speaking
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />
                    <span className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 text-xs font-semibold text-white sm:bottom-4 sm:left-4 sm:right-4 sm:text-sm">
                      <span className="line-clamp-2">{photo.alt}</span>
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Workshop gallery photo ${activePhotoIndex + 1} of ${galleryPhotos.length}`}
          onClick={() => setActivePhotoIndex(null)}
        >
          <p className="absolute left-5 top-5 text-sm font-semibold text-white sm:left-8 sm:top-8">
            {activePhotoIndex + 1} / {galleryPhotos.length}
          </p>
          <button
            type="button"
            onClick={() => setActivePhotoIndex(null)}
            aria-label="Close photo"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-7 sm:top-6"
          >
            <X size={24} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActivePhotoIndex((index) => (index - 1 + galleryPhotos.length) % galleryPhotos.length);
            }}
            aria-label="View previous photo"
            className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-8"
          >
            <ArrowLeft size={22} aria-hidden="true" />
          </button>
          <figure
            className="max-h-full max-w-5xl px-10"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              className="max-h-[75vh] max-w-full object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/85">
              {activePhoto.alt}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActivePhotoIndex((index) => (index + 1) % galleryPhotos.length);
            }}
            aria-label="View next photo"
            className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-8"
          >
            <ArrowRight size={22} aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
