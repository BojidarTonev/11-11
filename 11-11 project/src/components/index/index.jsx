import React from "react";
import CotentBox from './content-box/content-box'
import "./index.css";

function Index() {
  return (
    <div className="site-index">
      <h2>What I do</h2>
      <p className="index-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, bu
      </p>
      <div className="content-box">
        <div className="first-row">
          <CotentBox 
              heading={"Tattoing"} 
              text={"For premium result, at our tattoo shop we combine modern technics with traditional ones"} 
              price={30}
              position={"left"}
              icon={<i class="fas fa-cat"></i>}
            />
            <CotentBox 
              heading={"Piercing"} 
              text={"Want some extra holes in your body? Our piercing masters will make some for you"} 
              price={30}
              position={"right"}
              icon={<i class="fas fa-tint"></i>}
            />
        </div>
        <div className="second-row">
        <CotentBox 
              heading={"Tattoing"} 
              text={"For premium result, at our tattoo shop we combine modern technics with traditional ones"} 
              price={30}
              position={"left"}
              icon={<i class="fas fa-cat"></i>}
            />
            <CotentBox 
              heading={"Piercing"} 
              text={"Want some extra holes in your body? Our piercing masters will make some for you"} 
              price={30}
              position={"right"}
              icon={<i class="fas fa-tint"></i>}
            />
        </div>
      </div>
    </div>
  );
}

export default Index;
