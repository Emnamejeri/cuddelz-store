import React from "react";

import { AppBar } from "@material-ui/core";

import useStyles from "./styles";
function Checkout() {
  const classes = useStyles();
  return (
    <div>
      {" "}
      <AppBar position="relative" className={classes.navbar}>
        {" "}
      </AppBar>
      <p>lorem ipsum text</p>
    </div>
  );
}

export default Checkout;
