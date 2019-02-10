import React, { Component } from 'react';
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Featued from "./components/featured";
import VenueInfo from "./components/venueInfo";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Location from "./components/Location";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Featued/>
        <VenueInfo/>
        <Highlights/>
        <Pricing/>
        <Location/>
        <Footer/>
      </div>
    );
  }
}

export default App;
