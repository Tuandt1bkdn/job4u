import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Provider from "./store/Provider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

//1027600566855-oiirdugelmvt0t1ur1a5hk0bt80fht24.apps.googleusercontent.com
root.render(
  <React.StrictMode>
    <Provider>
      <GoogleOAuthProvider clientId="1027600566855-oiirdugelmvt0t1ur1a5hk0bt80fht24.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
