import React from 'react';
import ContactMeAt from './contact-me-at/contact-me-at'
import ContactForm from './contact-form/contact-form'
import './contact.css';
import '../../shared/styles/additional-information.css'

function Contact() {
  return (
    <div className="site-contact">
        <ContactMeAt/>
        <div className="additional-information">
          <h1>Send me email via:</h1>
          <p>You can send me an email through the web site, and I will recieve it. Soon enough the reply will be on its way.</p>
        </div>
        <ContactForm/>
    </div>
  );
}

export default Contact;