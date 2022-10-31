import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Logo from "../../fixImages/shared/logo.svg";
import styles from "../../styles/Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <header className={styles.nav}>
        <img src={Logo} alt="Logo" />
        <span className={styles.navLine}></span>
        <Nav />
      </header>
      <div className={styles.children}>{props.children}</div>
    </>
  );
};

export default Layout;
