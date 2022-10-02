import React from "react";
import Nav from "./Nav";

const Layout = (props) => {
  return (
    <div>
      {" "}
      <Nav /> Hi There we need to change the layout when the nav is selected.
      {props.children}
    </div>
  );
};

export default Layout;
