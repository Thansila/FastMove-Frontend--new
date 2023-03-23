import React from 'react'
import Footer from '../../components/footer/Footer'
import DashBoard from '../dashboard/DashBoard'


export default function MainPage() {
  return (
    <div>
          <div id="content-wrapper" class="d-flex flex-column">
            <DashBoard/>
            <div style={{marginTop:"300px"}}>
              <Footer />
            </div>
          
        </div>
      
    </div>
  )
}
