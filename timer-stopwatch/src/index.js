import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
const body=document.getElementById("body");
body.style.backgroundColor="skyblue"
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
