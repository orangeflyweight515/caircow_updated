import React,{ Component } from 'react';
//import '../../styles/login.css';
import styled from 'styled-components'
import imageURL from '../../images/logo.jpg'
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';
import { InputAdornment,Input,OutlinedInput } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
const Body = styled.div`
  && {
    padding: 0.5rem;
    background-color: white;
    width:100%;
    height:100vh;
  }
  .container {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    /* border: 2px solid black; */
    box-shadow: 0px 3px 40px #00000014;
    border-radius: 5px;
    width: 554px;
    max-width:554px;
    min-width:400px;
    height: 440px;
}
 h4 {
    color: #1c2126;
    font: normal normal bold 30px/51px Montserrat;
    letter-spacing: 0.24px;
    text-align: center;
}
.MuiOutlinedInput-input {
    padding: 6.5px 14px;
}

.MuiOutlinedInput-adornedStart {
    width:100%;
    padding: 8px 10px;
    border: 2px solid #FE885D;
    border-radius: 7px;
    opacity: 1;
    display:flex;
    justify-content:center;
}
.PrivateNotchedOutline-root-7 {
    border-width:0px;
}
.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
    border:none;
}
#check {
    float:left; 
    margin-right:10px;
    border: 1px solid #FE885D;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 2px;
    opacity: 1;
}

#forgot {
    text-decoration: none;
    /* padding-top: 428px; */
    float:right;
    text-align: left;
    font: normal normal medium 18px 22px Montserrat;
    letter-spacing: 0px;
    color: #FE885D;
    opacity: 1;
}

button {
    width: 80%;
    height: 43px;
    margin:0px 40px;
    background: transparent linear-gradient(180deg, #FD6F82 0%, #FE885D 100%) 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 5px;
    text-align: center;
    font: normal normal semibold 19px/23px Montserrat;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-transform: capitalize;
    opacity: 1;
    cursor: pointer;
    opacity: 1;
}

#notyou {
    width:100%;
    text-align: center;
    font: normal normal 600 20px/40px Montserrat;
    text-decoration: none;
    letter-spacing: -0.1px;
    text-transform: capitalize;
    opacity: 1;
}
`;
const Header = styled.div`
   && {
    width: 100%;
    height: 90px;
    padding: 10px 40px;

  }
`;
const Container=styled(Grid)`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    /* border: 2px solid black; */
    box-shadow: 0px 3px 40px #00000014;
    border-radius: 5px;
    width: 554px;
    max-width:554px;
    min-width:400px;
    height: 430px;
    padding:30px 65px;

`;
const PasswordInput=styled(OutlinedInput)`
    /* &&{
    width:100%;
    padding: 12px 10px;
    border: 2px solid #FE885D;
    border-radius: 7px;
    opacity: 1;
    display:flex;
    justify-content:center;   
    } */
    &&{
        color:#FE885D;
    }
`;
export default class PasswordForm extends Component{
    render(){
        return(
            <Body>
            <Header>
            <img src={imageURL} width="72" height="42"/>
        </Header>
            <Grid container justify="center"  >
            <Container container justify="center" spacing={4}>
                <Grid item xs={12}>
                <h4>welcome</h4>
                </Grid>
                <Grid item xs={12}>
                <PasswordInput
                id="password"
            type="password"        
            startAdornment={<InputAdornment position="start"><LockOutlinedIcon/></InputAdornment>}
            labelWidth={60}
          />  
                </Grid>
                <Grid item xs={12}>
                    <input type="checkbox" id="check" />
                    <label for="check">keep me logged in</label>
                    <a href="#" id="forgot">forgot password?</a>
                </Grid>
                <Grid item xs={12}>
                    <button type="submit">Log In</button>
                </Grid>
                <Grid item xs={12}>
                  <div id="notyou">  
                  <Link to='/' style={{color:"#FE885D"}}>Not You ?</Link>
                  </div>
                </Grid>
            </Container>
            
            
            <div>
              
                
            </div>
            
            </Grid>
            
            </Body>
              
        )
    }
}