document.querySelectorAll(".dropdown-menu__btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.parentElement.classList.toggle("active");
    btn.setAttribute("aria-expanded", !expanded);
    btn.setAttribute("aria-label", !expanded);
  });
});