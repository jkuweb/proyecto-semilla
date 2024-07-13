import React from "react";
import { createRoot } from "react-dom/client";
import * as classes from "./main.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <h1 className={classes.title}>Hello React</h1>
  </>
);
