import React from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

import { postSmurf, getSmurf } from "../actions/";

function App(props) {
  return (
    <div className="App">
      <h1>Smurfs</h1>

      <SmurfForm />
      <SmurfList />
    </div>
  );
}

export default App;
