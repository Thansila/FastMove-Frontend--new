import React from 'react'

export default function Services() {
  return (
    <div class="card shadow mb-4">
        
        <div class="card-body">
            <div class="table-responsive" >
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
  
                    
                    <tbody>
                        <tr>
                            
                            <td>Conductor ID</td>
                            <td> <input type="text"  name="ID" id="ID" required/></td>
                           
                        </tr>
                       
                        <tr>
                            
                            <td>User Name</td>
                            
                            <td> <input type="text"  name="name" id="name" required/></td>
                                
                        </tr>
                        <tr>
                            
                            <td>Password</td>
                            
                            <td> <input type="Password"  name="pw " id="pw" required/></td>
                                
                        </tr>
                        <tr>
                      
                            <td>Phone Number</td>
                           
                            <td> <input type="text"  name="TP" id="TP" required/></td>
                                
                        </tr>
                        <tr>
                       
                            <td>Email</td>
                            
                            <td> <input type="text"  name="email" id="email" required/></td>
                                
                        </tr>
                        <tr>
                       
                       <td>NIC</td>
                       
                       <td> <input type="text"  name="nic" id="nic" required/></td>
                           
                   </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
