/**
 * MISSION / VISION / VALUES / WHAT-WE-DO CONTENT
 * -----------------------------------------------------------------------
 * Structured editorial content blocks used across the Home & About pages.
 */
import type { Localized } from "./types";
import {
  BookOpen,
  Mic2,
  Sparkles,
  CalendarDays,
  Clapperboard,
  Share2,
  Flame,
  ShieldCheck,
  Compass,
  PenLine,
  Layers,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ValueItem {
  key: string;
  title: Localized;
  description: Localized;
  icon: LucideIcon;
}

export const values: ValueItem[] = [
  {
    key: "excellence",
    title: { bn: "উৎকর্ষতা", en: "Excellence" },
    description: {
      bn: "প্রতিনিয়ত নিজেকে ছাড়িয়ে যাওয়ার চেষ্টা করা।",
      en: "Always strive to become better.",
    },
    icon: Flame,
  },
  {
    key: "courage",
    title: { bn: "সাহস", en: "Courage" },
    description: {
      bn: "ভয়কে জয় করে বলা, সৃষ্টি করা এবং কাজ করা।",
      en: "Speak, create and act despite fear.",
    },
    icon: ShieldCheck,
  },
  {
    key: "curiosity",
    title: { bn: "কৌতূহল", en: "Curiosity" },
    description: {
      bn: "শেখা চালিয়ে যাওয়া, প্রশ্ন করা থামিয়ে না দেওয়া।",
      en: "Keep learning, keep questioning.",
    },
    icon: Compass,
  },
  {
    key: "creativity",
    title: { bn: "সৃজনশীলতা", en: "Creativity" },
    description: {
      bn: "ধারণাকে অর্থপূর্ণ কিছুতে রূপান্তর করা।",
      en: "Turn ideas into something meaningful.",
    },
    icon: Sparkles,
  },
  {
    key: "discipline",
    title: { bn: "শৃঙ্খলা", en: "Discipline" },
    description: {
      bn: "স্বপ্নের জন্য দরকার ধারাবাহিকতা।",
      en: "Dreams require consistency.",
    },
    icon: Layers,
  },
  {
    key: "integrity",
    title: { bn: "সততা", en: "Integrity" },
    description: {
      bn: "নিজের ও অন্যের সাথে সৎ থাকা।",
      en: "Stay honest with yourself and others.",
    },
    icon: PenLine,
  },
  {
    key: "community",
    title: { bn: "কমিউনিটি", en: "Community" },
    description: {
      bn: "একসাথে আমরা আরও ভালোভাবে বেড়ে উঠি।",
      en: "We grow better together.",
    },
    icon: Users,
  },
];

export interface WhatWeDoItem {
  key: string;
  title: Localized;
  description: Localized;
  points: Localized[];
  icon: LucideIcon;
  image: string;
}

export const whatWeDo: WhatWeDoItem[] = [
  {
    key: "writing",
    title: { bn: "লেখালেখি ও প্রকাশনা", en: "Writing & Publishing" },
    description: {
      bn: "নিবন্ধ, প্রবন্ধ, মতামত, গল্প ও সৃজনশীল লেখা প্রকাশ করার প্ল্যাটফর্ম।",
      en: "A platform to publish articles, essays, opinion pieces, stories and creative writing.",
    },
    points: [
      { bn: "নিবন্ধ ও প্রবন্ধ", en: "Articles & essays" },
      { bn: "মতামত ও প্রতিফলন", en: "Opinion & reflections" },
      { bn: "গল্প ও সৃজনশীল লেখা", en: "Stories & creative writing" },
      { bn: "শিক্ষামূলক ও আত্ম-উন্নয়ন কনটেন্ট", en: "Educational & self-development content" },
    ],
    icon: BookOpen,
    image: "https://images.pexels.com/photos/6962951/pexels-photo-6962951.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    key: "speaking",
    title: { bn: "পাবলিক স্পিকিং", en: "Public Speaking" },
    description: {
      bn: "বক্তৃতা প্রতিযোগিতা, বিতর্ক ও অতিথি বক্তার সেশন আয়োজন।",
      en: "Organizing speaking sessions, speech competitions, debates and guest talks.",
    },
    points: [
      { bn: "পাবলিক স্পিকিং সেশন", en: "Public speaking sessions" },
      { bn: "বক্তৃতা প্রতিযোগিতা", en: "Speech competitions" },
      { bn: "বিতর্ক সেশন", en: "Debate sessions" },
      { bn: "অতিথি বক্তা সেশন", en: "Guest speaker sessions" },
    ],
    icon: Mic2,
    image: "https://images.pexels.com/photos/5934959/pexels-photo-5934959.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    key: "self-development",
    title: { bn: "আত্ম-উন্নয়ন", en: "Self Development" },
    description: {
      bn: "ব্যক্তিগত বিকাশ, যোগাযোগ, আত্মবিশ্বাস ও নেতৃত্ব গড়ে তোলা।",
      en: "Promoting personal growth, communication, confidence and leadership.",
    },
    points: [
      { bn: "ব্যক্তিগত বিকাশ", en: "Personal growth" },
      { bn: "যোগাযোগ দক্ষতা", en: "Communication" },
      { bn: "উৎপাদনশীলতা", en: "Productivity" },
      { bn: "নেতৃত্বগুণ", en: "Leadership" },
    ],
    icon: Sparkles,
    image: "https://images.pexels.com/photos/38397849/pexels-photo-38397849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    key: "events",
    title: { bn: "ইভেন্ট", en: "Events" },
    description: {
      bn: "ওয়ার্কশপ, সেমিনার, প্রতিযোগিতা ও কমিউনিটি ইভেন্ট আয়োজন।",
      en: "Organizing workshops, seminars, competitions and community events.",
    },
    points: [
      { bn: "ওয়ার্কশপ", en: "Workshops" },
      { bn: "সেমিনার", en: "Seminars" },
      { bn: "প্রতিযোগিতা", en: "Competitions" },
      { bn: "কমিউনিটি আলোচনা", en: "Community discussions" },
    ],
    icon: CalendarDays,
    image: "https://images.pexels.com/photos/33714902/pexels-photo-33714902.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    key: "creative-projects",
    title: { bn: "সৃজনশীল প্রজেক্ট", en: "Creative Projects" },
    description: {
      bn: "ফটোগ্রাফি, ফিল্মমেকিং, স্টোরিটেলিং ও ডিজাইন প্রজেক্ট।",
      en: "Photography, filmmaking, storytelling, graphic design and video production.",
    },
    points: [
      { bn: "ফটোগ্রাফি", en: "Photography" },
      { bn: "ফিল্মমেকিং", en: "Filmmaking" },
      { bn: "গ্রাফিক ডিজাইন", en: "Graphic design" },
      { bn: "ভিডিও প্রোডাকশন", en: "Video production" },
    ],
    icon: Clapperboard,
    image: "https://images.pexels.com/photos/8390626/pexels-photo-8390626.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    key: "knowledge-sharing",
    title: { bn: "জ্ঞান বিনিময়", en: "Knowledge Sharing" },
    description: {
      bn: "একজন থেকে আরেকজন শেখার একটি প্ল্যাটফর্ম তৈরি করা।",
      en: "Creating a platform where people can learn from one another.",
    },
    points: [
      { bn: "পিয়ার লার্নিং", en: "Peer learning" },
      { bn: "মেন্টরশিপ", en: "Mentorship" },
      { bn: "স্কিল-শেয়ারিং সেশন", en: "Skill-sharing sessions" },
      { bn: "ওপেন ডিসকাশন", en: "Open discussions" },
    ],
    icon: Share2,
    image: "https://images.pexels.com/photos/7550385/pexels-photo-7550385.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
];

export const aboutContent = {
  whoWeAre: {
    bn: "স্বপ্নবুনন একটি তরুণ-নেতৃত্বাধীন সৃজনশীল ও আত্ম-উন্নয়নমূলক কমিউনিটি, যা জ্ঞান, সৃজনশীলতা, যোগাযোগ এবং নেতৃত্বের মাধ্যমে মানুষকে একত্রিত করে।",
    en: "ShopnoBunon is a youth-driven creative and self-development community that brings people together through knowledge, creativity, communication and leadership.",
  },
  whyWeExist: {
    bn: "আমরা বিশ্বাস করি প্রতিটি তরুণের ভেতরে একটি কণ্ঠস্বর, একটি গল্প এবং একটি স্বপ্ন লুকিয়ে আছে। স্বপ্নবুনন সেই কণ্ঠস্বরকে প্রকাশের জায়গা করে দিতে চায়।",
    en: "We believe every young person carries a voice, a story and a dream worth expressing. ShopnoBunon exists to give that voice a stage.",
  },
  whatWeBelieve: {
    bn: "উৎকর্ষতা, শৃঙ্খলা, সাহস, আত্মবিশ্বাস এবং ক্রমাগত বেড়ে ওঠার মধ্য দিয়েই প্রকৃত পরিবর্তন সম্ভব।",
    en: "We believe real transformation happens through excellence, discipline, courage, confidence and continuous growth.",
  },
  whatWeDo: {
    bn: "আমরা লেখালেখি, পাবলিক স্পিকিং, ইভেন্ট, সৃজনশীল প্রজেক্ট এবং জ্ঞান বিনিময়ের মাধ্যমে একটি শেখার ও সৃষ্টির বাস্তুতন্ত্র গড়ে তুলি।",
    en: "We build an ecosystem of learning and creation through writing, public speaking, events, creative projects and knowledge sharing.",
  },
  whoWeServe: {
    bn: "শিক্ষার্থী, তরুণ পেশাজীবী এবং যেকোনো বয়সের মানুষ যারা লিখতে, বলতে, শিখতে এবং নেতৃত্ব দিতে চায়।",
    en: "Students, young professionals and anyone who wants to write, speak, learn and lead — regardless of age.",
  },
  whatWeWantToBuild: {
    bn: "এমন একটি প্রজন্ম, যারা স্বপ্নকে শুধু কল্পনা নয়, বাস্তবে বোনার সাহস রাখে।",
    en: "A generation that doesn't just imagine dreams — but has the courage to weave them into reality.",
  },
};
