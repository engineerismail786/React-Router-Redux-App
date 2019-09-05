import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CreateData from "./CreateData";
import ShowData from "./ShowData";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={ShowData} />
        <Route path="/new" exact component={CreateData} />
      </BrowserRouter>
    </div>
  );
};
export default App;
