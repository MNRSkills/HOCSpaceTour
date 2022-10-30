import React from "react";
import styles from "../styles/Cardlayout.module.css";

const Tour = (props) => {
  console.log(props);
  const { name, images, description, distance, travel } = props.tour;
  const { png, webp } = images;
  if (props.destName == name) {
    return (
      <>
        <header>travel with booking.com</header>
        <img src={png} alt="" />
        <article>
          <h1 className={styles.name}>{name}</h1>
          <p>{description}</p>
          <span></span>
          <div className={styles.stat}>
            <div>{distance}</div>
            <div>{travel}</div>
          </div>
        </article>
      </>
    );
  }
};

export default Tour;
