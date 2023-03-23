import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/topBar/TopBar";
import MySchedule from "./MySchedule.js";
import "./MySchedule.css"


export default function BusRegPage(){
    return(
        <div className="BusRegPage">

              <div className="Topbar"> <TopBar/></div>
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>
                <div className="Dash"> <MySchedule/></div>            
                   
                </div>
         </div>

    )
}