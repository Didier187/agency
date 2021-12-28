// javascript
const menuBtn = document.getElementById("menu-icon");
const sideNav = document.getElementById("side-nav-overlay");
const humbergerItems = document.getElementsByClassName("humberger");
const currentYear = document.getElementById("current-year")

//copyright year
var today = new Date();
var year = today.getFullYear();
currentYear.innerText = year

menuBtn.addEventListener("click", () => {
  sideNav.classList.toggle("show-side-nav");
  for (let humbergerItem of humbergerItems) {
    humbergerItem.classList.toggle("turn-green");
  }
  hideOverFlow();
});

sideNav.addEventListener("click", () => {
  sideNav.classList.toggle("show-side-nav");
  hideOverFlow();
});

const hideOverFlow = () => {
  if (sideNav.classList.contains("show-side-nav") && window.innerWidth <= 600) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
};
