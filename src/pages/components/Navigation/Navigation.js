import React, { Component } from "react";
import styled from "styled-components";
import Menu from "../../../assets/icons/menu.svg"
import Bell from "../../../assets/icons/bell.svg"
import './Navigation.css'

// styling for components

const Nav = styled.nav`
    width:100%;
    height:20vh;
    display:flex;
    justify-content: space-between;
    color: #000;
`



class Navigation extends Component {
  state = {};
  render() {
    return (
      <Nav className="row">
        <div className="col first">
       <img className="mx-3 menu" src={Menu} alt="menu"/>
       <img className="mr-1 menu" src={Bell} alt="bell"/>
        <h1 className="mx-1 logo">Blackpeppereats</h1>
        </div>
        <div className="col second">
            <button className="btn btn_nav">Sign in</button>
        </div>
      </Nav>
    );
  }
}

export default Navigation;
