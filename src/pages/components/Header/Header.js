import React, { Component } from "react";
import styled from "styled-components";
import "./Header.css";
import Location from "../../../assets/icons/location.svg";

const Input = styled.div`
  align-items: center;
`;
const Div = styled.div`
  z-index: -1;
  color: #000;
`;
class Header extends Component {
  state = {};
  render() {
    return (
      <Div className="headerwrapper">
        <img className="landing" src={this.props.landing} alt="landing" />
        <section className="center_piece">
          <div>
          <h1 className="mb-4">What are you eating today</h1>
          <div className="inputs_wrapper">
            {/* first input for location */}
            <Input className="input_loc">
              <span>
                <img className="location" src={Location} alt="location icon" />
              </span>
              <input
                className="input_closest"
                type="text"
                placeholder="Select Closest BlackBells to you"
              />
              <i className="material-icons expand">expand_more</i>
            </Input>
            <Input className="input_time">
              <span className="material-icons time">watch_later</span>
              <input
                className="input_closest"
                type="text"
                placeholder="Deliver Now"
              />
              <i className="material-icons expand exptime ">expand_more</i>
            </Input>
            <button className="btn btn-lg getbtn">
              Get Food
            </button>
          </div>
          <button className="extra mt-2"> Sign up for extra features</button>
          </div>
        </section>
      </Div>
    );
  }
}

export default Header;
