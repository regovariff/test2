import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="simple-div">
          <div>
            <h1>Normal Form</h1>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
