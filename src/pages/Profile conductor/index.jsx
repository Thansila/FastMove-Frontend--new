import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/topBar/TopBar";
import Profile from "./components/Profile";



export default function ProfilePage(){
    return(
        <div className="BusRegPage">

              <div className="Topbar"> <TopBar/></div>
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>
                <div className="Dash"> <Profile/></div>            
                   
                </div>
         </div>

    )
}