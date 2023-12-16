import { Link, NavLink} from "react-router-dom"
import { Icon } from "@iconify/react"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from "react"
function Signup () {
  const [isTyping, setIsTyping] = useState(false);
  const [value, setValue] = useState();
  const styles  = {
    borderRadius:"5px",
    border:"1px solid #007cb9",
  }
  function verifyName()
  {
    setIsTyping(prevalue =>  !prevalue)
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
              <div className='mx-4 mt-5 mb-3'>
                <h1 className='fw-bold margin-zero text-color'>Sign up</h1>
                <p className="text-color margin-zero fw-3 text-color">Welcome back dear user</p>
              </div>
              <div className=" justify-content-evenly bg-f9 rounded-2 d-flex mx-3 rounded-3 my-2">
              <NavLink to="/sign-up" className={({isActive}) => isActive ? "link my-2 w-50 text-white bg-primary mx-2 rounded-2  py-2" :"link my-2 w-50  btn mx-2 rounded-2 text-primary py-2"}>
                <div className="d-block text-center">
                 <p>Phone</p>
                <Icon icon="mingcute:phone-fill" className="fs-1 my-1"/>
                </div>
                </NavLink>
                <NavLink to="/email" className={({isActive}) => isActive ? "link my-2 w-50 bg-primary btn mx-2 rounded-2 text-white py-2" :"link my-2 w-50  btn mx-2 rounded-2 icon-color py-2"}>
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
                      className='form-label fw-3 mt-1 text-color'
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
                      className='form-label fw-3 text-color'
                    >
                      Phone number
                    </label>
                    <PhoneInput
                     placeholder="Enter phone number"
                      value={value}
                     onChange={setValue}
                     countries={["CM"]}
                     />
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      defaultValue
                      id='flexCheckDefault'
                    />
                    <label
                      className='form-check-label fs-13 fw-3 mt-2 text-color'
                      htmlFor='flexCheckDefault'
                    >
                      I have read and i agree with{' '}
                      <lable class="text-primary">Terms and policies</lable>
                    </label>
                  </div>
                  <button
                    className='w-100  btn btn-lg rounded-3 button-color text-white fs-9 my-3'
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
                      <p className='fs-12 margin-zero fw-4 text-end '>
                         <Link to='/password-recovery' className="link"><div className='fw-bold c-stbl dec-none'>
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
export default Signup
