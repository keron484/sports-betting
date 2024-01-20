import {Link} from 'react-router-dom'
import { Icon } from "@iconify/react";
import { CustomIconone } from '../custom-icons/icons';
function Bethistoryitems(props)
{
  var total_odds = props.totalOdds;
  const ValidatedItem = () => {
    return(
      <>
       <span className="float-end fw-bolder c-green  fs-6">
         Won
         <Icon icon="ph:seal-check-fill" className='c-green fs-4 mx-1'/>
         </span>
      </>
    )
  }
  const ValidatedItemtwo = () => {
    return(
      <>
       <span className="float-end fw-bolder c-stbl">Accepted</span>
      </>
    )
  }
  const stake = props.stake;
  const potwinnings = props.potential_wininings;
  const bonus = props.bonus_calcu;
  const isDecimal = (number) => {
    const numberString = number.toString();
    return numberString.includes(".");
  }
    return(
        <>
           <Link className="link" to={`/bet-history-details/${props.id}`}>
           <div className="card p-2 mb-2" key={props.id}>
      <div className="row px-2 my-1">
        <div className="d-flex flex-row border-bottom justify-content-between align-items-center">
          <div className="d-flex align-items-center py-1">
            <button className="badge-lg text-center">
              <CustomIconone   winStatus={props.winStatus}/>
            </button>
            <div className="d-block mx-2 text-color">
             
              <div className="justify-content-start fs-12 fw-4">ID: <span>SHAF104102489{props.id}</span> </div>
              <div className="justify-content-start fs-12 fw-4"> <span>Date : </span> <span>{props.date}<span className="mx-1">{props.time}</span></span></div>
              <div className="justify-content-start fs-12 fw-5"> <span>Type :</span> {props.bettype} </div>
            </div>
          </div>
          <Link to={`/mybets-setting/${props.id}`}>
      <div className="fs-2 ">
        <button className="badge-lg fs-5 d-flex justify-content-center mx-1"><Icon icon="iconamoon:settings" className='c-stbl mt-2' /></button>
      </div>
      </Link>
        </div>
        <div className="d-block mt-2">
          <p className="fs-13 margin-zero py-1 text-color fw-4">Odds: <span className="float-end fw-bolder">{isDecimal(total_odds) ? total_odds.toFixed(2) : total_odds}<span /></span></p>
          <p className="fs-13 margin-zero py-1 text-color fw-4">Stake: <span className="float-end fw-bolder">{ stake} <span>₣</span> </span></p>
          <p className="fs-13 margin-zero py-1 text-color fw-4">Potential Wins: <span className={props.winStatus ? "float-end fw-bolder c-green" : "float-end fw-bolder"}>{ potwinnings} <span>₣</span> </span></p>
          <p className="fs-13 margin-zero py-1 text-color fw-4">Bonus: <span className={props.winStatus ? "float-end fw-bolder c-green" : "float-end fw-bolder"}>{ bonus} <span>₣</span> </span></p>
          <p className="fs-13 margin-zero py-1 fw-4 text-color">Status: {props.winStatus ? <ValidatedItem /> : <ValidatedItemtwo />} </p>
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
        <button className="badge-lg text-center">
           <CustomIconone />
        </button>
        <div className="d-block mx-2">
          <div className="justify-content-start fs-12 fw-4"> <span>Date</span> <span>{props.date}<span className="mx-1">{props.time}</span></span></div>
          <div className="justify-content-start fs-12 fw-5">{props.bettype}</div>
          <div className="justify-content-start fs-12 fw-4">ID: <span>{props.id}</span> </div>
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
      <p className="fs-13 margin-zero py-1 fw-4">Stake: <span className="float-end fw-5">{props.stake}<span>₣<span><span /></span></span></span></p>
      <p className="fs-13 margin-zero py-1 fw-4">Potential Wins: <span className="float-end fw-5">{Winnings.toFixed(2)}<span>₣<span><span /></span></span></span></p>
      <p className="fs-13 margin-zero py-1 fw-4">Status: <span className="float-end fw-5 c-stbl" id="bet-status">Accepted<span /></span></p>
    </div>
  </div>
</div>
       </Link>
    </>
);
}