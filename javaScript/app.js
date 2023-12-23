// mobile nav bar
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

// slick
$(".exp-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  dots: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});  