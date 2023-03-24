import React from "react";
import { ReactDOM } from "react";
import Adminlogin from "./Adminlogin";
import Box1 from "../../components/Asset/Asset";
export default function Adminloginn(){
    return(
        <div className="Adminlogin">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <Adminsidebar/></div>
                <div className="Dash"> <Busfarepage/></div>            
                   
                </div>
         </div>

    )
}