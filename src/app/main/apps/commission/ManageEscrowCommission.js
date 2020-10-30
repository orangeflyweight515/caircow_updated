import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ManageEscrowCommission (){
    return (
                


<div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="x_panel">
                <div className="x_title">
                    <h2>Manage Sub Category</h2>
                    <div className="nav navbar-right panel_toolbox portlet-toggler">
                       <a href="ajax.users-sd.php?action=export_excel" className="btn chng-btn btn-success btn-sm" title="Download"><i className="fa fa-download"></i></a>
                    </div>
                    <div className="nav navbar-right panel_toolbox portlet-toggler">
                       <a href="ajax.users-sd.php?action=export_csv" className="btn chng-btn btn-warning btn-sm" title="Export as CSV"><i className="fa fa-file-excel-o"></i></a>
                    </div>
                    <div className="nav navbar-right panel_toolbox btn-back">
                        <a href="http://www.pickgeeks.com/masters-sd/units-sd/users-sd" className="btn btn-success btn-sm" title="Back"><i className="fa fa-arrow-left"></i></a>
                    </div> 
                    
                    <div className="clearfix"></div>
                </div>
                    <label className="control-label filtered-label">Filter By :&nbsp;</label>
                    <div className="x_content">
                        <div className="actions portlet-toggler">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <select name="filterLocation" id="filterLocation" className="form-control">
                                            <option value='' >Select Category</option>
                                            <option value="1">Accounts &amp; Consultants</option> 
                                            <option value="2">Graphics Designing</option> 
                                            <option value="3">Mobile Development</option> 
                                            <option value="4">Web Developement</option> 
                                            <option value="5">Virtual Assitant</option>
                                            <option value="6">Data Entry</option> 
                                            <option value="7">Content Writing</option> 
                                            <option value="8">Sales &amp; Marketing</option> 
                                            <option value="11">Marketing</option> 
                                            <option value="15">Instagram Accounts</option> 
                                            <option value="16">Accounting</option>

                                            </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <input type="" name="category_name" id="category_name" className="form-control" placeholder="Sub Category Name"/>
                                    </div>
                                </div>
    
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <select name='status' id='status' className='form-control input-inline'>
                                            <option selected='' value=''>Status</option>
                                            <option value='y'>Active</option>
                                            <option value='d'>Deactive</option>
                                        </select>
                                    </div>
                                </div>
    
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <a href="javascript:;" className="btn chng-btn btn-default btn-sm restFilter" title="Download"><i className="fa fa-refresh"></i> Reset Filter</a>
    
                                    </div>
                                </div>
    
    
    
                            </div>
                        </div>
                </div>
           </div>
        </div>
    
    

    );
}

export default ManageEscrowCommission;