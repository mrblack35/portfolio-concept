//nav hamburger menu on smaller screens

const hamburger = document.querySelector(".toggle-mobile-button");
const navMenu = document.querySelector(".navbar-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const linkItem = document.querySelectorAll(".link-item");

linkItem.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//swiper carousel slider for projects page

const swiper = new Swiper('.swiper', {

    // Optional parameters
    loop: true,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
  
    // If we need pagination
     pagination: {
       el: '.swiper-pagination',
       dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        850: {
            spaceBetween: 70,
        },
    },
  });
  