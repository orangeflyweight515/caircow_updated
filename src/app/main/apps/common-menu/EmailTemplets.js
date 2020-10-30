import FuseAnimate from '@fuse/core/FuseAnimate';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cm.css';
function EmailTemplats ()  {
    return (
        <FuseAnimate animation="transition.slideUpIn" delay={300}>

               <table class="table table-bordered" >
               <thead>
                  <tr>
                     
                     <th scope="col">Constant</th>
                     <th scope="col">Type</th>
                     <th scope="col">Description</th>
                     <th scope="col">Status</th> 
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th scope="row">1</th>
                     <td>Mark</td>
                     <td>Otto</td>
                     <td><div className="custom-control custom-switch">
                     <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
                     <label className="custom-control-label" for="customSwitch1"></label>
                     </div></td>
                  </tr>
                  <tr>
                     <th scope="row">2</th>
                     <td>Jacob</td>
                     <td>Thornton</td>
                     <td><div className="custom-control custom-switch">
                     <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
                     <label className="custom-control-label" for="customSwitch1"></label>
                     </div></td>
                  </tr>
                  <tr>
                     <th scope="row">3</th>
                     <td>Jacob</td>
                     <td >Larry the Bird</td>    
                     <td><div className="custom-control custom-switch">
                     <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
                     <label className="custom-control-label" for="customSwitch1"></label>
                     </div></td>
                  </tr>
               </tbody>
               </table>
            
		</FuseAnimate>
    );
}

export default EmailTemplats;