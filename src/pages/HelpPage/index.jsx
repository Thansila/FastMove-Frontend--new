import React from "react";
import Helpsheet from "./HelpPage";
import BusownersideBar from "../../components/Busownersidebar/BusownersideBar";
import BusownerTopBar from "../../components/BusownertopBar/BusownerTopBar";
import './HelpPage.css'

export default function HelpPage(){
    return(
        <div className="Dashboard-page">

              <div className="Topbar"> <BusownerTopBar/></div>
              <div className="flex">
              <div className="sidebar"> <BusownersideBar/></div>
                <div className="Dash"> <Helpsheet/></div>            
                   
                </div>
         </div>

    )
}