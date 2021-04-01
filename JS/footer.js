const footer = document.querySelector("#footer");
footer.innerHTML = `<div class="footer__info">
<img
  src="../pics/LOGO CMES copy.png"
  class="footer__info-logo"
  alt="company logo"
/>
<h3 class="footer__info-text">
  <i class="fas fa-envelope u-margin-right-small"></i
  >info@chicagomedeng.com
</h3>
<h3 class="footer__info-text">
  <i class="fas fa-phone phone"></i>+1(331)-332-0001
</h3>
<h3 class="footer__info-text">
  <i class="fas fa-map-marker-alt"></i>
  245 W Roosevelt Rd, West Chicago, IL 60185
</h3>
</div>
<div class="footer__map">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.155730966889!2d-88.20977958431857!3d41.86799577402498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880efe551e9fb52b%3A0x2d8d6bcaea88a82d!2s245%20W%20Roosevelt%20Rd%2C%20West%20Chicago%2C%20IL%2060185!5e0!3m2!1sen!2sus!4v1616696928402!5m2!1sen!2sus"
  allowfullscreen=""
  loading="lazy"
  class="footer__map-google"
></iframe>
</div>
<div class="footer__form">
<form action="" class="form">
  <h1 class="form-heading">News letter</h1>
  <input
    type="email"
    placeholder="E-mail"
    class="form_input form_input-email"
  />
  <input
    type="text"
    placeholder="Name"
    class="form_input form_input-name"
  />
  <button class="form-btn btn_blue">Sign up Now</button>
</form>
</div>
<div class="footer__socialMedia">
<a class="footer__socialMedia-icon footer__socialMedia-icon-facebook" href="https://www.facebook.com/" target="_blank">
  <i class="fab fa-facebook-f"></i>
</a>
<a class="footer__socialMedia-icon footer__socialMedia-icon-youtube" href="https://www.youtube.com/" target="_blank">
  <i class="fab fa-youtube "></i>
</a>
<a class="footer__socialMedia-icon footer__socialMedia-icon-linkedin " href="https://www.linkedin.com/" target="_blank">
  <i class="fab fa-linkedin-in"></i>
</a>
<a class="footer__socialMedia-icon footer__socialMedia-icon-instgram" href="https://www.instagram.com/" target="_blank">
  <i class="fab fa-instagram "></i>
</a>
`;
