import React, { Component } from "react";
import styled from "styled-components";
import Menu from "../../../assets/icons/menu.svg"
import Bell from "../../../assets/icons/bell.svg"
import './Navigation.css'

// styling for components
const Button = styled.button`
    background: #000;
    border-radius: 5px;
    color:#fff;
    padding:7px 25px;
    font-weight:600;
    border:none;
`
const Nav = styled.nav`
    width:100%;
    height:20vh;
    display:flex;
    justify-content: space-between;
    color: #000;
`
const Logo = styled.h1`
    font-weight: 700;
    font-size:32px;
`


class Navigation extends Component {
  state = {};
  render() {
    return (
      <Nav className="row">
        <div className="col first">
       <img className="mx-3" src={Menu} alt="menu"/>
       <img className="mr-1" src={Bell} alt="bell"/>
        <Logo className="mx-1">Blackpeppereats</Logo>
        </div>
        <div className="col second">
            <Button className="btn">Sign in</Button>
        </div>
      </Nav>
    );
  }
}

export default Navigation;
