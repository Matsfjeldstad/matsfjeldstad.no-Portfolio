const header = document.querySelector("header");
const hero = document.querySelector(".hero");
const navLinks = document.querySelectorAll(".regNavLink");
const logo = document.querySelector(".logo");
const headerChangeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        console.log(entry.target);
        header.style.backgroundColor = "#f5f5f5";
        navLinks.forEach((navLink) => {
          navLink.style.color = "#525252";
        });
        logo.style.color = "#525252";
      }
      if (entry.isIntersecting) {
        header.style.backgroundColor = "transparent";
        navLinks.forEach((navLink) => {
          navLink.style.color = "#f5f5f5";
        });
        logo.style.color = "#f5f5f5";
      }

      // entry.target.classList.toggle("from-left", entry.isIntersecting);
    });
  },
  { rootMargin: "-80px" },
);

headerChangeObserver.observe(hero);
