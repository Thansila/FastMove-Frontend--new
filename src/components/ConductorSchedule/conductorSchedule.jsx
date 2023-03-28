import React from 'react'

export default function conductorSchedule() {
  return (
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Conductor Schedule </h6>
            
        </div>
        <div class="card-body">
            <div class="table-responsive" >
                <table class="table table-bordered" id="dataTable" width="50%" cellspacing="0" >
  
                    
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td> Conductor Name</td>
                            <td> <input type="text"  name="cname" id="cname" required/></td>
                           
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>NIC</td>
                            <td> <input type="text"  name="nic" id="nic" required/></td>
                            
                        </tr>
                        <tr>
                            <td>1</td>
                            <td> Contact Number</td>
                            <td> <input type="number"  name="pnumber" id="pnumber" required/></td>
                           
                        </tr>
                        <tr>
                            <td>1</td>
                            <td> Email</td>
                            <td> <input type="text"  name="email" id="email" required/></td>
                           
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Conductor License</td>
                            <th>
                            <input type="file" id="Conlisencepdf" name="Conlisencepdf" className="fileSub"></input>
                                </th>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
