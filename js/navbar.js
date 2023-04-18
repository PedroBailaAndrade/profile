const iris = document.getElementById("iris");

const moveEye = () => {
  if (window.innerWidth > 768) {
    document.onmousemove = () => {
      let xAxis = (event.clientX * 100) / window.innerWidth;
      let yAxis = (event.clientY * 100) / window.innerHeight;

      if (yAxis < 40 && xAxis < 30) {
        yAxis = 50;
        xAxis = 50;
      }

      if (yAxis < 40) {
        yAxis = 40;
      }
      if (yAxis > 76) {
        yAxis = 76;
      }

      if (xAxis < 20) {
        xAxis = 20;
      }
      if (xAxis > 84) {
        xAxis = 84;
      }

      iris.style.left = `${xAxis}%`;
      iris.style.top = `${yAxis}%`;
      iris.style.transform = `translate(-${xAxis}%, -${yAxis})%`;
    };
  } else {
    setInterval(() => {
      let xAxis = Math.floor(Math.random() * (84 - 20 + 1)) + 20;
      let yAxis = Math.floor(Math.random() * (76 - 40 + 1)) + 40;

      iris.style.left = `${xAxis}%`;
      iris.style.top = `${yAxis}%`;
      iris.style.transform = `translate(-${xAxis}%, -${yAxis})%`;
    }, 2500);
  }
};

const navbar = document.getElementsByClassName("navbar-wrapper")[0];
const mobileNavbar = document.getElementsByClassName("navbar-mobile")[0];
const mobileAction = document.getElementsByClassName("mobile")[0];
const eyeNavbar = document.getElementById("eye");
const bodyElement = document.getElementsByTagName("body")[0];
const home = document.getElementById("home");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY && window.scrollY > 10) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }

  lastScrollY = window.scrollY;
});

const toggleMobileNavbar = () => {
  if (mobileAction.classList.contains("open")) {
    mobileAction.classList.remove("open");
    mobileAction.classList.add("close");
  }
  eyeNavbar.style.visibility = "hidden";
  bodyElement.style.overflow = "hidden";

  if (mobileNavbar.classList.contains("show")) {
    if (mobileAction.classList.contains("close")) {
      mobileAction.classList.remove("close");
      mobileAction.classList.add("open");
    }
    eyeNavbar.style.visibility = "visible";
    bodyElement.style.overflow = "auto";
  }

  mobileNavbar.classList.toggle("show");
};

const closeMobileNavbar = () => {
  if (mobileNavbar.classList.contains("show")) {
    if (mobileAction.classList.contains("close")) {
      mobileAction.classList.remove("close");
      mobileAction.classList.add("open");
    }
    mobileNavbar.classList.remove("show");
    eyeNavbar.style.visibility = "visible";
    bodyElement.style.overflow = "auto";
  }
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  },
  { threshold: 0.5 }
);

moveEye();
observer.observe(home);
