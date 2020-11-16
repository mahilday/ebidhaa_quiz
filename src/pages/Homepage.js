import React, { Component } from "react";
// import PropTypes from 'prop-types';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Popular from "./components/Popular/Popular";
import Categories from "./components/Categories/Categories";
import Getapp from "./components/Getapp/Getapp";
import Offers from "./components/Offers/Offers";
import Footer from "./components/Footer/Footer"

class Homepage extends Component {
  state = {
    images: {
      landingBg:
        "https://res.cloudinary.com/matsxript/image/upload/c_scale,w_1440/v1605401230/Rectangle_1_alvolg.png",
    },
  };
  render() {
    return (
      <div className="homepage-wrapper">
        <header>
          <Navigation />
          <Header landing={this.state.images.landingBg} />
        </header>
        <main>
          <Popular popular = "What's Popular?"/>
          <Categories />
          <Getapp />
          <Offers />
          <Popular />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Homepage;
