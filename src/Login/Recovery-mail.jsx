import { Icon } from "@iconify/react";
import { NavLink, Link } from "react-router-dom";
function Recoverybymail()
{
    return(
        <>
        <div className="container">
  <div className="modal modal-sheet position-static d-block  my-5 p-2 py-md-5" role="dialog" id="modalSignin">
    <div className="modal-dialog" role="document">
      <div className="modal-content rounded-4 shadow b-none">
        <div className="mx-4 mt-5">
          <h1 className="fw-bold margin-zero fs-3 text-color">Password Recovery</h1>
          <p className="fs-12">Forgotten your Password</p>
        </div>
        <div className=" justify-content-evenly bg-f9 rounded-2 d-flex mx-3 rounded-3 my-2">
              <NavLink to="/password-recovery" className={({isActive}) => isActive ? "link my-2 w-50 text-white bg-primary mx-2 rounded-2  py-2" :"link my-2 w-50  btn mx-2 rounded-2 text-primary py-2"}>
                <div className="d-block text-center">
                 <p>Phone</p>
                <Icon icon="mingcute:phone-fill" className="fs-1 my-1"/>
                </div>
                </NavLink>
                <NavLink to="/recovery-email" className={({isActive}) => isActive ? "link my-2 w-50 bg-primary btn mx-2 rounded-2 text-white py-2" :"link my-2 w-50  btn mx-2 rounded-2 icon-color py-2"}>
                <div className="d-block text-center">
                <p>Email</p>
                <Icon icon="fluent:mail-32-filled" className="fs-1 my-1"/>
                </div>
                </NavLink>
              </div>
        <div className="modal-body p-4 pt-0">
          <form className>
            <div className="mb-2">
              <label htmlFor="exampleFormControlInput1" className="form-label fw-3 text-color">User ID</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter User ID" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label fw-3 text-color">Phone Number</label>
              <input type="tel" className="form-control " id="exampleFormControlInput1" placeholder="+237 XXX-XXX-XXX" />
            </div>
            <button className="w-100 mb-2 btn btn-lg rounded-3 button-color text-white fs-13  my-1 fw-3" type="submit">Submit</button>
            <div className="d-flex flex-row justify-content-end">
              <div className="d-block">
                <p className="fs-12  margin-zero text-end d-flex fw-3">Don't have an account? <Link className="link mx-1" to='/sign-up'><div className="fw-bold c-stbl dec-none">Register</div></Link> </p>
                <p className="fs-12  margin-zero text-end text-break"><Link className="link" to='/sign-up'><div className="fw-bold c-stbl dec-none">Forgotten Password ? <span className="c-stbl">Recover Password</span></div></Link></p>
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
    )
}
export default Recoverybymail;