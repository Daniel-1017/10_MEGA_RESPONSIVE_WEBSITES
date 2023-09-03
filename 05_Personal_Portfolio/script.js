const nav = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");

const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];

const navOffsetTop = nav.offsetTop;

const mainFn = () => {
  if (window.pageYOffset >= navOffsetTop) nav.classList.add("sticky");
  else nav.classList.remove("sticky");

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navLinks.forEach((navLink) => navLink.classList.remove("change"));
      navLinks[i].classList.add("change");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};
mainFn();

window.addEventListener("scroll", mainFn);
window.addEventListener("resize", () => {
  window.location.reload();
});
