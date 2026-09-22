/* ============================================================
   team.js — renders the people grids on team.html

   Two grids are supported. Each reads a different list from
   js/data.js and is matched by the id of its container:

     #exec-grid      ->  window.EXECUTIVES  (+ window.EXEC_TERM label)
     #team-grid      ->  window.TEAM

   Both grids drift sideways ("marquee") instead of sitting in a
   static grid — see .team-marquee in css/style.css. To make the
   drift loop seamlessly, each list is rendered twice: once as the
   real cards, once as a cloned set (marked data-clone="true",
   aria-hidden, unfocusable) that visually continues the row.
   Clicking a clone still opens the right profile — only its
   index into the original list is used.

   Founders are no longer shown on this page (having them sit in
   their own block above everyone else read oddly) — the data
   still lives in js/data.js -> window.FOUNDERS if it's wanted on
   another page later.

   Clicking any card opens the profile modal (js/modal.js).
   ============================================================ */

(function () {
  "use strict";

  const L = window.SBLang;

  const GRIDS = [
    { id: "exec-grid", list: "EXECUTIVES", variant: "exec" },
    { id: "team-grid", list: "TEAM",       variant: "team" }
  ];

  function memberHTML(member, index, listName, variant, isClone) {
    const badge = member.year ? '<span class="member-badge">' + member.year + "</span>" : "";

    return '<button type="button" class="member member--' + variant + '"' +
      ' data-person-list="' + listName + '" data-person="' + index + '"' +
      (isClone ? ' data-clone="true" aria-hidden="true" tabindex="-1">' :
        ' data-i18n-aria="teamProfile">') +
      '<span class="member-media">' + badge +
        '<img src="' + member.photo + '" alt="' + L.pick(member.name) +
        '" loading="lazy" width="400" height="400">' +
      "</span>" +
      '<span class="member-body">' +
        '<span class="member-name">' + L.pick(member.name) + "</span>" +
        '<span class="member-role">' + L.pick(member.role) + "</span>" +
        '<span class="member-bio">' + L.pick(member.bio) + "</span>" +
      "</span>" +
    "</button>";
  }

  function render() {
    GRIDS.forEach(function (g) {
      const host = document.getElementById(g.id);
      const list = window[g.list];
      if (!host) return;

      /* No data for this list -> hide the whole section rather than
         leaving an empty gap on the page. */
      const section = host.closest("[data-people-section]");
      if (!list || !list.length) {
        if (section) section.hidden = true;
        return;
      }
      if (section) section.hidden = false;

      const real = list.map(function (m, i) { return memberHTML(m, i, g.list, g.variant, false); }).join("");
      /* One clone pass is enough to cover the -50% loop — skip it
         for a single-person list, where a scrolling copy of itself
         would just look like a mistake. */
      const clones = list.length > 1
        ? list.map(function (m, i) { return memberHTML(m, i, g.list, g.variant, true); }).join("")
        : "";

      host.innerHTML = real + clones;
      L.apply(host);
    });

    document.querySelectorAll("[data-exec-term]").forEach(function (el) {
      el.textContent = window.EXEC_TERM ? L.pick(window.EXEC_TERM) : "";
    });

    if (window.SBReveal) window.SBReveal();
  }

  document.addEventListener("click", function (e) {
    const card = e.target.closest("[data-person]");
    if (!card) return;
    const list = window[card.dataset.personList];
    const person = list && list[parseInt(card.dataset.person, 10)];
    if (person) window.SBModal.open(person);
  });

  if (window.SBReady) render(); else document.addEventListener("sb:ready", render);
  document.addEventListener("sb:langchange", render);
})();
