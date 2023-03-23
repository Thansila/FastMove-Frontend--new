import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/topBar/TopBar";
import Footer from "../../components/footer/Footer";
import DashBoardConductor from "./DashBoardConductor";
import "./dashboard.css"

export default function DashBoardPageConductor(){
    return(
        <div className="Dashboard-page">

              <div className="Topbar"> <TopBar/></div>
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>
              <div className="Dash"> <DashBoardConductor/></div>   
                    
                   
                </div>
         </div>

    )
}