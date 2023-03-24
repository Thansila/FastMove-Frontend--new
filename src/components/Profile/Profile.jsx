import React from 'react'

export default function Profile() {
  return (
    <div class="card shadow mb-4">
        
        <div class="card-body">
            <div class="table-responsive" >
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
  
                    
                    <tbody>
                        <tr>
                            
                            <td>User Name </td>
                            <td> <input type="text"  name="Fname" id="Fname" required/></td>
                           
                        </tr>
                       
                        <tr>
                            
                            <td>Password</td>
                            
                            <td> <input type="text"  name="pw" id="pw" required/></td>
                                
                        </tr>
                        <tr>
                            
                            <td>Phone Number</td>
                            
                            <td> <input type="text"  name="TP" id="TP" required/></td>
                                
                        </tr>
                        <tr>
                      
                            <td>Email</td>
                           
                            <td> <input type="text"  name="Email" id="Email" required/></td>
                                
                        </tr>
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
