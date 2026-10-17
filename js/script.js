/* Guia Web de Arquitetura de Software - troca de idioma PT/EN */
(function () {
  var root = document.documentElement;
  var KEY = "guia-arq-lang";

  function getSaved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function save(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) { /* sem armazenamento: segue normal */ }
  }

  function apply(lang) {
    if (lang !== "en") lang = "pt";
    root.setAttribute("data-ui", lang);
    root.setAttribute("lang", lang === "en" ? "en" : "pt-BR");

    var t = root.getAttribute("data-title-" + lang);
    if (t) document.title = t;

    var labelled = document.querySelectorAll("[data-aria-" + lang + "]");
    for (var j = 0; j < labelled.length; j++) {
      labelled[j].setAttribute("aria-label", labelled[j].getAttribute("data-aria-" + lang));
    }

    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      var b = buttons[i];
      b.setAttribute("aria-pressed", b.getAttribute("data-set-lang") === lang ? "true" : "false");
    }
  }

  apply(getSaved() || "pt");

  document.addEventListener("click", function (ev) {
    var btn = ev.target.closest ? ev.target.closest("[data-set-lang]") : null;
    if (!btn) return;
    var lang = btn.getAttribute("data-set-lang");
    apply(lang);
    save(lang);
  });
})();
