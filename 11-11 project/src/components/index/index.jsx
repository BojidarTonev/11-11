import React from "react";
import WhatIDo from "./what-i-do/what-i-do"
import WhoAmI from "./who-am-i/who-am-i"
import "./index.css";
import '../../shared/styles/additional-information.css'

function Index() {
  return (
    <div className="site-index">
      <WhatIDo/>
      <div className="additional-information">
          <h1>Who am I?</h1>
          <p>Some text about how good of an artist I am and how you would want to give me your money goes here!</p>
      </div> 
      <WhoAmI/>
    </div>
  );
}

export default Index;
