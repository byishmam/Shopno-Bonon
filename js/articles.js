/* ============================================================
   articles.js — renders article cards, filters, search and the
   article detail page. Content itself lives in js/data.js.
   ============================================================ */

(function () {
  "use strict";

  const L = window.SBLang;
  const ICONS = window.SBIcons || {};

  /* ---------- Helpers -------------------------------------- */
  function catLabel(slug) {
    const c = (window.CATEGORIES || []).find(function (x) { return x.slug === slug; });
    return c ? L.pick(c) : slug;
  }

  function authorOf(article) {
    const a = window.AUTHORS[article.author];
    if (!a) return null;
    return Object.assign({ key: article.author }, a);
  }

  function formatDate(iso) {
    const d = new Date(iso + "T00:00:00");
    const locale = L.get() === "bn" ? "bn-BD" : "en-GB";
    try {
      return d.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
    } catch (e) {
      return iso;
    }
  }

  function sorted(list) {
    return list.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
  }

  /* Fisher–Yates shuffle: returns a new array in random order without
     mutating the one passed in. */
  function shuffled(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  /* ---------- Card markup ---------------------------------- */
  function cardHTML(article) {
    const author = authorOf(article);
    return '<article class="card">' +
      '<div class="card-media"><img src="' + article.cover + '" alt="" loading="lazy" width="800" height="500"></div>' +
      '<div class="card-body">' +
        '<span class="tag">' + catLabel(article.category) + "</span>" +
        '<h3 class="card-title"><a class="stretched" href="article.html?id=' + article.id + '">' + L.pick(article.title) + "</a></h3>" +
        '<p class="card-excerpt">' + L.pick(article.excerpt) + "</p>" +
        '<div class="card-foot">' +
          (author
            ? '<button type="button" class="author-btn" data-author="' + article.author + '">' +
              '<img class="avatar" src="' + author.photo + '" alt="" width="34" height="34" loading="lazy">' +
              '<span><span class="name">' + L.pick(author.name) + "</span>" +
              '<span class="role">' + formatDate(article.date) + " · " + article.readTime + " " + L.t("minRead") + "</span></span></button>"
            : '<span class="meta">' + formatDate(article.date) + "</span>") +
        "</div>" +
      "</div>" +
    "</article>";
  }

  function featuredHTML(article) {
    const author = authorOf(article);
    return '<div class="featured">' +
      '<div class="card-media mask-reveal"><img src="' + article.cover + '" alt="" width="900" height="675"></div>' +
      "<div>" +
        '<span class="tag">' + catLabel(article.category) + "</span>" +
        '<h3><a href="article.html?id=' + article.id + '" class="link-underline">' + L.pick(article.title) + "</a></h3>" +
        '<p class="card-excerpt">' + L.pick(article.excerpt) + "</p>" +
        '<div class="card-foot">' +
          (author
            ? '<button type="button" class="author-btn" data-author="' + article.author + '">' +
              '<img class="avatar" src="' + author.photo + '" alt="" width="34" height="34">' +
              '<span><span class="name">' + L.pick(author.name) + "</span>" +
              '<span class="role">' + formatDate(article.date) + " · " + article.readTime + " " + L.t("minRead") + "</span></span></button>"
            : "") +
        "</div>" +
      "</div>" +
    "</div>";
  }

  /* ---------- Simple lists (home page, related, etc.) ------- */
  function renderLists() {
    document.querySelectorAll("[data-articles]").forEach(function (host) {
      let list = sorted(window.ARTICLES);
      const cat = host.dataset.category;
      const exclude = host.dataset.exclude;
      const limit = parseInt(host.dataset.limit, 10);

      if (host.dataset.articles === "featured") list = list.filter(function (a) { return a.featured; });
      if (cat) list = list.filter(function (a) { return a.category === cat; });
      if (exclude) list = list.filter(function (a) { return a.id !== exclude; });

      /* Show a different random pick each time instead of always the
         same (newest) articles. */
      list = shuffled(list);
      if (limit) list = list.slice(0, limit);

      host.innerHTML = list.map(cardHTML).join("");
    });

    document.querySelectorAll("[data-featured-article]").forEach(function (host) {
      /* Always the most recently published article, so adding a new
         article automatically makes it the featured one — no manual
         "featured" flag needed. */
      const item = sorted(window.ARTICLES)[0];
      if (item) host.innerHTML = featuredHTML(item);
    });
  }

  /* ---------- Articles page: filters + search --------------- */
  function initArchive() {
    const grid = document.getElementById("archive-grid");
    if (!grid) return;

    const bar = document.getElementById("filter-bar");
    const search = document.getElementById("article-search");
    const empty = document.getElementById("empty-state");
    const params = new URLSearchParams(location.search);
    let active = params.get("cat") || "all";
    let query = "";

    function buildFilters() {
      bar.innerHTML =
        '<button type="button" class="filter" data-cat="all" data-i18n="all"></button>' +
        (window.CATEGORIES || []).map(function (c) {
          return '<button type="button" class="filter" data-cat="' + c.slug + '" data-bn="' + c.bn + '" data-en="' + c.en + '">' + c.bn + "</button>";
        }).join("");
      L.apply(bar);
      paintFilters();
    }

    function paintFilters() {
      bar.querySelectorAll(".filter").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.dataset.cat === active));
      });
    }

    function draw() {
      let list = sorted(window.ARTICLES);
      if (active !== "all") list = list.filter(function (a) { return a.category === active; });
      if (query) {
        const q = query.toLowerCase();
        list = list.filter(function (a) {
          const author = window.AUTHORS[a.author];
          const hay = [
            a.title.bn || "", a.title.en || "", a.excerpt.bn || "", a.excerpt.en || "",
            catLabel(a.category), a.category,
            author ? (author.name.bn || "") : "", author ? (author.name.en || "") : ""
          ].join(" ").toLowerCase();
          return hay.indexOf(q) > -1;
        });
      }
      grid.innerHTML = list.map(cardHTML).join("");
      if (empty) {
        empty.hidden = list.length > 0;
        empty.textContent = L.t("noResults");
      }
      if (window.SBReveal) window.SBReveal();
    }

    bar.addEventListener("click", function (e) {
      const b = e.target.closest(".filter");
      if (!b) return;
      active = b.dataset.cat;
      paintFilters();
      const url = new URL(location.href);
      if (active === "all") url.searchParams.delete("cat"); else url.searchParams.set("cat", active);
      history.replaceState(null, "", url);
      draw();
    });

    if (search) {
      let timer;
      search.addEventListener("input", function () {
        clearTimeout(timer);
        timer = setTimeout(function () { query = search.value.trim(); draw(); }, 140);
      });
    }

    buildFilters();
    draw();

    document.addEventListener("sb:langchange", function () { buildFilters(); draw(); });
  }

  /* ---------- Article detail page --------------------------- */
  function initDetail() {
    const host = document.getElementById("article-root");
    if (!host) return;

    const id = new URLSearchParams(location.search).get("id");
    const article = (window.ARTICLES || []).find(function (a) { return a.id === id; }) || null;

    if (!article) {
      host.innerHTML =
        '<div class="container narrow" style="padding:calc(var(--nav-h) + 90px) 0 90px">' +
          "<h1>" + L.t("notFound") + "</h1>" +
          '<a class="btn btn--ghost" href="articles.html">' + L.t("backToArticles") + "</a>" +
        "</div>";
      return;
    }

    const author = authorOf(article);
    document.title = L.pick(article.title) + " · " + L.pick(window.SITE.name);
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", L.pick(article.excerpt));

    const related = sorted(window.ARTICLES)
      .filter(function (a) { return a.id !== article.id; })
      .sort(function (a, b) {
        const sa = a.category === article.category ? 0 : 1;
        const sb = b.category === article.category ? 0 : 1;
        return sa - sb;
      }).slice(0, 3);

    host.innerHTML =
      '<header class="article-head"><div class="container narrow">' +
        '<p class="breadcrumb"><a href="articles.html">' + L.t("backToArticles") + "</a></p>" +
        '<span class="tag">' + catLabel(article.category) + "</span>" +
        '<h1 class="article-title">' + L.pick(article.title) + "</h1>" +
        '<p class="article-lede">' + L.pick(article.excerpt) + "</p>" +
        '<div class="article-byline">' +
          (author
            ? '<button type="button" class="author-btn" data-author="' + article.author + '">' +
              '<img class="avatar" src="' + author.photo + '" alt="" width="34" height="34">' +
              '<span><span class="name">' + L.pick(author.name) + "</span>" +
              '<span class="role">' + L.pick(author.role) + "</span></span></button>"
            : "") +
          '<span class="meta">' + formatDate(article.date) + '<span class="meta-sep">·</span>' +
          article.readTime + " " + L.t("minRead") + "</span>" +
        "</div>" +
      "</div></header>" +

      '<div class="container narrow">' +
        '<figure class="article-hero mask-reveal" style="margin-block:36px 44px">' +
          '<img src="' + article.cover + '" alt="" width="1200" height="675">' +
        "</figure>" +
        '<div class="prose">' + L.pick(article.body) + "</div>" +

        '<div class="article-actions">' +
          (window.SBPdf ? window.SBPdf.buttonHTML() : "") +
          (window.SBShare ? window.SBShare.buttonHTML(article) : "") +
        "</div>" +

        (author
          ? '<section class="section--tight"><div class="divider-label">' + L.t("aboutAuthor") + "</div>" +
            '<div class="author-box">' +
              '<img class="avatar" src="' + author.photo + '" alt="" width="64" height="64" style="width:64px;height:64px">' +
              "<div><strong>" + L.pick(author.name) + "</strong>" +
              "<p>" + L.pick(author.bio) + "</p>" +
              '<button type="button" class="btn btn--ghost" data-author="' + article.author + '" style="padding:9px 16px">' +
              L.t("profile") + "</button></div>" +
            "</div></section>"
          : "") +
      "</div>" +

      '<section class="section"><div class="container">' +
        '<div class="divider-label">' + L.t("related") + "</div>" +
        '<div class="grid grid-3" data-reveal-group>' + related.map(cardHTML).join("") + "</div>" +
      "</div></section>";

    const pdfBtn = document.getElementById("pdf-btn");
    if (pdfBtn && window.SBPdf) {
      pdfBtn.addEventListener("click", function () { window.SBPdf.save(article, author); });
    }

    if (window.SBReveal) window.SBReveal();
  }

  /* ---------- Author popups (event delegation) -------------- */
  document.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-author]");
    if (!btn) return;
    e.preventDefault();
    const key = btn.dataset.author;
    const a = window.AUTHORS[key];
    if (a) window.SBModal.open(Object.assign({ key: key }, a));
  });

  /* ---------- Boot ------------------------------------------ */
  function run() {
    if (!window.ARTICLES) return;
    renderLists();
    initArchive();
    initDetail();
    if (window.SBReveal) window.SBReveal();
  }

  /* main.js may already have finished before this file runs (defer order),
     so check the flag as well as listening for the event. */
  if (window.SBReady) run(); else document.addEventListener("sb:ready", run);
  document.addEventListener("sb:langchange", function () {
    renderLists();
    initDetail();
    if (window.SBReveal) window.SBReveal();
  });
})();
