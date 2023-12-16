
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { message_list } from "./bet";
function Firstsection()
{
  const message_arry = useSelector(message_list);
  const count = message_arry.length;
    return(
      <>    
<div>
  <div className="card mb-2 p-2 sticky-top">
    <div className="d-flex justify-content-between align-items-center">
      <p><Icon icon="ic:round-arrow-back-ios"  className="icon-color mt-2 mx-1" /></p>
      <p className="fs-13 fw-bold mt-2 text-color">Menu</p>
      <p></p>
    </div>
  </div>
  <div className="d-block" id="mid-section">

  <NavLink to="/account-deposite" className="link">
      <div className="card px-1 py-2 mb-2 shadow-sm">
      <div className="d-flex flex-row justify-content-start align-items-center">
        <div className="mx-1">
          <button className="badge-lg"> 
          <Icon icon="game-icons:cash" className="icon-color fs-5"/>
           </button>
        </div>
        <div className="mx-1 text-color">
          <p className="fs-13 margin-zero fw-3">Account Deposite</p>
        </div>
        <div className="float-end">
        </div>
      </div>
    </div>
   </NavLink>

  <NavLink to="/live-events-list" className="link">
         <div className="card px-1 py-2 mb-2 shadow-sm">
      <div className="d-flex flex-row justify-content-start align-items-center">
        <div className="mx-1">
          <button className="badge-lg"> 
          <Icon icon="fluent:live-24-regular"  className="fs-5 icon-color" />
           </button>
        </div>
        <div className="d-block mx-1 text-color">
          <p className="fs-13 margin-zero fw-4">Live</p>
          <p className="fs-12 margin-zero fw-3">Bet on live events</p>
        </div>
      </div>
    </div>
   </NavLink>

   <NavLink to="/last-section" className="link">
         <div className="card px-1 py-2 mb-2 shadow-sm">
      <div className="d-flex flex-row justify-content-start align-items-center">
        <div className="mx-1">
          <button className="badge-lg"> 
          <Icon icon="fluent:live-24-regular"  className="fs-5 icon-color" />
           </button>
        </div>
        <div className="d-block mx-1 text-color">
          <p className="fs-13 margin-zero fw-4">Prematch Events</p>
          <p className="fs-12 margin-zero fw-3">Bet on prematches</p>
        </div>
      </div>
    </div>
   </NavLink>

   <NavLink to="/messages" className="link shadow-sm">
         <div className="card px-1 py-2 mb-2 shadow-sm">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex">
        <div className="mx-1">
          <button className="badge-lg"> 
          <Icon icon="wpf:message-outline" className="icon-color fs-5"/>
           </button>
        </div>
        <div className="d-block mx-1 text-color">
          <p className="fs-13 margin-zero fw-4">Message</p>
          <p className="fs-12 margin-zero fw-3">Check your messages here</p>
        </div>
        </div>
        <div className="px-3">
          <button className={count < 1 ? "visually-hidden" : "badge-warning fw-bold" }>{count}</button>
        </div>
      </div>
    </div>
   </NavLink>

   <NavLink to="/messages" className="link shadow-sm">
         <div className="card px-1 py-2 mb-2 shadow-sm">
      <div className="d-flex flex-row justify-content-start align-items-center">
        <div className="mx-1">
          <button className="badge-lg"> 
          <Icon icon="simple-line-icons:game-controller" className="icon-color fs-5"/>
           </button>
        </div>
        <div className="d-block mx-1 text-color">
          <p className="fs-13 margin-zero fw-4">Virtual Games</p>
          <p className="fs-12 margin-zero fw-3">Play and win big</p>
        </div>
      </div>
    </div>
   </NavLink>


   <NavLink to="/bet-history-list" className="link">
         <div className="card px-1 py-2 mb-2 shadow-sm">
      <div className="d-flex flex-row justify-content-start align-items-center">
        <div className="mx-1">
          <button className="badge-lg"> 
          <Icon icon="ic:baseline-history" className="fs-5 icon-color"/>
           </button>
        </div>
        <div className="d-block mx-1 text-color">
          <p className="fs-13 margin-zero fw-4">Bet History</p>
          <p className="fs-12 margin-zero fw-3">Play and win big</p>
        </div>
      </div>
    </div>
   </NavLink>

   <NavLink to="/customer-support" className="link">
         <div className="card px-1 py-2 mb-2 shadow-sm">
      <div className="d-flex flex-row justify-content-start align-items-center">
        <div className="mx-1">
          <button className="badge-lg"> 
          <Icon icon="ri:customer-service-line" className="fs-5 icon-color"/>
           </button>
        </div>
        <div className="d-block mx-1 text-color">
          <p className="fs-13 margin-zero fw-4">Customer Support</p>
          <p className="fs-12 margin-zero fw-3">Having any issues</p>
        </div>
      </div>
    </div>
   </NavLink>

   <NavLink to="/my-account" className="link">
         <div className="card px-1 py-2 mb-2 shadow-sm">
      <div className="d-flex flex-row justify-content-start align-items-center">
        <div className="mx-1">
          <button className="badge-lg"> 
          <Icon icon="mingcute:user-4-line" className="fs-5 icon-color"/>
           </button>
        </div>
        <div className="d-block mx-1 text-color">
          <p className="fs-13 margin-zero fw-4">User Account</p>
          <p className="fs-12 margin-zero fw-3">View your profile</p>
        </div>
      </div>
    </div>
   </NavLink>

   <NavLink to="/promo" className="link">
      <div className="card px-1 py-2 mb-2 shadow-sm">
      <div className="d-flex flex-row justify-content-start align-items-center">
        <div className="mx-1">
          <button className="badge-lg"> 
          <Icon icon="material-symbols:celebration-outline-rounded" className="fs-5 icon-color"/>
           </button>
        </div>
        <div className="d-block mx-1 text-color">
          <p className="fs-13 margin-zero fw-4">Promo Code</p>
          <p className="fs-12 margin-zero fw-3">check promo code</p>
        </div>
      </div>
    </div>
   </NavLink>
   
   
  </div>
</div>

         </>
    );
}

export default Firstsection;