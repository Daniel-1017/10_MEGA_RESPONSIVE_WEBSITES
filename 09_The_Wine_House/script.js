const sections = document.querySelectorAll("section");
let counter1 = 0,
  counter2 = 1;

window.addEventListener("wheel", e => {
  const deltaY = e.deltaY > 0;

  if (deltaY) {
    counter1++;
    counter2++;
  } else {
    counter1--;
    counter2--;
  }

  if (counter1 === 5) {
    Array.from(sections).forEach(section => (section.style.left = 0));
    counter1 = 0;
    counter2 = 1;
    return;
  }

  if (counter1 === -1) {
    Array.from(sections).forEach(section => {
      if (section.classList[0] === "section-5") return;
      section.style.left = "-100vw";
    });
    counter1 = sections.length - 1;
    counter2 = sections.length;
  }

  document.querySelector(
    `.section-${deltaY ? counter1 : counter2}`
  ).style.left = `${deltaY ? "-100vw" : "0"}`;
});
