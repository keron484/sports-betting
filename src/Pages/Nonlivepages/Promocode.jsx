import {NavLink, Link} from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedList, count, slipActions } from '../../Redux/slices/BetslipSlice';
import { user_balance } from '../../Redux/slices/BetSlice';
function Promocode()
{
  const dispatch = useDispatch();
  const [minimise, setMinimise] = useState(false);
  const [stake, setStake] = useState("");
  const handlechange = event => {
    setStake(event.target.value);
  }
  function minmaxfunc(){
    setMinimise(prevalue => !prevalue);
  }
   const styles = {
     maxHeight: minimise ? "475px" : "250px"
   }

   const removeall = () => {
    dispatch(slipActions.removeAllfromslip())
  }

   const num_events = useSelector(count);
   const selected_events = useSelector(selectedList);
   const acc_balance = useSelector(user_balance)
   let totalOdds = 1;
   selected_events.forEach(element => {
        totalOdds *= element.odd
   });
  
  
      const rendered_selections = selected_events.map(items => (
        <>
        <div className="card mb-1 border-none p-2 text-color shadow-sm" key={items.id}>
      <h2 className="fs-12  margin-zero py-1"><span className="float-start mt-1 mx-3 py-1 fs-12">{items.match_name}</span><span className='float-end'><Icon icon="ph:x-circle-fill" className='fs-4 icon-color mx-2'/></span></h2>
      <p className="fw-3 fs-12 mx-3 margin-zero">{items.match_date} {items.match_time}, {items.bet_time} </p>
      <div className="card  px-3 bg-f9 text-color">
        <h2 className="fs-12 mt-1 mb-1"><span className="float-start mt-1 fw-bold">{items.market_lable}</span><span className="p-1 float-end fw-bold">{items.odd}</span></h2>
      </div>
    </div>
        </>
      ))
   return(
        <>
<div>
  <div className="d-flex flex-row card py-2 justify-content-between px-3 align-items-center">
  <span className="icon-color fs-5"><Link className='link' to="/first-section"><Icon icon="ic:round-arrow-back-ios" /></Link></span>          
    <span className="fw-4 fs-13 mx-2 text-color">Bet Slip</span> 
    <div>
    <span type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal"><Icon icon="mingcute:dots-fill" className='icon-color fs-5'/></span>         
    <span><Icon icon="mdi:trash" className='fs-5 icon-color mx-1' onClick={removeall}/></span> </div>            
  </div>
  {removeall &&   <div className="d-block mt-2 pb-sm " id="slip-events" style={styles}>
    {rendered_selections}

  </div>}
  <div className="card mt-3 p-2">
 <div className='parent pos-fixed'>
 <div className="text-center">
      <button className="badge-sm c-stbl top-3  bg-white " onClick={minmaxfunc}><Icon icon="ep:arrow-up-bold" className='icon-color'/></button>
    </div>
    <div className="card p-1 bg-f9">
      <h2 className="fs-6 text-color margin-zero py-2"><span className="float-start mt-1">Events</span><span className="p-1 float-end fw-bold" id="num_events"><Icon icon="bi:stack" className='fs-6 icon-color mx-2' />{num_events}</span></h2>
      <h2 className="fs-6 text-color margin-zero py-2"><span className="float-start mt-1">Odds</span><span className="p-1 float-end fw-bold" id="odd_total">{totalOdds.toFixed(2)}</span></h2>                        
    </div>
    <div className="d-flex justify-content-between mt-1 p-1 rounded-1 bg-lav">
    <NavLink to='/bet-slip' className={({isActive}) => isActive ? "btn button-color fs-12 c-white" : "btn  fs-12 text-color"}> <div className="fs-12 "> <div className='bg-t fw-3 border-none '>Current Account</div> </div></NavLink>
      <NavLink to='/promocode' className={({isActive}) => isActive ? "btn button-color fs-12 c-white" : "btn  fs-12 text-color"}> <div className="fs-12 "> <div className='bg-t fw-3 border-none '>Promo Code</div> </div></NavLink>
      <NavLink to='/bonus-account' className={({isActive}) => isActive ? "btn button-color fs-12 c-white" : "btn  fs-12 text-color"}> <div className="fs-12 "> <div className='bg-t fw-3 border-none '>Bonus Account</div> </div></NavLink>
    </div>
    <p className="fs-12 margin-zero py-1 text-color fw-4">Balance: </p>
    <h2 className="fs-5 top-2 margin-zero py-1 text-color"><span className="float-start mt-1 ls-1 fw-bold" id="balance">{acc_balance}<span className="mx-1">₣</span> </span> </h2>
    <div className="input-group">
      <input 
        type="number" 
        className="form-control form-control-sm"
        placeholder="Enter Promocode" 
        id="stake-amount"
        onChange={handlechange}
        value={stake}
       />
      <button className="btn btn-scondary bet mx-2 rounded-1" id="btn-bet">Bet</button>
    </div>
    <p className="fs-13 my-3 text-color margin-zero  fw-bold">Place your bets by entering the coupon gifts</p>
    
</div>

  </div>
</div>
	
        </>
    );
}

export default Promocode;