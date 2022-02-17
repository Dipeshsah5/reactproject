import React, { useState } from "react";
import Sdata from "./Sdata";

const Card = (props) => {
  const [state1, setState1] = useState("Learn More");

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          className="btn btn-danger"
          onClick={() => {
            setState1("Use State");
          }}
        >
          {state1}
        </button>
      </div>
    </div>
  );
};

export default Card;
