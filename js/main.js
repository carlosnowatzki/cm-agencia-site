/* ==========================================================
   CM Agência · comportamento do site (sem dependências)
   Para trocar o número de WhatsApp: busque 5551985705174 no projeto
   inteiro e substitua (HTML + este arquivo). Veja o README.
   ========================================================== */
(function () {
  "use strict";

  var WHATSAPP = "5551985705174";

  // ---- menu mobile ----
  var burger = document.querySelector(".burger");
  var menu = document.getElementById("menu");
  function setMenu(open) {
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    menu.classList.toggle("open", open);
  }
  burger.addEventListener("click", function () {
    setMenu(burger.getAttribute("aria-expanded") !== "true");
  });
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  // ---- sombra do header ao rolar ----
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- filtro de projetos ----
  var filterBtns = document.querySelectorAll(".filters button");
  var cards = document.querySelectorAll(".proj[data-seg]");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = btn.dataset.f;
      filterBtns.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      cards.forEach(function (c) { c.hidden = f !== "all" && c.dataset.seg !== f; });
    });
  });

  // ---- revelar ao rolar ----
  var targets = document.querySelectorAll(".rv, .gauge");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    targets.forEach(function (t) { t.classList.add("in"); });
  }

  // ---- formulário → WhatsApp ----
  var form = document.getElementById("form-orcamento");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var nome = form.nome.value.trim();
    if (!nome) { form.nome.focus(); form.nome.setCustomValidity("Informe seu nome"); form.nome.reportValidity(); form.nome.setCustomValidity(""); return; }
    var negocio = form.negocio.value.trim();
    var msg = form.mensagem.value.trim();
    var text = "Olá! Meu nome é " + nome + "." +
      (negocio ? " Tenho um negócio na área de " + negocio + "." : "") +
      " Quero um orçamento para o meu site." +
      (msg ? "\n\n" + msg : "");
    window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(text), "_blank", "noopener");
  });

  // ---- ano do rodapé ----
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
