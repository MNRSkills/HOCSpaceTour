import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/NavBar.module.css";

const Nav = (props) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.link}>
        <Link to="/"><span>00</span>Home</Link>
      </div>

      <div className={styles.link}>
        <Link to="/destinations"><span>01</span>Destinations</Link>
      </div>
      <div className={styles.link}>
        <Link to="/crew"><span>02</span>Crew</Link>
      </div>
    </div>
  );
};

export default Nav;
