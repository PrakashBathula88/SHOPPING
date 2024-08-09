import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./Components/LoginProvider/Loginprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);



reportWebVitals();
