import React from 'react'

export default function ActivityShedule() {
  return (
    <div class="card shadow mb-4">
        
        <div class="card-body">
            <div class="table-responsive" >
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
  
                    
                    <tbody>
                        <tr>
                            
                            <td> Bus NO </td>
                            <td> <input type="text"  name="Bus No" id="Bus No" required/></td>
                            <th>
                                
                                <button type="button" class="btn btn-warning ml-1">Edit</button>
                            </th>
                        </tr>
                       
                        <tr>
                            
                            <td>Journey</td>
                            
                            <td> <input type="text"  name="Jouerney" id="Jouerney" required/></td>
                            <th>
                                
                                <button type="button" class="btn btn-warning ml-1">Edit</button>
                            </th>    
                        </tr>
                        <tr>
                            
                            <td>Route</td>
                            
                            <td> <input type="text"  name="Route" id="Route" required/></td>
                            <th>
                                
                                <button type="button" class="btn btn-warning ml-1">Edit</button>
                            </th>    
                        </tr>
                        <tr>
                      
                            <td>Income</td>
                           
                            <td> <input type="text"  name="Number" id="Number" required/></td>
                            <th>
                                
                                <button type="button" class="btn btn-warning ml-1">Edit</button>
                            </th>   
                        </tr>
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
