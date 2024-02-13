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
      scrollPosition >= targetElement.offsetTop - document.querySelector('.navbar').offsetHeight &&
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

 window.addEventListener('scroll', function() {
  var logo = document.querySelector('.logo');
  var logoLink = document.getElementById('logo-link');
  if (window.scrollY > 20) {
    logo.style.width = '65px';
   
  } else {
    logo.style.width = '120px';
    logoLink.style.padding = '0';
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


document.body.onmousemove = function(e) {
  document.documentElement.style.setProperty (
    '--x', (
      e.clientX+window.scrollX
    )
    + 'px'
  );
  document.documentElement.style.setProperty (
    '--y', (
      e.clientY+window.scrollY
    ) 
    + 'px'
  );
}

