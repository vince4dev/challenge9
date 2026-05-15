const btn = document.querySelector(".card__btn");

btn.addEventListener("click", () => {
  const isOpen = btn.classList.toggle("active");
  btn.setAttribute("aria-expanded", isOpen);
});
