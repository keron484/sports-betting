import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useDispatch } from 'react-redux';
import { authactions } from "../Redux/slices/AuthSlice";
function Login()
{
  const dispatch = useDispatch();
  const Login =  () => {
    dispatch(authactions.signin());
  }
    return(
        <>
<div className="container">
  <div className="modal modal-sheet position-static d-block p-2 py-md-5 mt-5" role="dialog" id="modalSignin">
    <div className="modal-dialog" role="document">
      <div className="modal-content rounded-4 shadow b-none">
        <div className="mx-4 mt-5 mb-3 d-flex flex-row justify-content-between">
          <div>
          <h1 className="fw-bold margin-zero text-color">Login</h1>
          <p className="margin-zero fs-13 fw-3">Welcome back friend</p>
          </div>
          <div>
           <NavLink className='link' to='/'>
           <Icon icon="ph:x-bold" className="fs-3 icon-color"/>
           </NavLink>
          </div>
        </div>
        <div className="modal-body p-4 pt-0">
          <form className>
            <div className="mb-2">
              <label htmlFor="exampleFormControlInput1" className="form-label fw-3 fs-6 text-color">Email</label>
              <input 
              type="text" 
              className="form-control border-success"
              id="exampleFormControlInput1"
              placeholder="@example.com" 
              />
              
            </div>
            <div className="mb-2">
              <label htmlFor="exampleFormControlInput1" className="form-label fw-3 fs-6 text-color">Password</label>
              <input 
               type="Password"
               className="form-control border-success" 
               id="exampleFormControlInput1"
                placeholder="Enter password"
                />
            </div>
            <Link to='/'>
            <button className="w-100 mb-2 btn btn-lg rounded-3 button-color fs-6 fw-3 text-white fs-9  my-3"
             onClick={Login}
            >Login</button>
            </Link>
            <div className="d-flex flex-row justify-content-end">
              <div className="d-block">
                <p className="fs-12  margin-zero text-end d-flex fw-3">Don't have an account? <Link className="link mx-1" to='/sign-up'><div className="fw-bold c-stbl dec-none">Register</div></Link> </p>
                <p className="fs-12 margin-zero text-end text-break"><Link className="link" to='/sign-up'><div className="fw-bold c-stbl dec-none">Recover Password</div></Link></p>
                <p className="fs-12 margin-zero text-end text-break"> <Link className="link" to='/change-password'><div className="fw-bold c-stbl dec-none">Update Password</div></Link> </p>
              </div>
            </div>
            <h2 className="fs-6 fw-5 my-2 text-center">Or</h2>
            <div className="d-flex flex-row justify-content-center">
                  <button
                    className='w-25 py-2 mb-2 btn shadow rounded-3  fw-3 mx-1 text-center'
                  >
                    <Icon icon="flat-color-icons:google" className="fs-5" />
                  </button>
                  <button
                    className='w-25 py-2 mb-2 btn shadow rounded-3  fw-3 mx-1 text-center'
                  >
                    <Icon icon="simple-icons:facebook" className="fs-5 " />
                  </button>
                  <button
                    className='w-25 py-2 mb-2 btn shadow rounded-3  fw-3 mx-1 text-center'
                  >
                     <Icon icon="logos:apple" className="fs-5 " />
                  </button>
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
export default Login;