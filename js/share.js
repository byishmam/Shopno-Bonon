/* ============================================================
   share.js — "Share" button for the article page

   How it works
   ------------
   articles.js calls window.SBShare.buttonHTML(article) while it
   builds the article page, which returns a ready-made button +
   dropdown (Facebook, X, WhatsApp, LinkedIn, Telegram, Email,
   Copy link, and the device's native share sheet when available).
   This file wires up the open/close behaviour and the "copy
   link" / native-share actions once, using event delegation, so
   it keeps working even after articles.js rebuilds the page on
   a language switch.

   EDIT: add/remove a network by editing the NETWORKS list below.
   ============================================================ */

(function () {
  "use strict";

  const L = window.SBLang;

  /* ---------- Icons not already in the shared icon set ------ */
  const ICONS = {
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.6A9.4 9.4 0 0 0 3.8 17.1L2.5 21.5l4.6-1.2A9.4 9.4 0 1 0 12 2.6zm0 17a7.6 7.6 0 0 1-3.9-1.1l-.3-.2-2.8.7.7-2.7-.2-.3A7.6 7.6 0 1 1 12 19.6zm4.2-5.7c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.4-1.8-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 2 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.5 4.5 18.3 19.9c-.2 1.1-.9 1.3-1.8.8l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L6 12.3l-4.8-1.5c-1-.3-1-1 .2-1.5L20.3 3.3c.9-.3 1.6.2 1.2 1.2z"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.5 14.5 14.5 9.5"/><path d="M11 6.5 12.6 4.9a3.4 3.4 0 0 1 4.8 4.8L15.8 11.3"/><path d="M13 17.5 11.4 19.1a3.4 3.4 0 0 1-4.8-4.8L8.2 12.7"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>',
    dots: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="1.6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="6" cy="19" r="1.6" fill="currentColor" stroke="none"/><path d="m9.3 10.3 5.4-3.6M9.3 13.7l5.4 3.6"/></svg>'
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function articleUrl(article) {
    return location.origin + location.pathname + "?id=" + article.id;
  }

  /* ---------- EDIT: the list of networks in the menu --------- */
  function networks(article) {
    const url = encodeURIComponent(articleUrl(article));
    const title = encodeURIComponent(L.pick(article.title));
    const I = window.SBIcons || {};
    return [
      { key: "facebook", icon: I.facebook, label: L.t("shareFacebook"), href: "https://www.facebook.com/sharer/sharer.php?u=" + url },
      { key: "x", icon: I.x, label: L.t("shareX"), href: "https://twitter.com/intent/tweet?url=" + url + "&text=" + title },
      { key: "whatsapp", icon: ICONS.whatsapp, label: L.t("shareWhatsapp"), href: "https://wa.me/?text=" + title + "%20" + url },
      { key: "telegram", icon: ICONS.telegram, label: L.t("shareTelegram"), href: "https://t.me/share/url?url=" + url + "&text=" + title },
      { key: "linkedin", icon: I.linkedin, label: L.t("shareLinkedin"), href: "https://www.linkedin.com/sharing/share-offsite/?url=" + url },
      { key: "email", icon: I.email, label: L.t("shareEmail"), href: "mailto:?subject=" + title + "&body=" + url }
    ];
  }

  /* ---------- Markup used by articles.js --------------------- */
  function buttonHTML(article) {
    const items = networks(article).map(function (n) {
      return '<a href="' + n.href + '" target="_blank" rel="noopener noreferrer" role="menuitem" data-network="' + n.key + '">' +
        n.icon + "<span>" + esc(n.label) + "</span></a>";
    }).join("");

    const nativeItem = (typeof navigator !== "undefined" && navigator.share)
      ? '<button type="button" role="menuitem" class="share-native">' + ICONS.dots + "<span>" + esc(L.t("shareMore")) + "</span></button>"
      : "";

    return '<div class="share-wrap">' +
      '<button type="button" class="btn btn--ghost share-btn" id="share-btn" aria-haspopup="true" aria-expanded="false" data-url="' + esc(articleUrl(article)) + '" data-title="' + esc(L.pick(article.title)) + '">' +
        ICONS.link + "<span>" + esc(L.t("share")) + "</span>" +
      "</button>" +
      '<div class="share-menu" id="share-menu" role="menu">' +
        items + nativeItem +
        '<button type="button" role="menuitem" class="share-copy" data-url="' + esc(articleUrl(article)) + '">' +
          '<span class="share-copy-icon">' + ICONS.link + "</span><span>" + esc(L.t("copyLink")) + "</span></button>" +
      "</div>" +
    "</div>";
  }

  /* ---------- Behaviour (delegated, wired once) --------------- */
  function closeMenu() {
    const menu = document.getElementById("share-menu");
    const btn = document.getElementById("share-btn");
    if (menu) menu.classList.remove("open");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  function copyLink(button) {
    const url = button.dataset.url;
    const finish = function (ok) {
      if (!ok) return;
      const label = button.querySelector("span:last-child");
      const iconWrap = button.querySelector(".share-copy-icon");
      const prevLabel = label ? label.textContent : "";
      const prevIcon = iconWrap ? iconWrap.innerHTML : "";
      button.classList.add("is-copied");
      if (iconWrap) iconWrap.innerHTML = ICONS.check;
      if (label) label.textContent = L.t("linkCopied");
      setTimeout(function () {
        button.classList.remove("is-copied");
        if (iconWrap) iconWrap.innerHTML = prevIcon;
        if (label) label.textContent = prevLabel;
      }, 1800);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () { finish(true); }, function () { finish(false); });
    } else {
      /* Fallback for older browsers */
      const tmp = document.createElement("textarea");
      tmp.value = url;
      tmp.style.position = "fixed";
      tmp.style.opacity = "0";
      document.body.appendChild(tmp);
      tmp.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(tmp);
      finish(ok);
    }
  }

  document.addEventListener("click", function (e) {
    const btn = e.target.closest("#share-btn");
    if (btn) {
      e.stopPropagation();
      const menu = document.getElementById("share-menu");
      const open = !menu.classList.contains("open");
      menu.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
      return;
    }

    const nativeBtn = e.target.closest(".share-native");
    if (nativeBtn) {
      const shareBtn = document.getElementById("share-btn");
      if (shareBtn && navigator.share) {
        navigator.share({ title: shareBtn.dataset.title, url: shareBtn.dataset.url }).catch(function () {});
      }
      closeMenu();
      return;
    }

    const copyBtn = e.target.closest(".share-copy");
    if (copyBtn) {
      copyLink(copyBtn);
      return;
    }

    if (e.target.closest("#share-menu a[data-network]")) {
      closeMenu();
      return;
    }

    if (!e.target.closest(".share-wrap")) closeMenu();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  window.SBShare = { buttonHTML: buttonHTML };
})();
