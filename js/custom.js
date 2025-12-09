
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
  const data = {
    diploma: [
      "Diploma in Computer Science and Engineering",
      "Diploma in Information Technology"
    ],
    undergraduate: [
      "B.Tech in Computer Science and Engineering",
      "B.Tech in Robotics and Automation",
      "B.Tech in Cloud Computing and Big Data",
      "B.Tech in AI & Machine Learning (AI/ML)",
      "B.Tech in Data Science and Engineering",
      "B.Tech in IoT, Cybernetics & Blockchain",
      "B.Tech in Information Technology",
      "B.Tech. in Computing Science and Medical Engineering",
      "B.Sc. in Information Technology",
      "B.Sc. in Computer Science",
      "Bachelor of Computer Application"
    ],
    postgraduate: [
      "M.Tech in Computer Science and Engineering",
      "M.Tech in Computing Science and Medical Engineering",
      "M.Tech in Internet of Things (IOT), Cybernetics & Block Chain Technology",
      "M.Tech in Information Technology",
      "M.Tech in Data Science and Engineering",
      "M.Tech in AI & Machine Learning (AI/ML)",
      "M.Tech in Cloud Computing and Virtualization Technology",
      "M.Tech in Robotics and Automation",
      "M.Sc. in Computer Science",
      "M.Sc. in Information Technology",
      "Master of Computer Application"
    ],
    integrated: [
      "BCA + MCA",
      "B.Tech + M.Tech in Computer Science & Engineering",
      "B.Tech + M.Tech in Information Technology",
      "B.Tech + M.Tech in Data Science & Engineering",
      "B.Tech + M.Tech in Artificial Intelligence and Machine Learning",
      "B.Tech + M.Tech in Cloud Computing and virtualization Technology",
      "B.Tech + M.Tech in Robotics and Automation",
      "B.Tech + MBA in Computer Science & Engineering",
      "B.Tech + MBA in Information Technology",
      "B.Tech + MBA in Data Science & Engineering",
      "B.Tech + MBA in Artificial Intelligence and Machine Learning",
      "B.Tech + MBA in Cloud Computing and virtualization Technology",
      "B.Tech + MBA in Robotics and Automation",
      "B.Tech + MBA in Computer Science & Engineering"
    ],
    phd: [
      "Ph.D. in Computer Science and Engineering",
      "Ph.D. in Cloud Computing and Virtualization Technology",
      "Ph.D. in Computer Science",
      "Ph.D. in Computer Science and Medical Engineering",
      "Ph.D. in Artifical Intelligence and Machine Learning",
      "Ph.D. in Automation and Robotics",
        "Ph.D. in Data Science and Engineering",
        "Ph.D. in Internet of Things (IOT), Cybernetics and Block Chain Technology",
        "Ph.D. in Electric Vehicle Technology"
    ]
  };

  const grid = document.getElementById("courseGrid");
  const tabs = document.querySelectorAll(".tabItem");

  function loadCourses(key) {
    grid.innerHTML = "";
    const list = data[key];

    list.forEach((text, i) => {
      const card = document.createElement("div");
      card.className = "courseCard";
      card.textContent = text;
      grid.appendChild(card);

      card.style.opacity = "0";
      card.style.transform = "translateY(10px)";
      setTimeout(() => {
        card.style.transition = "0.35s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 70 * i);
    });
  }

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(x => x.classList.remove("active"));
      btn.classList.add("active");
      loadCourses(btn.dataset.key);
    });
  });

  loadCourses("diploma");
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
