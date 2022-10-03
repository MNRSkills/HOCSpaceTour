import React, { useState, useEffect } from "react";
import Nav from "./Nav";

const Layout = (props) => {
  console.log(props.children);
  return (
    <div className="Layout-component">
      <Nav /> Hi There we need to change the layout when the nav is selected.
      {props.children}
    </div>
  );
};

export default Layout;
