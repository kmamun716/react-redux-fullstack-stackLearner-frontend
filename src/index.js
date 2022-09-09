import "bootstrap/dist/css/bootstrap.min.css";
import jwtDecode from "jwt-decode";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import * as Types from './store/actions/types';
import setAuthToken from "./utils/setAuthToken";

const token = localStorage.getItem("accessToken");
if(token){
  setAuthToken(token);
  let decoded = jwtDecode(token);
  store.dispatch({
    type: Types.SET_USER,
    payload:{
      user: decoded
    }
  })
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
