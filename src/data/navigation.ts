/**
 * EDITABLE NAVIGATION
 * -----------------------------------------------------------------------
 * Add, remove or reorder items to change the navbar & mobile menu.
 * `label` supports bn/en. `href` is a route path (see src/App.tsx).
 */
export interface NavItem {
  label: { bn: string; en: string };
  href: string;
}

export const navigation: NavItem[] = [
  { label: { bn: "হোম", en: "Home" }, href: "/" },
  { label: { bn: "আমাদের সম্পর্কে", en: "About" }, href: "/about" },
  { label: { bn: "কার্যক্রম", en: "Activities" }, href: "/activities" },
  { label: { bn: "প্রকাশনা", en: "Publications" }, href: "/publications" },
  { label: { bn: "ইভেন্ট", en: "Events" }, href: "/events" },
  { label: { bn: "গ্যালারি", en: "Gallery" }, href: "/gallery" },
  { label: { bn: "টিম", en: "Meet Our Team" }, href: "/team" },
  { label: { bn: "যোগ দিন", en: "Join Us" }, href: "/join" },
];
