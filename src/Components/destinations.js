import React, { useState, useEffect } from "react";
import CrewDestTechComponent from "./withDataSpread";
import Tour from "./tour";
import pic from "../assets/destination/image-europa.png";
import "../styles/destinations.css";

const Destinations = ({ data }) => {
  const [name, setName] = useState("Moon");

  const handleChange = (e) => {
    console.log("this was clicked");
  };

  return (
    <div className="desination-page">
      <ul className="">
        <li onClick={(e) => setName(e.target.innerHTML)}>MOON</li>
        <li onClick={(e) => setName(e.target.innerHTML)}>MARS</li>
        <li onClick={(e) => setName(e.target.innerHTML)}>EUROPA</li>
        <li onClick={(e) => setName(e.target.innerHTML)}>TITAN</li>
      </ul>
      <div>
        {data.destinations.map((tour, index) => {
          return (
            <Tour tour={tour} key={index} className="destination-layout" />
          );
        })}
      </div>
    </div>
  );
};

export default CrewDestTechComponent(Destinations);
