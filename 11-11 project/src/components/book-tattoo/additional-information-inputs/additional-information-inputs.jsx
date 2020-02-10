import React from "react";
import "./additional-information-inputs.css";

function AdditionalInformationInputs() {
  return (
    <div className="additional-information-inputs">
      <div className="upper-part">
        <input placeholder="NAME*" name="name" />
        <input placeholder="EMAIL*" name="email" />
      </div>
      <div className="lower-part">
        <input placeholder="DATE IS AUTOSELECTED FROM DATE PICKER*" name="date" disabled />
        <br/>
        <input type="file" name="image" palceholder="CHOOSE TATTOO IMAGE*" />
        <br/>
        <textarea rows="8" cols="63" />
      </div>
      <button type="submot" class="submit-button">SEND</button>
    </div>
  );
}

export default AdditionalInformationInputs;
