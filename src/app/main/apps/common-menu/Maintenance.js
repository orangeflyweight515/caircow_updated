import FuseAnimate from '@fuse/core/FuseAnimate';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cm.css';
function Maintenance ()  {
    return (
        <FuseAnimate animation="transition.slideUpIn" delay={300}>	         

            <div className="title">
            <div className="row" style={{background:"whitesmoke",height:"50px"}}>
            <ul className="page-breadcrumb breadcrumb" style={{background:"whitesmoke",height:"50px",paddingTop:"10px" , marginLeft:"20px"}}>
             <li> <i className="fa fa-home"></i> 
            <a href="#"> Home&nbsp; </a>&nbsp;<i className="fa fa-angle-right"></i></li>
            <li> Manage Maintanance</li>

                </ul>
                </div>

            <div className="custom-control custom-switch" >
           <label style={{ fontSize:16}}>Set Maintanance Mode: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="checkbox" className="custom-control-input"   id="customSwitch" />
            <span className="custom-control-label" for="customSwitch1"></span>
         </label>
            </div>
            </div>
            
            
		</FuseAnimate>
    
    );
}

export default Maintenance;