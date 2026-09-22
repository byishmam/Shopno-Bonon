/* ============================================================
   preloader.js — drives the loading screen markup injected
   right after <body>. Runs immediately (not deferred) so the
   hide-on-load listener is registered before the load event
   can possibly fire.
   ============================================================ */
(function () {
  "use strict";

  /* EDIT THIS to make the preloader slower/faster.
     It's the MINIMUM time (in milliseconds) the preloader stays
     on screen, even if the page itself loads instantly.
     1000 = 1 second, 2000 = 2 seconds, etc. */
  var MIN_VISIBLE_MS = 1600;

  var docEl = document.documentElement;
  docEl.classList.add("sb-loading");
  var startedAt = Date.now();

  var reduceMotion = false;
  try {
    reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {}

  function whenReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  whenReady(function () {
    var el = document.getElementById("sb-preloader");
    if (!el) { docEl.classList.remove("sb-loading"); return; }

    var fill = el.querySelector(".sb-preloader__bar-fill");
    var done = false;
    var progress = 0;

    /* Fake-but-honest progress: creeps toward 90% while real
       resources are still loading, never claims 100% early. */
    var ticker = null;
    if (fill) {
      ticker = setInterval(function () {
        progress += (90 - progress) * 0.12 + 0.5;
        if (progress > 90) progress = 90;
        fill.style.width = progress + "%";
      }, 140);
    }

    function reveal() {
      if (done) return;
      done = true;
      if (ticker) clearInterval(ticker);
      if (fill) fill.style.width = "100%";

      var settle = reduceMotion ? 80 : 260;
      setTimeout(function () {
        el.classList.add("is-done");
        docEl.classList.remove("sb-loading");
        setTimeout(function () {
          if (el && el.parentNode) el.parentNode.removeChild(el);
        }, reduceMotion ? 320 : 750);
      }, settle);
    }

    /* Waits for the real page load, but never reveals before
       MIN_VISIBLE_MS has passed since the preloader appeared. */
    function finish() {
      var elapsed = Date.now() - startedAt;
      var remaining = MIN_VISIBLE_MS - elapsed;
      if (remaining > 0) {
        setTimeout(reveal, remaining);
      } else {
        reveal();
      }
    }

    window.addEventListener("load", finish);
    /* Safety net: never let a slow/stalled resource trap the user
       behind the preloader indefinitely. */
    setTimeout(reveal, 6000);
  });
})();
