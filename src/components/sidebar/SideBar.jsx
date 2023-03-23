import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';

export default function SideBar() {

    const [route, setRoute] = useState("");
  return (

    <div>
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <Link to='/' class="nav-link" style={{color: "white"}}>
                <div class="mx-3">FastMove</div>
            </Link>
            
        </a>

        
        <hr class="sidebar-divider my-0"/>

        
        <li class="nav-item active">
            
                <Link to='/' class="nav-link">
                    <span>Dashboard</span>
                </Link>
            
                
        </li>
        
        <hr class="sidebar-divider"/>
        <div class="sidebar-heading">
            Time Keeper
        </div>

        {/* Nav Item - Pages Collapse Menu  */}
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i class="fa fa-bus"></i>
                <span>My Buses</span>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
             
              <Link to="/BusReg"> <a class="collapse-item" href="/route"><i class="fa fa-edit"></i> Add new Bus</a></Link>
              <Link to="/ViewBuses"> <a class="collapse-item" href="/route_1"><i class="fa fa-bars"></i> My Buses</a></Link>
                    </div>
            </div>
        </li>
 
        <Link to="/HelpPage">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-question-circle"></i>
                <span>Help</span>
            </a>
        </li></Link>
        
  </ul>
        
      
    </div>
  )
}
