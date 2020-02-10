import React from "react";
import "./who-am-i.css";
import Link from "../../../shared/link/link";

function WhoAmI() {
  return (
    <div className="who-am-i">
      <div className="person-information">
        <div className="profile-picture"></div>
        <div className="more-information">
          <h2>Alex Nikolov</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <p>
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            bu Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s
          </p>
          <Link to="/artwork">
            See Artwork
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WhoAmI;
