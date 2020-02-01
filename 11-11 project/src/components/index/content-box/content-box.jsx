import React from "react";
import "./content-box.css";

function ContentBox(props) {
  const {position, heading, text, icon, price} = props;
  if(position === "left"){
    return (
      <div className={`service-box service-box-${position}`}>
        <div className={`content content-${position}`}>
        <h5>{heading}</h5>
            <p>{text}</p>
          <small>From {price}$</small>
        </div>
        <div className={`icon icon-${position}`}>
          {icon}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`service-box service-box-${position}`}>
        <div className={`icon icon-${position}`}>
          {icon}
        </div>
        <div className={`content content-${position}`}>
        <h5>{heading}</h5>
            <p>{text}</p>
          <small>From {price}$</small>
        </div>
      </div>
    );
  }
  
}

export default ContentBox;
