import React  from 'react';
import './Emergency.css';




function Emergency() {

    return (
          
    <div className="main-login">
        
            <div class="right-side">  
            <h2><center>Inform Emergency</center></h2>
                    <form action="action_page.php">

                        <label for="eno">Emergency ID:</label>
                        <input type="text" id="eno" name="eno" />


                        <label for="ename">Emergency Type:</label>
                        <input type="text" id="ename" name="ename" />

                        <label for="bno">Bus No:</label>
                        <input type="number" id="bno" name="bno" />

                        <label for="route">Route No & Name  :</label>
                        <input type="text" id="route" name="route" />

                        <label for="time">Time:</label>
                        <input type="time" id="time" name="time" />

                        <label for="time">Location:</label>
                        <input type="url" id="time" name="time" />

                        

                        <input type="button" className=" btn submit" value="SEND"/>

                        </form>          
                    </div>
                    
                </div>
           
           
           
    )
}

export default Emergency;