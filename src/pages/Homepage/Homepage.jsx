import React from 'react'
import './Homepage.css'
import logo from "../../Logo.png"

import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

// export default function Homepage(){

//   const{loginWithRedirect}=useAuth0();
//     return(
//         <div>


//             <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">   
//         <ul class="navbar-nav ml-auto">
             

//             <div class="topbar-divider d-none d-sm-block"></div>

            
//             <li class="nav-item dropdown no-arrow">
//                 <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
//                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                       <button type="button" class="btn btn-warning ml-1">Log In</button>
//                     {/* <img class="img-profile rounded-circle"
//                         src="img/undraw_profile.svg"/> */}
//                 </a>
//             </li>

//         </ul>

//     </nav> 
// <div className='screen'>
// <div class="split left">
//   <div class="centered">
//     <h2>Book smart-Travel safe</h2>
//     <p>FastMove: smart Bus Pass booking application to book your ticket smart and conveniently</p>
//     <p>Press Get Started to Sign in and enjoy</p>

//     <div className='btn'> 
//     <button type="button" onClick={() => loginWithRedirect()} class="btn btn-primary ml-1">Get Started</button>
     
//     </div>
    
//   </div>
// </div>

// <div class="split right">
//   <div class="centered">
//     <img sr></img>
//   </div>
// </div> 
// </div>
// </div>

//     )
// }


import './index.css';

function HomePage() {

  const{loginWithRedirect}=useAuth0();
  return (
    <div>
      <header> 
        <img src={logo} alt="FastMove Logo" height="30" />
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <img src={logo} className="Home--logo"/>
        <h1>Book smart-Travel safe</h1>
        <p> Smart Bus Pass booking application to book your ticket smart and conveniently</p>
        <button  onClick={() => loginWithRedirect()}>Get Started</button>
      </main>
      <footer>
        &copy; 2023 FastMove | All rights reserved
      </footer>
    </div>
  );
}

export default HomePage;
