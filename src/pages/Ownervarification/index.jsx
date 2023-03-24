import React from "react";
import Adminsidebar from "../../components/Adminsidebar/Adminsidebar";
import AdminTopBar from "../../components/AdmintopBar/AdmintopBar";
import AOwner from "../../components/AOwner/AOwner";
import Ownervarification from "./Ownervarification";
import "./Ownervarification.css"
export default function Ownervarify(){
    return(
        <div className="Ownervarification">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <Adminsidebar/></div>
                <div className="Dash"> <Ownervarification/></div>            
                   
                </div>
         </div>

    )
}