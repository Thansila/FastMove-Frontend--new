import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/topBar/TopBar";
import ViewBus from "./ViewBusPage";
import './ViewBus.css'

export default function ViewBusPage(){
    return(
        <div className="Dashboard-page">

              <div className="Topbar"> <TopBar/></div>
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>
                <div className="Dash"> <ViewBus/></div>            
                   
                </div>
         </div>

    )
}