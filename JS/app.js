const nav = document.querySelector(".navigation");
const header = document.querySelector(".header");
let intFrameHeight = window.innerHeight - (window.innerHeight - 58);
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  if (scroll >= intFrameHeight) {
    nav.classList.add("scrolled");
    header.classList.add("header__scrolled");
  } else {
    nav.classList.remove("scrolled");
    header.classList.remove("header__scrolled");
  }
});
