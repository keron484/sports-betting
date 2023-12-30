import { Link, NavLink} from "react-router-dom"
import { Icon } from "@iconify/react"
import { useState } from "react";
import { useDispatch} from 'react-redux';
import { authactions } from "../Redux/slices/AuthSlice";
function Email () {
  const [username, setUsername] = useState();
  const [password, setPassord] = useState();
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const handlePass = (event) => {
    setPassord(event.target.value);
   }
  const handleUsername = (event) => {
   setUsername(event.target.value);
  
  }
  const handleEmail= (event) => {
    setEmail(event.target.value)
  }
   const signup = () => {
      dispatch(authactions.register({
             username,
             password,
             email    
      }))
}

  return (
    <>
      <div className='container'>
        <div
          className='modal modal-sheet position-static d-block  mt-4 p-2 py-md-5'
          role='dialog'
          id='modalSignin'
        >
          <div className='modal-dialog' role='document'>
            <div className='modal-content rounded-4 shadow b-none'>
            <div className='mx-4 mt-5 mb-3 d-flex flex-row justify-content-between'>
                <div>
                <h1 className='fw-bold margin-zero text-color'>Sign up</h1>
                <p className="text-color margin-zero fw-3 text-color">Create your account</p>
                </div>
                <div>
                   <NavLink className='link' to=''>
                   <Icon icon="ph:x-bold" className="fs-3 icon-color"/>
                  </NavLink>
                 </div>
              </div>
              <div className=" justify-content-evenly bg-f9 rounded-2 d-flex mx-3 rounded-3 my-2 py-1">
              <NavLink to="/sign-up" className='link text-center w-50 py-1 ' >
                <p className="fs-6  fw-3 icon-color">Phone</p>
                <Icon icon="solar:phone-bold" className="icon-color fs-2"/>
              </NavLink>
              <NavLink to="/email" className='link text-center w-50 mx-2 py-1 rounded-3 mx-2' style={{backgroundColor: '#087F8C'}}>
                <p className="fs-6 c-white fw-3">Email</p>
                <Icon icon="clarity:email-solid" className="c-white fs-3" />
              </NavLink>
              </div>
              <div className='modal-body p-4 pt-0'>
                <form className>
                  <div className='mb-3 mt-2'>
                    <label
                      htmlFor='exampleFormControlInput1'
                      className='form-label fw-3 mt-1'
                    >
                      Username
                    </label>
                    <input
                      type='text'
                      className= "form-control border-success"
                      id='exampleFormControlInput1'
                      placeholder='username'
                      value={username}
                      onChange={handleUsername}
                    />
                  </div>
                  <div className='mb-2 mt-3'>
                    <label
                      htmlFor='exampleFormControlInput1'
                      className='form-label fw-3'
                    >
                      Email
                    </label>
                    <input className="border-success form-control"
                     type="email"
                     placeholder="@example.com" 
                     onChange={handleEmail} 
                     value={email}         
                    >
                    </input>
                  </div>
                  <div className='mb-2 mt-3'>
                    <label
                      htmlFor='exampleFormControlInput1'
                      className='form-label fw-3'
                    >
                      Password
                    </label>
                    <input className="border-success form-control"
                     type="password"
                     value={password}  
                     onChange={handlePass}        
                    >
                    </input>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input p-2'
                      type='checkbox'
                      defaultValue
                      id='flexCheckDefault'
                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexCheckDefault'
                    >
                      I have read and i agree with
                    </label>
                  </div>
                  <button
                    className='w-100  btn btn-lg rounded-3 button-color text-white fs-6 my-3'
                    onClick={signup}
                    >
                    Create Account
                  </button>
                  <div className='d-flex flex-row justify-content-end'>
                    <div className='d-block'>
                      <p className=' py-1 margin-zero fw-4 text-break d-flex'>
                        Already Have an account?
                          <Link to='/login' className="link mx-2"><div className='fw-bold fs-6 c-stbl dec-none'>
                          Login
                        </div></Link>   
                      </p>
                      <p className=' py-1 margin-zero fw-4 text-end '>
                         <Link to='password-recovery' className="link"><div className='fw-bold c-stbl dec-none'>
                          Password recovery
                        </div></Link> 
                      </p>
                    </div>
                  </div>
                  <h2 className='fs-7 fw-5 my-2 text-center fs-7'>Or</h2>
                  <div className="d-flex flex-row justify-content-center">
                  <button
                    className='w-25 py-2 mb-2 btn btn-outline-primary rounded-3  fw-3 mx-1 text-center'
                  >
                    <Icon icon="flat-color-icons:google" className="fs-5" />
                  </button>
                  <button
                    className='w-25 py-2 mb-2 btn btn-outline-primary rounded-3  fw-3 mx-1 text-center'
                  >
                    <Icon icon="simple-icons:facebook" className="fs-5 " />
                  </button>
                  <button
                    className='w-25 py-2 mb-2 btn btn-outline-secondary rounded-3  fw-3 mx-1 text-center'
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
  )
}
export default Email;

