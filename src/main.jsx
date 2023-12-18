import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./companents/root.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>
);
