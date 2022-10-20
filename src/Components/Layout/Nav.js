import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/NavBar.module.css";

const Nav = (props) => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.linkBox}>
        <Link to="/" className={styles.link}>
          00 Home
        </Link>
      </div>
      <div className={styles.linkBox}>
        <Link to="/destinations" className={styles.link}>
          01 Destinations
        </Link>
      </div>
      <div className={styles.linkBox}>
        <Link to="/crew" className={styles.link}>
          02 Crew
        </Link>
      </div>
      <div className={styles.linkBox}>
        <Link to="/technology" className={styles.link}>
          03 Technology
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
