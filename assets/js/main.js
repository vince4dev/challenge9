const btn = document.querySelector(".card__btn");
const menu = document.querySelector(".card__menu");

function closeMenu() {
  if (!btn) return;
  btn.classList.remove("active");
  btn.setAttribute("aria-expanded", false);
  if (menu) menu.setAttribute("aria-hidden", true);
  btn.focus();
}

function onKeyDown(e) {
  if (e.key === "Escape" || e.key === "Esc") {
    closeMenu();
    document.removeEventListener("keydown", onKeyDown);
  }
}

if (btn) {
  // initial accessibility state
  btn.setAttribute("aria-expanded", false);
  if (menu) menu.setAttribute("aria-hidden", true);

  btn.addEventListener("click", () => {
    const isOpen = btn.classList.toggle("active");
    btn.setAttribute("aria-expanded", isOpen);

    if (menu) {
      menu.setAttribute("aria-hidden", !isOpen);
      if (isOpen) {
        const firstLink = menu.querySelector(".card__menu-link a");
        if (firstLink) firstLink.focus();
        document.addEventListener("keydown", onKeyDown);
      } else {
        document.removeEventListener("keydown", onKeyDown);
        btn.focus();
      }
    }
  });

  // close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu) return;
    if (!btn.classList.contains("active")) return;
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      closeMenu();
    }
  });
}
