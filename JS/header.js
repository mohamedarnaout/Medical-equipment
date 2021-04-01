const headeer = document.querySelector("#header");

headeer.innerHTML = `
<div class="notification">
      <div class="notification__text">
        <h3 class="notification__text--1">
          <i class="fas fa-phone phone u-margin-right-small"></i
          >+1(331)-332-0001
        </h3>
        <h3 class="notification__text--2">
          <i class="fas fa-envelope u-margin-right-small"></i
          >info@chicagomedeng.com
        </h3>
        <h3 class="notification__text--3">
          <a class="facebook notification__text--3-icon" href="https://www.facebook.com/" target="_blank">
          <i class="fab fa-facebook"></i>
        </a>
        <a class="youtube notification__text--3-icon" href="https://www.youtube.com/" target="_blank">
          <i class="fab fa-youtube"></i>
        </a>
        <a class="linkedin notification__text--3-icon" href="https://www.linkedin.com/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a class="instgram notification__text--3-icon" href="https://www.instagram.com/" target="_blank">
          <i class="fab fa-instagram-square"></i>
        </a></h3>
      </div>
    </div>
    <div class="navigation">
      <div class="navigation__item navigation__item--img">
      <a href="index.html"> <img
          src="pics/LOGO CMES copy.png"
          class="navigation__img"
          alt="Compony's LOGO"
        /> </a>
      </div>
      <div class="navigation__item">
      <a class="navigation__link" href="contactus.html"><h3>Equipment</h3></a>
      </div>
      <div class="navigation__item">
      <a class="navigation__link" href="contactus.html"><h3>Parts</h3></a>
      </div>
      <div class="navigation__item">
        <a class="navigation__link" href="contactus.html"><h3>Contact Us</h3></a>
      </div>
    </div>`;
