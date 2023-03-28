
import React from "react";
import Adminsidebar from "../../components/Adminsidebar/Adminsidebar";
import AdminTopBar from "../../components/AdmintopBar/AdmintopBar";
import passengerinquiry from "../../components/Passengerinquiry/Passengerinquiry";
import Pinquirypage from "./Pinquirypage";
import "./Pinquirypage.css";

export default function inqiryyypage(){
    return(
        <div className="ownerinquiry">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <Adminsidebar/></div>
                <div className="Dash"> <Pinquirypage/></div>    

                     
                   
                </div>
         </div>

    )
}