import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { Auth0Provider } from '@auth0/auth0-react';
store.subscribe(()=>console.log(store.getState()))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter> 
  <Provider store={store}>
  <Auth0Provider
    domain="dev-midp2b7md312s4zd.us.auth0.com"
    clientId="bYQMh3Prm5VE7p5hT2Q3S9Vp7dKhNdfg"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <App />
      </Auth0Provider>
  </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
