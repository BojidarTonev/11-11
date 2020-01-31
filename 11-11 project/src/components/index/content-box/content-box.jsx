import React from "react";
import "./content-box.css";

function ContentBox(props) {
  const position = props.position;
  if(position == "left"){
    return (
      <div className={`service-box service-box-${props.position}`}>
        <div className={`content content-${props.position}`}>
        <h5>{props.heading}</h5>
            <p>{props.text}</p>
          <small>From {props.price}$</small>
        </div>
        <div className={`icon icon-${position}`}>
          {props.icon}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`service-box service-box-${props.position}`}>
        <div className={`icon icon-${position}`}>
          {props.icon}
        </div>
        <div className={`content content-${props.position}`}>
        <h5>{props.heading}</h5>
            <p>{props.text}</p>
          <small>From {props.price}$</small>
        </div>
      </div>
    );
  }
  
}

export default ContentBox;
