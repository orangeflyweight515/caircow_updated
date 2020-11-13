import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imageURL from "../../images/logo.jpg";
import Navsearch from "../dashboard/navsearchbar";
const Header = styled.div`
  && {
    width: 100%;
    height: 100px;
    padding: 10px 40px;
    display: flex;
  }
`;
export default class HomepageHeader extends Component {
  render() {
    return (
      <Header>
        <img src={imageURL} width="72" height="42" />
        <Navsearch />
        <Link
          to="login"
          onClick={() => {
            localStorage.removeItem("loggedin");
          }}
        >
          Logout
        </Link>
      </Header>
    );
  }
}
