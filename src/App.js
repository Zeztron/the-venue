import React, { Component } from 'react';
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Featued from "./components/featured";
import VenueInfo from "./components/venueInfo";
import Highlights from "./components/Highlights";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Featued/>
        <VenueInfo/>
        <Highlights/>
      </div>
    );
  }
}

export default App;
