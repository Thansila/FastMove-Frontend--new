import React from 'react'
import TopBar from '../../components/topBar/TopBar'
import ArrivalTable from '../../components/ViewBusescard/ViewBusescard'
import Footer from '../../components/footer/Footer'

export default function ViewBus() {
 
  return (
    <div id="content" style={{width: '1150px'}}>

        <div class="container-fluid mr-5" style={{width: '1100px'}}>
            <h1 class="h3 mb-2 text-gray-800">MY BUSES</h1>
            {/* <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the <a target="_blank"
                    href="https://datatables.net">official DataTables documentation</a>.</p> */}
            <ArrivalTable/>
        </div>
        <Footer/>

    </div>
  )
}
