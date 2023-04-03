import React from 'react'
import { Route, Routes, Link } from "react-router-dom"
import BusownerProfile from '../../components/BusownerProfile/BusownerProfile'

export default function OwnerProfilePage() {
  return (
    
    <div id="content" style={{width:"1125px"} }>
        

       

        <div class="container-fluid">

            
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
           
            <BusownerProfile/>
            
               
            </div>



        </div>
                
    </div>
  )
}
