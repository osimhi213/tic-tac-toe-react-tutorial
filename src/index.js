import React, { StrictMode } from "react";  // React
import { createRoot } from "react-dom/client";  // React’s library to talk to web browsers (React DOM)
import "./styles.css";  // the styles for your components

import App from "./App";  // the default component you created in App.js.

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);