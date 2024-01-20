import Bethistorylistitems from '../../components/bet-history-list-items';
import {Icon} from '@iconify/react';
import { useParams,Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { slipitems } from "../../Redux/slices/BetSlice";
import { CustomIconone } from '../../custom-icons/icons';
function Bethistorydetails()
{
  const params = useParams();
  const first_arry = useSelector(slipitems);
  const new_array =  first_arry.filter((items) =>  Number(params.id) === items.id );
  const details_list = new_array[0].selected_events;
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
         winStatus = {new_array[0].winStatus}
         />
       );
  })
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
    return(
        <>      
<div>
  {new_array.map((item) => {
    const betStatus = item.winStatus;
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
        <button className="badge-lg  mx-2">
           <CustomIconone  winStatus={betStatus} />
        </button>
        <div className="d-block ">
          <div className="justify-content-start fs-12 text-color fw-4">ID:<span>SHAF104102489{item.id}</span> </div>
          <div className="justify-content-start fs-12 fw-5 c-stbl">Type: {item.bettype}</div>
          <div className="justify-content-start fs-12 text-color fw-4">Date: {item.date}</div>
        </div>
      </div>
      <div className="d-block mt-2">
        <p className="fs-6 text-color margin-zero py-1 fw-3">Odds: <span className="float-end fw-bold mx-1">{item.totalOdds.toFixed(2)}<span /></span></p>
        <p className="fs-6 text-color margin-zero py-1 fw-3">Stake: <span className="float-end fw-bolder">{item.stake} ₣</span></p>
        <p className="fs-6 text-color margin-zero py-1 fw-3">Bonus: <span className={betStatus ? "float-end fw-bolder c-green" : "float-end fw-bolder"}>{item.bonus_calcu.toFixed(2)} ₣</span></p>
        <p className="fs-6 text-color margin-zero py-1 fw-3">Potential Wins: <span className={betStatus ? "float-end fw-bolder c-green" : "float-end fw-bolder"}>{item.potential_wininings} ₣</span></p>
        <p className="fs-6  margin-zero  fw-3"> <span className="text-color">Status: {betStatus ? <ValidatedItem /> : <ValidatedItemtwo />}   </span ></p>
      </div>
    </div>
  </div>
      </>
    )
  })}
  {/* top section ends */}
  <div className="pb-xxl" id="mid-section">
  {betdetail}
  </div>
</div>




        </>
    );
}

export default Bethistorydetails;