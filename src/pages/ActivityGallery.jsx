import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { activities } from "./activitiesData";

export default function ActivityGallery() {
  const { activityId } = useParams();
  const activity = activities.find((item) => item.id === activityId);
  const galleryRef = useRef(null);

  const scrollGallery = (direction) => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    gallery.scrollBy({
      left: direction * gallery.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  if (!activity || activity.gallery.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-white">
        <p role="status" className="text-lg font-medium text-slate-300">
          No photos are available for this activity yet.
        </p>
      </main>
    );
  }

  return (
    <main
      aria-label={`${activity.title} photo gallery`}
      className="flex min-h-screen items-center bg-black px-2 py-6 sm:px-4"
    >
      <div className="mx-auto flex w-full max-w-[1600px] items-center gap-2 sm:gap-4">
        <button
          type="button"
          onClick={() => scrollGallery(-1)}
          aria-label="Show previous photos"
          className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-12 sm:w-12"
        >
          <ChevronLeft size={24} aria-hidden="true" />
        </button>

        <div
          ref={galleryRef}
          aria-label={`${activity.title} photos`}
          className="flex min-w-0 flex-1 snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4"
        >
          {activity.gallery.map((image, index) => (
            <figure
              key={image}
              className="w-[85%] shrink-0 snap-start sm:w-[48%] lg:w-[31%] xl:w-[24%]"
            >
              <img
                src={image}
                alt={`${activity.title} photo ${index + 1}`}
                loading={index < 4 ? "eager" : "lazy"}
                className="aspect-[4/5] w-full rounded-lg bg-slate-900 object-contain"
              />
            </figure>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollGallery(1)}
          aria-label="Show next photos"
          className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-12 sm:w-12"
        >
          <ChevronRight size={24} aria-hidden="true" />
        </button>
      </div>
    </main>
  );
}
