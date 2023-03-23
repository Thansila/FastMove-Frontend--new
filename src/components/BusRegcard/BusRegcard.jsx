import React from 'react'

export default function BusRegcard() {
  return (
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Fill the Information </h6>
            
        </div>
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
                            <td>PDF file of the Bus Lisence</td>
                            <th>
                            <input type="file" id="Buslisencepdf" name="Buslisencepdf" className="fileSub"></input>
                                </th>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>PDF file of the ECO Test Certificate</td>
                            <th>
                            <input type="file" id="Buslisencepdf" name="Buslisencepdf" className="fileSub"></input>
                                </th> 
                        </tr>



                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
