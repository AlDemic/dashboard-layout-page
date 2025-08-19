const burger = document.getElementById('header__burger');
const menu = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle('active');
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", !expanded);
});


