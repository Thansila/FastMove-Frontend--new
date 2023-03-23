import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/topBar/TopBar";
import BusReg from "./BusReg.jsx";
import "./BusReg.css"


export default function BusRegPage(){
    return(
        <div className="BusRegPage">

              <div className="Topbar"> <TopBar/></div>
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>
                <div className="Dash"> <BusReg/></div>            
                   
                </div>
         </div>

    )
}