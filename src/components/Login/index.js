import React, { Component } from "react";
import { Link } from "react-router-dom";
//import '../../styles/login.css';
import styled from "styled-components";
import imageURL from "../../images/logo.jpg";
import Grid from "@material-ui/core/Grid";
const Body = styled.div`
  && {
    padding: 0.5rem;
    background-color: white;
  }
  hr {
    margin: 40px 0px;
  }
  #welcome {
    margin-top: 100px;
    text-align: left;
    font: normal normal bold 35px/60px Noto Sans;
    letter-spacing: 0px;
    color: #393434;
    text-transform: capitalize;
    opacity: 1;
  }
  #con {
    display: flex;
    margin-top: 10px;
    text-align: left;
    max-width: 400px;
    flex-wrap: wrap;
    font: normal normal bold 25px/45px Noto Sans;
    letter-spacing: 0px;
    color: #393434;
    text-transform: capitalize;
    opacity: 1;
  }

  #box {
    padding-top: 72px;
    width: 450px;
    height: 500px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 40px #00000014;
    border-radius: 5px;
    opacity: 1;
  }
  #login {
    margin-left: 70px;
    width: 352px;
    height: 37px;
    text-align: left;
    font: normal normal bold 30px/51px Montserrat;
    letter-spacing: 0.24px;
    color: #1c2126;
    opacity: 1;
  }
  #email,
  #g {
    margin-top: 40px;
    margin-left: 70px;
    width: 300px;
    height: 37px;
    background: #f2f4f8 0% 0% no-repeat padding-box;
    border-radius: 7px;
    opacity: 1;
    text-align: left;
    font: normal normal medium 14px/18px Montserrat;
    letter-spacing: 0px;
    color: #7f8284;
    opacity: 1;
    padding-left: 15px;
  }

  #submit {
    margin-top: 30px;
    margin-left: 70px;
    width: 300px;
    height: 37px;
    border-radius: 7px;
    background: transparent
      linear-gradient(90deg, #fd6f82 0%, var(--unnamed-color-fe885d) 100%) 0% 0%
      no-repeat padding-box;
    background: transparent linear-gradient(90deg, #fd6f82 0%, #fe885d 100%) 0%
      0% no-repeat padding-box;
    opacity: 1;
    text-align: center;
    font: normal normal semibold 19px/23px Montserrat;
    letter-spacing: 0px;
    color: #ffffff;
    text-transform: capitalize;
    opacity: 1;
  }
  #gmail {
    margin-top: 0px;
    margin-left: 70px;
    width: 300px;
    height: 37px;
    background: #e9e9e9 0% 0% no-repeat padding-box;
    opacity: 1;
    text-align: center;
    font: normal normal semibold 18px/22px Montserrat;
    letter-spacing: 0px;
    color: #fe885d;
    text-transform: capitalize;
    opacity: 1;
    border-radius: 7px;
  }
  i {
    float: left;
    margin-left: 30px;
  }
  #apple,
  #Linkedin {
    margin-top: 10px;
    margin-left: 70px;
    width: 300px;
    height: 37px;
    border: 1px solid var(--unnamed-color-fe885d);
    border: 1px solid #fe885d;
    opacity: 1;
    text-align: center;
    font: normal normal semibold 19px/23px Montserrat;
    letter-spacing: 0px;
    color: #393434;
    text-transform: capitalize;
    border-radius: 7px;
  }
`;
const Header = styled.div`
  && {
    width: 100%;
    height: 90px;
    padding: 10px 40px;

  }
`;

export default class Login extends Component {
  render() {
    return (
      <Body>
        <Header>
          <img src={imageURL} width="72" height="42" />
        </Header>
        <Grid container>
          <Grid container xl={6} lg={6} md={6} xs={12} sm={12} justify="center">
            <div>
              <div id="welcome">Welcome..</div>
              <div id="con">
                hire the best freelancers online for any local job
              </div>
            </div>
          </Grid>
          <Grid
            container
            xl={6}
            lg={6}
            md={6}
            xs={12}
            sm={12}
            justify="space-around"
          >
            <form id="box" action="password.php">
              <div id="login">Log in to Get to work</div>
              <input id="email" type="text" placeholder="username or email" />
              <Link to="/passwordform">
                <input id="submit" type="submit" value="Continue" />
              </Link>
              <hr />
              <button id="gmail">
                <i class="fa fa-google fa-fw"></i>Sign In with Google
              </button>
              <button id="apple">
                <i class="fa fa-apple" aria-hidden="true"></i>Sign In with Apple
              </button>
              <button id="Linkedin">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>Sign In
                with Linkedin
              </button>
            </form>
          </Grid>
        </Grid>
      </Body>
    );
  }
}
