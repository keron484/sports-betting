import {Link, NavLink} from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectedList, count, slipActions } from './BetslipSlice';
import { useDispatch } from 'react-redux';
import Slipitems from './components/Slip-items';
import { b_account } from './bet';
import { placebetActions } from './bet';
function BonusAccount()
{
  const acc_balance = useSelector(b_account);
  const [minimise, setMinimise] = useState(false);
  const [stake, setStake] = useState("");
  const handlechange = event => {
    setStake(event.target.value);
  }
  const dispatch = useDispatch();
  const removeall = () => {
    dispatch(slipActions.removeAllfromslip())
  }
  function minmaxfunc(){
    setMinimise(prevalue => !prevalue);
  }
   const styles = {
     maxHeight: minimise ? "475px" : "250px"
   }
   
   const num_events = useSelector(count);
   const selected_events = useSelector(selectedList);
   let totalOdds = 1;
   selected_events.forEach(element => {
        totalOdds *= element.odd
   });
   var potential_wininings = totalOdds*stake;
  
   const place_bet = () => {
       dispatch(placebetActions.placebousbet({
        stake,
        potential_wininings,
        totalOdds,
        date:"12-29-2023",
        bettype: num_events <= 1 ? "Single" : "Accumulator",
        selected_events
       }))
   }
      const rendered_selections = selected_events.map(items => (
        <>
         <Slipitems 
           id={items.id}
           match_name = {items.match_name}
           match_time = {items.match_time}
           match_date = {items.match_date}
           kick_off_time = {items.kick_off_time}
           market_lable = {items.market_lable}
           odd = {items.odd}
           market_category = {items.market_category}
         />
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
    <div className="d-block mt-2 pb-sm " id="slip-events" style={styles}>
    {rendered_selections}

  </div>
  <div className="card mt-3 p-2">
{!minimise && <div className='parent pos-fixed'>
 <div className="text-center">
      <button className="badge-sm c-stbl top-3  bg-white " onClick={minmaxfunc}><Icon icon="ep:arrow-up-bold" className='c-stbl'/></button>
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
        placeholder="Enter stake" 
        id="stake-amount"
        onChange={handlechange}
        value={stake}
       />
      <button 
      className="btn btn-scondary bet mx-2 rounded-1" 
      id="btn-bet"
      onClick={place_bet} >
        Bet
      </button>
    </div>
    <p className="fs-12 mt-1 margin-zero  fw-bold">Range <span>90 ₣</span>- <span>9 00000 ₣</span></p>
    <h2 className="fs-12 margin-zero py-2 fw-bold">Potential Winnings: <span className="float-end">{potential_wininings.toFixed(2)}<span> ₣  </span></span></h2> 
    <button className='btn button-color text-white fs-12 py-2 my-2 w-100'>Stake All</button>
</div>}

{minimise && <div className='card border-none'>
  <div className="d-flex justify-content-between px-2 mt-2">
    <div className="d-block mx-2 text-center">
    <span className="fs-12"><Icon icon="bi:stack" className='fs-12 c-grey mx-2' />{num_events}</span>
     <p className="fs-7 fw-2  c-grey">Events</p>
    </div>
    <div className="d-block text-center">
      <h1 className='fs-12 fw-bold'>{totalOdds.toFixed(2)}</h1>
      <p className="fs-7 fw-2 c-grey">Odds</p>
    </div>
    <button className='bet-btn' onClick={minmaxfunc}>Bet</button>
  </div>
</div>
}

  </div>
</div>
	
        </>
    );
}

export default BonusAccount;