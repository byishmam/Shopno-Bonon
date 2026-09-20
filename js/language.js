/* ============================================================
   language.js — Bangla / English switching
   HOW TEXT IS TRANSLATED (three ways):
   1. <span data-bn="বাংলা" data-en="English"></span>      → text swap
   2. <div data-lang-block="bn">…</div>                     → whole block
      <div data-lang-block="en">…</div>                        (CSS hides one)
   3. data-i18n="key"  → uses the UI dictionary below
   Attributes: data-bn-placeholder / data-en-placeholder,
               data-bn-aria / data-en-aria
   ============================================================ */

(function () {
  "use strict";

  /* ---------- UI DICTIONARY (EDIT TEXT HERE) --------------- */
  const UI = {
    readMore:       { bn: "পড়ুন",                  en: "Read" },
    readAll:        { bn: "সব লেখা দেখুন",          en: "All articles" },
    minRead:        { bn: "মিনিটের পড়া",           en: "min read" },
    by:             { bn: "লিখেছেন",               en: "By" },
    searchLabel:    { bn: "লেখা খুঁজুন",            en: "Search articles" },
    searchPlaceholder:{ bn: "শিরোনাম, বিষয় বা লেখক…", en: "Title, topic or author…" },
    all:            { bn: "সব",                    en: "All" },
    noResults:      { bn: "এই খোঁজে কোনো লেখা পাওয়া যায়নি। অন্য শব্দ বা অন্য বিষয় বেছে দেখুন।",
                      en: "No articles match this search. Try another word or another topic." },
    featured:       { bn: "নির্বাচিত লেখা",         en: "Featured" },
    latest:         { bn: "সাম্প্রতিক লেখা",        en: "Latest" },
    related:        { bn: "সম্পর্কিত লেখা",         en: "Related reading" },
    aboutAuthor:    { bn: "লেখক সম্পর্কে",          en: "About the author" },
    profile:        { bn: "প্রোফাইল",              en: "Profile" },
    written:        { bn: "প্রকাশিত লেখা",          en: "Published work" },
    expertise:      { bn: "যে বিষয়ে কাজ করেন",      en: "Works on" },
    closeProfile:   { bn: "প্রোফাইল বন্ধ করুন",      en: "Close profile" },
    openMenu:       { bn: "মেনু খুলুন",             en: "Open menu" },
    closeMenu:      { bn: "মেনু বন্ধ করুন",          en: "Close menu" },
    themeLabel:     { bn: "থিম",                   en: "Theme" },
    themeLight:     { bn: "লাইট",                  en: "Light" },
    themeDark:      { bn: "ডার্ক",                 en: "Dark" },
    themeSystem:    { bn: "ডিভাইস অনুযায়ী",         en: "Device" },
    langLabel:      { bn: "ভাষা",                  en: "Language" },
    backToArticles: { bn: "সব লেখায় ফিরে যান",      en: "Back to articles" },
    notFound:       { bn: "লেখাটি খুঁজে পাওয়া যায়নি।", en: "That article could not be found." },
    pages:          { bn: "পাতা",                  en: "Pages" },
    topics:         { bn: "বিষয়",                  en: "Topics" },
    followUs:       { bn: "আমাদের সাথে",            en: "Follow" },
    rights:         { bn: "সর্বস্বত্ব সংরক্ষিত",      en: "All rights reserved." },
    contactUs:      { bn: "যোগাযোগ",               en: "Contact" },
    teamProfile:    { bn: "বিস্তারিত দেখুন",         en: "View profile" }
  };

  const STORAGE_KEY = "sb-lang";
  let current = "bn"; /* EDIT: default language — "bn" or "en" */

  function t(key) {
    const item = UI[key];
    return item ? item[current] : key;
  }

  function apply(root) {
    const scope = root || document;

    scope.querySelectorAll("[data-bn][data-en]").forEach(function (el) {
      el.textContent = el.getAttribute("data-" + current);
    });
    scope.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    scope.querySelectorAll("[data-bn-placeholder][data-en-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", el.getAttribute("data-" + current + "-placeholder"));
    });
    scope.querySelectorAll("[data-bn-aria][data-en-aria]").forEach(function (el) {
      el.setAttribute("aria-label", el.getAttribute("data-" + current + "-aria"));
    });
    scope.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
  }

  function set(lang, silent) {
    current = lang === "en" ? "en" : "bn";
    document.documentElement.setAttribute("data-lang", current);
    document.documentElement.setAttribute("lang", current === "bn" ? "bn" : "en");
    try { localStorage.setItem(STORAGE_KEY, current); } catch (e) {}

    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === current));
    });

    apply(document);
    if (!silent) document.dispatchEvent(new CustomEvent("sb:langchange", { detail: { lang: current } }));
  }

  function init() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    set(saved || current, true);
  }

  /* Public API used by the other scripts */
  window.SBLang = {
    get: function () { return current; },
    set: set,
    t: t,
    apply: apply,
    /* pick the right value from a { bn, en } object */
    pick: function (obj) { return obj ? (obj[current] || obj.en || obj.bn || "") : ""; },
    init: init
  };

  /* Set the language as early as possible to avoid a flash of the wrong text */
  init();
})();
