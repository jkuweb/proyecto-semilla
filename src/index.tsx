import React from "react";
import { createRoot } from "react-dom/client";
import "./main.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <h1 className="title">Hello React</h1>
  </>
);
