import React from "react";
import styles from "../styles/Cardlayout.module.css";

const Tour = (props) => {
  const { name, images, description, distance, travel } = props.tour;
  const { png, webp } = images;
  if (props.destName == name) {
    return (
      <>
        <h3>travel with booking.com</h3>
        <img src={webp} alt="" />
        <h1>{name}</h1>
        <p>{description}</p>
        <span></span>
        <div>
          <div>{distance}</div>
          <div>{travel}</div>
        </div>
      </>
    );
  }
};

export default Tour;
