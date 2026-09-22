# স্বপ্নবুনন · Shopno Bonon

> Mess with the best, Rest like death.

তরুণ শিক্ষার্থীদের জন্য একটি premium, static, bilingual (বাংলা/English) educational ও social awareness website।
শুধু **HTML + CSS + Vanilla JavaScript** — কোনো framework, build tool বা server লাগে না। সরাসরি GitHub Pages-এ চলে।

---

## ১. ফোল্ডার কাঠামো

```
shopno-bonon/
├── index.html          হোম পেজ
├── about.html          আমাদের কথা
├── mission.html        মিশন
├── vision.html         ভিশন
├── philosophy.html     আমাদের দর্শন
├── team.html           আমাদের টিম
├── articles.html       সব লেখার তালিকা (filter + search)
├── article.html        একটি লেখার বিস্তারিত পেজ
├── contact.html        যোগাযোগ
├── join-us.html        কন্ট্রিবিউটর হিসেবে যুক্ত হওয়া
├── 404.html            পেজ না পাওয়া গেলে
├── .nojekyll           GitHub Pages-এর জন্য (মুছবেন না)
│
├── css/
│   ├── style.css       রং, টাইপোগ্রাফি, সব component
│   ├── animations.css  scroll reveal ও অন্যান্য animation
│   └── responsive.css  মোবাইল/ট্যাবলেট/ডেস্কটপ breakpoints
│
├── js/
│   ├── config.js       ⭐ website নাম, logo, নেভিগেশন, social links
│   ├── data.js         ⭐ সব article, author ও team member
│   ├── language.js     বাংলা/English switching
│   ├── theme.js        Light / Dark / Device theme
│   ├── main.js         header, footer, scroll animation
│   ├── modal.js        প্রোফাইল popup
│   ├── articles.js     article card, filter, search, detail page
│   └── team.js         team grid
│
└── assets/
    ├── logo/logo.svg   ⭐ আপনার logo এখানে
    ├── images/         cover ও profile ছবি
    └── icons/          (খালি — প্রয়োজনে ব্যবহার করুন)
```

⭐ চিহ্নিত ফাইল তিনটিতেই আপনার বেশিরভাগ কাজ হবে।

---

## ২. কীভাবে চালাবেন (লোকালি)

ফোল্ডারটি নামিয়ে `index.html` ডাবল-ক্লিক করলেই চলবে।
তবে সবচেয়ে ভালো হয় একটি ছোট local server চালালে (তাহলে `article.html?id=...` সহ সব ঠিকভাবে কাজ করে):

```bash
cd shopno-bonon
python3 -m http.server 8000
# ব্রাউজারে খুলুন: http://localhost:8000
```

VS Code ব্যবহার করলে **Live Server** extension-ও ব্যবহার করতে পারেন।

---

## ৩. Logo পরিবর্তন

১. আপনার logo ফাইলটির নাম দিন `logo.svg` (বা `logo.png`)
২. সেটি রাখুন `assets/logo/` ফোল্ডারে, পুরোনো ফাইলটি replace করে
৩. যদি `.png` ব্যবহার করেন, `js/config.js`-এ শুধু এই লাইনটি বদলান:

```js
logo: "assets/logo/logo.png",
```

ব্যস। header, footer ও favicon — তিন জায়গাতেই logo বদলে যাবে।

---

## ৪. Website-এর নাম ও tagline পরিবর্তন

`js/config.js` ফাইলের উপরের অংশ:

```js
name: { bn: "স্বপ্নবুনন", en: "Shopno Bonon" },
motto: "Mess with the best, Rest like death.",
description: {
  bn: "…footer-এ দেখানো ছোট বর্ণনা…",
  en: "…short description shown in the footer…"
},
```

হোম পেজের বড় শিরোনামটি `index.html`-এ আছে, এই কমেন্টের নিচে:

```html
<!-- EDIT: Website Hero Title -->
<h1 class="display">
  <span class="hero-line"><span>স্বপ্নবুনন</span></span>
  <span class="en-sub hero-line"><span>Shopno Bonon</span></span>
</h1>
```

---

## ৫. বাংলা ও English লেখা কীভাবে edit করবেন

Website-এর প্রতিটি লেখা তিনভাবে অনুবাদ করা হয়। যেটি যেখানে ব্যবহার হয়েছে, সেটিই edit করুন।

**(ক) ছোট লেখা — একই ট্যাগে দুই ভাষা**

```html
<a href="articles.html" data-bn="লেখা পড়ুন" data-en="Start reading">লেখা পড়ুন</a>
```

**(খ) বড় অনুচ্ছেদ — আলাদা block**

```html
<p data-lang-block="bn">বাংলা লেখা এখানে।</p>
<p data-lang-block="en">English text goes here.</p>
```

যে ভাষা নির্বাচিত থাকবে, শুধু সেই block দেখা যাবে।

**(গ) বাটন/লেবেলের সাধারণ শব্দ** — এগুলো `js/language.js`-এর উপরে `UI` অংশে:

```js
readMore: { bn: "পড়ুন", en: "Read" },
minRead:  { bn: "মিনিটের পড়া", en: "min read" },
```

> ডিফল্ট ভাষা বদলাতে `js/language.js`-এ `let current = "bn";` → `"en"` করুন।

---

## ৬. নতুন article যোগ করা

সব লেখা আছে `js/data.js` ফাইলের `window.ARTICLES` তালিকায়।
নিচের block-টি কপি করে তালিকার **সবার উপরে** বসান এবং মান বদলান:

```js
{
  id: "my-new-article",          // ইউনিক, স্পেস ছাড়া (URL-এ ব্যবহার হবে)
  featured: false,               // true দিলে হোম পেজের বড় লেখা হবে (একটিতেই দিন)
  category: "debate",            // CATEGORIES তালিকার slug
  cover: "assets/images/cover-2.svg",
  date: "2026-06-01",            // YYYY-MM-DD
  readTime: 6,                   // মিনিট
  author: "nusrat",              // AUTHORS-এর key
  title:   { bn: "বাংলা শিরোনাম", en: "English title" },
  excerpt: { bn: "এক-দুই লাইনের সারসংক্ষেপ।", en: "A one or two line summary." },
  body: {
    bn: `<p>প্রথম অনুচ্ছেদ।</p>
<h2>উপশিরোনাম</h2>
<p>আরেকটি অনুচ্ছেদ।</p>
<blockquote>উদ্ধৃতি।</blockquote>
<ul><li>পয়েন্ট এক</li><li>পয়েন্ট দুই</li></ul>`,
    en: `<p>First paragraph.</p>
<h2>A subheading</h2>
<p>Another paragraph.</p>`
  }
},
```

- লেখাটি খুলবে এই ঠিকানায়: `article.html?id=my-new-article`
- `body`-তে backtick (`` ` ``) দিয়ে লেখা শুরু ও শেষ হয়, তাই ভিতরে backtick ব্যবহার করবেন না।
- ব্যবহারযোগ্য ট্যাগ: `<p> <h2> <h3> <ul><li> <blockquote> <strong> <a href="">`

**লেখা মুছতে** — পুরো `{ … },` block-টি মুছে দিন।
**Featured বদলাতে** — পুরোনো লেখায় `featured: false` করে নতুনটিতে `true` দিন।

---

## ৭. নতুন category যোগ করা

`js/data.js`-এর `window.CATEGORIES` তালিকায়:

```js
{ slug: "leadership", bn: "নেতৃত্ব", en: "Leadership" },
```

filter বাটন ও footer-এর topic লিংক স্বয়ংক্রিয়ভাবে যোগ হবে (footer-এর জন্য `js/config.js`-এর `topics` তালিকাতেও একটি লাইন যোগ করুন)।

---

## ৮. Author (লেখক) যোগ বা পরিবর্তন

`js/data.js`-এর `window.AUTHORS`-এ। key (যেমন `nusrat`) হলো article-এ ব্যবহৃত নাম:

```js
rafi: {
  name:  { bn: "রাফি চৌধুরী", en: "Rafi Chowdhury" },
  role:  { bn: "কন্ট্রিবিউটর", en: "Contributor" },
  photo: "assets/images/avatar-4.svg",
  bio:   { bn: "…", en: "…" },
  quote: { bn: "…", en: "…" },
  expertise: { bn: ["শিক্ষার্থী জীবন"], en: ["Student life"] },
  achievement: { bn: "…", en: "…" },
  social: { facebook: "https://…", instagram: "", linkedin: "", email: "mailto:…" }
},
```

- লেখকের নাম বা ছবিতে ক্লিক করলেই এই তথ্য দিয়ে প্রোফাইল popup খুলবে।
- popup-এ ওই লেখকের সব লেখার তালিকাও স্বয়ংক্রিয়ভাবে দেখাবে।
- social-এ যেটি খালি (`""`) রাখবেন, সেই আইকনটি দেখাবে না।

---

## ৯. Team member যোগ / বাদ দেওয়া

`js/data.js`-এর `window.TEAM` তালিকায় একটি block কপি করুন:

```js
{
  name: { bn: "নাম", en: "Name" },
  role: { bn: "পদ", en: "Role" },
  photo: "assets/images/avatar-5.svg",
  bio:   { bn: "এক লাইনের পরিচয়।", en: "One line of introduction." },
  quote: { bn: "…", en: "…" },
  expertise: { bn: ["ডিজাইন"], en: ["Design"] },
  achievement: { bn: "…", en: "…" },
  social: { facebook: "", instagram: "", linkedin: "", email: "" }
},
```

**বাদ দিতে** — পুরো block-টি মুছে দিন। Grid নিজে থেকেই সাজিয়ে নেবে।

---

## ১০. ছবি পরিবর্তন

১. আপনার ছবি রাখুন `assets/images/` ফোল্ডারে
২. `js/data.js`-এ পথটি বদলান, যেমন `cover: "assets/images/my-photo.jpg"`

পরামর্শ:
- Article cover: **1200 × 750 px**, JPG/WebP
- Profile ছবি: **400 × 400 px** (বর্গাকার)
- ফাইল সাইজ ২০০ KB-এর নিচে রাখলে সাইট দ্রুত থাকবে
- বর্তমান placeholder ছবিগুলো SVG — নিশ্চিন্তে replace করতে পারেন

---

## ১১. Social media links

`js/config.js`-এর `social` অংশে একবার বদলালেই header, footer ও মোবাইল মেনু — সব জায়গায় বদলাবে:

```js
social: {
  facebook:  "https://facebook.com/yourpage",
  instagram: "",                       // খালি রাখলে আইকনটি লুকিয়ে যাবে
  youtube:   "https://youtube.com/@you",
  linkedin:  "",
  x:         "",
  email:     "mailto:hello@shopnobonon.org"
}
```

---

## ১২. রং পরিবর্তন

`css/style.css`-এর একদম উপরে সব রং CSS variable হিসেবে আছে:

```css
:root {
  --bg-primary:   #FBFAF8;   /* পেজের ব্যাকগ্রাউন্ড */
  --bg-secondary: #F2F1ED;   /* বিকল্প section */
  --text-primary: #16171A;   /* মূল লেখা */
  --text-secondary:#5C5F66;  /* সারসংক্ষেপ, meta */
  --accent:       #3A2EDB;   /* একমাত্র accent রং */
  --border:       rgba(22, 23, 26, 0.10);
  --card:         #FFFFFF;
}
```

Dark mode-এর রং ঠিক তার নিচে `[data-theme="dark"] { … }` ব্লকে।
**দুই জায়গাতেই বদলাবেন**, নইলে dark mode-এ পুরোনো রং থেকে যাবে।

> `--accent` বদলালে বাটন, tag, link hover, modal cover — সব একসাথে বদলাবে।

---

## ১৩. Font পরিবর্তন

- **বাংলা** ফন্ট আসে Google Fonts থেকে। প্রতিটি HTML ফাইলের `<head>`-এ এই লাইনটি আছে:

```html
<link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet">
```

অন্য ফন্ট চাইলে এখানে নতুন লিংক বসান, তারপর `css/style.css`-এ:

```css
--font-bn: "Noto Sans Bengali", sans-serif;
```

- **English** ফন্ট ডিভাইসের নিজস্ব system font (Apple-এর SF Pro, Windows-এ Segoe UI)। বদলাতে:

```css
--font-en: "Inter", -apple-system, BlinkMacSystemFont, Arial, sans-serif;
```

---

## ১৪. Theme system

- হেডারের থিম বাটনে তিনটি অপশন: **Light / Dark / Device**
- পছন্দ localStorage-এ (`sb-theme`) সেভ থাকে
- ডিফল্ট বদলাতে `js/theme.js`-এ: `let choice = "system";` → `"light"` বা `"dark"`
- নতুন রং যোগ করতে হলে `css/style.css`-এর `:root` ও `[data-theme="dark"]` — দুটিতেই একই নামের variable রাখুন

---

## ১৫. Navigation menu বদলানো

`js/config.js`-এর `nav` তালিকা:

```js
nav: [
  { file: "index.html",    bn: "হোম",  en: "Home" },
  { file: "articles.html", bn: "লেখা", en: "Articles" }
],
```

ক্রম বদলাতে লাইনগুলোর অবস্থান বদলান; মেনু আইটেম বাদ দিতে লাইনটি মুছে দিন।
ডেস্কটপ মেনু ও মোবাইল মেনু — দুটোই এখান থেকেই তৈরি হয়।

---

## ১৬. Contact form চালু করা (Formspree)

ফর্মটি এখন ডেমো অবস্থায় আছে। আসল ইমেইল পেতে:

১. [formspree.io](https://formspree.io)-তে ফ্রি অ্যাকাউন্ট খুলে একটি form তৈরি করুন
২. আপনার endpoint URL কপি করুন (যেমন `https://formspree.io/f/abcdwxyz`)
৩. `contact.html`-এ ফর্ম ট্যাগটি খুঁজে action যোগ করুন:

```html
<form id="contact-form" class="form-grid" action="https://formspree.io/f/abcdwxyz" method="POST">
```

৪. ফাইলের নিচে `<script>` … `</script>` ডেমো ব্লকটি মুছে দিন

ব্যস — বার্তা সরাসরি আপনার ইমেইলে যাবে। EmailJS ব্যবহার করলেও একই ফর্ম কাঠামো কাজ করবে।

---

## ১৭. GitHub Pages-এ publish করা (ধাপে ধাপে)

১. [github.com](https://github.com)-এ লগইন করুন
২. ডানদিকে উপরে **+ → New repository**
৩. Repository name দিন, যেমন `shopno-bonon` → **Public** সিলেক্ট করুন → **Create repository**
৪. নতুন পেজে **uploading an existing file** লিংকে ক্লিক করুন
৫. `shopno-bonon` ফোল্ডারের **ভিতরের সব ফাইল ও ফোল্ডার** টেনে ছেড়ে দিন
   > ⚠️ বাইরের ফোল্ডারটি নয় — ভিতরের `index.html`, `css/`, `js/`, `assets/` ইত্যাদি
৬. নিচে **Commit changes** চাপুন
৭. উপরের মেনু থেকে **Settings → Pages**
৮. *Source*-এ **Deploy from a branch** বেছে নিন
৯. Branch: **main**, Folder: **/ (root)** → **Save**
১০. ১–২ মিনিট পর পেজটি রিফ্রেশ করুন। উপরে আপনার লিংক দেখাবে:

```
https://your-username.github.io/shopno-bonon/
```

**নিজের ডোমেইন যোগ করতে চাইলে** — Settings → Pages → Custom domain-এ ডোমেইন লিখে Save করুন, তারপর ডোমেইন প্রোভাইডারে GitHub-এর দেওয়া DNS রেকর্ড বসান।

### পরে কিছু বদলাতে চাইলে
GitHub-এ ফাইলটি খুলুন → পেন্সিল আইকন (✏️) → edit করুন → **Commit changes**। এক মিনিটের মধ্যে সাইটে দেখা যাবে।

---

## ১৮. Checklist (publish করার আগে)

- [ ] `assets/logo/logo.svg` নিজের logo দিয়ে replace করা হয়েছে
- [ ] `js/config.js`-এ নাম, ইমেইল, ফোন, social links ঠিক করা হয়েছে
- [ ] `js/data.js`-এ sample article/team তথ্য নিজের তথ্য দিয়ে বদলানো হয়েছে
- [ ] প্রতিটি পেজের `<title>` ও `meta description` ঠিক করা হয়েছে
- [ ] সব ছবি লোড হচ্ছে (ব্রাউজারে F12 → Console-এ কোনো error নেই)
- [ ] মোবাইলে খুলে দেখা হয়েছে (F12 → device toolbar)
- [ ] Light ও Dark — দুই থিমেই দেখা হয়েছে
- [ ] বাংলা ও English — দুই ভাষাতেই দেখা হয়েছে

---

## ১৯. প্রযুক্তিগত নোট

- **Framework নেই** — শুধু HTML5, CSS3, Vanilla JS (ES5-বান্ধব সিনট্যাক্স)
- **Animation** — CSS transition + `IntersectionObserver`, কোনো external library নয়
- **Accessibility** — semantic HTML, keyboard navigation, visible focus, `aria-label`, skip link, `prefers-reduced-motion` সাপোর্ট
- **Performance** — lazy-loaded ছবি, deferred script, SVG artwork, কম DOM
- **সব path relative** — তাই sub-folder repository-তেও ঠিকভাবে কাজ করে

---

© স্বপ্নবুনন · Shopno Bonon

---

# UPDATE — September 2026

This section covers everything that changed in this round of work, and
exactly which file and which line to edit for each item.

## 1. English is now the primary language

The site loads in **English** by default. Anyone can switch to Bangla with
the `বাংলা / EN` toggle in the header, and the choice is remembered in
`localStorage` for their next visit.

What changed:

| File | Change |
|---|---|
| every `.html` | `<html lang="en" data-lang="en">`, and the anti-flash script now falls back to `'en'` instead of `'bn'` |
| `js/language.js` | `let current = "en"` (this was already correct but the HTML disagreed with it — that was the bug) |
| `js/main.js` | nav, mobile nav and footer links are now printed in English before the translator runs, so there is no flash of Bangla |

**To change the default back to Bangla** you must edit it in two places or it
will flicker:

1. `js/language.js` → `let current = "en";` → `"bn"`
2. every `.html` file → `localStorage.getItem('sb-lang')||'en'` → `||'bn'`

**To add or change translated wording:** `js/language.js`, the `UI = { … }`
dictionary at the top. Every entry is `key: { bn: "…", en: "…" }`.

## 2. Bugs that were found and fixed

| Bug | Where it was | Fix |
|---|---|---|
| Language flickered from Bangla to English on every page load | HTML said `bn`, `language.js` said `en` | both now say `en` |
| The `বাংলা / EN` toggle showed the wrong button as active | header is built *after* `language.js` runs | `js/main.js` now re-syncs the toggle in `boot()` |
| The theme menu never showed a tick next to the active theme | same cause — `theme.js` painted before the header existed | `boot()` now calls `SBTheme.paint()` after the header is built |
| Footer email link was `mailto:willbe added later` | `js/config.js` | real placeholder address — **EDIT THIS** (see below) |
| Team cards used `<h3>`/`<p>` inside a `<button>` (invalid HTML, breaks in some browsers) | `js/team.js` | rewritten with `<span>` elements and matching CSS |
| Search crashed on articles that only had one language | `js/articles.js` | falls back to `""` |
| Article page `<title>` was always English | `js/articles.js` | follows the current language |

### Still needs your attention

- **`js/config.js` lines 26–27** — `email` and `phone` are placeholders
  (`shopnobonon.org@gmail.com`, `+880 1XXX-XXXXXX`). Put the real ones in.
  Set `phone: ""` if you don't want a phone number shown.
- **`js/data.js` → the `illusion-of-justice` article** has no Bangla
  `title`, `excerpt` or `body`. Right now it falls back to English when the
  site is in Bangla, which works but is not ideal. Add `bn:` values next to
  each `en:` value when you have the translation.
- **`contact.html` line 93** — the form posts to a Formspree endpoint
  (`xgoagazp`). Check it is still yours.

## 3. The animation system

`css/animations.css` was rewritten from scratch. It is organised in ten
numbered blocks with comments, so you can find and retune any single effect.

What it does now:

- **Page entrance** — the whole page lifts in once, instead of snapping.
- **Scroll reveals** — lift + slight scale + a short blur that clears. Cards
  in a grid stagger one after another; `js/main.js` writes a `--i` index on
  each child, so the stagger keeps working no matter how many cards there are.
- **Image reveals** — the frame opens upward while the photo inside settles
  back from a slow push-in. Two speeds, which is what reads as depth.
- **Hero** — the headline rides up out of a mask with a slight skew, a light
  sweeps across it a beat later, the kicker dot breathes, the woven threads
  draw themselves and then drift forever, and a soft aurora moves behind it all.
- **Hover** — cards lift and pick up a highlight that follows the cursor;
  buttons lean toward the pointer and a sheen crosses them; nav links and
  underlined links wipe in from one side.
- **Reading progress bar** at the top of every article page.
- **Everything collapses** to a plain instant layout when the visitor has
  "reduce motion" turned on, or on a low-powered device.

### Where to retune it

`css/animations.css`, the `:root` block at the very top:

```css
--ease-silk:  cubic-bezier(.22, 1, .28, 1);   /* entrances  */
--ease-glide: cubic-bezier(.65, .02, .18, 1); /* transforms */
--ease-soft:  cubic-bezier(.33, 1, .46, 1);   /* hovers     */
--dur-enter: 1.15s;   /* how long a reveal takes  */
--dur-hover: .55s;    /* how long a hover takes   */
--stagger:   90ms;    /* gap between cards        */
```

Lower `--dur-enter` for a snappier site, raise it for a slower, heavier one.
Set `--stagger: 0ms` if you don't want cards to arrive one by one.

## 4. "Save as PDF" on every article

Every article page now has a **Save as PDF** button under the byline.

- No library is downloaded — this is pure CSS + the browser's own print
  engine, so it works offline, on GitHub Pages, and on phones.
- Pressing it builds a clean print-only version of the article and opens the
  print dialog. The reader picks "Save as PDF" (or "Print to PDF") and gets a
  real PDF with selectable text.
- **The PDF carries the copyright**, exactly as you asked:
  - the **স্বপ্নবুনন · Shopno Bonon** mark sits in a ruled header
  - the footer carries `© YEAR স্বপ্নবুনন · Shopno Bonon. © Author Name.`
  - a rights notice and the source URL sit underneath it

### Where to edit it

- **The wording inside the PDF** — `js/pdf.js`, the `PDF_TEXT = { … }` block
  near the top. This is where the button label, the "Written by" line and the
  full copyright notice live, in both languages.
- **How the PDF looks** — `css/style.css`, the `@media print { … }` block at
  the very bottom. Font sizes are in `pt`. Page margins are in the `@page`
  rule right above it (currently A4, 18mm top).

## 5. Founders and Executive Committee

`team.html` now has three sections, in this order:

1. **Founders** — reads `window.FOUNDERS`
2. **Current Executive Committee** — reads `window.EXECUTIVES`, with the term
   label coming from `window.EXEC_TERM`
3. **The wider team** — reads `window.TEAM` (the list that was already there)

All three are in **`js/data.js`**, in sections marked `3B`, `3C` and `3`.
I filled them in with the people and photos already in your project so you can
see the shape — **replace these with your real lists.**

### How to edit

- **Add a person:** copy one `{ … }` block inside the list and change the values.
- **Remove a person:** delete their whole `{ … }` block.
- **Reorder:** move the blocks around — the page follows the order in the file.
- **A whole section you don't want:** empty its list, e.g. `window.FOUNDERS = [];`
  The section then hides itself automatically instead of leaving a gap.
- **The committee term label:** `js/data.js` → `window.EXEC_TERM`, currently
  `"Executive Committee 2025–26"`. Change this every year.
- **The section headings and descriptions** ("Founders", "Current Executive
  Committee", etc.) are in `team.html` — search for `data-people-section`.

Fields on each person:

```js
{
  name:  { bn: "…", en: "…" },   // required
  role:  { bn: "…", en: "…" },   // required — shown under the name
  year:  "2025",                 // FOUNDERS only, optional — badge on the photo
  photo: "assets/images/avatar-1.png",
  bio:   { bn: "…", en: "…" },   // one or two lines on the card
  quote: { bn: "…", en: "…" },   // shown in the popup
  expertise:   { bn: ["…"], en: ["…"] },
  achievement: { bn: "…", en: "…" },
  social: { facebook: "", instagram: "", linkedin: "", email: "mailto:…" }
}
```

Leave a social value as `""` and that icon is hidden. Clicking any card opens
the profile popup, same as before.

### Photos

Put new photos in `assets/images/` and point `photo:` at them. Square images
(1:1) work best — the cards crop to a square. The `avatar-4/5/6.svg` files are
placeholder illustrations; swap them for real photos when you have them.
