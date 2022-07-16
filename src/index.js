import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import DuplicateApp from "./DuplicateApp";
ReactDOM.render(
  <BrowserRouter>
    <DuplicateApp/>
  </BrowserRouter>,
  document.getElementById('root')
)