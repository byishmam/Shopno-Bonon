/* ============================================================
   config.js — EDIT THIS FILE FIRST
   Website name, logo path, navigation, social links, contact.
   Everything here appears in the header and footer of every page.
   ============================================================ */

window.SITE = {

  /* EDIT: website name (bn = Bangla, en = English) */
  name: { bn: "স্বপ্নবুনন", en: "Shopno Bonon" },

  /* EDIT: tagline / motto */
  motto: "Mess with the best, Rest like death.",

  /* EDIT: short description used in the footer */
  description: {
    bn: "তরুণ চিন্তা, সৃজনশীলতা, আত্মপ্রকাশ ও সামাজিক সচেতনতার জন্য একটি আধুনিক প্ল্যাটফর্ম।",
    en: "A modern platform for young thinking, creativity, self-expression and social awareness."
  },

  /* EDIT: replace this file with your own logo (same path, same name) */
  logo: "assets/logo/logo.svg",

  /* EDIT: contact details */
  contact: {
    email: "willbe added later",
    phone: "will be added later",
    address: { bn: "চট্টগ্রাম, বাংলাদেশ", en: "Chattogram, Bangladesh" }
  },

  /* EDIT: social links. Leave a value empty ("") to hide that icon. */
  social: {
    facebook:  "https://www.facebook.com/shopno.bononn/",
    instagram: "#",
    youtube:   "#",
    linkedin:  "https://www.linkedin.com/company/shopno-bonon/",
    x:         "#",
    email:     "mailto:#"
  },

  /* EDIT: main navigation (file = page filename, bn/en = link label) */
  nav: [
    { file: "index.html",      bn: "হোম",      en: "Home" },
    { file: "about.html",      bn: "আমাদের সম্পর্কে", en: "About" },
    { file: "philosophy.html", bn: "এক্সপ্লোর",     en: "Explore" },
    { file: "articles.html",   bn: "সব লেখা",      en: "Articles" },
    { file: "team.html",       bn: "টিম",       en: "Team" },
    { file: "contact.html",    bn: "যোগাযোগ",   en: "Contact" }
  ],

  /* EDIT: footer link columns */
  footerLinks: {
    pages: [
      { file: "about.html",      bn: "আমাদের কথা", en: "About us" },
      { file: "mission.html",    bn: "মিশন",      en: "Mission" },
      { file: "vision.html",     bn: "ভিশন",      en: "Vision" },
      { file: "philosophy.html", bn: "আমাদের দর্শন", en: "Our philosophy" },
      { file: "team.html",       bn: "আমাদের টিম",  en: "Meet our team" },
      { file: "join-us.html",    bn: "আমাদের সাথে যুক্ত হোন", en: "Join us" }
    ],
    topics: [
      { file: "articles.html?cat=public-speaking", bn: "পাবলিক স্পিকিং", en: "Public speaking" },
      { file: "articles.html?cat=debate",          bn: "বিতর্ক",        en: "Debate" },
      { file: "articles.html?cat=creative-writing",bn: "সৃজনশীল লেখা",   en: "Creative writing" },
      { file: "articles.html?cat=storytelling",    bn: "স্টোরিটেলিং",     en: "Storytelling" },
      { file: "articles.html?cat=student-life",    bn: "শিক্ষার্থী জীবন",  en: "Student life" },
      { file: "articles.html?cat=social-awareness",bn: "সামাজিক সচেতনতা", en: "Social awareness" }
    ]
  }
};
