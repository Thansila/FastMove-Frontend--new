import React from "react";
import Adminsidebar from "../../components/Adminsidebar/Adminsidebar";
import AdminTopBar from "../../components/AdmintopBar/AdmintopBar";
import ADashBoard from "./ADashBoard";
import "./Adashboard.css"

export default function DashBoardPage(){
    return(
        <div className="Dashboard-page">

              <div className="Topbar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <Adminsidebar/></div>
                <div className="Dash"> <ADashBoard/></div>            
                   
                </div>
         </div>

    )
}