import { Link, NavLink} from "react-router-dom"
import { Icon } from "@iconify/react"
import 'react-phone-number-input/style.css'
import { useState } from "react"
function Email () {
  const [isTyping, setIsTyping] = useState(false);
  const [isTypingemail, setIsTypingemail] = useState(false);
  const styles  = {
    borderRadius:"5px",
    border:"1px solid #007cb9",
  }
  const textcolor = {
    color:"#1e549f",
    textShadow:"5px 5px 10px rgba(95, 145, 220, 0.4)"
  }
  function verifyName()
  {
    setIsTyping(prevalue =>  !prevalue)
  }
  function verifyEmail()
  {
    setIsTypingemail(prevalue => !prevalue);
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
              <div className='d-flex flex-row justify-content-start'>
                <button className='btn btn-primary w-2 p-3 fw-4 ribbon'>
                  Sign up
                </button>
              </div>
              <div className='mx-4 mt-5'>
                <h1 className='fw-bold margin-zero' style={textcolor}>Welcome!!</h1>
              </div>
              
              <div className=" justify-content-evenly bg-f9 rounded-2 d-flex mx-3 rounded-3 my-2">
              <NavLink to="/sign-up" className={({isActive}) => isActive ? "link my-2 w-50 bg-primary btn mx-2 rounded-2 text-white py-2" :"link my-2 w-50  btn mx-2 rounded-2 text-primary py-2"}>
                <div className="d-block text-center">
                 <p>Phone</p>
                <Icon icon="mingcute:phone-fill" className="fs-1 my-1"/>
                </div>
                </NavLink>
                <NavLink to="/email" className={({isActive}) => isActive ? "link my-2 w-50 bg-primary btn mx-2 rounded-2 text-white py-2" :"link my-2 w-50  btn mx-2 rounded-2 text-primary py-2"}>
                <div className="d-block text-center">
                <p>Email</p>
                <Icon icon="fluent:mail-32-filled" className="fs-1 my-1"/>
                </div>
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
                      className={isTyping ? "form-control is-valid border-success" : "form-control is-invalid border-warning"}
                      id='exampleFormControlInput1'
                      placeholder='username'
                      style={styles}
                      onInput={verifyName}
                    />
                     <div class={isTyping ? "valid-feedback" : "invalid-feedback"}>
                      {isTyping ? "Looks Good" : "username required"} 
                    </div>
                  </div>
                  <div className='mb-2 mt-3'>
                    <label
                      htmlFor='exampleFormControlInput1'
                      className='form-label fw-3'
                    >
                      Email
                    </label>
                    <input className={isTypingemail ? "border-success form-control is-valid" : "form-control is-invalid border-warning"}
                     type="email"
                     placeholder="@example.com"
                      onChange={verifyEmail}                   
                    >
                    </input>
                    <div className={isTypingemail? "valid-feedback" : "invalid-feedback"}>
                        {isTypingemail ? "Looks Good !" : "Email is required"}
                    </div>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      defaultValue
                      id='flexCheckDefault'
                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexCheckDefault'
                    >
                      I have read and i agree with{' '}
                      <a href>Terms and policies</a>
                    </label>
                  </div>
                  <button
                    className='w-100  btn btn-lg rounded-3 btn-primary fs-9 my-3'
                    type='submit'
                  >
                    Create Account
                  </button>
                  <div className='d-flex flex-row justify-content-end'>
                    <div className='d-block'>
                      <p className='fs-12 py-1 margin-zero fw-4 text-break d-flex'>
                        Already Have an account?{' '}
                          <Link to='/login' className="link mx-2"><div className='fw-bold c-stbl dec-none'>
                          Login
                        </div></Link>   {' '}
                      </p>
                      <p className='fs-12 py-1 margin-zero fw-4 text-end '>
                         <Link to='password-recovery' className="link"><div className='fw-bold c-stbl dec-none'>
                          Password recovery
                        </div></Link> {' '}
                      </p>
                    </div>
                  </div>
                  <h2 className='fs-7 fw-5 my-2 text-center fs-7'>Or</h2>
                  <button
                    className='w-100 py-2 mb-2 btn btn-outline-primary rounded-3 fs-7 fw-3'
                    type='submit'
                  >
                    <Icon icon="flat-color-icons:google" className="fs-5 mx-2 left-3" />
                    Sign up with google
                    
                  </button>
                  <button
                    className='w-100 py-2 mb-2 btn btn-outline-primary rounded-3 fs-7 fw-3'
                    type='submit'
                  >
                    <Icon icon="simple-icons:facebook" className="fs-5 mx-2 left-2" />
                    Sign up with Facebook
                    
                  </button>
                  <button
                    className='w-100 py-2 mb-2 btn btn-outline-secondary rounded-3 fs-7 fw-3'
                    type='submit'
                  >
                     <Icon icon="logos:apple" className="fs-5 left-3" />
                    Sign up with appple
                   
                  </button>
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

