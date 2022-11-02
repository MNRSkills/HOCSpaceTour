import React, { useState, useEffect, useRef } from "react";
import CrewDestTechComponent from "../withDataSpread";
import { Tour } from "../helper";
import styles from "../../styles/Destinations.module.css";

// THE START OF A COMPONENT
const Destinations = (props) => {
  console.log("This is proops dest", props);

  return (
    // THINK ABOUT MOVING THIS LIST FOR REUSABILITY WITH CREW AND TECH PAGES
    <div className={styles.destinationsPage}>
      <div className={styles.listWrapper}>
        <ul className={styles.menuBoard}>
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
        <div className={styles.crewDp}>
          {props.data.destinations.map((tour, index) => {
            return (
              <Tour
                tour={tour}
                key={index}
                destName={props.destName}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CrewDestTechComponent(Destinations);
