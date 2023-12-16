import { useState } from "react";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { placebetActions } from "./bet";
function Cashout()
{
const dispatch = useDispatch();
const [amount, setamount] = useState(500);
const acc_withdraw = () => {
    dispatch(placebetActions.cashout(Number(amount)))
}
const isfilled = event => {
    setamount(event.target.value);
 }
    return(
        <>
        <div className="card d-flex justify-content-between align-items-center flex-row py-2 px-2">
            <p><Icon icon="ic:round-arrow-back-ios" className="fs-5 icon-color mt-2"/></p>
            <p className="fs-6 text-color mt-2 fw-3">Account Withdraw</p>
            <p></p>
        </div>
        <div className>
    <div className="card p-2 bg-f9">
      <div className="container">
        <div className="col-lg-12">
            
          <div className="row">
            <p className="text-center my-2 fs-6 fw-3 text-color">Mobile Money Withdraw</p>
            <div className="col-6">
              <div className="card bg-primary"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
                <div className>
                   <img src="image/mtn_logo.png" className='w-100 h-25' alt="mtn logo" />
                </div>
                <div className="card-title  bottom-1 rounded-3">
                  <p className="text-center bottom-2 fs-12 fw-3 c-white">MTN</p>
                </div>  
              </div>
            </div>
            <div className="col-6">
              <div className="card bg-primary text-white"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
                <div className="image-area">
                  <img src="image/orange_logo.png" className='w-100 h-25' alt="orange logo"/>
                </div>
                <div className="card-title bottom-1 rounded-3">
                  <p className="text-center bottom-2 fs-12 fw-3 ">Orange</p>
                </div>  
              </div>                       
            </div>
          </div>

          {/* Iterate here */} 
        </div>
      </div>
    </div>
  </div>

  <div className="modal fade" id="exampleModalCenteredScrollable" tabIndex={-1} aria-labelledby="exampleModalCenteredScrollableTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header d-flex flex-row">
        <h2 className="fs-5 fw-5">MTN Moblie Money</h2>
        <button type="button" className="btn-close fs-7" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="text-center px-4 py-2">
          <img src="image/mtn_logo.png" alt="mtn logo" className="h-25 w-25 rounde-2" />
        </div>
        <div className="d-block">
          <div className="mb-1">
            <label className="form-label fw-bold fs-12 margin-zero py-1">1₣ - <span className="ls-1">1000000</span> ₣</label>
            <input 
              type="number"
              name="amount"
              className="form-control form-control-sm rounded-3 margin-zero py-1" 
              onChange={isfilled}
              value={amount}
              />
          </div>
          <div className="mb-1">
            <label className="form-label margin-zero fs-7 fw-4 py-1">E-mail</label>
            <input type="email" name="email" className="form-control form-control-sm rounded-3 margin-zero py-1" placeholder="example@mail.com" />
          </div>
          <div className="mb-1">
            <label className="form-label margin-zero fs-7 fw-4 py-1">Username</label>
            <input type="text" name="name" className="form-control form-control-sm rounded-3 margin-zero py-1" placeholder="strato user" />
          </div>
        </div>
      </div>
      <div className="text-center my-3 px-2">
        <button className="btn button-color text-white  rounded-5  fs-13 fw-3 py-2 w-100" onClick={acc_withdraw}>Cash Out</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Cashout;