const hamburgerMenu = document.querySelector(".hamburger-menu");
const header = document.querySelector("header");
const mobileNav = document.querySelector(".mobile-nav");

console.log(hamburgerMenu);
hamburgerMenu.onclick = function mobileNavActive(e) {
  console.log(e);
  if (!header.classList.contains("active")) {
    header.classList.add("active");
    mobileNav.classList.add("active");
  } else {
    header.classList.remove("active");
    mobileNav.classList.remove("active");
  }
};

const navLinks = mobileNav.querySelectorAll("a");

navLinks.forEach((link) => {
  link.onclick = (e) => {
    header.classList.remove("active");
    mobileNav.classList.remove("active");
  };
});
