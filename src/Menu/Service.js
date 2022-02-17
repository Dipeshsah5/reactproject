import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import "./Header.service.css";

const Service = () => {
  return (
    <>
      <div className="main">
        {Sdata.map((currElem, index) => {
          return <Card key={index} img={currElem.imgsrc} title={currElem.title} />;
        })}
      </div>
    </>
  );
};

export default Service;
