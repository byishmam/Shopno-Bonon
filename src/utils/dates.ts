import type { EventItem, Locale } from "../data/types";

export function getEventStatus(event: EventItem): "upcoming" | "past" {
  if (event.status) return event.status;
  const eventDate = new Date(event.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return eventDate.getTime() >= today.getTime() ? "upcoming" : "past";
}

export function formatDate(iso: string, locale: Locale): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat(locale === "bn" ? "bn-BD" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function estimateReadingTime(text: string, locale: Locale): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 180));
  return locale === "bn" ? `${minutes} মিনিট পড়া` : `${minutes} min read`;
}
