// import FuseAnimate from '@fuse/core/FuseAnimate';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './job_custom.css';
function ManageJobs () {
return (
// <FuseAnimate animation="transition.slideUpIn" delay={300}>

<div className="row">
<div className="col-md-12 col-sm-12 col-xs-12">
<div className="x_panel">
<div className="x_title">
<hr></hr>
<div className="row" style={{background:"whitesmoke",height:"50px"}}>
<ul className="page-breadcrumb breadcrumb" style={{background:"whitesmoke",height:"50px",paddingTop:"10px" , marginLeft:"20px"}}>
<li> <i className="fa fa-home"></i>
<a href="http://www.pickgeeks.com/masters-sd/units-sd/home-sd/"> Home&nbsp; </a>&nbsp;<i className="fa fa-angle-right"></i></li>
<li>Manage Jobs</li>

</ul>
</div>
<hr className="styleone"></hr>

<div className="row" style={{background:"white",height:"50px",paddingTop:"10px" }}>

<h2 className="filter">Manage Jobs</h2>

<div className="nav navbar-right panel_toolbox portlet-toggler" >
<a href="ajax.users-sd.php?action=export_excel" className="btn chng-btn btn-success btn-lg" title="Download"><i className="fa fa-download fa-5x" style={{fontSize:"90px"}}></i></a>
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
<select name='status' id='status' className='user1 input-inline'>
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
<div class="col-md-3 col-sm-3 col-xs-8">
<div class="form-group">
<select name="filterSubCategory" id="filterSubCategory" class="form-control">
<option value="">Select Sub Category</option>
<option value="1">Game Development</option> <option value="2">Ecommerce Development</option> <option value="3">Software Testing</option> <option value="4">Mobile Development</option> <option value="5">Other - Software Development</option> <option value="6">Web & Mobile Design</option> <option value="7">Data Visualization</option> <option value="8">Custom Designs</option> <option value="9">Machine Learning</option> <option value="10">Scripts & Utilities</option> <option value="11">Data Analysis</option> <option value="12">Website Development</option> <option value="13">Accounting Solutions</option> <option value="15">Digital Marketing</option> <option value="16">Network Marketing</option> <option value="17">Automation Testing</option> <option value="18">Manual Testing</option> <option value="20">One Page Designing</option> <option value="21">Material Designs</option> <option value="22">Bootstrap Designs</option> <option value="23">PSD Templates</option> <option value="24">Ionic</option> <option value="25">Andorid</option> <option value="26">SEO</option> <option value="29">Business Activity Statement (BAS)</option> <option value="30">Fringe Benefits Tax (FBT)</option> <option value="31">GST</option> <option value="32">Monthly Reporting</option> <option value="33">Profit Improvement</option> <option value="34">Succession Planning</option> <option value="35">Tax</option> <option value="36">Xero</option> <option value="37">Taxation Planning</option> <option value="38">Tax Return Individuals</option> <option value="39">Superannuation Advice and Planning</option> <option value="40">Payroll</option> <option value="41">Inventory Management</option> <option value="42">Company Register Management</option>

</select>
</div>
</div>
<div class="col-md-3 col-sm-3 col-xs-8">
<div class="form-group">
<select name="filterSkill" id="filterSkill" class="form-control">
<option value=''>Select Skill</option>
<option value="1">AngularJS Developers</option> <option value="2">Android Developers</option> <option value="3">Bookkeepers</option> <option value="4">C# Developers</option> <option value="5">Content Writers</option> <option value="6">Copywriters</option> <option value="7">Customer Service Representatives</option> <option value="8">Data Entry Specialists</option> <option value="9">*** Marketing Consultants</option> <option value="10">Excel Experts</option> <option value="11">****** Marketers</option> <option value="12">Graphic Designers</option> <option value="13">Objective-C Developers</option> <option value="14">JavaScript Developers</option> <option value="15">JQuery Developers</option> <option value="16">Mobile App Developers</option> <option value="17">SEO Experts</option> <option value="18">PHP Developers</option> <option value="19">Python Developers</option> <option value="20">Sales Consultants</option> <option value="21">UI Designers</option> <option value="22">Social Media Consultants</option> <option value="23">Swift Developers</option> <option value="24">Technical Writers</option> <option value="25">Wordpress Developers</option> <option value="27">Virtual Assistants</option> <option value="28">Web Designers</option> <option value="29">Writers</option> <option value="30">Writer</option> <option value="31">UX Designerss</option> <option value="36">Java</option> <option value="37">Node.js</option> <option value="40">React.js</option> <option value="44">Selenium Web Driver</option> <option value="45">QA Automation</option> <option value="46">HTML5</option> <option value="47">CSS3</option> <option value="48">Photoshop</option> <option value="49">MySQL</option> <option value="50">Ionic</option> <option value="57">Laravel</option> <option value="58">Testing</option> <option value="95">Test</option> <option value="96">Business Activity Statement (BAS)</option> <option value="97">Fringe Benefits Tax (FBT)</option> <option value="98">GST</option> <option value="99">Monthly Reporting</option> <option value="100">Profit Improvement</option> <option value="101">Succession Planning</option> <option value="102">Tax</option> <option value="103">Xero</option> <option value="104">Taxation Planning</option> <option value="105">Tax Return Individuals</option> <option value="106">Superannuation Advice and Planning</option> <option value="107">Self-Managed Super Fund (SMSF)</option>
</select>
</div>
</div>

<div class="col-md-3 col-sm-3 col-xs-8">
<div class="form-group">
<select name="filterJobStatus" id="filterJobStatus" class="form-control">
<option value=''>Select Job Status</option>
<option value="p">Pending</option>
<option value="h">Hired</option>
<option value="ip">In Progress</option>
<option value="co">Completed</option>
<option value="c">Closed</option>
<option value="ud">Under Dispute</option>
<option value="dsp">Dispute Solved and Job In Progress</option>
<option value="dsco">Dispute Solved and Job Completed</option>
<option value="dsc">Dispute Solved and Job Closed</option>
</select>
</div>
</div>
<div class="col-md-3 col-sm-3 col-xs-8">
<div class="form-group">

<select name="filterFeatured" id="filterFeatured" class="form-control">
<option value=''>Select</option>
<option value="y">Only Featured Jobs</option>
</select>
</div>
</div>
<div class="col-md-3 col-sm-3 col-xs-8">
<div class="form-group">
<select name="price_range" id="price_range" class="form-control">
<option value=''>Select Price</option>
<option value="0-500">0-500</option>
<option value="500-1000">500-1000</option>
<option value="1000-2000">1000-2000</option>
<option value="2000-5000">2000-5000</option>
<option value="5000">5000 Or more </option>
</select>
</div>
</div>

<div class="col-md-3 col-sm-3 col-xs-8">
<div class="form-group">
<select name="job_type" id="job_type" class="form-control">
<option value=''>Select Job Type</option>
<option value="pu">Public</option>
<option value="pr">Private</option>
</select>
</div>
</div>
<div class="col-md-3">
<div class="form-group">
<input type="" name="posted_by" id="posted_by" class="form-control" placeholder="Job Posted By Name" />
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

export default ManageJobs;