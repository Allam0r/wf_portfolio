const typed = new Typed(".typed", {
  strings: ["Développeur Web."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 3000,
  loop: true,
});

document.addEventListener("wheel", (event) => {
  const sections = document.querySelectorAll(".section");
  const currentSectionIndex = Array.from(sections).findIndex((section) => {
    return section.getBoundingClientRect().top === 0;
  });

  if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
    sections[currentSectionIndex + 1].scrollIntoView({ behavior: "smooth" });
  } else if (event.deltaY < 0 && currentSectionIndex > 0) {
    sections[currentSectionIndex - 1].scrollIntoView({ behavior: "smooth" });
  }
});
