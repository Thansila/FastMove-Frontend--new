import React from 'react'

export default function DepoTable() {
  return (
    <div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Bus Depo Details </h6>
        
    </div>
    <div class="card-body">
        <div class="table-responsive" >
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Depo Name</th>
                        <th>District</th>
                        <th>Contact Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Pettah</td>
                        <td>Colombo</td>
                        <td>0112534587</td>
                        <th>
                            <button type="button" class="btn btn-primary ml-1">Update</button>
                            <button type="button" class="btn btn-warning ml-1">Delete</button>
                        </th>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Kalaniya</td>
                        <td>Colombo</td>
                        <td>011225587</td>
                        <th>
                            <button type="button" class="btn btn-primary ml-1">Update</button>
                            <button type="button" class="btn btn-warning ml-1">Delete</button>
                        </th>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Moratuwa</td>
                        <td>Colombo</td>
                        <td>0112534587</td>
                        <th>
                            <button type="button" class="btn btn-primary ml-1">Update</button>
                            <button type="button" class="btn btn-warning ml-1">Delete</button>
                        </th>

                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Peradeniya</td>
                        <td>Kandy</td>
                        <td>0112234587</td>
                        <th>
                            <button type="button" class="btn btn-primary ml-1">Update</button>
                            <button type="button" class="btn btn-warning ml-1">Delete</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}
