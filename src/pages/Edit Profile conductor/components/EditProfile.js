import React  from 'react';
import ConductorProfilecard from '../../../components/ConductorProfileCard/ConductorProfileCard';


function Profile() {

    return (
        
    
        
        <><h2>Edit Profile </h2><div id="content" style={{ width: '1150px' }}>


            {/* <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
        For more information about DataTables, please visit the <a target="_blank"
            href="https://datatables.net">official DataTables documentation</a>.</p> */}
            <ConductorProfilecard />
            <button type="button" class="btn btn-primary ml-1 mb-3 float-right"> EDIT</button>
        </div></>



    
       
        
        
           
    )
}

export default Profile;