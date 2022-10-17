import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/NavBar.module.css";

const Nav = (props) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.linkBox}>
        <h4 className={styles.numbers}>00</h4>
        <Link to="/" className={styles.link}>
          Home
        </Link>
      </div>
      <div className={styles.linkBox}>
        <h4>01</h4>
        <Link to="/destinations" className={styles.link}>
          Destinations
        </Link>
      </div>
      <div className={styles.linkBox}>
        <h4>02</h4>
        <Link to="/crew" className={styles.link}>
          Crew
        </Link>
      </div>
    </div>
  );
};

export default Nav;
