import React from "react";
import Adminsidebar from "../../components/Adminsidebar/Adminsidebar";
import AdminTopBar from "../../components/AdmintopBar/AdmintopBar";
import ABusFare from "../../components/ABusFare/ABusFare";
import ABusfarepage from "./ABusfarepage";
import "./ABusfarepage.css"
export default function Busfarepagein(){
    return(
        <div className="Busfarepage">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <Adminsidebar/></div>
                <div className="Dash"> <ABusfarepage/></div>            
                   
                </div>
         </div>

    )
}