import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { placebetActions } from "../../Redux/slices/BetSlice";
import { useDispatch, useSelector } from 'react-redux';
import { slipitems } from "../../Redux/slices/BetSlice";
function Mybetsettings()
{
    const params = useParams();
    const id = params.id;
    const dispatch = useDispatch()
    const betslip = useSelector(slipitems);
    const Deletebetslip = () =>{
       dispatch(placebetActions.deletebetslip(Number(id)));
    }
    const betObj = betslip.find((items) => items.id === Number(id))
    const potential_wininings = betObj.potential_wininings;
    const bonus_calcu = betObj.bonus_calcu
    const newID = Number(id);
    const validateTowin = () => {
       dispatch(placebetActions.validateSlipWin({
          newID,
          potential_wininings,
          bonus_calcu
       }))
    }
    const potwinings = betObj.potential_wininings
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
      <p className="fs-13 pb-2 text-color margin-zero fw-3 mb-1">Bet slip validation</p>
      <div className="card shadow-sm mb-2 d-flex flex-row justify-content-between px-1 py-3 align-items-center" onClick={validateTowin}>
        <p className="fw-3 margin-zero text-color"><span className="mx-2">Validate to win {potwinings.toFixed(2)}</span></p>
        <button className="badge-lg mx-1"><Icon icon="icon-park-solid:check-one" className="icon-color fs-4" /></button>
      </div>
      <p className="fs-13 pb-2 text-color margin-zero fw-3 mb-1"> Recieve push notifications from this bet</p>
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