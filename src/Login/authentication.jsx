import { useState } from "react";
function Authentication()
{
const [isvalidate, setIsvalidate] = useState(false);
function Validatecode()
{
  setIsvalidate(prevalue => !prevalue)
}
    return(
        <>
<div className="container pt-5">
  <div className="modal modal-sheet position-static d-block  p-2 py-md-5" role="dialog" id="modalSignin">
    <div className="modal-dialog" role="document">
      <div className="modal-content rounded-4 shadow b-none">
        <div className="mt-3 px-3">
        <h1 className="fs-5 fw-bold mt-3 mx-3 text-color">Authentication</h1>
        <p className="mx-3 fw-3 mt-1 text-color">You are almost there !!</p>
        </div>
        <div className="modal-body py-2 px-3 pt-0">
        <div className="alert alert-success fs-12 mx-2">W've sent a verification code to that to tyour email</div>
          <form className>
            <div className="mb-2">
              <label htmlFor="exampleFormControlInput1" className="form-label text-color">Code</label>
              <input 
               type="text" 
               className={isvalidate? "form-control border-success is-valid" : "form-control border-warning is-invalid"}  
               id="exampleFormControlInput1" 
               placeholder="XXX-XXX"
               onChange={Validatecode}
              />
              <div className={isvalidate ? "valid-feedback" : "invalid-feedback"}>
                {isvalidate ? "Looks good" : "Enter Code"}
              </div>
            </div>
            <div className="mb-2">
              <div className=" text-secondary text-center">
                <p className="fw-3 margin-zero py-1 text-color">1:00</p>
                <p className="fw-3 margin-zero mb-1 fs-12 text-color">Didn't Recieve code</p>
                <button className="btn btn-secondary w-100 rounded-3  theme-color text-white fs-12">Send code again</button>
              </div>
            </div>
            <button className={isvalidate ? "w-100 mb-2 btn btn-lg rounded-3 text-white  button-color fs-12  my-1 fw-3" : "visually-hidden"} type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default Authentication;