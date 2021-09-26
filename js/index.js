// const navToggle = document.querySelector(".nav-toggle");
// const navLinks = document.querySelectorAll(".nav__link");

// navToggle.addEventListener("click", () => {
//   document.body.classList.toggle("nav-open");
// });

// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     document.body.classList.remove("nav-open");
//   });
// });

function navmenuMove() {
  var navmenu = document.getElementById("navmenu");
  var hamburger = document.getElementById("hamburger");
  var bars = document.getElementById("bars");
  var times = document.getElementById("times");
  if (navmenu.style.left === "-2px") {
    navmenu.style.left = "100%";
    hamburger.style.backgroundColor = "var(--clr-accent1)";
    bars.style.display = "block";
    times.style.display = "none";
  } else {
    navmenu.style.left = "-2px";
    hamburger.style.backgroundColor = "var(--clr-accent2)";
    bars.style.display = "none";
    times.style.display = "block";
  }
}
