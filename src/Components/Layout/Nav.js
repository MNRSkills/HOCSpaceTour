import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/NavBar.module.css";

const Nav = (props) => {
  return (
    <div className={styles.navBar}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/destinations" className={styles.link}>
        Destinations
      </Link>
      <Link to="/crew" className={styles.link}>
        Crew
      </Link>
    </div>
  );
};

export default Nav;
