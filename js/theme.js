/* ============================================================
   theme.js — Light / Dark / Device theme
   The choice is stored in localStorage under "sb-theme".
   Values: "light" | "dark" | "system"
   ============================================================ */

(function () {
  "use strict";

  const KEY = "sb-theme";
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  let choice = "system"; /* EDIT: default theme — "light", "dark" or "system" */

  function resolve(value) {
    if (value === "system") return media.matches ? "dark" : "light";
    return value;
  }

  function paint() {
    const resolved = resolve(choice);
    document.documentElement.setAttribute("data-theme", resolved);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", resolved === "dark" ? "#0E0F12" : "#FBFAF8");

    document.querySelectorAll(".theme-menu button").forEach(function (b) {
      b.setAttribute("aria-checked", String(b.dataset.theme === choice));
    });
  }

  function set(value) {
    choice = ["light", "dark", "system"].indexOf(value) > -1 ? value : "system";
    try { localStorage.setItem(KEY, choice); } catch (e) {}
    paint();
  }

  try {
    const saved = localStorage.getItem(KEY);
    if (saved) choice = saved;
  } catch (e) {}

  paint();
  media.addEventListener ? media.addEventListener("change", paint) : media.addListener(paint);

  window.SBTheme = { set: set, get: function () { return choice; }, paint: paint };
})();
