import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { authactions } from "../authslice";
function Login()
{
  const [istypingid, setisTypingid] = useState(false);
  const [istypingpass, setisTypingpass] = useState(false);

  function verifyId(){
    setisTypingid(prevalue => !prevalue);
  }
  function verfiypass()
  {
    setisTypingpass(prevalue => !prevalue);
  }
  const dispatch = useDispatch()
  const loggin = () => {
    dispatch(authactions.nameauth())
  } 
    return(
        <>
<div className="container">
  <div className="modal modal-sheet position-static d-block p-2 py-md-5" role="dialog" id="modalSignin">
    <div className="modal-dialog" role="document">
      <div className="modal-content rounded-4 shadow b-none">
        <div className="mx-4 mt-5 mb-3">
          <h1 className="fw-bold margin-zero text-color">Login</h1>
          <p className="margin-zero fs-13 fw-3">Welcome back friend</p>
        </div>
        <div className="modal-body p-4 pt-0">
          <form className>
            <div className="mb-2">
              <label htmlFor="exampleFormControlInput1" className="form-label fw-3 fs-6 text-color">User-ID</label>
              <input 
              type="text" 
              className={istypingid? "form-control border-success is-valid" : "form-control border-warning is-invalid"} 
              id="exampleFormControlInput1" 
              placeholder="XXX-XXX-XXX" 
              onChange={verifyId}
              />
              <div className={istypingid ? "valid-feedback" : "invalid-feedback"}>
                {istypingid ? "Looks good" : "User id required"}
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="exampleFormControlInput1" className="form-label fw-3 fs-6 text-color">Password</label>
              <input 
               type="Password"
               className={istypingpass ? "form-control border-success  is-valid" : "form-control border-warning is-invalid"} 
               id="exampleFormControlInput1"
                placeholder="Enter password"
                onChange={verfiypass}
                />
                <div className={istypingpass ? "valid-feedback" : "invalid-feedback"}>
                 {istypingpass? "Looks Good" : "Password required"}
                </div>
            </div>
            <button className="w-100 mb-2 btn btn-lg rounded-3 button-color fs-13 fw-3 text-white fs-9  my-3" onClick={loggin} type="submit">Login</button>
            <div className="d-flex flex-row justify-content-end">
              <div className="d-block">
                <p className="fs-12  margin-zero text-end d-flex fw-3">Don't have an account? <Link className="link mx-1" to='/sign-up'><div className="fw-bold c-stbl dec-none">Register</div></Link> </p>
                <p className="fs-12  margin-zero text-end text-break"><Link className="link" to='/sign-up'><div className="fw-bold c-stbl dec-none">Recover Password</div></Link></p>
                <p className="fs-12  margin-zero text-end text-break"> <Link className="link" to='/change-password'><div className="fw-bold c-stbl dec-none">Update Password</div></Link> </p>
              </div>
            </div>
            <h2 className="fs-7 fw-5 my-2 text-center fs-7">Or</h2>
            <button
                    className='w-100 py-2 mb-2 btn btn-outline-primary rounded-3 fs-7 fw-3'
                    type='submit'
                  >
                    <Icon icon="flat-color-icons:google" className="fs-5 mx-2 left-3" />
                    Login with google
                    
                  </button>
                  <button
                    className='w-100 py-2 mb-2 btn btn-outline-primary rounded-3 fs-7 fw-3'
                    type='submit'
                  >
                    <Icon icon="simple-icons:facebook" className="fs-5 mx-2 left-2" />
                    Login with Facebook
                    
                  </button>
                  <button
                    className='w-100 py-2 mb-2 btn btn-outline-secondary rounded-3 fs-7 fw-3'
                    type='submit'
                  >
                     <Icon icon="logos:apple" className="fs-5 left-3" />
                    Login with appple
                   
                  </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    );
}
export default Login;