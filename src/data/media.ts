/**
 * MEDIA / VIDEO DATA
 * -----------------------------------------------------------------------
 * Add a YouTube/Facebook video URL to `videoUrl` once available. Until
 * then, leave it empty — the player will show a friendly "coming soon"
 * state instead of a broken embed.
 */
import type { MediaVideo } from "./types";

export const mediaVideos: MediaVideo[] = [
  {
    slug: "speech-night-highlights",
    title: { bn: "স্পিচ নাইট হাইলাইটস", en: "Speech Night Highlights" },
    description: {
      bn: "আমাদের সাম্প্রতিক স্পিচ নাইট থেকে সেরা মুহূর্তগুলো।",
      en: "Best moments from our recent speech night.",
    },
    category: { bn: "পাবলিক স্পিকিং", en: "Public Speaking" },
    thumbnail: "https://images.pexels.com/photos/38996314/pexels-photo-38996314.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    videoUrl: "",
    date: "2025-08-15",
  },
  {
    slug: "workshop-recap",
    title: { bn: "ওয়ার্কশপ রিক্যাপ", en: "Workshop Recap" },
    description: {
      bn: "স্টোরিটেলিং ওয়ার্কশপের একটি সংক্ষিপ্ত রিক্যাপ।",
      en: "A short recap from our storytelling workshop.",
    },
    category: { bn: "ইভেন্ট", en: "Events" },
    thumbnail: "https://images.pexels.com/photos/33714902/pexels-photo-33714902.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    videoUrl: "",
    date: "2026-01-05",
  },
  {
    slug: "founder-interview",
    title: { bn: "প্রতিষ্ঠাতার সাক্ষাৎকার", en: "Founder Interview" },
    description: {
      bn: "স্বপ্নবুননের যাত্রা নিয়ে প্রতিষ্ঠাতার সাথে একটি খোলামেলা আলাপ।",
      en: "An open conversation with our founder about the ShopnoBunon journey.",
    },
    category: { bn: "সাক্ষাৎকার", en: "Interviews" },
    thumbnail: "https://images.pexels.com/photos/7550385/pexels-photo-7550385.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    videoUrl: "",
    date: "2026-02-01",
  },
  {
    slug: "behind-the-scenes-photowalk",
    title: { bn: "ফটোওয়াকের নেপথ্যে", en: "Behind the Scenes: Photowalk" },
    description: {
      bn: "ক্রিয়েটিভ মাইন্ডস ফটোওয়াকের নেপথ্যের গল্প।",
      en: "The behind-the-scenes story of our Creative Minds Photowalk.",
    },
    category: { bn: "সৃজনশীল", en: "Short Films" },
    thumbnail: "https://images.pexels.com/photos/8390626/pexels-photo-8390626.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    videoUrl: "",
    date: "2025-11-02",
  },
];
