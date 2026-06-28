document.addEventListener("click", (e) => {
  const toggle = e.target.closest("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");
  if (!menu) return;

  if (toggle) {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    return;
  }

  if (e.target.closest("[data-nav-menu] a")) {
    menu.classList.remove("is-open");
    document.querySelector("[data-nav-toggle]")?.setAttribute("aria-expanded", "false");
  }
});
