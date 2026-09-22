/* ============================================================
   pdf.js — "Save as PDF" for any article

   How it works
   ------------
   No external library is downloaded. When the reader presses the
   button, this file builds a clean, print-only version of the
   article (#print-doc) and calls window.print(). The reader then
   chooses "Save as PDF" in the browser's print dialog, which
   produces a real, selectable-text PDF on every modern browser
   including iOS and Android.

   Copyright
   ---------
   Every page of the PDF carries the Shopno Bonon mark in the
   running header and the author's copyright line in the footer.
   EDIT the wording of those lines in the PDF_TEXT block below.
   ============================================================ */

(function () {
  "use strict";

  const L = window.SBLang;

  /* ---------- EDIT: wording used inside the PDF -------------- */
  const PDF_TEXT = {
    button:    { bn: "PDF হিসেবে সেভ করুন", en: "Save as PDF" },
    published: { bn: "প্রকাশিত", en: "Published" },
    writtenBy: { bn: "লিখেছেন", en: "Written by" },
    source:    { bn: "মূল লেখাটি পড়ুন", en: "Read the original at" },
    notice:    {
      bn: "এই লেখাটির সর্বস্বত্ব লেখক ও স্বপ্নবুননের সংরক্ষিত। অনুমতি ছাড়া পুনঃপ্রকাশ, বিক্রয় বা পরিবর্তন করা যাবে না। ব্যক্তিগত পাঠ ও শিক্ষামূলক ব্যবহারের জন্য উৎস উল্লেখ করে শেয়ার করা যাবে।",
      en: "All rights in this article are reserved by the author and Shopno Bonon. It may not be republished, sold or altered without permission. You may share it for personal reading or classroom use with the source credited."
    }
  };

  function t(key) {
    const item = PDF_TEXT[key];
    return item ? (item[L.get()] || item.en) : key;
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function formatDate(iso) {
    try {
      return new Date(iso + "T00:00:00").toLocaleDateString(
        L.get() === "bn" ? "bn-BD" : "en-GB",
        { day: "numeric", month: "long", year: "numeric" }
      );
    } catch (e) { return iso; }
  }

  /* ---------- Build the print-only document ------------------ */
  function build(article, author) {
    const old = document.getElementById("print-doc");
    if (old) old.remove();

    const S = window.SITE;
    const year = new Date().getFullYear();
    const authorName = author ? L.pick(author.name) : L.pick(S.name);
    const url = location.origin + location.pathname + "?id=" + article.id;

    const doc = document.createElement("div");
    doc.id = "print-doc";
    doc.setAttribute("aria-hidden", "true");
    doc.innerHTML =
      '<div class="pd-mark" aria-hidden="true">' +
        '<span class="pd-mark-bn">' + esc(S.name.bn) + "</span>" +
        '<span class="pd-mark-sep">&middot;</span>' +
        "<span>" + esc(S.name.en) + "</span>" +
      "</div>" +

      '<header class="pd-head">' +
        '<p class="pd-kicker">' + esc(S.motto) + "</p>" +
        '<h1 class="pd-title">' + esc(L.pick(article.title)) + "</h1>" +
        '<p class="pd-lede">' + esc(L.pick(article.excerpt)) + "</p>" +
        '<p class="pd-byline">' +
          esc(t("writtenBy")) + " <strong>" + esc(authorName) + "</strong>" +
          (author && author.role ? " &middot; " + esc(L.pick(author.role)) : "") +
          "<br>" + esc(t("published")) + " " + esc(formatDate(article.date)) +
        "</p>" +
      "</header>" +

      '<div class="pd-body">' + L.pick(article.body) + "</div>" +

      '<footer class="pd-foot">' +
        '<p class="pd-copy">&copy; ' + year + " " + esc(S.name.bn) + " &middot; " +
          esc(S.name.en) + ". " +
          "&copy; " + esc(authorName) + ".</p>" +
        '<p class="pd-notice">' + esc(t("notice")) + "</p>" +
        '<p class="pd-source">' + esc(t("source")) + ": " + esc(url) + "</p>" +
      "</footer>";

    document.body.appendChild(doc);
    return doc;
  }

  function save(article, author) {
    build(article, author);
    document.documentElement.classList.add("printing");

    /* Give the browser a frame to lay the document out, then print. */
    window.setTimeout(function () { window.print(); }, 60);
  }

  function cleanup() {
    document.documentElement.classList.remove("printing");
    const doc = document.getElementById("print-doc");
    if (doc) doc.remove();
  }
  window.addEventListener("afterprint", cleanup);

  /* ---------- The button markup used by articles.js ---------- */
  function buttonHTML() {
    const icon = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" ' +
      'stroke="currentColor" stroke-width="1.8" stroke-linecap="round" ' +
      'stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M12 3v11m0 0 4-4m-4 4-4-4"/><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17"/></svg>';
    return '<button type="button" class="btn btn--ghost pdf-btn" id="pdf-btn">' +
      icon + "<span>" + esc(t("button")) + "</span></button>";
  }

  window.SBPdf = { save: save, buttonHTML: buttonHTML, t: t };
})();
