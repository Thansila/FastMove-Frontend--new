import React from 'react'
import './SigninChar.css'

export default function SigninChar() {
  return (
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Sign In as a</h6>
            
            <button type="button" onClick={""} class="btn btn-primary ml-1">Passenger</button><br/><br/>
            <button type="button" onClick={""} class="btn btn-primary ml-1">Bus Owner</button><br/><br/>
            <button type="button" onClick={""} class="btn btn-primary ml-1">Conductor</button><br/><br/>

        </div>
       
    </div>
  )
}
