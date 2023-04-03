import React from "react";
import BusownersideBar from "../../components/Busownersidebar/BusownersideBar";
import BusownerTopBar from "../../components/BusownertopBar/BusownerTopBar";
import OwnerProfilePage from "./OwnerProfilePage";
import "./OwnerProfilePage.css"

export default function OwnerProfile(){
    return(
        <div className="Dashboard-page">

              <div className="Topbar"> <BusownerTopBar/></div>
              <div className="flex">
              <div className="sidebar"> <BusownersideBar/></div>
                <div className="Dash"> <OwnerProfilePage/></div>            
                   
                </div>
         </div>

    )
}