
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    navLinks.forEach((link) => link.classList.remove("active"));

    this.classList.add("active");
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

// Add this to javascript.js

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const modeLabel = document.querySelector(".mode-label");

  // Check user preference or previous selection from localStorage
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  darkModeToggle.checked = isDarkMode;
  body.classList.toggle("dark-mode", isDarkMode);

  // Set initial label text
  modeLabel.textContent = isDarkMode ? "Dark Mode" : "Light Mode";

  // Toggle dark mode on switch change
  darkModeToggle.addEventListener("change", function () {
    const isDarkMode = darkModeToggle.checked;
    body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);

    // Update label text
    modeLabel.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    modeLabel.style.color = isDarkMode ? "black" : "white";
  });
});
