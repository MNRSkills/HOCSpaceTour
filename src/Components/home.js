import React from "react";

import CrewDestTechComponent from "./withDataSpread";
import bgHome from "../assets/home/background-home-desktop.jpg";
// import "../styles/home.css";
import styles from "../styles/Home.module.css";

const Home = (props) => {
  console.log(props.data);
  return (
    <div className={styles.homePage}>
      <div className={styles.container}>
        <span>so, you want to travel to</span>
        <h1>SPACE</h1>
        <p className="p-block">
          Let's Face it; if yu want to go to space, you might as well genuinely
          go to outer space and no hover kind of on the edge of it. Well sit
          back, and relax because we'l give you a truly out of this world
          experience!
        </p>
      </div>
    </div>
  );
};

export default CrewDestTechComponent(Home);
