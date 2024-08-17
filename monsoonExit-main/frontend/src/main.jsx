import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Import the main App component
import "./index.css"; // Import global styles
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing

// Render the app into the root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> {/* StrictMode is a wrapper to help find common problems */}
    <BrowserRouter> {/* BrowserRouter wraps the entire app to enable routing */}
      <App /> {/* Render the main App component */}
    </BrowserRouter>
  </React.StrictMode>
);

