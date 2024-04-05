const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    navLinks.forEach((link) => link.classList.remove("active"));

    this.classList.add("active");
  });
});

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  navLinks.forEach((link) => {
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (
      targetElement &&
      scrollPosition >=
        targetElement.offsetTop -
          document.querySelector(".navbar").offsetHeight &&
      scrollPosition < targetElement.offsetTop + targetElement.offsetHeight
    ) {
      navLinks.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  var logo = document.querySelector(".logo");
  var logoLink = document.getElementById("logo-link");
  if (window.scrollY > 20) {
    logo.style.width = "65px";
  } else {
    logo.style.width = "120px";
    logoLink.style.padding = "0";
  }
});

// Add this to javascript.js

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const modeLabel = document.querySelector(".mode-label");

  // Check user preference or previous selection from localStorage
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  darkModeToggle.checked = isDarkMode;
  body.classList.toggle("dark-mode", isDarkMode);

  // Toggle dark mode on switch change
  darkModeToggle.addEventListener("change", function () {
    const isDarkMode = darkModeToggle.checked;
    body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  });
});

document.body.onmousemove = function (e) {
  document.documentElement.style.setProperty(
    "--x",
    e.clientX + window.scrollX + "px"
  );
  document.documentElement.style.setProperty(
    "--y",
    e.clientY + window.scrollY + "px"
  );
};

document.addEventListener("DOMContentLoaded", function() {
  const galleryContainer = document.querySelector(".gallery-container");
  const galleryControlsContainer = document.querySelector(".gallery-controls");
  const galleryControls = ["previous", "next"];
  const galleryItems = document.querySelectorAll(".gallery-item");

  class Carousel {
    constructor(container, items, controls) {
      this.carouselContainer = container;
      this.carouselControls = controls;
      this.carouselArray = [...items];
    }

    updateGallery() {
      this.carouselArray.forEach((el) => {
        el.classList.remove("gallery-item-1", "gallery-item-2", "gallery-item-3", "gallery-item-4", "gallery-item-5");
      });

      this.carouselArray.slice(0, 5).forEach((el, i) => {
        el.classList.add(`gallery-item-${i + 1}`);
      });
    }

    setCurrentState(direction) {
      if (direction.className === "gallery-controls-previous") {
        this.carouselArray.unshift(this.carouselArray.pop());
      } else {
        this.carouselArray.push(this.carouselArray.shift());
      }
      this.updateGallery();
    }

    setControls() {
      this.carouselControls.forEach((control) => {
        const button = document.createElement("button");
        button.className = `gallery-controls-${control}`;
        button.innerText = control;
        galleryControlsContainer.appendChild(button);
      });
    }

    useControls() {
      const triggers = [...galleryControlsContainer.querySelectorAll("button")];
      triggers.forEach((control) => {
        control.addEventListener("click", (e) => {
          e.preventDefault();
          this.setCurrentState(control);
        });
      });
    }
  }

  const exampleCarousel = new Carousel(
    galleryContainer,
    galleryItems,
    galleryControls
  );

  exampleCarousel.setControls();
  exampleCarousel.useControls();
});