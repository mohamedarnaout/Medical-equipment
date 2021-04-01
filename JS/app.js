const nav = document.querySelector(".navigation");
const header = document.querySelector(".header");
const imgHeader = document.querySelector(".iheader");
let intFrameHeight = window.innerHeight - (window.innerHeight - 58);
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  if (scroll >= intFrameHeight) {
    nav.classList.add("scrolled");
    if (header) {
      header.classList.add("header__scrolled");
    }
    if (imgHeader) {
      imgHeader.classList.add("iheader__scrolled");
    }
  } else {
    nav.classList.remove("scrolled");
    if (header) {
      header.classList.remove("header__scrolled");
    }

    if (imgHeader) {
      imgHeader.classList.remove("iheader__scrolled");
    }
  }
});
