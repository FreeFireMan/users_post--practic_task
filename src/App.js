import React, {Component} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
          <Header/>
          <Body/>
        </Router>
    );
  }
}

export default App;
