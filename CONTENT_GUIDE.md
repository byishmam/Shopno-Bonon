# ✏️ ShopnoBunon Content Guide (For Non-Programmers)

This guide explains how to update the ShopnoBunon website **without needing
to understand React**. Almost everything you'll ever want to change lives in
plain text files inside the `src/data/` folder.

**General workflow for every change below:**

1. Open the file mentioned.
2. Edit the text between quotes `"like this"`.
3. Save the file.
4. Commit and push to GitHub (`git add . && git commit -m "update content" && git push`).
5. Your hosting provider (Vercel/Netlify/GitHub Pages) rebuilds and publishes
   automatically.

> 💡 Tip: Every editable value is written twice — once for `bn` (Bangla) and
> once for `en` (English) — like this:
> ```ts
> { bn: "বাংলা লেখা", en: "English text" }
> ```
> Just change the text inside the quotes. Keep the quotes themselves.

---

## 1. Organization Name, Motto, Mission, Vision, About, Contact Info

**File:** `src/data/site.ts`

This is the master control file. Inside `siteConfig` you can change:

- `name` / `bengaliName` — organization name
- `shortMotto` — "Mess with the best, Rest like death."
- `tagline` — "We don't just dream. We weave."
- `headline` / `subheadline` — homepage hero text
- `mission` / `vision` / `about` — used on the Home & About pages
- `contact.email` / `contact.phone` / `contact.location`
- `seo.title` / `seo.description`
- `logo` / `favicon` — file paths (see Section 10 below)

## 2. Social Media Links (Facebook, Instagram, YouTube, LinkedIn)

**File:** `src/data/social.ts`

```ts
export const socialLinks = {
  facebook: "https://www.facebook.com/shopno.bononn/",
  instagram: "",
  youtube: "",
  linkedin: "",
};
```

Paste your URL between the quotes. Leave it as `""` (empty) to automatically
hide that icon everywhere on the site (navbar, footer, contact page).

## 3. Navigation Menu

**File:** `src/data/navigation.ts`

Add, remove, reorder, or rename any menu item:

```ts
{ label: { bn: "গ্যালারি", en: "Gallery" }, href: "/gallery" }
```

- `label` — the text shown in the menu (bn/en)
- `href` — the page it links to (must match an existing page route)

## 4. Team Members

**File:** `src/data/team.ts`

To add a new member, copy an existing object inside the `teamMembers` array
and edit it:

```ts
{
  slug: "unique-id-no-spaces",
  name: { bn: "নামের বাংলা", en: "Name in English" },
  position: { bn: "পদবি", en: "Position" },
  bio: { bn: "সংক্ষিপ্ত বায়ো", en: "Short bio" },
  skills: ["Skill One", "Skill Two"],
  image: "/images/team/your-photo.jpg", // optional — see Section 10
  initials: "AB",                        // shown if no photo is provided
  social: { facebook: "", instagram: "", linkedin: "" },
}
```

To **remove** a member, delete their entire `{ ... }` block. Make sure commas
between objects stay correct (each object except the last one ends with a
comma `},`).

## 5. Publications / Articles / Blog

**File:** `src/data/publications.ts`

Copy an existing object inside the `publications` array and change:

- `slug` — used in the URL, must be unique, no spaces (use dashes)
- `title`, `excerpt`, `content` — bn/en versions
  - `content` supports multiple paragraphs — separate paragraphs with a
    blank line inside the text, written as `\n\n`
- `author` — should match a team member's `slug` from `team.ts` so their
  profile page & photo show up automatically (or leave a custom author name)
- `authorName`, `authorInitials`, `authorImage` (optional)
- `coverImage` — a photo URL or a path like `/images/publications/name.jpg`
- `category` / `categoryKey` — pick one from the list at the bottom of the
  file (`publicationCategories`)
- `tags` — an array of short keywords
- `publishedAt` — date in `YYYY-MM-DD` format
- `readingTime` — e.g. `"4 min read"`
- `featured: true` — shows the article in the homepage "Featured
  Publications" section (keep this on 2–3 articles at most)

## 6. Events

**File:** `src/data/events.ts`

Copy an existing object and edit `title`, `description`, `date` (
`YYYY-MM-DD`), `time`, `location`, `image`, `speaker`, `registrationUrl`.

**Upcoming vs Past is automatic** — the website compares `date` to today's
date. You never need to set this manually. (If you ever need to force a
status, you can add `status: "upcoming"` or `status: "past"` to override it.)

After an event happens, you can add:
- `recap` — a short paragraph about how it went
- `gallery` — an array of photo URLs from the event

## 7. Gallery

**File:** `src/data/gallery.ts`

Add a new object to `galleryImages`:

```ts
{
  image: "/images/gallery/photo.jpg",
  title: { bn: "শিরোনাম", en: "Title" },
  category: "Events", // one of: Events, Team, Public Speaking, Workshops, Community, Behind the Scenes
  date: "2026-01-01",
}
```

## 8. Videos (Media Page)

**File:** `src/data/media.ts`

Add a new object to `mediaVideos`. Leave `videoUrl` empty (`""`) until you
have a real video — the player will show a friendly "coming soon" message
instead of a broken video. Once you have a YouTube/Facebook video, paste its
**embed URL** (for YouTube: `https://www.youtube.com/embed/VIDEO_ID`).

## 9. Mission, Vision, Values & "What We Do"

**File:** `src/data/content.ts`

- `values` — the 7 core values shown as cards (Excellence, Courage, etc.)
- `whatWeDo` — the 6 activity areas (Writing, Public Speaking, etc.)
- `aboutContent` — the 6 paragraphs on the About page (Who We Are, Why We
  Exist, etc.)

Mission and Vision statements themselves live in `src/data/site.ts` (see
Section 1).

## 10. Logo, Favicon & Images

All images live in the `public/images/` folder and are referenced by path,
e.g. `/images/team/founder.jpg`.

To add a new image:
1. Drop the image file into the right subfolder inside `public/images/`
   (create the subfolder if it doesn't exist — e.g. `public/images/team/`).
2. Reference it in the relevant data file as `/images/team/your-file.jpg`.

To change the **logo/favicon**, replace `public/images/brand/logo-mark.png`
with your own image (same file name), or update the `logo`/`favicon` fields
in `src/data/site.ts` to point to a new file.

## 11. All Button & Section Text (UI Labels)

**File:** `src/data/translations.ts`

Every fixed label on the site — button text, section titles, form labels,
empty states, footer text — lives here as `"key": { bn: "...", en: "..." }`.
Search for the English phrase you want to change, then edit the `bn`/`en`
values next to it.

## 12. Colors

**File:** `src/index.css` (top of the file, inside the `@theme { ... }`
block)

```css
--color-gold: #c9a24b;   /* accent color used for highlights & buttons */
--color-ink: #0b0a10;    /* near-black, used for dark mode background */
--color-paper: #faf8f4;  /* near-white, used for light mode background */
```

Change the hex codes to update the color scheme site-wide.

## 13. Fonts

Fonts are loaded in `index.html` via Google Fonts and configured in
`src/index.css`:

- Bangla: **Hind Siliguri** (required — do not change)
- English: **Space Grotesk** (headings) + **Inter** (fallback)

To use a different English font, update the Google Fonts `<link>` in
`index.html` and the `--font-en` variable in `src/index.css`.

## 14. Homepage Layout

**File:** `src/pages/Home.tsx`

Each homepage block (Hero, Mission/Vision, Values, What We Do, Publications,
Events, Public Speaking, Gallery, Team, Join CTA, Follow) is a clearly
labeled `<section>`. You can reorder sections by cutting and pasting an
entire `<section>...</section>` block to a new position.

## 15. Forms (Join Us / Contact)

The Join Us and Contact forms currently run in **demo mode** — submitting
shows a thank-you message but does not send data anywhere yet. To connect
them to a real backend:

1. Sign up for a form service like [Formspree](https://formspree.io) or
   [Getform](https://getform.io), or build your own API endpoint.
2. Put the endpoint URL in `.env` as `VITE_FORM_ENDPOINT=...` (copy
   `.env.example` to `.env` first).
3. Update the `onSubmit` function in `src/pages/Join.tsx` and
   `src/pages/Contact.tsx` to `fetch()` that endpoint instead of just
   setting `submitted = true`.

## 16. Deploying Your Changes

```bash
git add .
git commit -m "Describe what you changed"
git push
```

If your repository is connected to Vercel or Netlify, the live site updates
automatically within a minute or two. For GitHub Pages, see the deployment
section in `README.md`.

---

### Quick Reference: "I want to..."

| I want to...                          | Edit this file                     |
|----------------------------------------|-------------------------------------|
| Change the org name or motto           | `src/data/site.ts`                 |
| Change mission/vision/about text       | `src/data/site.ts`, `src/data/content.ts` |
| Update Facebook/Instagram/YouTube link | `src/data/social.ts`               |
| Add/remove a team member               | `src/data/team.ts`                 |
| Publish a new article                  | `src/data/publications.ts`         |
| Add an event                           | `src/data/events.ts`               |
| Add a gallery photo                    | `src/data/gallery.ts`              |
| Add a video                            | `src/data/media.ts`                |
| Change navigation menu                 | `src/data/navigation.ts`           |
| Change any button/label text           | `src/data/translations.ts`         |
| Change colors                          | `src/index.css`                    |
| Change logo/favicon                    | `public/images/brand/` + `src/data/site.ts` |
| Change contact email/phone             | `src/data/site.ts`                 |
