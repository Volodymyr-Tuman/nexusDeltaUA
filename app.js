function theme() {
  document.body.classList.toggle("light");
  const icon = document.getElementById("themeIcon");
  icon.src = document.body.classList.contains("light") ? "moon.png" : "sun.png";
}

const fadeElements = document.querySelectorAll(".fade-in, .fade-in-up");
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) el.classList.add("visible");
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
