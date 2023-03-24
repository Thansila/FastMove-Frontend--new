import React from 'react'

export default function BusFare() {
  return (
    <div class="card shadow mb-4">
                <div class="card-body">
            <div class="table-responsive" >
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
  
                    
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Bus Number</td>
                            <td> <input type="text"  name="BusNo" id="BusNo" required/></td>
                           
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Bus Type</td>
                            <td>
                            <input type="radio" name="BusType" required/>
                             <label for="Male"> Normal</label> <br/>
                            <input type="radio" name="BusType" required/>
                             <label for="Female"> Semi Luxury</label><br/>
                           <input type="radio" name="BusType" required/>
                           <label for="Female"> Luxury</label>
                            </td>
                           
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Passenger</td>
                            
                            <td> <input type="text"  name="Passenger Name " id="Passenger Name" required/></td>
                                
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>No Of Seats</td>
                           
                            <td> <input type="text"  name="No of Seats " id="No of Seats" required/></td>
                                
                        </tr>
                        <tr>
                        <td>5</td>
                            <td>No Of Journey</td>
                          
                            <td> <input type="text"  name="No of Journey " id="No of Journey" required/></td>
                             
                        </tr>
                        <tr>
                        <td>6</td>
                            <td>Bus Fare</td>
                     
                            <td> <input type="text"  name="Bus Fare " id="Bus Fare" required/></td>
                               
                        </tr>
                        <tr>
                        <td>7</td>
                            <td>Discount</td>
                            
                            <td> <input type="text"  name="Discount" id="Discount" required/></td>
                                
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
