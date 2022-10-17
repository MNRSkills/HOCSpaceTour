import React, { useState, useEffect, useRef } from "react";
import CrewDestTechComponent from "./withDataSpread";
import Tour from "./tour";
import pic from "../assets/destination/image-europa.png";
import "../styles/destinations.css";

const Destinations = (props) => {
  // console.log("This is proops dest", props.destinations);

  return (
    // THINK ABOUT MOVING THIS LIST FOR REUSABILITY WITH CREW AND TECH PAGES
    <div className="desination-page">
      <ul className="unordered-list">
        <li>
          <input
            type="button"
            value="Moon"
            onClick={(e) => props.handleChange(e.target.value)}
          />
        </li>
        <li>
          <input
            type="button"
            value="Mars"
            onClick={(e) => props.handleChange(e.target.value)}
          />
        </li>
        <li>
          <input
            type="button"
            value="Europa"
            className="nameBtn"
            onClick={(e) => props.handleChange(e.target.value)}
          />
        </li>

        <li>
          <input
            type="button"
            value="Titan"
            className="nameBtn"
            onClick={(e) => props.handleChange(e.target.value)}
          />
        </li>
      </ul>
      <div>
        {/* {data.destinations.map((tour, index) => {
          return (
            <Tour tour={tour} key={index} className="destination-layout" />
          );
        })} */}
      </div>
    </div>
  );
};

export default CrewDestTechComponent(Destinations);
