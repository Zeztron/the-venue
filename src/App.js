import React, { Component } from 'react';
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Featued from "./components/featured";

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "1500px", background: "cornflowerblue"}}>
        <Header/>
        <Featued/>
      </div>
    );
  }
}

export default App;
