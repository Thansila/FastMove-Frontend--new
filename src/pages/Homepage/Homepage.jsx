import React from 'react'
import Footer from '../../components/footer/Footer'
import './Homepage.css'
import { Link } from 'react-router-dom'

export default function Homepage(){
    return(
        <div>


            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">   
        <ul class="navbar-nav ml-auto">
             

            <div class="topbar-divider d-none d-sm-block"></div>

            
            <li class="nav-item dropdown no-arrow">
                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <Link to="/Dashboard"><button type="button" class="btn btn-warning ml-1">Log In</button></Link> 
                    {/* <img class="img-profile rounded-circle"
                        src="img/undraw_profile.svg"/> */}
                </a>
            </li>

        </ul>

    </nav> 
{/* <Link to="/SignInchar"><button type="button" onClick={""} class="btn btn-primary ml-1">Get Started</button></Link> */}
<div className='screen'>
<div class="split left">
  <div class="centered">
    <h2>Book smart-Travel safe</h2>
    <p>FastMove: smart Bus Pass booking application to book your ticket smart and conveniently</p>
    <p>Press Get Started to Sign in and enjoy</p>

    <Link to="/SignInchar"><div className='btn'><button type="button" onClick={""} class="btn btn-primary ml-1">Get Started</button></div></Link>
    
  </div>
</div>

<div class="split right">
  <div class="centered">
    <p>/Logo/</p>
  </div>
</div> 
</div>
</div>

    )
}