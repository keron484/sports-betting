import {Link} from 'react-router-dom'
import { Icon } from "@iconify/react";
function Bethistoryitems(props)
{
  var total_odds = props.totalOdds
    return(
        <>
           <Link className="link" to={`/bet-history-details/${props.id}`}>
           <div className="card p-2 mb-2" key={props.id}>
      <div className="row px-2 my-1">
        <div className="d-flex flex-row border-bottom justify-content-between align-items-center">
          <div className="d-flex align-items-center py-1">
            <button className="badge-lg fs-4 icon-color"><Icon icon="ion:ticket-sharp" className='icon-color fs-2' /></button>
            <div className="d-block mx-2 text-color">
              <div className="justify-content-start fs-12 fw-4"><span>{props.date}<span className="mx-1">{props.time}</span></span></div>
              <div className="justify-content-start fs-12 fw-5">{props.bettype}</div>
              <div className="justify-content-start fs-12 fw-4">ID: <span>{props.betid}</span> </div>
            </div>
          </div>
          <Link to={`/mybets-setting/${props.id}`}>
      <div className="d-flex  fs-2 ">
        <button className="badge-lg fs-5 d-flex justify-content-center mx-1 d-flex "><Icon icon="iconamoon:settings" className='c-stbl mt-2' /></button>
      </div>
      </Link>
        </div>
        <div className="d-block mt-2">
          <p className="fs-13 margin-zero py-1 text-color fw-4">Odds: <span className="float-end fw-5">{total_odds.toFixed(2)}<span /></span></p>
          <p className="fs-13 margin-zero py-1 text-color fw-4">Stake: <span className="float-end fw-5">{props.stake}&nbsp;<span>₣<span><span /></span></span></span></p>
          <p className="fs-13 margin-zero py-1 text-color fw-4">Potential Wins: <span className="float-end fw-5">{props.potential_wininings}&nbsp;<span>₣<span><span /></span></span></span></p>
          <p className="fs-13 margin-zero py-1 text-color fw-4">Bonus: <span className="float-end fw-5">{props.bonus_calcu}&nbsp;<span>₣<span><span /></span></span></span></p>
          <p className="fs-13 margin-zero py-1 fw-4">Status: <span className="float-end fw-5 c-stbl" id="bet-statu">Accepted<span /></span></p>
        </div>
      </div>
    </div>
           </Link>
        </>
    );
}

export default Bethistoryitems;
export function Bonusbetlist(props)
{
  var total_odds = props.totalOdds
  var Winnings = props.potential_wininings
  return(
    <>
       <Link className="link" to={`/bet-history-details-bonus/${props.id}`}>
       <div className="card p-2 mb-2" key={props.id}>
  <div className="row px-2 my-1">
    <div className="d-flex flex-row border-bottom justify-content-between align-items-center">
      <div className="d-flex align-items-center py-1">
        <button className="badge-lg fs-4 c-stbl"><Icon icon="ion:ticket-sharp" className='c-stbl fs-2' /></button>
        <div className="d-block mx-2">
          <div className="justify-content-start fs-12 fw-4"><span>{props.date}<span className="mx-1">{props.time}</span></span></div>
          <div className="justify-content-start fs-12 fw-5">{props.bettype}</div>
          <div className="justify-content-start fs-12 fw-4">ID: <span>{props.betid}</span> </div>
        </div>
      </div>
       <Link to={`/mybets-setting/${props.id}`}>
      <div className="d-flex  fs-2 ">
        <button className="badge-lg fs-5 d-flex justify-content-center mx-1 d-flex "><Icon icon="iconamoon:settings" className='c-stbl mt-2' /></button>
      </div>
      </Link>
    </div>
    <div className="d-block mt-2">
      <p className="fs-13 margin-zero py-1 fw-4">Odds: <span className="float-end fw-5">{total_odds.toFixed(2)}<span /></span></p>
      <p className="fs-13 margin-zero py-1 fw-4">Stake: <span className="float-end fw-5">{props.stake}&nbsp;<span>₣<span><span /></span></span></span></p>
      <p className="fs-13 margin-zero py-1 fw-4">Potential Wins: <span className="float-end fw-5">{Winnings.toFixed(2)}&nbsp;<span>₣<span><span /></span></span></span></p>
      <p className="fs-13 margin-zero py-1 fw-4">Status: <span className="float-end fw-5 c-stbl" id="bet-status">Accepted<span /></span></p>
    </div>
  </div>
</div>
       </Link>
    </>
);
}