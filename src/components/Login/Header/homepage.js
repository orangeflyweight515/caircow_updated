import React, { Component } from "react";
import styled from "styled-components";
import imageURL from "../../images/logo.jpg";

const Header = styled.div`
  && {
    width: 100%;
    height: 90px;
    padding: 10px 40px;
  }
`;
export default class HomepageHeader extends Component{
    render(){
        return(
        <Header>
          <img src={imageURL} width="72" height="42" />
        </Header>
        )
    }

}
