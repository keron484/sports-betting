import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { placebetActions } from "./bet";
import { useDispatch } from 'react-redux'
function Mybetsettings()
{
    const params = useParams();
    const id = params.id;
    const dispatch = useDispatch()
    const Deletebetslip = () =>{
       dispatch(placebetActions.deletebetslip(Number(id)));
    }
    return(
        <>
         <div className="d-flex flex-row card py-2 justify-content-between px-1 align-items-center shadow-sm py-3">
           <span className="c-grey fs-5"><Link className='link' to="/bet-history-list"><Icon icon="ic:round-arrow-back-ios" className="icon-color"/></Link></span>          
            <span className="fw-4 fs-13 text-color">Bet History Settings</span>
            <span className="fw-4 fs-13"></span>                  
        </div>
        <div className="d-block mt-3">
            <p className=" fs-13 pb-2 text-color margin-zero fw-3 mb-1">Note this action can be undone</p>
      <div className="card shadow-sm mb-2 d-flex flex-row justify-content-between px-1 py-3 align-items-center" onClick={Deletebetslip}>
        <p className="fw-3 margin-zero text-color"><span className="mx-2">Delete Bet history</span></p>
        <button className="badge-lg mx-1"><Icon icon="maki:caution" className="c-red fs-4" /></button>
      </div>
      <p className="fs-13 pb-2 text-color margin-zero fw-3 mb-1"> accusantium, alias, blanditiis omnis amet. Expedita, qui!</p>
      <div className="card shadow-sm mb-2 d-flex flex-row justify-content-between px-1 py-3 align-items-center">
        <p className="fw-3 margin-zero text-color"><span className="mx-2">Recieve Push Notifications</span></p>
        <button className="badge-lg mx-1"><Icon icon="bi:bell-fill" className="icon-color fs-4" /></button>
      </div>
      <p className="fs-13 pb-2 text-color margin-zero fw-3 mb-1"> accusantium, alias, blanditiis omnis amet. Expedita, qui!</p>
      <div className="card shadow-sm mb-2 d-flex flex-row justify-content-between px-1 py-3 align-items-center">
        <p className="fw-3 margin-zero text-color"><span className="mx-2">Share bet Slip</span></p>
        <button className="badge-lg mx-1"><Icon icon="majesticons:share" className="icon-color fs-4" /></button>
      </div>
        </div>
        </>
    )
}
export default Mybetsettings;