import React, { Component } from "react";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import Amplify, { Auth } from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>React</h2>
          <img
            src={require("./one-punch.jpg")}
            className="App-logo"
            alt="logo"
          />
          <p>React demo for one punch man</p>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
