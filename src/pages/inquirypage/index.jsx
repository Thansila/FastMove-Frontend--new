import React from "react";
import Adminsidebar from "../../components/Adminsidebar/Adminsidebar";
import AdminTopBar from "../../components/AdmintopBar/AdmintopBar";
import Passengerinquiry from "../../components/Passengerinquiry/Passengerinquiry";
import inquirypage from "./inquirypage";
import "./inquirypage";
export default function Passegerinquiryyy(){
    return(
        <div className="inquirypassenger">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <Adminsidebar/></div>
                <div className="Dash"> <inquirypage/></div>            
                   
                </div>
         </div>

    )
}