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
