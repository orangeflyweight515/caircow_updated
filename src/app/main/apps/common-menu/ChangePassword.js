import FuseAnimate from '@fuse/core/FuseAnimate';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cm.css';
function ChangePassword ()  {
    return (
        <FuseAnimate animation="transition.slideUpIn" delay={300}>		           

          
                                    <div className="container" >
                                    <h1><b>Change Password</b></h1>
                                            <div className="row">
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                      
                                           
                                    <div className="form-group">
                                        {/* <label for="opasswd"><font color="#FF0000">*</font>Current Password: &nbsp;</label> */}
                                       <h4  style={{verticleAlign:'middle'}}><font color="#FF0000">*</font>Current Password:&nbsp;&nbsp; 
                                        <input type="password" className="col-sm-5 "placeholder="currentt password" name="opasswd" id="opasswd" value="" width="50px" />
                                        </h4>
                                        </div>
                                       
                                        <div className="form-group"> 
                                        <h4  style={{verticleAlign:'middle'}}><font color="#FF0000">*</font>New Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="password" className="col-sm-5" placeholder="New password" name="npasswd" id="npasswd" value="" width="50px" />
                                        </h4>
                                         </div> 
                                        <div className="form-group">
                                        <h4  style={{verticleAlign:'middle'}}><font color="#FF0000">*</font>Confirm Password:&nbsp;&nbsp;
                                        <input type="password" className="col-sm-5" placeholder="confirm password" name="cpasswd" id="cpasswd" value="" width="50px" />
                                        </h4>
                                        </div>
                                   
                                    <div className="padtop20"></div>
                                </div>
                                <div className="form-actions fluid">
                                    <div className="col-md-offset-12 col-md-12">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type="submit" name="submitChange" class id="submitChange" className="btn btn-lg btn-success" padding-right="10 !important">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button type="button" value="Cancel" className="btn btn-lg  btn-danger" name="reset" id="cancel">Cancel</button>
                                    </div>
                                </div>
                                </div>
                           
                               
                
            </div>



		</FuseAnimate>
    );
}

export default ChangePassword;