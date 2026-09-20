/* ============================================================
   main.js — header, footer, navigation, scroll motion
   The header and footer are built once here and appear on every
   page, so you only have to edit them in js/config.js.
   ============================================================ */

(function () {
  "use strict";

  const L = window.SBLang;
  const S = window.SITE;

  /* ---------- Icon set (inline SVG, inherits text colour) --- */
  const ICONS = {
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.7v8h3.5z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.6 7.2c-.2-1-.9-1.7-1.9-2C18 4.8 12 4.8 12 4.8s-6 0-7.7.4c-1 .3-1.7 1-1.9 2C2 8.9 2 12 2 12s0 3.1.4 4.8c.2 1 .9 1.7 1.9 2 1.7.4 7.7.4 7.7.4s6 0 7.7-.4c1-.3 1.7-1 1.9-2 .4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.3V8.7l5.5 3.3-5.5 3.3z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.1 20H3V9h3.1v11zM4.5 7.6A1.8 1.8 0 1 1 4.5 4a1.8 1.8 0 0 1 0 3.6zM21 20h-3.1v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H10.9V9h3v1.5h.05c.42-.8 1.45-1.65 3-1.65 3.2 0 3.8 2.1 3.8 4.9V20z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 3h3l-6.6 7.6L21.8 21h-5.9l-4.3-5.6L6.4 21H3.4l7-8.1L2.6 3h6l3.9 5.2L17.5 3zm-1 16.2h1.7L7.6 4.7H5.8l10.7 14.5z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 8 7.1 4.8a1.6 1.6 0 0 0 1.8 0L20 8"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="11" cy="11" r="6.4"/><path d="m16 16 4.5 4.5"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2.2M12 19.2v2.2M4.2 12H2M22 12h-2.2M5.6 5.6 7.2 7.2M16.8 16.8l1.6 1.6M18.4 5.6 16.8 7.2M7.2 16.8l-1.6 1.6"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M20 14.2A8.2 8.2 0 0 1 9.8 4 8.4 8.4 0 1 0 20 14.2z"/></svg>',
    device: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="2.8" y="4.5" width="18.4" height="12" rx="2.2"/><path d="M8.6 20h6.8"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 8h16M4 16h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    arrow: '<svg class="arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 12h13M13 6.5 18.5 12 13 17.5"/></svg>'
  };
  window.SBIcons = ICONS;

  /* ---------- Helpers -------------------------------------- */
  const currentFile = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  function socialLinks() {
    const s = S.social || {};
    return Object.keys(s)
      .filter(function (k) { return s[k] && ICONS[k]; })
      .map(function (k) {
        const label = k === "x" ? "X" : k.charAt(0).toUpperCase() + k.slice(1);
        return '<a href="' + s[k] + '" aria-label="' + label + '" rel="noopener"' +
               (k === "email" ? "" : ' target="_blank"') + '>' + ICONS[k] + "</a>";
      }).join("");
  }

  function brandMarkup(sizeClass) {
    return '<a class="brand" href="index.html" aria-label="' + S.name.en + '">' +
      '<img src="' + S.logo + '" alt="' + S.name.en + ' logo" width="30" height="30">' +
      '<span class="brand-name ' + (sizeClass || "") + '">' +
        '<span class="bn-name" data-lang-block="bn">' + S.name.bn + "</span>" +
        '<span data-lang-block="en">' + S.name.en + "</span>" +
      "</span></a>";
  }

  /* ---------- Header --------------------------------------- */
  function buildHeader() {
    const host = document.getElementById("site-header");
    if (!host) return;

    const links = S.nav.map(function (n) {
      const active = n.file.toLowerCase() === currentFile ? ' aria-current="page"' : "";
      return '<li><a href="' + n.file + '"' + active + ' data-bn="' + n.bn + '" data-en="' + n.en + '">' + n.bn + "</a></li>";
    }).join("");

    host.className = "site-header";
    host.innerHTML =
      '<div class="container nav">' +
        brandMarkup() +
        '<nav aria-label="Main"><ul class="nav-links">' + links + "</ul></nav>" +
        '<div class="nav-tools">' +
          '<div class="lang-switch" role="group" data-i18n-aria="langLabel">' +
            '<button type="button" data-lang="bn" class="bn-label" aria-pressed="true">বাংলা</button>' +
            '<button type="button" data-lang="en" aria-pressed="false">EN</button>' +
          "</div>" +
          '<div class="theme-wrap">' +
            '<button type="button" class="icon-btn" id="theme-btn" aria-haspopup="true" aria-expanded="false" data-i18n-aria="themeLabel">' + ICONS.sun + "</button>" +
            '<div class="theme-menu" id="theme-menu" role="menu">' +
              '<button type="button" role="menuitemradio" data-theme="light" aria-checked="false">' + ICONS.sun + '<span data-i18n="themeLight">Light</span></button>' +
              '<button type="button" role="menuitemradio" data-theme="dark" aria-checked="false">' + ICONS.moon + '<span data-i18n="themeDark">Dark</span></button>' +
              '<button type="button" role="menuitemradio" data-theme="system" aria-checked="true">' + ICONS.device + '<span data-i18n="themeSystem">Device</span></button>' +
            "</div>" +
          "</div>" +
          '<button type="button" class="icon-btn menu-toggle" id="menu-btn" aria-expanded="false" aria-controls="mobile-nav" data-i18n-aria="openMenu">' + ICONS.menu + "</button>" +
        "</div>" +
      "</div>";

    /* Mobile panel */
    const panel = document.createElement("div");
    panel.className = "mobile-nav";
    panel.id = "mobile-nav";
    panel.innerHTML =
      '<nav aria-label="Mobile"><ul>' +
        S.nav.map(function (n) {
          return '<li><a href="' + n.file + '" data-bn="' + n.bn + '" data-en="' + n.en + '">' + n.bn + "</a></li>";
        }).join("") +
        '<li><a href="join-us.html" data-bn="আমাদের সাথে যুক্ত হোন" data-en="Join us">আমাদের সাথে যুক্ত হোন</a></li>' +
      "</ul></nav>" +
      '<div class="mobile-foot"><div class="social-row" style="margin-bottom:14px">' + socialLinks() + "</div>" +
      "<span>" + S.motto + "</span></div>";
    document.body.appendChild(panel);

    wireHeader(panel);
  }

  function wireHeader(panel) {
    const header = document.getElementById("site-header");
    const menuBtn = document.getElementById("menu-btn");
    const themeBtn = document.getElementById("theme-btn");
    const themeMenu = document.getElementById("theme-menu");

    /* Sticky / shrink behaviour */
    let lastY = -1;
    function onScroll() {
      const y = window.scrollY;
      if (y === lastY) return;
      lastY = y;
      header.classList.toggle("is-stuck", y > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* Mobile menu */
    function setMenu(open) {
      panel.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.innerHTML = open ? ICONS.close : ICONS.menu;
      menuBtn.setAttribute("data-i18n-aria", open ? "closeMenu" : "openMenu");
      menuBtn.setAttribute("aria-label", L.t(open ? "closeMenu" : "openMenu"));
      document.body.style.overflow = open ? "hidden" : "";
    }
    menuBtn.addEventListener("click", function () {
      setMenu(!panel.classList.contains("open"));
    });
    panel.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });

    /* Theme menu */
    function setThemeMenu(open) {
      themeMenu.classList.toggle("open", open);
      themeBtn.setAttribute("aria-expanded", String(open));
    }
    themeBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      setThemeMenu(!themeMenu.classList.contains("open"));
    });
    themeMenu.addEventListener("click", function (e) {
      const b = e.target.closest("button[data-theme]");
      if (!b) return;
      window.SBTheme.set(b.dataset.theme);
      setThemeMenu(false);
    });
    document.addEventListener("click", function () { setThemeMenu(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      setThemeMenu(false);
      if (panel.classList.contains("open")) setMenu(false);
    });

    /* Language buttons */
    header.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.addEventListener("click", function () { L.set(b.dataset.lang); });
    });
  }

  /* ---------- Footer --------------------------------------- */
  function buildFooter() {
    const host = document.getElementById("site-footer");
    if (!host) return;
    const f = S.footerLinks;

    function col(titleKey, items) {
      return '<div class="footer-col"><h4 data-i18n="' + titleKey + '"></h4><ul>' +
        items.map(function (i) {
          return '<li><a href="' + i.file + '" data-bn="' + i.bn + '" data-en="' + i.en + '">' + i.bn + "</a></li>";
        }).join("") + "</ul></div>";
    }

    host.className = "site-footer";
    host.innerHTML =
      '<div class="container">' +
        '<div class="footer-top">' +
          '<div class="footer-brand">' +
            '<img src="' + S.logo + '" alt="' + S.name.en + ' logo" width="34" height="34">' +
            "<p data-lang-block=\"bn\">" + S.description.bn + "</p>" +
            "<p data-lang-block=\"en\">" + S.description.en + "</p>" +
            '<div class="social-row">' + socialLinks() + "</div>" +
          "</div>" +
          col("pages", f.pages) +
          col("topics", f.topics) +
          '<div class="footer-col"><h4 data-i18n="contactUs"></h4><ul>' +
            '<li><a href="mailto:' + S.contact.email + '">' + S.contact.email + "</a></li>" +
            "<li><span class=\"meta\">" + S.contact.phone + "</span></li>" +
            '<li><span class="meta" data-bn="' + S.contact.address.bn + '" data-en="' + S.contact.address.en + '"></span></li>' +
            '<li style="margin-top:14px"><a class="link-underline" href="join-us.html" data-bn="লিখতে চান?" data-en="Want to write?"></a></li>' +
          "</ul></div>" +
        "</div>" +
        '<div class="footer-bottom">' +
          "<span>© <span id=\"year\"></span> " + S.name.en + ". <span data-i18n=\"rights\"></span></span>" +
          "<span>" + S.motto + "</span>" +
        "</div>" +
      "</div>";

    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- Scroll reveal -------------------------------- */
  function initReveal() {
    const items = document.querySelectorAll("[data-reveal], [data-reveal-group], .mask-reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }
  window.SBReveal = initReveal;

  /* ---------- Gentle parallax ------------------------------ */
  function initParallax() {
    const nodes = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
    if (!nodes.length || document.documentElement.classList.contains("low-power")) return;
    let ticking = false;
    function update() {
      const h = window.innerHeight;
      nodes.forEach(function (el) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > h + 200) return;
        const speed = parseFloat(el.dataset.parallax) || 0.08;
        const offset = (rect.top + rect.height / 2 - h / 2) * -speed;
        el.style.setProperty("--p", offset.toFixed(1) + "px");
      });
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }, { passive: true });
    update();
  }

  /* ---------- Reduced motion / low power ------------------- */
  function initMotionPrefs() {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) root.classList.add("reduce-motion");
    const slow = (navigator.deviceMemory && navigator.deviceMemory <= 2) ||
                 (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
    if (slow) root.classList.add("low-power");
  }

  /* ---------- Boot ----------------------------------------- */
  function boot() {
    initMotionPrefs();
    buildHeader();
    buildFooter();
    L.apply(document);
    initReveal();
    initParallax();
    window.SBReady = true;
    document.dispatchEvent(new CustomEvent("sb:ready"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
