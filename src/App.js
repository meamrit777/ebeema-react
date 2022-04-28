import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import MainRoute from "./MainRoute";
import store from "./redux/Store";
import "antd/dist/antd.css";

export default function App() {
  function MainApp() {
    return (
      <Router>
        <MainRoute />
      </Router>
    );
  }

  return (
    (
      <Provider store={store}>
        <MainApp />
      </Provider>
    )
  );
}
