import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormVerbal } from "./components/forms/FormVerbal";

import FormLite from "./components/forms/FormLite/FormLite";

class App extends Component {
  render() {
    //return <FormVerbal />;
    return <FormLite />;
  }
}

export default App;
