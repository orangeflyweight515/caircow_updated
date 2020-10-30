import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ManageSubCategory ()  {
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
        <li>Manage Sub Category</li>

            </ul>
            </div>
            <hr className="styleone"></hr>
            
            <div className="row" style={{background:"white",height:"50px",paddingTop:"10px" }}>
            
                <h2 className="filter">Manage Sub Category</h2>
                
                <div class="nav navbar-right panel_toolbox portlet-toggler">
                                            <a href="ajax.manage_subadmin-sd.php?action=add" class="btn btn-success btn-sm btn-add" title="Add"><i class="fa fa-plus"></i></a>
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
                                    <select name='Category' id='Category' className='user1 input-inline'>
                                        <option selected='' value=''>Select Category</option>
                                        <option value='1'>Accounts & Consultants</option>
                                        <option value='2'>Graphic Designings</option>
                                        <option value='3'>Mobile Development</option>
                                        <option value='4'>Web Development</option>
                                        <option value='5'>Virtual Asistant</option>
                                        <option value='6'>Data Entry</option>
                                        <option value='7'>Content Writing</option>
                                        <option value='8'>Sales & Marketing</option>
                                        <option value='9'>Marketing</option>
                                        <option value='10'>Instagram Accounts</option>
                                        <option value='11'>Accounting</option>
                                       
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="form-group">
                                    <input type="" name="first_name" id="first_name" className="user" placeholder="Sub Category Name" />
                                </div>
                            </div>

                            

                            <div className="col-md-3">
                                <div className="form-group">
                                    <select name='status' id='status' className='user1 input-inline'>
                                        <option selected='' value=''>All</option>
                                        <option value='y'>Job</option>
                                        <option value='d'>Services</option>
                                        <option value='u'>Both</option>
                                    </select>
                                </div>
                            </div>

                          
                            <div className="col-md-3">
                                <div className="form-group">
                                    <select name='status' id='status' className='user1 input-inline'>
                                        <option selected='' value=''>Status</option>
                                        <option value='y'>Active</option>
                                        <option value='d'>Deactive</option>
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

export default ManageSubCategory;