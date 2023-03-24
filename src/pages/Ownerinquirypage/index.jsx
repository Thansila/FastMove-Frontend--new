import React from "react";
import Adminsidebar from "../../components/Adminsidebar/Adminsidebar";
import AdminTopBar from "../../components/AdmintopBar/AdmintopBar";
import Ownerinquiry from "../../components/Ownerinquiry/Ownerinquiry";
import Ownerinquirypage from "./Ownerinquirypage";
import "./Ownerinquirypage";
export default function Ownerinquiryy(){
    return(
        <div className="ownerinquiry">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <Adminsidebar/></div>
                <div className="Dash"> <Ownerinquirypage/></div>            
                   
                </div>
         </div>

    )
}