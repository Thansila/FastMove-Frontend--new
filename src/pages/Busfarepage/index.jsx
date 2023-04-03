import React from "react";
import Adminsidebar from "../../components/Adminsidebar/Adminsidebar";
import AdminTopBar from "../../components/AdmintopBar/AdmintopBar";
import BusFare from "../../components/BusFare/BusFare";
import Busfarepage from "./Busfarepage";
import "./Busfarepage.css"
export default function Busfarepagein(){
    return(
        <div className="Busfarepage">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <Adminsidebar/></div>
                <div className="Dash"> <Busfarepage/></div>            
                   
                </div>
         </div>

    )
}