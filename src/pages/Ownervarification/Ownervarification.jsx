import React from 'react'
import Owner from '../../components/AOwner/AOwner';
import Footer from '../../components/footer/Footer'
export default function Ownervarification(props) {
    console.log(props);
    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h1 class="h3 mb-2 text-gray-800">Owner Verification</h1>
        
        {/* <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
            For more information about DataTables, please visit the <a target="_blank"
                href="https://datatables.net">official DataTables documentation</a>.</p> */}
        <Owner/>
        <button type="button" class="btn btn-primary ml-1 mb-3">Cancel</button>
        <button type="button" class="btn btn-primary ml-1 mb-3">Verify</button>
    </div>
    <Footer/>

</div>
    
  )
}
