const iris = document.getElementById("iris");

document.onmousemove = () => {
  let xAxis = (event.clientX * 100) / window.innerWidth;
  let yAxis = (event.clientY * 100) / window.innerHeight;

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

const navbar = document.getElementsByClassName("navbar")[0];
const mobileNavbar = document.getElementsByClassName("navbar-mobile")[0];
const mobileAction = document.getElementsByClassName("mobile")[0];
const eyeNavbar = document.getElementById("eye");
const bodyElement = document.getElementsByTagName("body")[0];

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
  mobileAction.classList.add("close");
  eyeNavbar.style.visibility = "hidden";
  bodyElement.style.overflow = "hidden";

  if (mobileNavbar.classList.contains("show")) {
    mobileAction.classList.remove("close");
    eyeNavbar.style.visibility = "visible";
    bodyElement.style.overflow = "auto";
  }

  mobileNavbar.classList.toggle("show");
};

const closeMobileNavbar = () => {
  if (mobileNavbar.classList.contains("show")) {
    mobileAction.classList.remove("close");
    mobileNavbar.classList.remove("show");
    eyeNavbar.style.visibility = "visible";
    bodyElement.style.overflow = "auto";
  }
};
