/* ============================================================
   data.js — ALL CONTENT LIVES HERE
   Categories · Authors · Team members · Articles
   Add, edit or delete items by copying an existing block.
   ============================================================ */

/* ---------- 1. CATEGORIES ---------------------------------- */
window.CATEGORIES = [
  { slug: "public-speaking",  bn: "পাবলিক স্পিকিং",  en: "Public Speaking" },
  { slug: "debate",           bn: "বিতর্ক",          en: "Debate" },
  { slug: "creative-writing", bn: "সৃজনশীল লেখা",     en: "Creative Writing" },
  { slug: "storytelling",     bn: "স্টোরিটেলিং",       en: "Storytelling" },
  { slug: "student-life",     bn: "শিক্ষার্থী জীবন",    en: "Student Life" },
  { slug: "social-awareness", bn: "সামাজিক সচেতনতা",  en: "Social Awareness" },
  { slug: "opinion",          bn: "মতামত",           en: "Opinion" },
  { slug: "youth-development",bn: "ইয়ুথ ডেভেলপমেন্ট", en: "Youth Development" }
];

/* ---------- 2. AUTHORS ------------------------------------- */
/* The key ("nusrat", "arif"…) is used inside each article as "author". */
window.AUTHORS = {

  ishmam: {
    name:  { bn: "মোঃ তাজওয়ার হাসান ইশমাম", en: "MD. Tajwar Hasan Ishmam" },
    role:  { bn: "সম্পাদক ও বিতর্ক প্রশিক্ষক", en: "Editor & Debate Coach" },
    photo: "assets/images/avatar-1.png",          /* EDIT: author photo */
    bio: {
      bn: "বিতর্ক ও জনবক্তৃতায় সাত বছরের অভিজ্ঞতা। এখন তিনি শিক্ষার্থীদের যুক্তি গঠন করতে এবং মঞ্চে সাবলীলভাবে কথা বলতে প্রশিক্ষণ দেন।",
      en: "Seven years in debate & Public Speaking. Now he trains students how to build an argument and hold a stage."
    },
    quote: {
      bn: "তর্ক করতে শেখা মানে জিততে শেখা নয়। এর মানে হলো সততার সাথে নিজের চিন্তাভাবনাকে যাচাই করতে শেখা।",
      en: "Learning to argue is not learning to win. It is learning to test your own thinking honestly."
    },
    expertise: { bn: ["বিতর্ক", "পাবলিক স্পিকিং", "সম্পাদনা"], en: ["Debate", "Public speaking", "Editing"] },
    achievement: { bn: "জাতীয় বিতর্ক উৎসব ২০২৪-এ বিচারক", en: "Winner, Legal Tech Hackathon 2026" },
    social: { facebook: "https://www.facebook.com/rihhal.ishmam/", linkedin: "https://www.linkedin.com/in/byishmam/", email: "mailto:ishmam.on@gmail.com" }
  },

  redu: {
    name:  { bn: "রেদওয়ান নওশাদ", en: "Redwan Nowshad" },
    role:  { bn: "রিসার্চার, স্টোরিটেলিং", en: "Researcher, Storytelling" },
    photo: "assets/images/avatar-2.png",
    bio: {
      bn: "তিনি কঠিন ধারণাগুলোকে গল্পের মাধ্যমে সহজ করে তুলতে ভালোবাসেন। একটি ক্যাম্পাস ম্যাগাজিনে লেখার মাধ্যমে তাঁর কর্মজীবন শুরু হয়েছিল।",
      en: "He likes making hard ideas simple by telling them as stories. Started out writing for a campus magazine."
    },
    quote: {
      bn: "মানুষ তথ্য ভুলে যায়। তারা গল্প মনে রাখে।",
      en: "People forget information. They remember a story."
    },
    expertise: { bn: ["স্টোরিটেলিং", "সৃজনশীল লেখা"], en: ["Storytelling", "Creative writing"] },
    achievement: { bn: "৪০+ প্রকাশিত ফিচার", en: "40+ published features" },
    social: { facebook: "https://www.facebook.com/redwannowshadoffical", instagram: "https://instagram.com/dude_redu", email: "mailto:" }
  },

  tasnia: {
    name:  { bn: "তাসনিয়া রহমান", en: "Tasnia Rahman" },
    role:  { bn: "কনটেন্ট লিড, সামাজিক সচেতনতা", en: "Content Lead, Social Awareness" },
    photo: "assets/images/avatar-3.svg",
    bio: {
      bn: "ডিজিটাল দায়বদ্ধতা ও তরুণদের মানসিক সুস্থতা নিয়ে লেখেন। তথ্য যাচাই করে লিখতে বিশ্বাস করেন।",
      en: "She writes about digital responsibility and youth wellbeing, and insists on checking a claim before publishing it."
    },
    quote: {
      bn: "সচেতনতা মানে ভয় ছড়ানো নয়, বোঝা।",
      en: "Awareness is not spreading fear. It is understanding."
    },
    expertise: { bn: ["সামাজিক সচেতনতা", "গবেষণা", "রিপোর্টিং"], en: ["Social awareness", "Research", "Reporting"] },
    achievement: { bn: "ক্যাম্পাস অ্যাওয়্যারনেস ক্যাম্পেইন সংগঠক", en: "Organiser, campus awareness campaigns" },
    social: { linkedin: "https://linkedin.com/", x: "https://x.com/", email: "mailto:tasnia@shopnobonon.org" }
  },

  rafi: {
    name:  { bn: "রাফি চৌধুরী", en: "Rafi Chowdhury" },
    role:  { bn: "কন্ট্রিবিউটর, শিক্ষার্থী জীবন", en: "Contributor, Student Life" },
    photo: "assets/images/avatar-4.svg",
    bio: {
      bn: "দ্বিতীয় বর্ষের শিক্ষার্থী। ক্লাস, টিউশন আর নিজের স্বপ্নের মাঝখানের সময়টা নিয়ে লেখেন।",
      en: "A second-year student writing about the hours that sit between classes, tuition and his own plans."
    },
    quote: {
      bn: "সবচেয়ে কঠিন কাজ হলো শুরু করা—বাকিটা অভ্যাস।",
      en: "Starting is the hard part. The rest is habit."
    },
    expertise: { bn: ["শিক্ষার্থী জীবন", "মতামত"], en: ["Student life", "Opinion"] },
    achievement: { bn: "ক্যাম্পাস কন্ট্রিবিউটর প্রোগ্রাম ২০২৫", en: "Campus Contributor Programme 2025" },
    social: { facebook: "https://facebook.com/", instagram: "https://instagram.com/" }
  }
};

/* ---------- 3. TEAM ---------------------------------------- */
/* To add a member: copy one { … } block and change the values. */
window.TEAM = [
  {
    name: { en: "MD. Tajwar Hasan Ishmam" },
    role: { en: "Founder & CEO" },
    photo: "assets/images/avatar-1.png",
    bio: {
      en: "Leads the editorial direction of Shopno Bonon and runs the debate sessions."
    },
    quote: { en: "Every student has something to say. What is missing is the stage." },
    expertise: { bn: ["বিতর্ক", "সম্পাদনা"], en: ["Debate", "Editing"] },
    achievement: { bn: "", en: "Winner, Legal Tech Hackathon 2026" },
    social: { facebook: "https://www.facebook.com/rihhal.ishmam/", instagram: "", linkedin: "https://www.linkedin.com/in/byishmam/", email: "mailto:ishmam.on@gmail.com" }
  },
  {
    name: { en: "Redwan Nowshad" },
    role: { en: "Researcher, Storytelling" },
    photo: "assets/images/avatar-2.png",
    bio: { en: "Runs the writing and storytelling workshops." },
    quote: { en: "A good story is an honest one." },
    expertise: { en: ["Storytelling", "Research"] },
    achievement: {en: "40+ published features" },
    social: { facebook: "https://www.facebook.com/redwannowshadoffical", instagram: "https://www.instagram.com/dude_redu", linkedin: "", email: "mailto:" }
  },
  {
    name: { en: "MD. Ariful Islam Maruf" },
    role: { en: "Content Lead" },
    photo: "assets/images/avatar-3.png",
    bio: { en: "Plans and fact-checks the social awareness desk." },
    quote: { en: "Check it first, publish it second." },
    expertise: { en: ["Research", "Editing"] },
    achievement: { en: "Organiser, campus awareness campaigns" },
    social: { facebook: "https://www.facebook.com/profile.php?id=61591979730643", instagram: "", linkedin: "https://www.linkedin.com/in/maruf-on/", email: "mailto:" }
  },
  {
    name: { bn: "রাফি চৌধুরী", en: "Rafi Chowdhury" },
    role: { bn: "ক্যাম্পাস কন্ট্রিবিউটর", en: "Campus Contributor" },
    photo: "assets/images/avatar-4.svg",
    bio: { bn: "ক্যাম্পাসের গল্প ও শিক্ষার্থীদের সমস্যা তুলে আনেন।", en: "Brings campus stories and student problems to the desk." },
    quote: { bn: "শুরু করাই আসল কাজ।", en: "Starting is the whole job." },
    expertise: { bn: ["রিপোর্টিং", "মতামত"], en: ["Reporting", "Opinion"] },
    achievement: { bn: "ক্যাম্পাস কন্ট্রিবিউটর প্রোগ্রাম ২০২৫", en: "Campus Contributor Programme 2025" },
    social: { facebook: "https://facebook.com/", instagram: "https://instagram.com/", linkedin: "", email: "" }
  },
  {
    name: { bn: "সামিহা নূর", en: "Samiha Noor" },
    role: { bn: "ডিজাইন ও ভিজ্যুয়াল", en: "Design & Visuals" },
    photo: "assets/images/avatar-5.svg",
    bio: { bn: "প্রতিটি লেখার ভিজ্যুয়াল ভাষা তৈরি করেন।", en: "Builds the visual language for every piece we publish." },
    quote: { bn: "ডিজাইন সাজানো নয়, স্পষ্ট করা।", en: "Design is not decoration. It is clarity." },
    expertise: { bn: ["ডিজাইন", "টাইপোগ্রাফি"], en: ["Design", "Typography"] },
    achievement: { bn: "ভিজ্যুয়াল আইডেন্টিটি ২০২৫", en: "Visual identity, 2025" },
    social: { facebook: "", instagram: "https://instagram.com/", linkedin: "https://linkedin.com/", email: "" }
  },
  {
    name: { bn: "ইমরান কবির", en: "Imran Kabir" },
    role: { bn: "প্রোগ্রাম কো-অর্ডিনেটর", en: "Programme Coordinator" },
    photo: "assets/images/avatar-6.svg",
    bio: { bn: "কর্মশালা, সেশন ও ক্যাম্পাস প্রোগ্রাম সমন্বয় করেন।", en: "Coordinates workshops, sessions and campus programmes." },
    quote: { bn: "ভালো পরিকল্পনা মানে কম বিশৃঙ্খলা।", en: "A good plan means less chaos on the day." },
    expertise: { bn: ["ইভেন্ট", "কমিউনিটি"], en: ["Events", "Community"] },
    achievement: { bn: "১২টি ক্যাম্পাস সেশন আয়োজন", en: "Organised 12 campus sessions" },
    social: { facebook: "https://facebook.com/", instagram: "", linkedin: "https://linkedin.com/", email: "mailto:imran@shopnobonon.org" }
  }
];

/* ---------- 4. ARTICLES ------------------------------------ */
/*
   How to add an article:
   1. Copy one { … } block below and paste it at the TOP of the list.
   2. Change id (must be unique, no spaces), category, title, excerpt, cover.
   3. Write body.bn and body.en using simple HTML: <p>, <h2>, <blockquote>, <ul><li>.
   4. Set featured: true for the big article on the home page (use it on one only).
   The article opens at: article.html?id=YOUR-ID
*/
window.ARTICLES = [
  {
    id: "illusion-of-justice",
    featured: true,
    category: "opinion",
    cover: "assets/images/cover-1.png",
    date: "2026-05-18",
    readTime: 7,
    author: "ishmam",
    title: {
      
      en: "The Illusion of Justice: Why Tougher Laws Aren’t Saving Bangladesh’s Survivors"
    },
    excerpt: {
      
      en: "Bangladesh’s sexual violence crisis stems not from a lack of harsh laws, but from weak enforcement, systemic delays, social stigma, and a lack of institutional accountability."
    },
    body: {
      
      en: `<p>Every time a shocking sexual assault makes headlines in Bangladesh, our collective response follows a depressingly familiar script. Social media erupts in fury, television talk shows demand accountability, politicians promise swift retribution and calls for the harshest possible punishments echo across the public square. Yet, once the media spotlight shifts and public outrage cools, the survivors are quieted and left to navigate a legal labyrinth that is painfully slow and deeply flawed. <strong>The vast chasm between the strict laws on our statute books and the lived reality of victims remains one of the most stubborn hurdles in our national fight against sexual violence.</strong></p>

<p>On paper, Bangladesh has spent years strengthening its laws to protect women and children. But for many survivors, those laws can still feel painfully distant from the justice they need. The <strong>Nari o Shishu Nirjatan Daman Ain (Women and Children Repression Prevention Act) of 2000</strong> established specialized tribunals specifically to bypass traditional judicial delays and hand down severe penalties. Later, in 2020, capital punishment was introduced as the maximum penalty for rape following massive nationwide protests. The statutory framework explicitly demands expedited investigations, mandatory DNA testing and strict timelines for concluding trials.</p>

<p>Yet, these strict mandates obscure a deeper truth: <strong>severity is not a substitute for functionality.</strong> Laws cannot deliver justice in a vacuum; they rely entirely on the integrity of the institutions that enforce them, the efficiency of procedures and the trust of the public. <strong>It is precisely within this infrastructure that our system falters.</strong></p>

<p>For a survivor, the decision to report an assault is often met with systemic hostility. Despite years of awareness campaigns, entering a local police station to file a complaint remains an intimidating, deeply alienating experience. In many communities, a culture of <strong>victim-blaming</strong> still thrives, where a woman's character, clothing or behavior is scrutinized far more intensely than the actions of her attacker. This pervasive social stigma forces many families to suffer in silence, choosing the preservation of social standing over the uncertain pursuit of legal redress.</p>

<p>When a case does make it into the system, the logistical hurdles quickly multiply. Investigative delays are common, often compounded by poor evidence collection at the initial scene. While advancements have been made, <strong>forensic and DNA processing facilities remain heavily concentrated in major urban centers</strong>, leaving rural areas structurally disadvantaged. Over time, as cases drag on, witnesses are frequently subjected to intimidation or lose the financial means to continue traveling to court. For a resource-strapped family, a prolonged legal battle becomes an unsustainable financial and emotional burden.</p>

<p>The specialized tribunals, initially conceived to guarantee speedy trials, are choked by <strong>massive backlogs</strong>. The statutory deadlines for resolving cases are routinely missed due to repeated adjournments, procedural bottlenecks, and a severe shortage of judges relative to the volume of cases. Consequently, thousands of files remain trapped in a state of perpetual delay, transforming the promise of swift justice into a <strong>bureaucratic mirage.</strong></p>

<p>This reality highlights the fundamental flaw in relying solely on harsher sentencing as a deterrent. While the introduction of the death penalty satisfied a public demand for retribution, legal experts and human rights advocates have long maintained that <strong>the certainty of conviction is a far more effective deterrent than the severity of the sentence.</strong> When weak investigations and procedural loopholes result in abysmally low conviction rates, raising the maximum penalty does little to alter the calculus of perpetrators. <strong>The core crisis in Bangladesh is not a lack of punishment, but a persistent culture of impunity.</strong></p>

<p>To acknowledge these systemic failures is not to minimize the progress that has been achieved. Public consciousness has shifted significantly. Grassroots women’s rights organizations, digital activism, and consistent media scrutiny have broken the absolute silence that once surrounded sexual violence. Today’s survivors are increasingly willing to demand their rights, and the old social taboos, while still powerful, are gradually eroding. Furthermore, the integration of scientific evidence like <strong>DNA profiling</strong> has brought a higher degree of objectivity to the courtroom when cases do progress.</p>

<p>However, meaningful reform requires moving past the superficial remedy of amending statutes. We must invest heavily in the <strong>unglamorous, practical side of the justice system.</strong> Police investigators require specialized, continuous training to handle sensitive cases with professional empathy. Forensic infrastructure must be decentralized so that every district has immediate access to modern testing facilities. We urgently need a <strong>robust witness protection program</strong> so that those who speak the truth can do so without fearing for their safety.</p>

<p>Ultimately, sexual violence is not a problem that the judiciary can solve in isolation. It is a symptom of <strong>deeper imbalances of power, rigid gender roles and systemic lack of accountability.</strong> Lasting change demands a cultural shift that begins in our homes, schools, and communities. We must foster an environment where <strong>consent is understood, equality is practiced and harassment is rejected outright rather than normalized.</strong></p>

<p>The true measure of justice in Bangladesh cannot be found in the tough language of our legal codes, but in whether an ordinary citizen can trust the institutions meant to protect them. <strong>The legislative will to confront this crisis exists.</strong> The harder, more urgent task is to transform that intent into a reality where survivors encounter <strong>compassion instead of judgment, efficiency instead of obstruction and true accountability instead of empty promises.</strong></p>`
    }
  },
  {
    id: "argument-structure",
    featured: false,
    category: "debate",
    cover: "assets/images/cover-2.svg",
    date: "2026-05-11",
    readTime: 6,
    author: "ishmam",
    title: { bn: "একটি যুক্তি দাঁড় করানোর চারটি স্তম্ভ", en: "The four parts of an argument that holds" },
    excerpt: {
      bn: "দাবি, কারণ, প্রমাণ আর প্রভাব—এই চারটি ঠিক থাকলে যুক্তি সহজে ভাঙে না।",
      en: "Claim, reason, evidence, impact. Get these right and an argument is hard to break."
    },
    body: {
      bn: `<p>বিতর্কে হেরে যাওয়ার সবচেয়ে সাধারণ কারণ দুর্বল কণ্ঠ নয়, অসম্পূর্ণ যুক্তি। বেশিরভাগ শিক্ষার্থী দাবি বলেন, কিন্তু কারণ ও প্রভাব বলতে ভুলে যান।</p>
<h2>১. দাবি</h2><p>আপনি আসলে কী বলছেন, এক বাক্যে। অস্পষ্ট দাবি মানেই পুরো যুক্তি অস্পষ্ট।</p>
<h2>২. কারণ</h2><p>দাবিটি কেন সত্য—কোন যুক্তিসংগত ধাপে আপনি সেখানে পৌঁছালেন।</p>
<h2>৩. প্রমাণ</h2><p>উদাহরণ, তথ্য বা বাস্তব অভিজ্ঞতা। একটি নির্দিষ্ট উদাহরণ দশটি সাধারণ কথার চেয়ে শক্তিশালী।</p>
<h2>৪. প্রভাব</h2><p>এটি সত্য হলে কার কী পরিবর্তন হয়। এই অংশটাই বিচারকের মনে থাকে।</p>
<blockquote>যে যুক্তির প্রভাব নেই, সেটি শুধু একটি তথ্য।</blockquote>
<p>অনুশীলন: আজকের খবরের একটি বিষয় নিন, চার ধাপে চারটি বাক্য লিখুন। এক মাস করলে বিতর্কের মঞ্চে আলাদা করে ভাবতে হবে না।</p>`,
      en: `<p>Debates are rarely lost because of a weak voice. They are lost because an argument is incomplete. Most students state a claim and then forget the reason and the impact.</p>
<h2>1. Claim</h2><p>What you are actually saying, in one sentence. A vague claim makes everything after it vague.</p>
<h2>2. Reason</h2><p>Why it is true — the logical step that took you there.</p>
<h2>3. Evidence</h2><p>An example, a figure, a real experience. One specific case beats ten general statements.</p>
<h2>4. Impact</h2><p>What changes, and for whom, if this is true. This is the part an adjudicator remembers.</p>
<blockquote>An argument without impact is just a fact.</blockquote>
<p>Practice: take one item from today's news and write four sentences, one for each part. Do it for a month and you will stop having to think about it on stage.</p>`
    }
  },
  {
    id: "write-your-story",
    featured: false,
    category: "storytelling",
    cover: "assets/images/cover-3.svg",
    date: "2026-05-04",
    readTime: 5,
    author: "redu",
    title: { bn: "লিখতে পারেন, কিন্তু গল্প বলতে পারেন না?", en: "You can write, but you can't tell the story" },
    excerpt: {
      bn: "গল্প মানে বড় ঘটনা নয়। একটি নির্দিষ্ট মুহূর্ত, একটি পরিবর্তন—ব্যস।",
      en: "A story is not a big event. It is one specific moment and one change."
    },
    body: {
      bn: `<p>অনেক শিক্ষার্থী সুন্দর বাক্য লিখতে পারেন, কিন্তু লেখাটা মনে থাকে না। কারণ সেখানে তথ্য আছে, মুহূর্ত নেই।</p>
<h2>বড় বিষয়ের বদলে ছোট মুহূর্ত</h2>
<p>"শিক্ষাব্যবস্থার সমস্যা" নিয়ে লিখতে গেলে লেখা ভারী হয়ে যায়। কিন্তু "পরীক্ষার আগের রাতে ছোট ভাইকে অঙ্ক বোঝানোর সময় বুঝলাম আমি নিজেই বুঝিনি"—এটি পড়া হয়।</p>
<h2>গল্পের সবচেয়ে সহজ কাঠামো</h2>
<ul><li>আগে আমি এটা ভাবতাম।</li><li>তারপর এই ঘটনাটি ঘটল।</li><li>এখন আমি অন্যভাবে ভাবি।</li></ul>
<blockquote>পরিবর্তন না থাকলে সেটি বর্ণনা, গল্প নয়।</blockquote>
<p>প্রথম খসড়ায় সুন্দর করে লেখার চেষ্টা করবেন না। আগে ঘটনা লিখুন, পরে কাটুন। ভালো লেখা মূলত ভালো কাটাকাটি।</p>`,
      en: `<p>Plenty of students write clean sentences that nobody remembers. The writing has information in it, but no moment.</p>
<h2>Trade the big subject for a small moment</h2>
<p>Write about "problems in our education system" and the piece turns heavy. Write about the night you tried to explain algebra to your younger brother and realised you had never understood it yourself, and people read to the end.</p>
<h2>The simplest structure there is</h2>
<ul><li>This is what I used to think.</li><li>Then this happened.</li><li>Now I think differently.</li></ul>
<blockquote>Without a change, it is a description, not a story.</blockquote>
<p>Don't try to write beautifully in the first draft. Get the event down, then cut. Good writing is mostly good cutting.</p>`
    }
  },
  {
    id: "digital-responsibility",
    featured: false,
    category: "social-awareness",
    cover: "assets/images/cover-4.svg",
    date: "2026-04-26",
    readTime: 8,
    author: "tasnia",
    title: { bn: "শেয়ার করার আগে ত্রিশ সেকেন্ড", en: "Thirty seconds before you share" },
    excerpt: {
      bn: "ভুল তথ্য ছড়ায় বিশ্বাস থেকে, বিদ্বেষ থেকে নয়। তাই থামাও যায় অভ্যাস দিয়ে।",
      en: "Misinformation spreads through trust, not malice. Which means a habit can slow it down."
    },
    body: {
      bn: `<p>একটি পোস্ট ভাইরাল হতে যত সময় লাগে, সেটি যাচাই করতে তার চেয়ে কম সময় লাগে। তবু আমরা যাচাই করি না, কারণ পোস্টটি পাঠিয়েছেন পরিচিত কেউ।</p>
<h2>তিনটি প্রশ্ন</h2>
<ul>
<li>মূল সূত্র কোথায়? স্ক্রিনশট কোনো সূত্র নয়।</li>
<li>তারিখটি কি এই বছরের? পুরোনো ঘটনা নতুন করে ছড়ায় সবচেয়ে বেশি।</li>
<li>এটি কি আমাকে রাগিয়ে দিচ্ছে? তীব্র আবেগ তৈরি করা কনটেন্ট বেশি শেয়ার হয়।</li>
</ul>
<blockquote>যা আপনাকে সবচেয়ে দ্রুত শেয়ার করতে বলে, সেটিই সবচেয়ে ধীরে পড়া উচিত।</blockquote>
<h2>ক্যাম্পাসে কী করা যায়</h2>
<p>শ্রেণিকক্ষে ছোট একটি অভ্যাস চালু করা যায়—কোনো তথ্য আলোচনায় এলে সূত্র জিজ্ঞেস করা। কাউকে দোষারোপ না করে, শুধু প্রশ্ন করে। কয়েক সপ্তাহে এটি স্বাভাবিক হয়ে যায়।</p>`,
      en: `<p>Verifying a post takes less time than the post takes to spread. We still skip it, because the message came from someone we know.</p>
<h2>Three questions</h2>
<ul>
<li>Where is the original source? A screenshot is not a source.</li>
<li>Is the date from this year? Old events travel furthest when they come back.</li>
<li>Is this making me angry? Content built for strong feeling gets shared the most.</li>
</ul>
<blockquote>The thing that asks to be shared fastest is the thing to read slowest.</blockquote>
<h2>What works on campus</h2>
<p>Start one small habit in class: when a claim comes up in discussion, ask where it came from. No blame, just the question. In a few weeks it stops feeling awkward.</p>`
    }
  },
  {
    id: "between-classes",
    featured: false,
    category: "student-life",
    cover: "assets/images/cover-5.svg",
    date: "2026-04-15",
    readTime: 5,
    author: "rafi",
    title: { bn: "ক্লাসের ফাঁকের সময়টা কোথায় যায়", en: "Where the hours between classes go" },
    excerpt: {
      bn: "দিনে তিন ঘণ্টা হারিয়ে যায় ছোট ছোট ফাঁকে। সেটা ফিরিয়ে আনার একটি সহজ উপায়।",
      en: "Three hours a day disappear into small gaps. One simple way to get them back."
    },
    body: {
      bn: `<p>সারা দিন ব্যস্ত থাকি, অথচ রাতে মনে হয় কিছুই হয়নি—এই অনুভূতি প্রায় প্রতিটি শিক্ষার্থীর।</p>
<h2>এক সপ্তাহ হিসাব রাখুন</h2>
<p>কাগজে শুধু লিখুন: কখন কী করছিলেন। বিচার করবেন না, শুধু লিখুন। সপ্তাহ শেষে দেখবেন সময় নষ্ট হচ্ছে বড় কোনো কাজে নয়, দশ-পনেরো মিনিটের ফাঁকগুলোয়।</p>
<h2>ফাঁকের জন্য আগে থেকে কাজ ঠিক করে রাখুন</h2>
<ul><li>১৫ মিনিট: একটি পড়া রিভিশন বা একটি অনুচ্ছেদ লেখা।</li><li>৩০ মিনিট: একটি সমস্যার সমাধান বা একটি ইমেইল।</li><li>১ ঘণ্টা: লাইব্রেরি, নতুন কিছু শেখা।</li></ul>
<blockquote>সময় বাড়ানো যায় না, কিন্তু ফাঁকগুলো আগে থেকে ঠিক করা যায়।</blockquote>
<p>এটি প্রোডাক্টিভিটি নিয়ে বড় কোনো তত্ত্ব নয়। শুধু নিজের দিনটাকে চেনা।</p>`,
      en: `<p>Busy all day, and by night it feels like nothing happened. Most students know that feeling.</p>
<h2>Track one week</h2>
<p>On paper, write down what you were doing and when. No judgement, just the record. By the end of the week you will see the time is not lost to one big thing. It goes into ten and fifteen minute gaps.</p>
<h2>Decide what the gaps are for, in advance</h2>
<ul><li>15 minutes: revise one topic, or write one paragraph.</li><li>30 minutes: solve one problem set, or send the email.</li><li>1 hour: library, or learn something new.</li></ul>
<blockquote>You cannot add hours. You can decide in advance what the gaps are for.</blockquote>
<p>This is not a theory about productivity. It is just knowing your own day.</p>`
    }
  },
  {
    id: "listening-skill",
    featured: false,
    category: "youth-development",
    cover: "assets/images/cover-6.svg",
    date: "2026-04-02",
    readTime: 6,
    author: "redu",
    title: { bn: "ভালো বক্তা হওয়ার আগে ভালো শ্রোতা", en: "Before you become a speaker, become a listener" },
    excerpt: {
      bn: "যোগাযোগের অর্ধেকটা বলা, বাকি অর্ধেক শোনা—এবং দ্বিতীয়টাই বেশি কঠিন।",
      en: "Half of communication is talking. The other half is harder."
    },
    body: {
      bn: `<p>আমরা যোগাযোগ শিখতে গিয়ে শুধু বলার দিকটা শিখি। অথচ আলোচনায় সবচেয়ে প্রভাব ফেলেন সেই মানুষটি, যিনি আগের বক্তব্যটি ঠিকভাবে বুঝেছেন।</p>
<h2>শোনা মানে চুপ থাকা নয়</h2>
<p>অনেকে অন্যের কথার সময় নিজের উত্তর সাজান। সেটি শোনা নয়, অপেক্ষা করা।</p>
<h2>একটি অনুশীলন</h2>
<p>পরের আলোচনায় উত্তর দেওয়ার আগে এক বাক্যে বলুন, অন্যজন কী বলেছেন। ভুল হলে সে সংশোধন করবে—আলোচনা তখনই এগোবে।</p>
<blockquote>যে ঠিকভাবে শোনে, তার উত্তর এমনিতেই ভালো হয়।</blockquote>
<p>বিতর্কে, দলগত কাজে, এমনকি পারিবারিক আলোচনাতেও এই একটি অভ্যাস বাকি সব কৌশলের চেয়ে বেশি কাজে দেয়।</p>`,
      en: `<p>When we set out to learn communication, we learn the talking half. Yet the person who changes a discussion is usually the one who understood the last point properly.</p>
<h2>Listening is not staying quiet</h2>
<p>Most of us spend the other person's turn preparing our reply. That is waiting, not listening.</p>
<h2>One exercise</h2>
<p>In your next discussion, before you answer, say in one sentence what the other person said. If you got it wrong they will correct you, and only then does the discussion move.</p>
<blockquote>People who listen properly end up with better answers anyway.</blockquote>
<p>In debate, in group work, even at home, this one habit does more than the rest of the techniques put together.</p>`
    }
  }
];
