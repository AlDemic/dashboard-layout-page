//get DOM elements
const burger = document.getElementById('header__burger');
const menu = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

if(!burger || !menu || !overlay) {
    console.error("Some elements are missing in the DOM");
} else {
    //toggle menu on burger click
    burger.addEventListener('click', () => {
        //change class-names for open menu status
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        overlay.classList.toggle('active');
        //change aria for open menu status
        const expanded = burger.getAttribute("aria-expanded") === "true";
        burger.setAttribute("aria-expanded", !expanded);
    });
}
