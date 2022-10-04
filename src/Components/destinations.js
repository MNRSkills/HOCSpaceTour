import React from "react";
import CrewDestTechComponent from "./withDataSpread";
import Tour from "./tour";
import pic from "../assets/destination/image-europa.png";

const Destinations = ({ data }) => {
  console.log(data.destinations);

  const handleChange = () => {
    console.log("this was clicked");
  };

  return (
    <div>
      <img src={pic} alt="" />
      <ul>
        <li onClick={handleChange}>MOON</li>
        <li onClick={handleChange}>MARS</li>
        <li onClick={handleChange}>EUROPA</li>
        <li onClick={handleChange}>TITAN</li>
      </ul>
      {data.destinations.map((tour, index) => {
        return <Tour tour={tour} key={index} />;
      })}
    </div>
  );
};

export default CrewDestTechComponent(Destinations);
