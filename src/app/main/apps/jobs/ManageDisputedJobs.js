import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ManageDisputedJobs ()  {
    return (
    	         
        
 <div className="row">
    <div className="col-md-12 col-sm-12 col-xs-12">
    <div className="x_panel">
            <div className="x_title">
            <hr></hr>
            <div className="row" style={{background:"whitesmoke",height:"50px"}}>
            <ul className="page-breadcrumb breadcrumb" style={{background:"whitesmoke",height:"50px",paddingTop:"10px" , marginLeft:"20px"}}>
         <li> <i className="fa fa-home"></i> 
        <a href="http://www.pickgeeks.com/masters-sd/units-sd/home-sd/"> Home&nbsp; </a>&nbsp;<i className="fa fa-angle-right"></i></li>
        <li>Manage Users</li>

            </ul>
            </div>
            <hr className="styleone"></hr>
            
            <div className="row" style={{background:"white",height:"50px",paddingTop:"10px" }}>
            
                <h2 className="filter">Manage Users</h2>
                
                <div className="nav navbar-right panel_toolbox portlet-toggler" >
                   <a href="ajax.users-sd.php?action=export_excel" className="btn chng-btn btn-success btn-lg" title="Download"><i  className="fa fa-download fa-5x" style={{fontSize:"90px"}}></i></a>
                </div>
                <div className="nav navbar-right panel_toolbox portlet-toggler">
                   <a href="ajax.users-sd.php?action=export_csv" className="btn chng-btn btn-warning btn-lg" title="Export as CSV"><i className="fa fa-file-excel-o"></i></a>
                </div>
               
                </div>
                <hr style={{display:"block"}}></hr>
               
               
                <div className="clearfix"></div>
            </div>
               
                
                <div className="x_content">
                    <div className="actions portlet-toggler">
                   
                    <div className="row" style={{background:"white" }}>
                    <h4 className="filter">Filter By :&nbsp;</h4>
                    </div>
                    <div className="row" style={{background:"white" }}>
                    
                            <div className="col-md-3">
                                <div className="form-group">
                                    <input type="" name="first_name" id="first_name" className="user" placeholder="Dispute Name" />
                                </div>
                            </div>
							
							
							<div className="col-md-3">
                                <div className="form-group">
                                     <select name="filterCompany" id="filterCompany" className="user1">
                                        <option value=''>Dispute Status </option>
                                        <option value='c'>Pending</option>
                                        <option value='f'>Solved</option>
                                        
                                    </select>
                                </div>
                            </div>
							
							<div className="col-md-3">
                                <div className="form-group">
                                    <input type="text" name="date_range" id="date_range" className="user1" placeholder="Registered on"/>
                                </div>
                            </div>

                            

                            <div className="col-md-3">
                                <div className="form-group">
                                     <select name="filterCompany" id="filterCompany" className="user1">
                                        <option value=''>Select User Type</option>
                                        <option value='c'>Customer</option>
                                        <option value='f'>Freelancer</option>
                                        
                                    </select>
                                </div>
                            </div>

                          

                            <div className="col-md-3">
                                <div className="form-group">
                                    <a href="javascript:;" className="btn chng-btn btn-default btn-sm restFilter" title="Download"><i className="fa fa-refresh"></i><h3>Reset Filter</h3></a>

                                </div>
                            </div>
                            </div>



                        </div>
                    </div>
            </div>
       </div>
    </div>
            
               
            
		
    );
}

export default ManageDisputedJobs;