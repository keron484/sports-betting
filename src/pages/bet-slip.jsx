import {Link, NavLink} from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectedList, count, progress_bonus, slipActions } from './BetslipSlice';
import { user_balance, placebetActions, b_account } from './bet';
import { useDispatch } from 'react-redux';
import Slipitems from './components/Slip-items';
function Betslip()
{
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
   const acc_balance = useSelector(user_balance);
   const selected_events = useSelector(selectedList);
   const bonus = useSelector(progress_bonus);
   let totalOdds = 1;
   selected_events.forEach(element => {
        totalOdds *= element.odd
   });
   const style_two = {
    width:bonus + "%"
   }

   var bonus_calcu = 2 * bonus/100 * totalOdds*stake;
   var potential_wininings = totalOdds*stake;

   const placebet = () => {
    dispatch(placebetActions.placebet({
      stake,
      bonus_calcu,
      potential_wininings,
      totalOdds,
      date:"12-29-2023",
      bettype: num_events <= 1 ? "Single" : "Accumulator",
      points:num_events <= 1 ? "0" :  "1", 
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
  <div className="d-flex flex-row card py-3 justify-content-between px-3 align-items-center">
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
    <div className="card p-1 bg-f9 text-color">
      <h2 className="fs-6 margin-zero py-2 fw-4"><span className="float-start mt-1">Events</span><span className="p-1 float-end fw-bold" id="num_events"><Icon icon="bi:stack" className='fs-6 icon-color mx-2' />{num_events}</span></h2>
      <h2 className="fs-6 margin-zero py-2 fw-4"><span className="float-start mt-1">Odds</span><span className="p-1 float-end fw-bold" id="odd_total">{totalOdds.toFixed(2)}</span></h2>                        
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
        onClick={placebet}
        >
          Bet
      </button>
    </div>
    <p className="fs-6 mt-1 margin-zero  fw-bold text-color">Range <span>1 ₣</span>- <span>500 000 ₣</span></p>
    <p className="fs-6  margin-zero py-1 fw-bold">Bonus: <span className={bonus_calcu <= 0 ? "float-end" : "c-green float-end"}>{ bonus_calcu.toFixed(2) }<span> ₣ </span></span> </p>
    <h2 className="fs-6 margin-zero  fw-bold">Potential Winnings: <span className={potential_wininings <= 0 ? "float-end" : "c-green float-end"}>{potential_wininings.toFixed(2)}<span> ₣  </span></span></h2>
    <p className="fs-6 margin-zero py-1 fw-3">Bonus Percentage
      <span className={bonus <= 0 ? "fs-6 margin-zero py-1 fw-3 float-end" : "c-green float-end fw-bold fs-6"}>{`${bonus} %`}</span>
    </p>
    <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
  <div className="progress-bar bg-success" style={style_two}>{`${bonus} %`}</div>
</div> 
</div>}

{minimise && <div className='card border-none'>
  <div className="d-flex justify-content-between px-2 mt-2 text-color">
    <div className="d-block mx-2 text-center">
    <span className="fs-6 fw-bold"><Icon icon="bi:stack" className='icon-color mx-2' />{num_events}</span>
     <p className="fs-12 fw-3 text-color pt-1">Events</p>
    </div>
    <div className="d-block text-center">
      <h1 className='fs-6 fw-bold'>{totalOdds.toFixed(2)}</h1>
      <p className="fs-12 fw-3 text-color">Odds</p>
    </div>
    <button className='bet-btn w-25' onClick={minmaxfunc}>Bet</button>
  </div>
  <p className='fs-6 fw-3 margin-zero py-1 '>Bonus Percentage
   <span className='fs-6 fw-3 float-end'>{`${bonus} %`}</span>
  </p>
  <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
  <div className="progress-bar bg-success" style={style_two}>{`${bonus} %`}</div>
</div>
</div>
}

  </div>
</div>


{/*modial */}

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

	
        </>
    );
}

export default Betslip;
export function Defaultbetslip()
{
  const acc_balance = useSelector(user_balance);
  const bonus_account = useSelector(b_account);
  return(
    <>
   <div className='card my-2 d-flex flex-row justify-content-between align-items-center py-1 rounded-2 px-2 shadow-sm'>
     <p className='fw-3 mt-2 fs-13 text-color'>Load bet slip</p>
     <button className='border-none bg-t'><Icon icon="lucide:upload" className='fs-4 icon-color'/></button>
   </div>
   <NavLink to="/account-deposite" className="link">
   <div className='card my-2 d-flex flex-row justify-content-between align-items-center py-1 rounded-2 px-2 shadow-sm'>
    <p className='fw-3 mt-2 fs-13 text-color'>Deposite</p>
    <button className='border-none bg-t'><span><Icon icon="teenyicons:plus-circle-solid" className="c-green fs-4"/></span>
</button>
   </div>
   </NavLink>
   <div className='card my-2 d-flex flex-row justify-content-start align-items-center rounded-2 px-2 py-1 shadow-sm'>
     <div className='d-block  py-1'>
     <p className='fw-5  fs-12 fw-3 margin-zero text-color'>Balance</p>
     <p className='fw-bold margin-zero fs-3 text-color'>{acc_balance} <span className='mx-1'>₣</span></p>
     </div>
   </div>
   <div className='card my-2 d-flex flex-row justify-content-start align-items-center rounded-2 px-2 py-1 shadow-sm'>
     <div className='d-block py-1'>
     <p className='fw-5  fs-12 fw-3 margin-zero text-color'>Bonus Account</p>
     <p className='fw-bold margin-zero fs-3 text-color'>{bonus_account} <span className='mx-1'>₣</span> </p>
     </div>
   </div>
   <div className='text-center fs-2 text-color px-1 mt-5 fw-bold'>
    Add items to bet slip in order to place bets
   </div>
    </>
  )
}