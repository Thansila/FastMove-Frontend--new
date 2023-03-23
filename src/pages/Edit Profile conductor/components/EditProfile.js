import React  from 'react';
import './EditProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';





function Profile() {

    return (
        
        <>
        <div className='main-login'>
        <h2>Edit Profile </h2>
        <div classNaame="px-3 pt-3 pb-5">
            <form action="action_page.php">
                <div className="d-flex justify-content-center rounded-2 mb-4">


                </div>
                <div className="form-group">
                    <label className="text-muted f-10 mb-1"> Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label className="text-muted f-10 mb-1">Mobile Number</label>
                    <input type="number" className="form-control" placeholder="Enter Mobile Number" />
                </div>
                <div classNaame="form-group">
                    <label className="text-muted f-10 mb-1">Your Email</label>
                    <input type="email" className="form-control" placeholder="Enter Your Email" />
                </div>
                <div className="form-group">
                    <label className="text-muted f-10 mb-1">NIC</label>
                    <input type="number" className="form-control" placeholder="Enter NIC" />
                </div>
                <div className="form-group">
                    <label className="text-muted f-10 mb-1">Address</label>
                    <textarea className="form-control width-50 " placeholder="Enter Address"></textarea>
                </div>
                <div className="form-group">
                    <label className="text-muted f-10 mb-1">Counductor License</label>
                    <div clasNames="mt-1">
                        <div classNAme="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="yes" name="lifeinsurance" className="custom-control-input" checked />
                            <label className="custom-control-label small" for="yes">Yes</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="no" name="lifeinsurance" className="custom-control-input" />
                            <label classNAme="custom-control-label small" for="no">No</label>
                        </div>
                        <br/>
                        <h7>Upload Conductor License </h7>
                        <div className="form-profile w-100">
                        <label for="upload-photo" className="mb-0"><span className="icofont-pencil-alt-5 text-white"></span></label>
                        <input type="file" name="photo" id="upload-photo" />
                        <br/><br/>
                        <input type="button" className=" btn submit" value="UPDATE PROFILE"/>
                    </div>
                    </div>
                </div>
                
            </form>
            </div>

        </div></>
       
        
        
           
    )
}

export default Profile;