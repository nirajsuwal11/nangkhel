import publicSpeakingCover from "../assets/gallery/655710275_1852437282183199_25629550421314664_n.jpg";

const speakingGallery = Object.entries(
  import.meta.glob(
    "../assets/publicspeaking/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true, import: "default" },
  ),
)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([, image]) => image);

export const activities = [
  {
    id: "design-sketch",
    category: "Learning & creativity",
    title: "Design Sketch Program",
    description:
      "Joined and supported the Design Sketch program organized by Bhaktapur Diaries, creating a space for young people to explore their creativity.",
    gallery: [],
  },
  {
    id: "cultural-program",
    category: "Culture & community",
    title: "Community Cultural Program",
    description:
      "Supported cultural programming and brought club members together to celebrate local traditions and community participation.",
    gallery: [],
  },
  {
    id: "elders-day",
    category: "Community care",
    title: "Elders’ Day Community Gathering",
    description:
      "Spent time with senior members of the community through a shared outing and refreshments, recognizing and celebrating their contributions.",
    gallery: [],
  },
  {
    id: "temple-support",
    category: "Heritage & service",
    title: "Local Temple Improvement Support",
    description:
      "Worked alongside local youth in support of temple improvement, contributing volunteer time to a community heritage initiative.",
    gallery: [],
  },
  {
    id: "dhungedhara-cleanup",
    category: "Environment & service",
    title: "Dhungedhara Cleanup",
    description:
      "Took part in a community cleanup around Dhungedhara, encouraging shared responsibility for local public spaces.",
    gallery: [],
  },
  {
    id: "public-speaking",
    category: "Youth development",
    title: "Public Speaking Training",
    description:
      "Gave young people an opportunity to build confidence, practice public speaking, and share their ideas with the community.",
    gallery: speakingGallery,
    coverImage: publicSpeakingCover,
  },
  {
    id: "child-friendly-community",
    category: "Youth & inclusion",
    title: "Child-Friendly Municipality Campaign",
    description:
      "Participated in the campaign to recognize and promote a child-friendly municipality, supporting a community where young people can thrive.",
    gallery: [],
  },
  {
    id: "cultural-baja-dance",
    category: "Culture & heritage",
    title: "Nangkhel Cultural Baja and Dance",
    description:
      "Celebrated Nangkhel’s cultural identity through traditional music and dance, helping pass local heritage on to the next generation.",
    gallery: [],
  },
];
