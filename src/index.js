import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store/Store";
import { Provider } from "react-redux";
import axios from "axios";
axios.defaults.baseURL = "http://hamidreza99.pythonanywhere.com/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
