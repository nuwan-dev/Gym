// mobile nav bar
const tglBtn = document.querySelector(".mb-tp-nav-tgl-btn");
const mbNav = document.querySelector(".mb-nav");
tglBtn.addEventListener("click", () => {
  tglBtn.classList.toggle("mb-tgl-btn-active");
  mbNav.classList.toggle("mb-nav-active");
});

const topNav = document.querySelector(".gym-mb-top-nav-container");
window.addEventListener("scroll", () => {
  // if (window.scrollY > 1) {
  //   topNav.classList.add("mb-nav-scroll");
  // } else {
  //   topNav.classList.remove("mb-nav-scroll");
  // }

  window.scrollY > 1
    ? topNav.classList.add("mb-nav-scroll")
    : topNav.classList.remove("mb-nav-scroll");
});

// slick
$(".exp-slider").slick({
  slidesToShow: 3,
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
        arrows: false,
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

// mobile slider icon touch color change
const expSlides = document.querySelectorAll(".exp-slide");
expSlides.forEach((el) => {
  el.addEventListener("touchstart", () => {
    el.classList.add("exp-slide-touch");
  });

  el.addEventListener("touchend", () => {
    el.classList.remove("exp-slide-touch");
  });
});

const prcY = document.querySelector(".prc-y");
const prcM = document.querySelector(".prc-m");
const prcS = document.querySelector(".prc-btn-slide");
const prcPack1 = document.querySelector(".prc-pack-1-prc");
prcY.addEventListener("click", () => {
  if (prcM.classList.contains("prc-btn-active")) {
    prcM.classList.remove("prc-btn-active");
    prcY.classList.add("prc-btn-active");
    prcS.classList.add("prc-active-slide");
    prcPack1.innerHTML = "$250";
  }
});

prcM.addEventListener("click", () => {
  if (prcY.classList.contains("prc-btn-active")) {
    prcY.classList.remove("prc-btn-active");
    prcM.classList.add("prc-btn-active");
    prcS.classList.remove("prc-active-slide");
    prcPack1.innerHTML = "$25";
  }
});
