import { useSelector } from "react-redux";
import Userprofileitemone from "./components/user-profile-item";
import Userdata from "./Data/user";
import { user_balance } from "./bet";
import {Icon} from "@iconify/react"
import { NavLink } from "react-router-dom";
function Useraccount()
{
  const acc_balance = useSelector(user_balance);
  const userdataone = Userdata.map((item) => {
     return(
      <Userprofileitemone 
        id={item.id}
        labletitle={item.labletitle}
        lableone={item.lableone}
        labletwo={item.labletwo}
        lablethree={item.lablethree}
        lablefour={item.lablefour}
        lablefive={item.lablefive}
     />
     )
})
    return(
        <>
 <div>
 <div id="first-sec-list" className="pb-xxl">
  <div className="card px-1 my-1 d-flex flex-row justify-content-between sticky-top">
    <NavLink className="link" to="/first-section"><p className="fw-bold c-grey mt-3 mx-1 fs-6 icon-color"><Icon icon="ic:round-arrow-back-ios" /></p></NavLink>
    <p className="fs-6 fw-3 mt-3">My Account</p>
    <div className="user-icon">
    </div>
  </div>
  <p className="fw-3 mx-2 mt-3 mb-0 fs-6 icon-color">Financies</p>
  <div className="card bg-white rounded-2 px-2 my-1 d-flex flex-row justify-content-between">
    <div className="d-block">
      <p className="fw-4 fs-12 bottom-1 text-color">Main Account</p>
      <h1 className="fw-bold fs-5 ls-1 mt-2 text-color">{acc_balance}<span className="fw-bold mx-2">₣</span> </h1>
    </div>
    <h1 className="fw-3 my-2 fs-2 bottom-1"><iconify-icon icon="solar:double-alt-arrow-down-broken" /></h1>
  </div>
  <div className="d-block">
    <p className="fw-3 mx-1 mt-4 mb-0 fs-6 icon-color">Account Management</p>
    <div className="card py-2 rounded-1 px-1 my-2 shadow-sm">
    <NavLink to="/withdraw" className="link" >
      <div className="d-flex flex-row justify-content-between px-1 py-1 align-items-center">
        <p className=" fw-3 margin-zero text-color"><span className="mx-2">Withdraw From account</span> </p>
        <button className="badge-lg mx-1"><Icon icon="ion:arrow-forward-outline" className="icon-color fs-4" /></button>
      </div>
      </NavLink>
      </div>
      <div className="card py-2 rounded-1 px-1 my-2 shadow-sm">
      <div className="d-flex flex-row justify-content-between px-1 py-1 align-items-center">
        <p className="fw-3 margin-zero text-color"><span className="mx-2">Account Deposites</span></p>
        <button className="badge-lg mx-1"><Icon icon="ion:arrow-forward-outline" className="icon-color fs-4" /></button>
      </div>
      </div>
      <div className="card py-2 rounded-1 px-1 my-2 shadow-sm">
      <div className="d-flex flex-row justify-content-between px-2 py-1 align-items-center">
        <p className="fw-3 margin-zero text-color"><span className="mx-2">Widrawal History</span></p>
        <button className="badge-lg mx-1"><Icon icon="ion:arrow-forward-outline" className="icon-color fs-4" /></button>
      </div>
      </div>
     
    {userdataone}
    <p className="fw-3 mt-2 mb-0 mx-2 fs-6 icon-color">Others</p>
      <div className="card d-flex flex-row justify-content-between px-2 my-2 py-2 align-items-center shadow-sm">
        <p className="fs-6 fw-3 margin-zero">Become An Affliate</p>
        <button className="badge-lg"><Icon icon="tdesign:share" className="fs-4 icon-color"/></button>
      </div>
      <div className=" d-flex card flex-row justify-content-between px-2 py-2 my-2 shadow-sm align-items-center">
        <p className="fs-6 fw-3 margin-zero">Log-out</p>
        <button className="badge-lg"><Icon icon="ic:baseline-logout" className="fs-4 icon-color"/></button>
      </div>
  </div>
</div>
</div>
        </>
    );
}
export default Useraccount;