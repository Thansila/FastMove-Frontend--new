import React  from 'react';
import "./ConducterLogin.css";



function Login() {



    return (
       
        <>
        
            <div className="Loginpage">
                <div className="Loginpage Left">
                    
                    <h2>FastMove</h2>
                    <h1>MAKE YOUR JOURNEY <br /> SAFE AND FAST</h1>
                    <button type="submit" class="submitbtn">Get Started</button>
                    <button type="submit" class="Learn">Learn More</button>

                </div>
                
                <div className="Loginpage Right">
                    <h3> Get Started by Signing in!</h3>
                    <hr />
                    <br />
                    <input type="text" placeholder="Email Address" name="email" id="BusNo" required />
                    <br />
                    <input type="text" placeholder="Password" name="password" id="BusNo" required />
                    <br /> <br />
                    <button type="submit" class="Signupbtn">Sign Up</button>
                    
                    
                </div>
            </div>
       </>
    )
}

export default Login;