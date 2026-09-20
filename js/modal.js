/* ============================================================
   modal.js — profile popup for authors and team members
   Open it from anywhere with:
     SBModal.open(personObject);
   On mobile it becomes a bottom sheet (see responsive.css).
   ============================================================ */

(function () {
  "use strict";

  const L = window.SBLang;
  let backdrop, panel, lastFocused, currentPerson = null;

  function build() {
    backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.setAttribute("role", "dialog");
    backdrop.setAttribute("aria-modal", "true");
    backdrop.setAttribute("aria-hidden", "true");
    backdrop.innerHTML =
      '<div class="modal" tabindex="-1">' +
        '<button type="button" class="modal-close" data-i18n-aria="closeProfile">' + (window.SBIcons ? window.SBIcons.close : "×") + "</button>" +
        '<div class="modal-cover" aria-hidden="true"></div>' +
        '<div class="modal-head"></div>' +
        '<div class="modal-body"></div>' +
      "</div>";
    document.body.appendChild(backdrop);
    panel = backdrop.querySelector(".modal");

    backdrop.addEventListener("click", function (e) {
      if (e.target === backdrop || e.target.closest(".modal-close")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (!backdrop.classList.contains("open")) return;
      if (e.key === "Escape") { close(); return; }
      if (e.key === "Tab") trapFocus(e);
    });
    document.addEventListener("sb:langchange", function () {
      if (currentPerson && backdrop.classList.contains("open")) render(currentPerson);
    });
  }

  function trapFocus(e) {
    const focusables = panel.querySelectorAll('a[href], button, input, [tabindex]:not([tabindex="-1"])');
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function socialFor(person) {
    const icons = window.SBIcons || {};
    const s = person.social || {};
    const html = Object.keys(s)
      .filter(function (k) { return s[k] && icons[k]; })
      .map(function (k) {
        const label = k === "x" ? "X" : k.charAt(0).toUpperCase() + k.slice(1);
        return '<a href="' + s[k] + '" aria-label="' + label + '" rel="noopener"' +
               (k === "email" ? "" : ' target="_blank"') + ">" + icons[k] + "</a>";
      }).join("");
    return html ? '<div class="social-row" style="margin-top:16px">' + html + "</div>" : "";
  }

  function articlesFor(person) {
    if (!person.key || !window.ARTICLES) return "";
    const list = window.ARTICLES.filter(function (a) { return a.author === person.key; });
    if (!list.length) return "";
    return '<div class="modal-section"><h3>' + L.t("written") + "</h3><ul class=\"modal-articles\">" +
      list.map(function (a) {
        return '<li><a href="article.html?id=' + a.id + '"><span>' + L.pick(a.title) +
               '</span><span class="meta">' + a.readTime + " " + L.t("minRead") + "</span></a></li>";
      }).join("") + "</ul></div>";
  }

  function render(person) {
    const expertise = person.expertise ? (L.pick(person.expertise) || []) : [];
    backdrop.querySelector(".modal-head").innerHTML =
      '<img class="avatar-lg" src="' + person.photo + '" alt="' + L.pick(person.name) + '" width="96" height="96" loading="lazy">';

    backdrop.querySelector(".modal-body").innerHTML =
      "<h2>" + L.pick(person.name) + "</h2>" +
      '<p class="modal-role">' + L.pick(person.role) + "</p>" +
      '<p class="text-secondary" style="font-size:var(--fs-small)">' + L.pick(person.bio) + "</p>" +
      (person.quote ? '<p class="modal-quote">' + L.pick(person.quote) + "</p>" : "") +
      (expertise.length
        ? '<div class="modal-section"><h3>' + L.t("expertise") + '</h3><div class="chip-row">' +
          expertise.map(function (x) { return '<span class="chip">' + x + "</span>"; }).join("") + "</div></div>"
        : "") +
      (person.achievement ? '<p class="meta" style="margin-top:16px">' + L.pick(person.achievement) + "</p>" : "") +
      articlesFor(person) +
      socialFor(person);

    L.apply(backdrop);
  }

  function open(person) {
    if (!backdrop) build();
    currentPerson = person;
    lastFocused = document.activeElement;
    render(person);
    backdrop.setAttribute("aria-label", L.pick(person.name) + " — " + L.t("profile"));
    backdrop.setAttribute("aria-hidden", "false");
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(function () { panel.focus(); }, 60);
  }

  function close() {
    if (!backdrop) return;
    backdrop.classList.remove("open");
    backdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    currentPerson = null;
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  window.SBModal = { open: open, close: close };
})();
