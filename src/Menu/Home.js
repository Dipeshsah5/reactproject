import React, { useRef, useState } from "react";
import image from "./image/bc.jpg";
import CSS from "./Home.module.css";
import { Link } from "react-router-dom";
import Image2 from "./image/ad.jpg";
const Home = () => {
  return (
    <>
      <div className="homepage">
        <img src={Image2} className={CSS.img1} />
        <div className={CSS.content}>
          <h3>Welcome to My First ReactJs WebPage</h3>
          <p className={CSS.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            culpa aut unde natus commodi nam ipsam nisi ipsa doloremque iure.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, accusamus voluptates. Rem soluta fugit distinctio nobis
            porro quam accusamus adipisci quisquam exercitationem praesentium
            quas, vitae rerum voluptatibus voluptas quae ducimus, eum pariatur
            placeat illum? Totam voluptatum culpa veniam aut aperiam! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Eum ad commodi
            nisi nostrum cum voluptatem voluptas ea quis tempora ipsam officia
            facere, voluptatibus similique porro ipsum deleniti repellat
            quibusdam laudantium ut, modi esse recusandae expedita magni. Ex
            dignissimos labore necessitatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            voluptate a aperiam quaerat atque consequatur amet quibusdam
            consequuntur autem magnam eligendi, sequi iure enim. Temporibus
            officia fuga, nam dolor libero est assumenda voluptatibus ducimus
            mollitia eaque asperiores earum recusandae. Quia. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Blanditiis sint alias nam,
            porro culpa quod? Corrupti obcaecati hic error? Magnam.
          </p>
          <input
            type="text"
            className={CSS.input}
            placeholder="Enter Your Email Here....."
          />
          <button className={CSS.button} >
            Submit Now
          </button>
        </div>
      </div>
      <p style={{ marginTop: "700px", textAlign: "center" }}>
        &copy;Dipesh Sah All Right Reserved | Terms and Condition
      </p>
    </>
  );
};

export default Home;
