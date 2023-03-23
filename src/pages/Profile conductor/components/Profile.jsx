import React  from 'react';
import './Profile.css';





function Profile() {

    return (
       

        
    <div className="main-login">
        
            <div class="right-side">  
            <h2><center>My Profile</center></h2>
                    <form action="action_page.php">

                        <label for="fname">Name:</label>
                        <input type="text" id="fname" name="firstname" />


                        <label for="nic">NIC:</label>
                        <input type="text" id="nic" name="nic" />

                        <label for="age">Age:</label>
                        <input type="number" id="age" name="lage" />

                        <label for="age">Contact Number:</label>
                        <input type="number" id="pnumber" name="nembre" />

                        <label for="nic">Email:</label>
                        <input type="text" id="email" name="email" />

                        <label for="age">Address:</label>
                        <input type="text" id="address" name="address" />

                        <button type="button" class=" btn submit" value="Edit profile">Edit profile</button>
                        <button type="button" class=" btn back" value="Back ">Back</button>

                        
                        </form>          
                    </div>
                    
                </div>
           
           
           
    )
}

export default Profile;