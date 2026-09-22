/* ============================================================
   skills.js — renders the "What gets built here" row on index.html
   (#skills-grid) and lets it drift sideways on its own, the same
   way the team rows do — see .skill-marquee in css/style.css.

   The list is rendered twice: once as the real cards, once as a
   cloned set (data-clone="true", aria-hidden, unfocusable) that
   visually continues the row so the -50% loop never shows a seam.
   Hovering/focusing the row pauses it so people can actually read
   a card. Edit the ten skills below to change what shows here.
   ============================================================ */

(function () {
  "use strict";

  const L = window.SBLang;

  const SKILLS = [
    { name: { bn: "পাবলিক স্পিকিং", en: "Public speaking" }, desc: { bn: "মঞ্চ, কণ্ঠ ও উপস্থিতি", en: "Stage, voice and presence" } },
    { name: { bn: "বিতর্ক", en: "Debate" }, desc: { bn: "যুক্তি সাজানো ও খণ্ডন", en: "Building and breaking arguments" } },
    { name: { bn: "লেখা", en: "Writing" }, desc: { bn: "স্পষ্ট বাক্য, সৎ খসড়া", en: "Clear sentences, honest drafts" } },
    { name: { bn: "স্টোরিটেলিং", en: "Storytelling" }, desc: { bn: "মুহূর্ত থেকে গল্প", en: "From a moment to a story" } },
    { name: { bn: "নেতৃত্ব", en: "Leadership" }, desc: { bn: "দল ও দায়িত্ব", en: "Teams and responsibility" } },
    { name: { bn: "আত্মবিশ্বাস", en: "Confidence" }, desc: { bn: "অনুশীলনে তৈরি", en: "Built by repetition" } },
    { name: { bn: "যোগাযোগ", en: "Communication" }, desc: { bn: "বলা ও শোনা", en: "Speaking and listening" } },
    { name: { bn: "সৃজনশীলতা", en: "Creativity" }, desc: { bn: "নিজের ভাষা খোঁজা", en: "Finding your own voice" } },
    { name: { bn: "সমালোচনামূলক চিন্তা", en: "Critical thinking" }, desc: { bn: "প্রশ্ন করতে শেখা", en: "Learning to ask" } },
    { name: { bn: "পাবলিক প্রেজেন্স", en: "Public presence" }, desc: { bn: "মঞ্চের বাইরেও", en: "On stage and off" } }
  ];

  function skillHTML(skill, isClone) {
    return '<div class="skill"' + (isClone ? ' data-clone="true" aria-hidden="true"' : "") + '>' +
      '<span class="s-mark" aria-hidden="true"></span>' +
      "<div>" +
        "<h3>" + L.pick(skill.name) + "</h3>" +
        "<p>" + L.pick(skill.desc) + "</p>" +
      "</div>" +
    "</div>";
  }

  function render() {
    const host = document.getElementById("skills-grid");
    if (!host) return;
    const real = SKILLS.map(function (s) { return skillHTML(s, false); }).join("");
    const clones = SKILLS.map(function (s) { return skillHTML(s, true); }).join("");
    host.innerHTML = real + clones;
  }

  if (window.SBReady) render(); else document.addEventListener("sb:ready", render);
  document.addEventListener("sb:langchange", render);
})();
