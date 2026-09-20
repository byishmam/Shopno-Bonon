/**
 * TEAM DATA
 * -----------------------------------------------------------------------
 * Add a new member by adding one object below. If you have a real photo,
 * drop it in /public/images/team/ and set `image` to that path — otherwise
 * leave `image` empty and a generated initials avatar will be used.
 */
import type { TeamMember } from "./types";

export const teamMembers: TeamMember[] = [
  {
    slug: "founder",
    name: { bn: "[প্রতিষ্ঠাতার নাম]", en: "[Founder Name]" },
    position: { bn: "প্রতিষ্ঠাতা", en: "Founder" },
    bio: {
      bn: "স্বপ্নবুননের প্রতিষ্ঠাতা — যার হাত ধরে এই কমিউনিটির যাত্রা শুরু।",
      en: "The founder of ShopnoBunon, whose vision started this community.",
    },
    skills: ["Leadership", "Vision", "Community Building"],
    initials: "FN",
    social: { facebook: "", instagram: "", linkedin: "" },
  },
  {
    slug: "co-founder",
    name: { bn: "[সহ-প্রতিষ্ঠাতার নাম]", en: "[Co-Founder Name]" },
    position: { bn: "সহ-প্রতিষ্ঠাতা", en: "Co-Founder" },
    bio: {
      bn: "প্রতিষ্ঠাতার পাশে থেকে স্বপ্নবুননকে গড়ে তোলায় গুরুত্বপূর্ণ ভূমিকা রেখেছেন।",
      en: "Played a key role in shaping ShopnoBunon alongside the founder.",
    },
    skills: ["Strategy", "Operations", "Mentorship"],
    initials: "CF",
    social: { facebook: "", instagram: "", linkedin: "" },
  },
  {
    slug: "president",
    name: { bn: "[সভাপতির নাম]", en: "[President Name]" },
    position: { bn: "সভাপতি", en: "President" },
    bio: {
      bn: "কমিউনিটির সামগ্রিক দিকনির্দেশনা ও নেতৃত্ব দিয়ে থাকেন।",
      en: "Leads and guides the overall direction of the community.",
    },
    skills: ["Leadership", "Public Speaking"],
    initials: "P",
    social: { facebook: "", instagram: "", linkedin: "" },
  },
  {
    slug: "general-secretary",
    name: { bn: "[সাধারণ সম্পাদকের নাম]", en: "[General Secretary Name]" },
    position: { bn: "সাধারণ সম্পাদক", en: "General Secretary" },
    bio: {
      bn: "সাংগঠনিক কার্যক্রম পরিচালনা ও সমন্বয়ের দায়িত্বে আছেন।",
      en: "Coordinates organizational activities and internal operations.",
    },
    skills: ["Coordination", "Organization"],
    initials: "GS",
    social: { facebook: "", instagram: "", linkedin: "" },
  },
  {
    slug: "creative-director",
    name: { bn: "[ক্রিয়েটিভ ডিরেক্টরের নাম]", en: "[Creative Director Name]" },
    position: { bn: "ক্রিয়েটিভ ডিরেক্টর", en: "Creative Director" },
    bio: {
      bn: "স্বপ্নবুননের সামগ্রিক সৃজনশীল দিকনির্দেশনা ও নান্দনিকতা নিয়ে কাজ করেন।",
      en: "Shapes the overall creative direction and visual identity.",
    },
    skills: ["Design", "Art Direction", "Branding"],
    initials: "CD",
    social: { facebook: "", instagram: "", linkedin: "" },
  },
  {
    slug: "media-coordinator",
    name: { bn: "[মিডিয়া কো-অর্ডিনেটরের নাম]", en: "[Media Coordinator Name]" },
    position: { bn: "মিডিয়া কো-অর্ডিনেটর", en: "Media Coordinator" },
    bio: {
      bn: "ফটোগ্রাফি, ভিডিও ও সোশ্যাল মিডিয়া কনটেন্ট সমন্বয় করেন।",
      en: "Coordinates photography, video and social media content.",
    },
    skills: ["Photography", "Video Editing", "Social Media"],
    initials: "MC",
    social: { facebook: "", instagram: "", linkedin: "" },
  },
  {
    slug: "content-writer",
    name: { bn: "[কনটেন্ট রাইটারের নাম]", en: "[Content Writer Name]" },
    position: { bn: "কনটেন্ট রাইটার", en: "Content Writer" },
    bio: {
      bn: "প্রকাশনার জন্য নিবন্ধ, গল্প ও সৃজনশীল লেখা তৈরি করেন।",
      en: "Crafts articles, stories and creative writing for publications.",
    },
    skills: ["Writing", "Editing", "Storytelling"],
    initials: "CW",
    social: { facebook: "", instagram: "", linkedin: "" },
  },
  {
    slug: "event-coordinator",
    name: { bn: "[ইভেন্ট কো-অর্ডিনেটরের নাম]", en: "[Event Coordinator Name]" },
    position: { bn: "ইভেন্ট কো-অর্ডিনেটর", en: "Event Coordinator" },
    bio: {
      bn: "ওয়ার্কশপ, সেমিনার ও কমিউনিটি ইভেন্ট পরিকল্পনা ও আয়োজন করেন।",
      en: "Plans and organizes workshops, seminars and community events.",
    },
    skills: ["Event Planning", "Logistics"],
    initials: "EC",
    social: { facebook: "", instagram: "", linkedin: "" },
  },
  {
    slug: "public-relations",
    name: { bn: "[পাবলিক রিলেশন্সের নাম]", en: "[Public Relations Name]" },
    position: { bn: "পাবলিক রিলেশন্স", en: "Public Relations" },
    bio: {
      bn: "বহিরাগত যোগাযোগ, অংশীদারিত্ব ও কমিউনিটি সম্পর্ক দেখাশোনা করেন।",
      en: "Manages external communication, partnerships and community relations.",
    },
    skills: ["Communication", "Networking"],
    initials: "PR",
    social: { facebook: "", instagram: "", linkedin: "" },
  },
  {
    slug: "design-team",
    name: { bn: "[ডিজাইন টিম সদস্যের নাম]", en: "[Design Team Member]" },
    position: { bn: "ডিজাইন টিম", en: "Design Team" },
    bio: {
      bn: "পোস্টার, ব্র্যান্ডিং ও ভিজ্যুয়াল কনটেন্ট ডিজাইন করেন।",
      en: "Designs posters, branding assets and visual content.",
    },
    skills: ["Graphic Design", "Illustration"],
    initials: "DT",
    social: { facebook: "", instagram: "", linkedin: "" },
  },
  {
    slug: "volunteer",
    name: { bn: "[স্বেচ্ছাসেবকের নাম]", en: "[Volunteer Name]" },
    position: { bn: "স্বেচ্ছাসেবক", en: "Volunteer" },
    bio: {
      bn: "বিভিন্ন কার্যক্রমে সময় ও শ্রম দিয়ে কমিউনিটিকে সহায়তা করেন।",
      en: "Supports the community by contributing time and effort across activities.",
    },
    skills: ["Teamwork", "Reliability"],
    initials: "V",
    social: { facebook: "", instagram: "", linkedin: "" },
  },
];
