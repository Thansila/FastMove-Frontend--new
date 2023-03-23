import React  from 'react';
import './ConductorLogin.css';



function Login() {



    return (
       
        <><div className='main-login'>
            <div class="navbar">
                <div className="Name">FastMove</div>
                <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
                <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
                <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
            </div>
            <div className="Loginpage">
                <div className="Loginpage Left">
                    {/* <img src={"logo192.png"} className="Logo"/> */}
                    <h2>FastMove</h2>
                    <h1>MAKE YOUR JOURNEY <br /> SAFE AND FAST</h1>
                    <button type="submit" class="submitbtn">Get Started</button>
                    <button type="submit" class="Learn">Learn More</button>

                </div>
                
                <div className="Loginpage Right">
                    <h3> Get Started by Signing in!</h3>
                    <hr />
                    {/* <img src={LogoImage} className="bgImage"/>  */}
                    <br />
                    <input type="text" placeholder="Email Address" name="email" id="BusNo" required />
                    <br />
                    <input type="text" placeholder="Password" name="password" id="BusNo" required />
                    <br /> <br />
                    <button type="submit" class="Signupbtn">Sign Up</button>
                    <br /><br />Or<br /><br />
                    <button type="submit" class="googleLog"> <i class="fa fa-google"></i> Sign in with Google</button>
                </div>
            </div>
        </div></>
    )
}

export default Login;