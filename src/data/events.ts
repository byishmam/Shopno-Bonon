/**
 * EVENT DATA
 * -----------------------------------------------------------------------
 * Add a new event by adding one object. `status` (upcoming/past) is
 * calculated automatically from `date` unless you set it manually.
 */
import type { EventItem } from "./types";

export const events: EventItem[] = [
  {
    slug: "voices-unbound-speech-night",
    title: { bn: "ভয়েসেস আনবাউন্ড: স্পিচ নাইট", en: "Voices Unbound: Speech Night" },
    description: {
      bn: "একটি সন্ধ্যা যেখানে তরুণ বক্তারা মঞ্চে উঠে তাদের গল্প ও মতামত নিয়ে কথা বলবে।",
      en: "An evening where young speakers take the stage to share their stories and ideas.",
    },
    date: "2026-12-12",
    time: "5:00 PM",
    location: { bn: "চট্টগ্রাম", en: "Chattogram" },
    image: "https://images.pexels.com/photos/38996314/pexels-photo-38996314.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    speaker: { bn: "অতিথি বক্তা শীঘ্রই ঘোষণা করা হবে", en: "Guest speaker to be announced" },
    registrationUrl: "",
  },
  {
    slug: "storytellers-workshop",
    title: { bn: "স্টোরিটেলার্স ওয়ার্কশপ", en: "Storytellers' Workshop" },
    description: {
      bn: "গল্প বলার কৌশল ও সৃজনশীল লেখা নিয়ে একটি হাতে-কলমে ওয়ার্কশপ।",
      en: "A hands-on workshop on storytelling techniques and creative writing.",
    },
    date: "2027-01-24",
    time: "3:00 PM",
    location: { bn: "অনলাইন", en: "Online" },
    image: "https://images.pexels.com/photos/8133129/pexels-photo-8133129.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    speaker: { bn: "স্বপ্নবুনন কনটেন্ট টিম", en: "ShopnoBunon Content Team" },
    registrationUrl: "",
  },
  {
    slug: "debate-and-dialogue",
    title: { bn: "বিতর্ক ও সংলাপ", en: "Debate & Dialogue" },
    description: {
      bn: "সমসাময়িক বিষয় নিয়ে খোলামেলা বিতর্ক ও গঠনমূলক আলোচনার আয়োজন।",
      en: "An open debate and constructive discussion session on contemporary topics.",
    },
    date: "2025-08-15",
    time: "4:30 PM",
    location: { bn: "চট্টগ্রাম", en: "Chattogram" },
    image: "https://images.pexels.com/photos/5934959/pexels-photo-5934959.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    speaker: { bn: "স্বপ্নবুনন ডিবেট টিম", en: "ShopnoBunon Debate Team" },
    recap: {
      bn: "৪০ জনেরও বেশি অংশগ্রহণকারী নিয়ে একটি প্রাণবন্ত সন্ধ্যা — চিন্তা, তর্ক এবং শেখার এক দারুণ মিশেল।",
      en: "A lively evening with 40+ participants — a great mix of thought, argument and learning.",
    },
    gallery: [
      "https://images.pexels.com/photos/29708244/pexels-photo-29708244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/39562196/pexels-photo-39562196.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
  },
  {
    slug: "creative-minds-photowalk",
    title: { bn: "ক্রিয়েটিভ মাইন্ডস ফটোওয়াক", en: "Creative Minds Photowalk" },
    description: {
      bn: "স্থানীয় ফটোগ্রাফার ও নতুন উৎসাহীদের নিয়ে একটি সৃজনশীল ফটোওয়াক আয়োজন।",
      en: "A creative photowalk bringing together local photographers and new enthusiasts.",
    },
    date: "2025-11-02",
    time: "7:00 AM",
    location: { bn: "সিআরবি, চট্টগ্রাম", en: "CRB, Chattogram" },
    image: "https://images.pexels.com/photos/17959972/pexels-photo-17959972.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    speaker: { bn: "স্বপ্নবুনন মিডিয়া টিম", en: "ShopnoBunon Media Team" },
    recap: {
      bn: "সকালের আলোয় শহর ঘুরে ২০ জন সদস্য মিলে তুলেছেন শতাধিক ছবি — সেরা কিছু গ্যালারিতে দেখুন।",
      en: "20 members explored the city in morning light, capturing over a hundred frames — see the best in our gallery.",
    },
    gallery: [
      "https://images.pexels.com/photos/8390626/pexels-photo-8390626.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/19148132/pexels-photo-19148132.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
  },
  {
    slug: "leadership-lab",
    title: { bn: "লিডারশিপ ল্যাব", en: "Leadership Lab" },
    description: {
      bn: "নেতৃত্ব দক্ষতা বিকাশের জন্য একটি ইন্টারেক্টিভ সেমিনার ও গ্রুপ অ্যাক্টিভিটি।",
      en: "An interactive seminar and group activity focused on developing leadership skills.",
    },
    date: "2026-09-10",
    time: "2:00 PM",
    location: { bn: "চট্টগ্রাম", en: "Chattogram" },
    image: "https://images.pexels.com/photos/33714902/pexels-photo-33714902.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    speaker: { bn: "অতিথি বক্তা শীঘ্রই ঘোষণা করা হবে", en: "Guest speaker to be announced" },
    registrationUrl: "",
  },
];
