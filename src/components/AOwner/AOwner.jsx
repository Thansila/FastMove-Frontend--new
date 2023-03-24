import React from 'react'

export default function Owner() {
  return (
    <div class="card shadow mb-4">
        
        <div class="card-body">
            <div class="table-responsive" >
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
  
                    
                    <tbody>
                        <tr>
                            
                            <td>First Name </td>
                            <td> <input type="text"  name="Fname" id="Fname" required/></td>
                           
                        </tr>
                       
                        <tr>
                            
                            <td>Last Name</td>
                            
                            <td> <input type="text"  name="Lname" id="Lname" required/></td>
                                
                        </tr>
                        <tr>
                            
                            <td>NIC</td>
                            
                            <td> <input type="text"  name="NIC" id="NIC" required/></td>
                                
                        </tr>
                        <tr>
                      
                            <td>Address</td>
                           
                            <td> <input type="text"  name="Address" id="Address" required/></td>
                                
                        </tr>
                        
                        
                    </tbody>
                </table>






                
            </div>
        </div>
    </div>
  )
}
