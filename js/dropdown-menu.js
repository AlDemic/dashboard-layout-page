//Make each dropdown menu "active" by changing class-name
document.querySelectorAll(".dropdown-menu__btn").forEach(btn => {
  btn.addEventListener("click", () => {
    //set active status for "active" submenu
    btn.parentElement.classList.toggle("active");
    //change aria status for open/close submenu
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);
  });
});