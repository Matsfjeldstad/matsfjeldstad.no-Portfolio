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

const projectSectionObserver = new IntersectionObserver(
  (enrties) => {
    enrties.forEach((entry) => {
      header.classList.toggle("light", entry.isIntersecting);
      logo.classList.toggle("light", entry.isIntersecting);
      hamburgerMenu.classList.toggle("light", entry.isIntersecting);
    });
  },
  {
    // rootMargin: "80px",
    threshold: 0.166,
  },
);

projectSectionObserver.observe(projcetSection);

const options = {};
const animatingElementsLeft = document.querySelectorAll(".from-left");
const moveInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      if (entry.isIntersecting) {
        entry.target.classList.toggle("anim-left", entry.isIntersecting);
      }

      // entry.target.classList.toggle("from-left", entry.isIntersecting);
    });
  },
  { rootMargin: "-80px" },
);

animatingElementsLeft.forEach((element) => {
  moveInObserver.observe(element);
});

const coffeeMug = document.querySelector(".coffee-mug");
const coffeeSplash = document.querySelector(".coffee-splash");

const coffeecupObserverFunction = (entries) => {
  entries.forEach((entry) => {
    entry.target.style.transform = `translateX(0px)`;
    window.addEventListener("scroll", function (e) {
      console.log(entry.target.style.transform);
      entry.target.style.transform = `translateY(${
        (window.pageYOffset - 5000) * -0.05
      }px)`;
    });
  });
};

const coffeecupObserver = new IntersectionObserver(
  coffeecupObserverFunction,
  {},
);

// coffeecupObserver.observe(coffeeMug);
coffeecupObserver.observe(coffeeSplash);
