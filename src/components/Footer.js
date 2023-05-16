import React from "react";

function Footer() {
  var currentTime = new Date();
  const year = currentTime.getFullYear();
  return (
    <div className="footerdiv">
      <footer>
        <a href="https://twitter.com/VishalSingh_13" target="blank">
          <i class="fab fa-twitter footer-i"></i>
        </a>
        <a href="https://github.com/VishalSingh-07" target="blank">
          <i class="fab fa-github footer-i"></i>
        </a>
        <a href="https://www.linkedin.com/in/vishal-singh-733570200/" target="blank">
          <i class="fab fa-linkedin-in footer-i"></i>
        </a>
        <a href="mailto:vishalsinghagr25@gmail.com" target="blank">
          <i class="fas fa-envelope footer-i"></i>
        </a>
        <p> Copyright &#169; {year}</p>
      </footer>
    </div>
  );
}
export default Footer;
