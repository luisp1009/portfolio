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





$(".slick").slick({
  dots: false,
vertical: false,
  infinite: true,
   slidesToShow: 5,
  slidesToScroll: 1,
arrows: true,
centerMode: true,
focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 2000,
responsive: [
{
breakpoint: 1700,
settings: {
  slidesToShow: 4,
  slidesToScroll: 1,
}
},
{
breakpoint: 991,
settings: {
  slidesToShow: 3,
  slidesToScroll: 1,
}
},
{
breakpoint: 767,
settings: {
  slidesToShow: 2,
  slidesToScroll: 1
}
},
{	
breakpoint: 540,
settings: {
  slidesToShow: 1,
  slidesToScroll: 1
}
}]
});



