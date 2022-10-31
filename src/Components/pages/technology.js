import React from "react";
import { CrewMember, Techy } from "../helper";
import CrewDestTechComponent from "../withDataSpread";

import styles from "../../styles/Tech.module.css";

const Tech = (props) => {
  // console.log("THIS IS TECH PAGE", props.tech)

  const mapperT = () => {
    return props.tech.map((techy, index) => {
      return <Techy tech={techy} key={index} />;
    });
  };
  return <div className={styles.tech}>{mapperT()}</div>;
};

export default CrewDestTechComponent(Tech);
