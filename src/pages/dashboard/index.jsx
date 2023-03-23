import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/topBar/TopBar";
import DashBoard from "./DashBoard";
import "./dashboard.css"

export default function DashBoardPage(){
    return(
        <div className="Dashboard-page">

              <div className="Topbar"> <TopBar/></div>
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>
                <div className="Dash"> <DashBoard/></div>            
                   
                </div>
         </div>

    )
}