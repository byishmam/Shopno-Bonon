/* ============================================================
   team.js — renders the team grid from window.TEAM (js/data.js)
   Clicking a card opens the profile modal.
   ============================================================ */

(function () {
  "use strict";

  const L = window.SBLang;

  function memberHTML(member, index) {
    return '<button type="button" class="member" data-member="' + index + '" data-i18n-aria="teamProfile">' +
      '<span class="member-media"><img src="' + member.photo + '" alt="' + L.pick(member.name) +
        '" loading="lazy" width="400" height="400"></span>' +
      '<span class="member-body">' +
        "<h3>" + L.pick(member.name) + "</h3>" +
        '<p class="member-role">' + L.pick(member.role) + "</p>" +
        '<p class="member-bio">' + L.pick(member.bio) + "</p>" +
      "</span>" +
    "</button>";
  }

  function render() {
    const host = document.getElementById("team-grid");
    if (!host || !window.TEAM) return;
    host.innerHTML = window.TEAM.map(memberHTML).join("");
    L.apply(host);
    if (window.SBReveal) window.SBReveal();
  }

  document.addEventListener("click", function (e) {
    const card = e.target.closest("[data-member]");
    if (!card) return;
    const member = window.TEAM[parseInt(card.dataset.member, 10)];
    if (member) window.SBModal.open(member);
  });

  if (window.SBReady) render(); else document.addEventListener("sb:ready", render);
  document.addEventListener("sb:langchange", render);
})();
