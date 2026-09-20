/**
 * PUBLICATION DATA
 * -----------------------------------------------------------------------
 * Each object below becomes an article card + a full article page
 * automatically. To add a new article: copy an object, change the
 * `slug` (must be unique, used in the URL), and fill in the fields.
 *
 * `content` supports simple paragraphs separated by a blank line (\n\n).
 */
import type { Publication } from "./types";

export const publications: Publication[] = [
  {
    slug: "art-of-showing-up",
    title: {
      bn: "প্রতিদিন হাজির থাকার শিল্প",
      en: "The Art of Showing Up Every Day",
    },
    excerpt: {
      bn: "প্রতিভা নয়, ধারাবাহিকতাই দীর্ঘমেয়াদে জয়ী হয় — কেন প্রতিদিনের ছোট অভ্যাসই বড় স্বপ্নের ভিত্তি।",
      en: "Talent fades, consistency wins — why showing up every single day is the real foundation of every big dream.",
    },
    content: {
      bn: "আমরা প্রায়ই বড় মুহূর্তের অপেক্ষায় থাকি — সেই একটা 'ব্রেক', যা সবকিছু বদলে দেবে। কিন্তু বাস্তবতা হলো, বেশিরভাগ অর্থপূর্ণ পরিবর্তন আসে ছোট, বিরক্তিকর, প্রতিদিনের কাজের পুনরাবৃত্তি থেকে।\n\nযে লেখক প্রতিদিন একশো শব্দ লেখে, সে একসময় এমন একজনের চেয়ে এগিয়ে যায় যে মাসে একবার এক হাজার শব্দ লেখার চেষ্টা করে। ধারাবাহিকতা প্রতিভাকে হার মানায়, কারণ প্রতিভা মাঝে মাঝে হাজির হয় — ধারাবাহিকতা প্রতিদিন হাজির থাকে।\n\nস্বপ্নবুননে আমরা বিশ্বাস করি, শৃঙ্খলা মানে কঠোরতা নয় — এটি নিজের স্বপ্নের প্রতি একটি প্রতিশ্রুতি। ছোট পদক্ষেপ, বড় দিকে।",
      en: "We often wait for the big moment — that one 'break' that will change everything. But the truth is, most meaningful change comes from small, repetitive, unglamorous daily work.\n\nA writer who writes one hundred words every day eventually outpaces someone who tries to write a thousand words once a month. Consistency beats talent, because talent shows up occasionally — consistency shows up daily.\n\nAt ShopnoBunon, we believe discipline isn't about being harsh with yourself — it's a promise you make to your own dream. Small steps, pointed in a big direction.",
    },
    author: "content-writer",
    authorName: { bn: "[কনটেন্ট রাইটারের নাম]", en: "[Content Writer Name]" },
    authorInitials: "CW",
    coverImage: "https://images.pexels.com/photos/8133129/pexels-photo-8133129.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    category: { bn: "আত্ম-উন্নয়ন", en: "Personal Growth" },
    categoryKey: "personal-growth",
    tags: ["Discipline", "Habits", "Growth"],
    publishedAt: "2026-01-14",
    readingTime: "4 min read",
    featured: true,
  },
  {
    slug: "fear-of-the-microphone",
    title: {
      bn: "মাইক্রোফোনের ভয় জয় করা",
      en: "Conquering the Fear of the Microphone",
    },
    excerpt: {
      bn: "প্রথমবার মঞ্চে দাঁড়ানোর আগে সবার হাত কাঁপে — কীভাবে সেই কাঁপুনিকে শক্তিতে রূপান্তর করা যায়।",
      en: "Everyone's hands shake before their first time on stage — here's how to turn that shake into strength.",
    },
    content: {
      bn: "প্রথমবার মাইক্রোফোন হাতে নেওয়ার অনুভূতি প্রায় সবার কাছেই এক রকম — বুক ধড়ফড় করা, গলা শুকিয়ে যাওয়া, হাত কাঁপা। এটা দুর্বলতা নয়, এটা মানবিকতা।\n\nপাবলিক স্পিকিং শেখানো যায় এমন একটি দক্ষতা, প্রতিভা নয়। আমাদের সেশনগুলোতে আমরা ছোট পদক্ষেপে শুরু করি — নিজের নাম বলা, একটি গল্প বলা, তারপর একটি মতামত উপস্থাপন করা।\n\nস্বপ্নবুননের বিতর্ক ও বক্তৃতা সেশনগুলো এমন একটি নিরাপদ জায়গা তৈরি করে যেখানে ভুল করা যায়, শেখা যায় এবং বারবার চেষ্টা করা যায় — যতক্ষণ না কাঁপুনি আত্মবিশ্বাসে রূপান্তরিত হয়।",
      en: "The first time almost everyone holds a microphone, it feels the same — racing heart, dry throat, shaking hands. That's not weakness, that's being human.\n\nPublic speaking is a skill that can be taught, not a talent you're born with. In our sessions, we start small — saying your name, telling a short story, then presenting an opinion.\n\nShopnoBunon's debate and speech sessions create a safe space to make mistakes, learn and try again — until the shake turns into confidence.",
    },
    author: "president",
    authorName: { bn: "[সভাপতির নাম]", en: "[President Name]" },
    authorInitials: "P",
    coverImage: "https://images.pexels.com/photos/14744729/pexels-photo-14744729.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    category: { bn: "নেতৃত্ব", en: "Leadership" },
    categoryKey: "leadership",
    tags: ["Public Speaking", "Confidence", "Leadership"],
    publishedAt: "2026-02-02",
    readingTime: "5 min read",
    featured: true,
  },
  {
    slug: "why-we-write",
    title: {
      bn: "আমরা কেন লিখি",
      en: "Why We Write",
    },
    excerpt: {
      bn: "লেখা শুধু শব্দ সাজানো নয় — এটি নিজেকে বোঝার এবং অন্যের সাথে সংযোগ স্থাপনের একটি উপায়।",
      en: "Writing isn't just arranging words — it's a way of understanding yourself and connecting with others.",
    },
    content: {
      bn: "একটি ফাঁকা পাতা ভয়ংকর হতে পারে। কিন্তু সেই ফাঁকা পাতাই আমাদের সবচেয়ে সৎ জায়গা হতে পারে — যেখানে আমরা যা ভাবি, যা অনুভব করি, তা প্রকাশ করতে পারি কোনো বিচারের ভয় ছাড়াই।\n\nস্বপ্নবুননে লেখালেখি শুধু প্রকাশনার জন্য নয়। এটি চিন্তাকে গঠন দেওয়ার একটি প্রক্রিয়া। আমরা বিশ্বাস করি প্রত্যেকের গল্প বলার মতো কিছু না কিছু আছে।\n\nতাই আমরা এমন একটি প্ল্যাটফর্ম তৈরি করেছি যেখানে নতুন লেখক থেকে শুরু করে অভিজ্ঞ লেখক পর্যন্ত সবাই নিজের কণ্ঠস্বর খুঁজে পেতে পারে।",
      en: "A blank page can be terrifying. But that same blank page can be our most honest space — where we can express what we think and feel without fear of judgment.\n\nAt ShopnoBunon, writing isn't just about publishing. It's a process of shaping thought. We believe everyone has a story worth telling.\n\nThat's why we've built a platform where everyone — from first-time writers to seasoned ones — can find their voice.",
    },
    author: "co-founder",
    authorName: { bn: "[সহ-প্রতিষ্ঠাতার নাম]", en: "[Co-Founder Name]" },
    authorInitials: "CF",
    coverImage: "https://images.pexels.com/photos/8132470/pexels-photo-8132470.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    category: { bn: "সৃজনশীলতা", en: "Creativity" },
    categoryKey: "creativity",
    tags: ["Writing", "Voice", "Creativity"],
    publishedAt: "2026-02-20",
    readingTime: "3 min read",
  },
  {
    slug: "power-of-small-communities",
    title: {
      bn: "ছোট কমিউনিটির শক্তি",
      en: "The Power of Small Communities",
    },
    excerpt: {
      bn: "বড় পরিবর্তন প্রায়ই ছোট, ঘনিষ্ঠ কমিউনিটি থেকে শুরু হয় — একা নয়, একসাথে।",
      en: "Big change often starts in small, tight-knit communities — not alone, but together.",
    },
    content: {
      bn: "ইতিহাসে বড় বড় আন্দোলন প্রায়ই শুরু হয়েছে কয়েকজন মানুষের একটি ছোট দল থেকে যারা একটি সাধারণ বিশ্বাসে একত্রিত হয়েছিল।\n\nস্বপ্নবুনন সেই দর্শনেই বিশ্বাসী। আমরা সংখ্যার পেছনে ছুটি না — আমরা গভীরতার পেছনে ছুটি। এমন মানুষ, যারা সত্যিকার অর্থে যত্নশীল, যারা একে অপরকে দায়বদ্ধ রাখে এবং একসাথে বেড়ে ওঠে।\n\nএকটি কমিউনিটির শক্তি তার সংখ্যায় নয়, তার সংযোগের গভীরতায়।",
      en: "History's biggest movements often start with a small group of people united by one shared belief.\n\nShopnoBunon believes in that same philosophy. We don't chase numbers — we chase depth. People who genuinely care, hold each other accountable, and grow together.\n\nA community's strength isn't in its size, but in the depth of its connection.",
    },
    author: "founder",
    authorName: { bn: "[প্রতিষ্ঠাতার নাম]", en: "[Founder Name]" },
    authorInitials: "FN",
    coverImage: "https://images.pexels.com/photos/6914354/pexels-photo-6914354.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    category: { bn: "সমাজ", en: "Society" },
    categoryKey: "society",
    tags: ["Community", "Belonging", "Growth"],
    publishedAt: "2026-03-05",
    readingTime: "4 min read",
  },
  {
    slug: "reading-as-rebellion",
    title: {
      bn: "পাঠ, একটি নীরব বিদ্রোহ",
      en: "Reading as a Quiet Rebellion",
    },
    excerpt: {
      bn: "একটি ক্রমাগত বিভ্রান্ত জগতে, একটি বই পড়া নিজের মনোযোগ ফিরিয়ে নেওয়ার একটি বিপ্লবী কাজ।",
      en: "In a world of constant distraction, reading a book is a radical act of reclaiming your attention.",
    },
    content: {
      bn: "আমরা প্রতিদিন হাজারো নোটিফিকেশনের মধ্যে বাস করি। মনোযোগ এখন সবচেয়ে মূল্যবান সম্পদ, আর সবচেয়ে বেশি আক্রমণের শিকারও।\n\nএই প্রেক্ষাপটে, একটি বই খুলে বসে থাকা, একটানা পড়া — এটি প্রায় বিদ্রোহের মতো। এটি বলে, 'আমার মনোযোগ আমার নিজের।'\n\nস্বপ্নবুনন পাঠচক্র ও বই আলোচনার মাধ্যমে এই অভ্যাসকে উৎসাহিত করে — কারণ যে গভীরভাবে পড়ে, সে গভীরভাবে চিন্তা করতে শেখে।",
      en: "We live surrounded by thousands of daily notifications. Attention is now our most valuable resource — and the most attacked.\n\nIn that context, sitting down and reading a book cover to cover is almost an act of rebellion. It says, 'my attention is mine.'\n\nShopnoBunon encourages this habit through reading circles and book discussions — because those who read deeply learn to think deeply.",
    },
    author: "content-writer",
    authorName: { bn: "[কনটেন্ট রাইটারের নাম]", en: "[Content Writer Name]" },
    authorInitials: "CW",
    coverImage: "https://images.pexels.com/photos/29765221/pexels-photo-29765221.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    category: { bn: "শিক্ষা", en: "Education" },
    categoryKey: "education",
    tags: ["Reading", "Focus", "Mindset"],
    publishedAt: "2026-03-18",
    readingTime: "3 min read",
  },
  {
    slug: "leadership-without-title",
    title: {
      bn: "পদবি ছাড়া নেতৃত্ব",
      en: "Leadership Without a Title",
    },
    excerpt: {
      bn: "নেতৃত্ব একটি পদবি নয়, এটি একটি সিদ্ধান্ত — প্রতিদিন দায়িত্ব নেওয়ার সিদ্ধান্ত।",
      en: "Leadership isn't a title — it's a decision you make every day to take responsibility.",
    },
    content: {
      bn: "আমরা অনেকেই মনে করি নেতৃত্বের জন্য একটি পদবি প্রয়োজন — সভাপতি, পরিচালক, প্রধান। কিন্তু বাস্তবে, নেতৃত্ব শুরু হয় অনেক আগে — যখন কেউ একজন সমস্যা দেখে এবং সমাধানের দিকে প্রথম পদক্ষেপ নেয়।\n\nস্বপ্নবুননে আমরা প্রতিটি সদস্যকে নেতা হিসেবে দেখতে উৎসাহিত করি — নিজের কাজের, নিজের শেখার এবং নিজের প্রভাবের নেতা।\n\nআপনার কোনো পদবির প্রয়োজন নেই একটি ইভেন্ট আয়োজন করতে, কাউকে সাহায্য করতে, অথবা একটি ধারণা প্রস্তাব করতে। শুধু সাহসের প্রয়োজন।",
      en: "Many of us think leadership requires a title — president, director, chief. But in reality, leadership begins much earlier — when someone sees a problem and takes the first step toward solving it.\n\nAt ShopnoBunon, we encourage every member to see themselves as a leader — of their own work, their own learning, and their own impact.\n\nYou don't need a title to organize an event, help someone, or propose an idea. You just need courage.",
    },
    author: "general-secretary",
    authorName: { bn: "[সাধারণ সম্পাদকের নাম]", en: "[General Secretary Name]" },
    authorInitials: "GS",
    coverImage: "https://images.pexels.com/photos/8067740/pexels-photo-8067740.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    category: { bn: "নেতৃত্ব", en: "Leadership" },
    categoryKey: "leadership",
    tags: ["Leadership", "Youth", "Responsibility"],
    publishedAt: "2026-04-01",
    readingTime: "4 min read",
  },
];

export const publicationCategories = [
  "Personal Growth",
  "Education",
  "Society",
  "Culture",
  "Creativity",
  "Leadership",
  "Philosophy",
  "Youth",
  "Opinion",
  "Stories",
];
