import React from 'react'
import ActivityShedule from '../../components/ActivityShedule/ActivityShedule';
import Footer from '../../components/footer/Footer'
export default function Activity(props) {
    console.log(props);
    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h1 class="h3 mb-2 text-gray-800">Activity Scedule</h1>
        
        {/* <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
            For more information about DataTables, please visit the <a target="_blank"
                href="https://datatables.net">official DataTables documentation</a>.</p> */}
        <ActivityShedule/>
        
    </div>
    <Footer/>

</div>
    
  )
}
