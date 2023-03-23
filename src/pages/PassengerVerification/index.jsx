import React from "react";
import Adminsidebar from "../../components/Adminsidebar/Adminsidebar";
import AdminTopBar from "../../components/AdmintopBar/AdmintopBar";
import APassenger from "../../components/APassenger/APassenger";
import PassengerVerification from "./PassengerVerification";
import "./PassengerVerification.css"
export default function PassengerVerify(){
    return(
        <div className="PassengerVerification">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <Adminsidebar/></div>
                <div className="Dash"> <PassengerVerification/></div>            
                   
                </div>
         </div>

    )
}