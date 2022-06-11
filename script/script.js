const hamburgerMenu = document.querySelector(".hamburger-menu");
const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const nav = document.querySelector("nav");
const mobileNav = document.querySelector(".mobile-nav");
const aboutUsSection = document.querySelector("#about");
const heroSection = document.querySelector("#hero");
const projcetSection = document.querySelector("#projects");
const contactSection = document.querySelector("#contact");

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

let headerScrollOptions = {
  rootMargin: "80px",
  threshold: 0,
};

const onIntersectHeader = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log(entry.target.dataset.theme);
      nav.class = "";
      if (entry.target.dataset.theme === "light") {
        nav.classList.remove("dark");
        logo.classList.remove("dark");
      } else {
        nav.classList.remove("light");
        logo.classList.remove("light");
      }
      nav.classList.add(`${entry.target.dataset.theme}`);
      logo.classList.add(`${entry.target.dataset.theme}`);
    }
  });
};

let headerObserver = new IntersectionObserver(
  onIntersectHeader,
  headerScrollOptions,
);
headerObserver.observe(aboutUsSection);
headerObserver.observe(contactSection);
headerObserver.observe(heroSection);
headerObserver.observe(projcetSection);
