import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/ConducortopBar/TopBar";
import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';
import "./scan.css"


        
function Scan() {
  const webcamRef = useRef(null);
  const [qrCode, setQrCode] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const code = jsQR(imageSrc);

    if (code) {
      setQrCode(code.data);
    } else {
      setQrCode(null);
    }
  };

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
              {/*adding QR code scaner using web cam*/}
              <Webcam
               audio={false}
               ref={webcamRef}
               screenshotFormat="image/jpeg"
               width="500px"
              />
              <button  onClick={capture}  class="btn1 cap">Capture QR Code</button>
              {qrCode && (
              <div className="qrCode">
                <p>QR Code detected: {qrCode}</p>
              </div>
              )}
                </div>
                </div>
                </div> 
                </div>    
                </>
             
    )
}

export default Scan;  