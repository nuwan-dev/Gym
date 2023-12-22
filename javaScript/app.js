const tglBtn = document.querySelector(".mb-tp-nav-tgl-btn");
const mbNav = document.querySelector(".mb-nav");

tglBtn.addEventListener("click", () => {
  tglBtn.classList.toggle("mb-tgl-btn-active");
  mbNav.classList.toggle("mb-nav-active");
});
