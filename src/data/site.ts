/**
 * CENTRAL SITE CONFIGURATION
 * -----------------------------------------------------------------------
 * Edit this file to update the organization's core identity, contact
 * information, and SEO defaults. Almost nothing here requires touching
 * any component code.
 */

export const siteConfig = {
  name: "ShopnoBunon",
  bengaliName: "স্বপ্নবুনন",
  shortMotto: {
    bn: "সেরাদের সাথে থাকো, মৃত্যুর মত বিশ্রাম নাও।",
    en: "Mess with the best, Rest like death.",
  },
  tagline: {
    bn: "আমরা শুধু স্বপ্ন দেখি না। আমরা বুনি।",
    en: "We don't just dream. We weave.",
  },
  headline: {
    bn: "আমরা স্বপ্নকে বাস্তবে বুনি।",
    en: "We Weave Dreams Into Reality.",
  },
  subheadline: {
    bn: "যারা লেখে, বলে, সৃষ্টি করে, শেখে, নেতৃত্ব দেয় এবং বেড়ে ওঠে — তাদের জন্য একটি কমিউনিটি।",
    en: "A community for people who write, speak, create, learn, lead and grow.",
  },
  mission: {
    bn: "তরুণদের আত্ম-উন্নয়ন, পঠন-পাঠন, প্রকাশ্য বক্তৃতা, সৃজনশীলতা এবং নেতৃত্বের সুযোগ তৈরি করা — জ্ঞান বিনিময় ও অর্থপূর্ণ সহযোগিতার মাধ্যমে।",
    en: "To spark self-development, reading & writing, public speaking, creativity and leadership among young people — through knowledge sharing and meaningful collaboration.",
  },
  vision: {
    bn: "এমন একটি প্রজন্ম গড়ে তোলা যারা গভীরভাবে চিন্তা করে, নির্ভয়ে কথা বলে, অর্থপূর্ণভাবে সৃষ্টি করে এবং ক্রমাগত বেড়ে ওঠে।",
    en: "To build a generation that thinks deeply, speaks fearlessly, creates meaningfully and grows continuously.",
  },
  about: {
    bn: "স্বপ্নবুনন একটি তরুণ-নেতৃত্বাধীন সৃজনশীল ও আত্ম-উন্নয়নমূলক কমিউনিটি — যেখানে মানুষ লিখতে, বলতে, শিখতে, নেতৃত্ব দিতে এবং একসাথে বেড়ে উঠতে পারে।",
    en: "ShopnoBunon is a youth-driven creative community dedicated to personal growth, knowledge sharing, communication, creativity and meaningful collaboration.",
  },
  contact: {
    email: "hello@shopnobunon.org",
    phone: "+880 1XXX-XXXXXX",
    location: {
      bn: "চট্টগ্রাম, বাংলাদেশ",
      en: "Chattogram, Bangladesh",
    },
  },
  seo: {
    title: "স্বপ্নবুনন — ShopnoBunon | We Don't Just Dream. We Weave.",
    description:
      "ShopnoBunon (স্বপ্নবুনন) is a youth-driven creative and self-development community for people who write, speak, create, learn, lead and grow.",
  },
  logo: "/images/brand/logo-mark.png",
  favicon: "/images/brand/logo-mark.png",
};

export type SiteConfig = typeof siteConfig;
