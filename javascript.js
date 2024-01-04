 // Get all the navigation links
 const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

 // Add a click event listener to each navigation link
 navLinks.forEach((link) => {
   link.addEventListener("click", function (event) {
     // Remove the 'active' class from all navigation links
     navLinks.forEach((link) => link.classList.remove("active"));

     // Add the 'active' class to the clicked navigation link
     this.classList.add("active");
   });
 });