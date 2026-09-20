export type Locale = "bn" | "en";

export type Localized = {
  bn: string;
  en: string;
};

export interface TeamMember {
  slug: string;
  name: Localized;
  position: Localized;
  bio: Localized;
  skills: string[];
  image?: string;
  initials: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface Publication {
  slug: string;
  title: Localized;
  excerpt: Localized;
  content: Localized;
  author: string; // matches TeamMember slug or independent author slug
  authorName: Localized;
  authorImage?: string;
  authorInitials: string;
  coverImage: string;
  category: Localized;
  categoryKey: string;
  tags: string[];
  publishedAt: string; // ISO date
  readingTime: string;
  featured?: boolean;
}

export interface EventItem {
  slug: string;
  title: Localized;
  description: Localized;
  date: string; // ISO date
  time: string;
  location: Localized;
  image: string;
  speaker?: Localized;
  registrationUrl?: string;
  gallery?: string[];
  videoUrl?: string;
  recap?: Localized;
  /** Optional manual override. If omitted, status is derived from `date` automatically. */
  status?: "upcoming" | "past";
}

export interface GalleryImage {
  image: string;
  title: Localized;
  category: "Events" | "Team" | "Public Speaking" | "Workshops" | "Community" | "Behind the Scenes";
  date: string;
}

export interface MediaVideo {
  slug: string;
  title: Localized;
  description: Localized;
  category: Localized;
  thumbnail: string;
  videoUrl: string;
  date: string;
}

export interface AuthorProfile {
  slug: string;
  name: Localized;
  bio: Localized;
  interests: string[];
  image?: string;
  initials: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}
