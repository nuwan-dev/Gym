const tglBtn = document.querySelector(".mb-tp-nav-tgl-btn");
const mbNav = document.querySelector(".mb-nav");
tglBtn.addEventListener("click", () => {
  mbNav.classList.toggle("mb-nav-active");
});
