import React  from 'react';
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/ConducortopBar/TopBar";

        
function Scan() {

    return (
    
            <>
            
              <div className="ScanPage">
              <div className="body">
              <div className="Topbar"> <TopBar/></div>
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>   
               
              <div class="container-fluid">
              
              <h2 class="black">Scan QR Code</h2>
              <p>Scan Passenger's Qr Code Here</p>
    
                
                </div>
                </div>
                </div> 
                </div>  
                
         
        
                
                </>
             
    )
}

export default Scan;  