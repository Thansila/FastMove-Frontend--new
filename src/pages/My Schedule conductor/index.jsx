import React from "react";
import SideBar from "../../components/topBar/SideBar";
import TopBar from "../../components/topBar/TopBar";
import MySchedule from "../../pages/My Schedule conductor/MySchedule";



export default function MySchedulePage(){
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