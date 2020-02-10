import React from "react";
import DatePicker from "./date-picker/date-picker";
import AdditionalInformationInputs from "./additional-information-inputs/additional-information-inputs";
import "./book-tattoo.css";
import "../../shared/styles/additional-information.css";

function BookTattoo() {
  return (
    <div className="book-tattoo">
      <form method="post" action="/book-tattoo">
        <div className="date-picker-wrapper">
          <h2>Book the date you want to have your tattoo on</h2>
          <p>
            The dates with yellow are those, which are from the other month. The
            dates with black are current. The dates that have blue text on them
            are when I am busy from the hours shown detailed on the table.
          </p>
          <DatePicker />
        </div>
        <div className="additional-information">
          <h1>Information to contact you back at</h1>
          <p>
            Below we will need your additional information so I can cotnact you
            back, please provide accurate information.
          </p>
        </div>
        <div className="additional-information-inputs-wrapper">
          <AdditionalInformationInputs />
          <div className="additional-contact-information">
            <h3>When you send me an email:</h3>
            <p>
              Please complete correct information in the fields above so I can
              contact you later again via email. When you send the message it
              gets automatically send to my business email.
            </p>
            <br />
            <h3>Before you send an image:</h3>
            <p>
              Before you send an image please make sure you are sending a nice
              and clear photo/wallpaper of the desired image. If needed send 2-3
              photos from all the angles, since from there I will get the cope
              of the tattoo before I put it on your skin.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookTattoo;
