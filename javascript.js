
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

