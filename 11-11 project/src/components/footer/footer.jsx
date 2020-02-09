import React from 'react';
import Link from "../../shared/link/link"
import './footer.css';

function Footer() {
  return (
    <div className="site-footer">
        <ul>
          <li>
            <Link to="">
              <i className="fas fa-envelope"></i>
              <p>INFO@YOURWEBSITE.COM</p> 
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="fas fa-mobile"></i>
              <p>0897586529</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="fas fa-map-marker-alt"></i>
              <p>2277 LOREM AVE.,SAN DIEGO, CA 22553</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="far fa-clock"></i>
              <p>TUES – FRI 10 – 8 SAT 10 – 5</p>
            </Link>
          </li>
        </ul>
    </div>
  );
}

export default Footer;