// javascript
const menuBtn = document.getElementById("menu-icon");
const sideNav = document.getElementById("side-nav-overlay");
const humbergers = document.getElementsByClassName("humberger");

menuBtn.addEventListener("click", () => {
  sideNav.classList.toggle("show-side-nav");
  for (let humberItem of humbergers) {
    humberItem.classList.toggle("turn-green");
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
