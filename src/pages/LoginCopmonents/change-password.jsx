import { Link } from "react-router-dom";
function Changepassword()
{
    return(
        <>
<div className="container">
  <div className="modal modal-sheet position-static d-block mt-5 p-2 py-md-5" role="dialog" id="modalSignin">
    <div className="modal-dialog" role="document">
      <div className="modal-content rounded-4 shadow b-none">
        <div className="d-block my-3">
        <h1 className="fs-2 fw-bold my-2 text-color mx-4">Change Password</h1>
        <p className="fs-12 fw-3 text-color margin-zero mx-4">Has your security been compromised</p>
        </div>
        <div className="modal-body p-4 pt-0">
          <form className>
            <div className="mb-2">
              <label htmlFor="exampleFormControlInput1" className="form-label text-color fw-3">Current Password</label>
              <input type="Password" className="form-control" id="exampleFormControlInput1" placeholder="Enter User ID" />
            </div>
            <div className="mb-2">
              <label htmlFor="exampleFormControlInput1" className="form-label text-color fw-3">Confirm Password</label>
              <input type="Password" className="form-control" id="exampleFormControlInput1" placeholder="Confirm Password" />
            </div>
            <button className="w-100 mb-2 btn btn-lg rounded-3 button-color fs-13 text-white  my-3 fw-3" type="submit">Change Password</button>
            <div className="d-flex flex-row justify-content-end">
              <div className="d-block">
                <p className="fs-12  margin-zero text-end d-flex fw-3">Don't have an account? <Link className="link mx-1" to='/sign-up'><div className="fw-bold c-stbl dec-none">Register</div></Link> </p>
                <p className="fs-12  margin-zero text-end text-break"><Link className="link" to='/login'><div className="fw-bold c-stbl dec-none">Login</div></Link></p>
                <p className="fs-12  margin-zero text-end text-break"><Link className="link" to='/sign-up'><div className="fw-bold c-stbl dec-none">Recover Password</div></Link></p>
                <p className="fs-12  margin-zero text-end text-break"> <Link className="link" to='/change-password'><div className="fw-bold c-stbl dec-none">Update Password</div></Link> </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    );
}

export default Changepassword;