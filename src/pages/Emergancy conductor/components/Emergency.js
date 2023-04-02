import React  from 'react';
import './Emergency.css';

function Emergency() {

    return (
          
   
     <div class="container-fluid">   
        <h2 class= "black">Inform Emergency</h2>
        <div class="m-4">
    <div class="row g-2">
    <br/><br/>
    <div class="col-6">
            <div class="input-group">
                <label class="input-group-text">Emergency ID:</label>
                <input type="number" class="form-control" />
                
            </div>
        </div>
        <br/><br/><br/>
        <div class="col-6">
            <div class="input-group">
                <span class="input-group-text">Emergency Type:</span>
                <input type="text" class="form-control" />
            </div>
        </div>
        <br/><br/><br/>
        <div class="col-6">
            <div class="input-group">
                <span class="input-group-text"> Bus No:</span>           
                <input type="number" class="form-control"/>
                
            </div>
        </div>
        <br/><br/><br/>
        <div class="col-6">
            <div class="input-group">
                <span class="input-group-text">Bus Name:</span>
                <input type="text" class="form-control"/>
            </div>
        </div>
        <br/><br/><br/><br/>
        <div class="col-6">
            <div class="input-group">
                <span class="input-group-text">Route No:</span>
                <input type="number" class="form-control" />
                
            </div>
        </div>
        <br/><br/><br/>
        <div class="col-6">
            <div class="input-group">
                <span class="input-group-text">Route Name:</span>
                <input type="number" class="form-control" />
                
            </div>
        </div>
        <br/><br/><br/>
        <div class="col-6">
            <div class="input-group">
                <span class="input-group-text">Date:</span>
                <input type="date" class="form-control" />
                
            </div>
        </div>
        <br/><br/><br/>
        <div class="col-6">
            <div class="input-group">
                <span class="input-group-text">Time:</span>
                <input type="time" class="form-control" />
                
            </div>
        </div>
        <br/><br/><br/>
        <div class="col-12">
            <div class="input-group">
                <span class="input-group-text">Location:</span>
                <input type="text" class="form-control" />
                
            </div>
        </div>
        <br/><br/>
        <div class="btn-group">
        <button type="button" class="btn send">SEND</button>
        </div>
    </div>
</div>
</div>
     
           
           
    )
}

export default Emergency;