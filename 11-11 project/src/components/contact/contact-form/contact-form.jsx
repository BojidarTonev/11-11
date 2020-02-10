import React from "react";
import "./contact-form.css";

function ContactForm() {
  return (
    <div className="contact-form">
      <form method="post" action="">
        <div className="upper-part">
          <input placeholder="NAME*" name="name" />
          <input placeholder="EMAIL*" name="email" />
        </div>
        <div className="lower-part">
          <textarea rows="12" cols="70" />
        </div>
        <button type="submit" class="submit-button">SEND</button>
      </form>
      <div className="additional-contact-information">
        <h3>When you send me an email:</h3>
        <p>
          Please complete correct information in the fields above so I can
          contact you later again via email. When you send the message it gets
          automatically send to my personal email. When I have time I am going
          to revue my inbox and reply to each one of the messages, so please be
          complete about your contacting need. I will reply to all of the emails
          soon enough. Happy browsing !
        </p>
      </div>
    </div>
  );
}

export default ContactForm;
