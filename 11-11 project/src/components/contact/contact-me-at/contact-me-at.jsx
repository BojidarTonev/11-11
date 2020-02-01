import React from 'react';
import Link from '../../../shared/link/link'
import './contact-me-at.css';

function ContactMeAt() {
  return (
    <div className="contact-me-at">
    <h2>Contact me at:</h2>
    <ul>
      <li>
          <i class="fas fa-envelope"></i>
          <p>INFO@YOURWEBSITE.COM</p> 
      </li>
      <li>
          <i class="fas fa-mobile"></i>
          <p>0897586529</p>
      </li>
      <li>
          <i class="fas fa-map-marker-alt"></i>
          <p>2277 LOREM AVE.,SAN DIEGO, CA 22553</p>
      </li>
      <li>
          <i class="far fa-clock"></i>
          <p>TUES – FRI 10 – 8 SAT 10 – 5</p>
      </li>
    </ul>
    <h2>Find me online:</h2>
    <ul>
      <li>
          <Link to="">
            <i class="fab fa-facebook-f"></i>
          </Link>
      </li>
      <li>
        <Link to="">
            <i class="fab fa-instagram"></i>
        </Link>
      </li>
    </ul>
  </div>
  );
}

export default ContactMeAt;