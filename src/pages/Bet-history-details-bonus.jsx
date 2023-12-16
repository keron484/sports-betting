import { Icon } from "@iconify/react";
import Bethistorylistitems from "./components/bet-history-list-items";
import { useSelector } from "react-redux";
import { bonus_bet_list } from "./bet";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
function Bethistorybonus()
{
  const params = useParams();
  const first_arry = useSelector(bonus_bet_list);
  const filtered_arry = first_arry.filter((items) => Number(params.id) === items.id)
  const details_list = filtered_arry[0].selected_events;
  const betdetail = details_list.map((items) => {
      return(
        <Bethistorylistitems 
    key={items.id}
    htname = {items.htname}
    awname = {items.awname}
    htlogo = {items.htlogo}
    atlogo = {items.atlogo}  
    market_lable = {items.market_lable}
    odd = {items.odd}
    match_date = {items.match_date}
    htscore = {items.htscore}
    atscore = {items.atscore}
    timelable = {items.timelable}
    scoreshalf = {items.scoreshalf}
    /> 
      )
   })
      return(
        <>
        {filtered_arry.map((item) => {
            return(
                <>
         <div className="card p-2 sticky-top shadow-sm mb-2">
    <div className=" d-flex flex-row justify-content-between align-items-center px-2">
      <p className="fw-bold fs-5 c-grey"><Link className="link" to="/bet-history-list"><Icon icon="ic:round-arrow-back-ios" className="icon-color fs-5" /></Link></p>
      <p className="fw-3 mt-2 text-color">Bet Details</p>
      <p className="fs-5 fw-3 c-grey"> <span><Icon icon="ph:waveform-fill" className="mx-1 icon-color" /></span> </p>
    </div>
    <div className="row px-2 my-1">
      <div className="d-flex flex-row border-bottom ">
        <button className="badge-lg fs-4 mx-2"><Icon icon="icon-park-solid:transaction-order" className="icon-color mb-1"/></button>
        <div className="d-block ">
          <div className="justify-content-start fs-12 text-color fw-4">ID: <span>{item.id}</span> </div>
          <div className="justify-content-start fs-12 fw-5 c-stbl">{item.bettype}</div>
          <div className="justify-content-start fs-12 text-color fw-4">{item.date}</div>
        </div>
      </div>
      <div className="d-block mt-2">
        <p className="fs-6 text-color margin-zero py-1 fw-3">Odds <span className="float-end fw-bold mx-1">{item.totalOdds.toFixed(2)}<span /></span></p>
        <p className="fs-6 text-color margin-zero py-1 fw-3">Stake <span className="float-end fw-bold ls-1">{item.stake}<span className="mx-1">₣<span><span /></span></span></span></p>
        <p className="fs-6 text-color margin-zero py-1 fw-3">Potential Wins <span className="float-end fw-bold ls-1">{item.potential_wininings}<span className="mx-1">₣<span><span /></span></span></span></p>
        <p className="fs-6  margin-zero  fw-3"> <span className="text-color">Status</span> <span className="float-end fw-bold c-stbl mx-1"> Accepted <span /></span></p>
      </div>
    </div>
  </div>
                </>
            )
        })}
          <div className="pb-xxl" id="mid-section">
  {betdetail}
  </div>
        </>
    )
}
export default Bethistorybonus;