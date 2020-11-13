import React , { Component } from "react";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import styled from "styled-components";

const Container=styled(Paper)`
    &&{
        padding:2px 4px;
        display:flex;
        align-items:center;
        border:2px solid grey;
        border-radius:25px;
        width:200px;
        max-height:50px;
        font-size:20px;
    }
    input{
        flex:1;
        margin-left:8px;
        font-size:10px;
    }
    button{
        padding:0px 7px;
    }

`;

const Navsearchbar=()=>{
    return(
    <Container component="form">
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
      <IconButton aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Container>
    )

}
export default Navsearchbar;