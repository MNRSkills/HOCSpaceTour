import React, { useState, useEffect } from "react";
import Nav from "./Nav";
// import "../../styles/layout.css";
import styles from "../../styles/Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <header className={styles.nav}>
        <span></span>
        <img src="../../assets/shared/logo.svg" alt="" />
        <Nav />
      </header>
      <div className={styles.children}>{props.children}</div>
    </>
  );
};

export default Layout;
