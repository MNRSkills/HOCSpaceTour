import React from "react";

import CrewDestTechComponent from "../withDataSpread";
import { CrewMember, MsgBuilder } from "../helper";

import styles from "../../styles/Crew.module.css";

const Crew = (props) => {
  console.log("props in creew", props.crew, props);

  const mapping = () => {
    return props.crew.map((member, index) => {
      return (
        <CrewMember crewMember={member} key={index} crewName={props.crewName} />
      );
    });
  };

  return (
    <div className={styles.crew}>
      <div className={styles.crewDp}> {mapping()} </div>
      <ul className={styles.listWrapper}>
        <li>
          <input
            type="button"
            value="Douglas Hurley"
            onClick={(e) => props.handleChange(e.target.value)}
          />
        </li>
        <li>
          <input
            type="button"
            value="Mark Shuttleworth"
            onClick={(e) => props.handleChange(e.target.value)}
          />
        </li>
        <li>
          <input
            type="button"
            value="Victor Glover"
            onClick={(e) => props.handleChange(e.target.value)}
          />
        </li>
        <li>
          <input
            type="button"
            value="Anousheh Ansari"
            onClick={(e) => props.handleChange(e.target.value)}
          />
        </li>
      </ul>
    </div>
  );
};

export default CrewDestTechComponent(Crew);
