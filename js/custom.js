
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  let ticking = false;
  let lastKnownScroll = 0;

  if (header) {
    window.addEventListener("scroll", function () {
      lastKnownScroll = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function () {
          header.classList.toggle("fixed-header", lastKnownScroll > 100);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // CHECK JQUERY BEFORE USING $
  if (window.jQuery) {

    // PLACEMENTS SLIDER
    $(".placements-slider").owlCarousel({
      loop: true,
      margin: 20,
      center: true,
      stagePadding: 60,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      smartSpeed: 2000,
      items: 1,
      responsive: {
        0:   { items: 1, stagePadding: 30 },
        576: { items: 1.2, stagePadding: 40 },
        768: { items: 2, stagePadding: 40 },
        992: { items: 3, stagePadding: 20 }
      }
    });

    // LOGO SLIDER
    $(".partner-slider").owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 2000,
      smartSpeed: 1400,
      autoplayHoverPause: false,
      responsive: {
        0: { items: 4, margin: 20 },
        480: { items: 5, margin: 30 },
        768: { items: 7 },
        1024: { items: 7 },
        1400: { items: 7 }
      }
    });

  }
});


document.addEventListener("DOMContentLoaded", function () {
  const $carousel = jQuery(".labsCarousel");
  function initCarousel() {
    if ($carousel.data('owl.loaded')) return;
    $carousel.owlCarousel({
      loop: true,
      margin: 18,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3200,
      autoplayHoverPause: true,
      smartSpeed: 650,
      slideBy: 1,
      responsive: {
        0: { items: 1.5 },
        600: { items: 2 },
        900: { items: 3 },
        1200: { items: 4 }
      }
    });
    $carousel.data('owl.loaded', true);
  }
  initCarousel();
  const prev = document.querySelector(".labsPrev");
  const next = document.querySelector(".labsNext");
  if (prev) prev.addEventListener("click", function () { $carousel.trigger("prev.owl.carousel"); });
  if (next) next.addEventListener("click", function () { $carousel.trigger("next.owl.carousel"); });
  function adjustRedBlock() {
    const red = document.querySelector(".labsSection .labsRedBlock");
    const firstImg = document.querySelector(".labsSection .labImg");
    if (!red || !firstImg) return;
    const imgRect = firstImg.getBoundingClientRect();
    const containerRect = document.querySelector(".labsSection .labsInner").getBoundingClientRect();
    const topOffset = firstImg.offsetTop + (firstImg.offsetHeight / 2) - (red.offsetHeight / 2);
    red.style.top = (topOffset > 20 ? topOffset : 86) + "px";
  }
  adjustRedBlock();
  window.addEventListener("resize", adjustRedBlock);
});
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tabItem");
  const scrollBox = document.querySelector(".programTabs");

  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      scrollBox.scrollTo({
        left: tab.offsetLeft - 10,
        behavior: "smooth"
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const applyBtn = document.getElementById("applyNowBtn");
  const firstSection = document.querySelector(".hero");
  const formPanel = document.querySelector(".right-form");

  function toggleButton() {
    const sectionBottom = firstSection.offsetTop + firstSection.offsetHeight;
    const scrollPos = window.scrollY + window.innerHeight;

    if (window.scrollY < sectionBottom - 120) {
      applyBtn.classList.remove("show");
    } else {
      applyBtn.classList.add("show");
    }
  }

  window.addEventListener("scroll", toggleButton);
  toggleButton();

  applyBtn.addEventListener("click", () => {
    if (formPanel) {
      formPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
//life at nims slider
$(".lifeatnims-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 700,
    dots: false,
    nav: false,
});


  // placements
  $('.placements-owl').owlCarousel({
    loop: true,
    margin: 40,
    center: true,
    nav: true,
    dots: false,
    
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 2000,

    navText: [
      "<span class='owl-prev'>‹</span>",
      "<span class='owl-next'>›</span>"
    ],

    responsive: {
      0: {
        items: 1,
        center: false
      },
      768: {
        items: 2,
        center: false
      },
      1024: {
        items: 3,
        center: true
      }
    }
  });

  // HONOURS LOGO SLIDER 
  $('.honours-logos-owl').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 2, },
      576: { items: 3 },
      768: { items: 4 },
      992: { items: 8, loop: false, autoplay: false,}
    }
  });


  
