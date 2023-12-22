const tglBtn = document.querySelector(".mb-tp-nav-tgl-btn");
const mbNav = document.querySelector(".mb-nav");
tglBtn.addEventListener("click", () => {
  tglBtn.classList.toggle("mb-tgl-btn-active");
  mbNav.classList.toggle("mb-nav-active");
});

const topNav = document.querySelector(".gym-mb-top-nav-container");
window.addEventListener("scroll", () => {
  window.scrollY > 1
    ? topNav.classList.add("mb-nav-scroll")
    : topNav.classList.remove("mb-nav-scroll");
});
