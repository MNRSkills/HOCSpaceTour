import React, { useState, useEffect } from "react";
import Nav from "./Nav";
// import "../../styles/layout.css";
import styles from "../../styles/Layout.module.css";

const Layout = (props) => {
  console.log(props.children);
  return (
    <div className={styles.layoutComponent}>
      <div className={styles.nav}>
        <Nav />
      </div>

      {props.children}
    </div>
  );
};

export default Layout;
