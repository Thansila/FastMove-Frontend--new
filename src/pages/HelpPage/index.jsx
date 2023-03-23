import React from "react";
import Helpsheet from "./HelpPage";
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/topBar/TopBar";
import './HelpPage.css'

export default function HelpPage(){
    return(
        <div className="Dashboard-page">

              <div className="Topbar"> <TopBar/></div>
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>
                <div className="Dash"> <Helpsheet/></div>            
                   
                </div>
         </div>

    )
}