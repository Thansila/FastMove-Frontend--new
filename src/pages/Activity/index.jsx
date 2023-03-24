import React from "react";
import Adminsidebar from "../../components/Adminsidebar/Adminsidebar";
import AdminTopBar from "../../components/AdmintopBar/AdmintopBar";
import ActivityShedule from "../../components/ActivityShedule/ActivityShedule";
import Activity from "./Activity";
import "./Activity"
export default function ActivityShe(){
    return(
        <div className="Activity">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <Adminsidebar/></div>
                <div className="Dash"> <Activity/></div>            
                   
                </div>
         </div>

    )
}