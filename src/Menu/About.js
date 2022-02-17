import React from "react";
import "./About.css";
import Image3 from "./image/11.png";
import { Link } from "react-router-dom";

const aboutMe=()=>{
  alert("....")
}
const MBio = () => {
  alert("Hey, Sorry I don't know anything about him🤣🤣🤣🤣🤣");
};
const About = () => {
  return (
    <>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem
        </p>
      </div>
      <div className="main1">
        <div className="card" style={{ width: "18rem" }}>
          <img src={Image3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">Dipesh Sah</h3>
            <h6 className="card-title">..</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-danger" onClick={aboutMe}>
              Read More About
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={Image3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">Sahil Gupta</h3>
            <h6 className="card-title">..</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-danger" onClick={MBio}>
              Read More About
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={Image3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">Masoom Alam</h3>
            <h6 className="card-title">..</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-danger" onClick={MBio}>
              Read More About
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
