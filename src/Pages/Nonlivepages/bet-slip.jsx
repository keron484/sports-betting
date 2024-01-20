import {Link, NavLink} from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { selectedList, count, progress_bonus, slipActions } from '../../Redux/slices/BetslipSlice';
import { user_balance, placebetActions, b_account  } from '../../Redux/slices/BetSlice';
import { useDispatch, useSelector } from 'react-redux';
import Slipitems from '../../components/Slip-items';
import { Player } from '@lottiefiles/react-lottie-player';
function Betslip()
{
  const getCurrentTimeAndDate = () => {
    const currentDateTime = new Date();
    const time = currentDateTime.toLocaleTimeString();
    const date = currentDateTime.toLocaleDateString();
    return `${date} ${time}`;
  };
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
    maxHeight: minimise ? '40%' : '50%'
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
   const isDecimal = (number) => {
      const numberString = number.toString();
      return numberString.includes(".");    
  }
   const placebet = () => {
    dispatch(placebetActions.placebet({
      stake,
      bonus_calcu,
      potential_wininings,
      totalOdds,
      date: getCurrentTimeAndDate(),
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
           parentId = {items.parentId}
         />
        </>
      ))
      const BetSlipsectionOne = () => {
        return(
          <>
          <div className='card border-none'>
             <div className="d-flex justify-content-between px-2 mt-2 text-color">
                 <div className="d-block mx-2 text-center">
                   <span className="fs-13 fw-bold"><Icon icon="bi:stack" className='icon-color mx-2' />{num_events}</span>
                     <p className="fs-12 fw-3 text-color margin-zero py-1">Events</p>
                 </div>
              <div className="d-block text-center">
                <h1 className='fs-13 fw-bold margin-zero py-1'>{totalOdds.toFixed(2)}</h1>
                <p className="fs-12 fw-3 text-color margin-zero">Odds</p>
            </div>
           <div className='w-25'>
           <button className='bet-btn  fs-12 fw-3 ' onClick={minmaxfunc}>Bet</button>
           </div>
         </div>
        <p className='fs-13 fw-3 margin-zero py-1 '>Bonus Percentage
        <span className='fs-13 fw-3 float-end'>{`${bonus} %`}</span>
        </p>
         <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-bar bg-success" style={style_two}>{`${bonus} %`}</div>
       </div>
       </div>
          </>
        )
      }
      const BetslipsectionTwo = () => {
        return(
          <>
 
    <div className="d-flex flex-row align-items-center justify-content-center mb-2">
      <button className="dash" onClick={minmaxfunc}>
      </button>
    </div>
    <div className="card p-1 bg-f9 text-color">
      <h2 className="fs-13 margin-zero py-1 fw-4"><span className="float-start mt-1">Events</span><span className="p-1 float-end fw-bold" id="num_events"><Icon icon="bi:stack" className='fs-6 icon-color mx-2' />{num_events}</span></h2>
      <h2 className="fs-13 margin-zero py-1 fw-4"><span className="float-start mt-1">Odds</span><span className="p-1 float-end fw-bold" id="odd_total">{totalOdds.toFixed(2)}</span></h2>                        
    </div>
    <div className="d-flex justify-content-between mt-1 p-1 rounded-1 bg-lav">
      <NavLink to='/bet-slip' className={({isActive}) => isActive ? "btn button-color fs-12 c-white" : "btn  fs-12 text-color"}> <div className="fs-12 "> <div className='bg-t fw-3 border-none '>Current Account</div> </div></NavLink>
      <NavLink to='/promocode' className={({isActive}) => isActive ? "btn button-color fs-12 c-white" : "btn  fs-12 text-color"}> <div className="fs-12 "> <div className='bg-t fw-3 border-none '>Promo Code</div> </div></NavLink>
      <NavLink to='/bonus-account' className={({isActive}) => isActive ? "btn button-color fs-12 c-white" : "btn  fs-12 text-color"}> <div className="fs-12 "> <div className='bg-t fw-3 border-none '>Bonus Account</div> </div></NavLink>
    </div>
    <p className="fs-12 margin-zero  text-color fw-4">Balance: </p>
    <h2 className="fs-5 top-2 margin-zero py-1 text-color"><span className="float-start mt-1 ls-1 fw-bold" id="balance">{isDecimal(acc_balance) ? acc_balance.toFixed(2) : acc_balance}<span className="mx-1">₣</span> </span> </h2>
    <div className="input-group">
      <input 
        type="number" 
        className="form-control form-control-sm border-success"
        placeholder="Enter stake" 
        id="stake-amount"
        onChange={handlechange}
        value={stake}
       />
      <button 
        className="btn btn-scondary bet mx-2 w-25 rounded-2 fs-13 py-2"
        id="btn-bet"
        onClick={placebet}
        >
         Place Bet
      </button>
    </div>
    <p className="fs-13 mt-1 margin-zero  fw-bold text-color">Range <span>1 ₣</span>- <span>500 000 ₣</span></p>
    <p className="fs-13  margin-zero py-1 fw-bold">Bonus: <span className={bonus_calcu <= 0 ? "float-end" : "c-green float-end"}>{ bonus_calcu.toFixed(2) }<span> ₣ </span></span> </p>
    <h2 className="fs-13 margin-zero  fw-bold">Potential Winnings: <span className={potential_wininings <= 0 ? "float-end" : "c-green float-end"}>{potential_wininings.toFixed(2)}<span> ₣  </span></span></h2>
    <p className="fs-13 margin-zero py-1 fw-3">Bonus Percentage
      <span className={bonus <= 0 ? "fs-13 margin-zero py-1 fw-3 float-end" : "c-green float-end fw-bold fs-13"}>{`${bonus} %`}</span>
    </p>
    <div className="progress mb-2" role="progressbar" aria-label="Success example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
  <div className="progress-bar bg-success" style={style_two}>{`${bonus} %`}</div>
</div> 
          </>
        )
      }
   const  BetslipSectionThree = () => {
      return(
        <>
        <div className="d-block mt-2 pb-sm " >
           <div id="slip-events" style={styles}>
           {rendered_selections}
           </div>
         </div>
        </>
      )
   }
   const BetslipSectionFour = () => {
       return(
        <>
           <div className="d-flex flex-row card py-2 justify-content-between px-3 align-items-center sticky-top">
             <span className="icon-color fs-5"><Link className='link' to="/first-section"><Icon icon="ic:round-arrow-back-ios" /></Link></span>          
            <span className="fw-4 fs-13 mx-2 text-color">Bet Slip</span> 
            <div>
          <span type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal"><Icon icon="mingcute:dots-fill" className='icon-color fs-5'/></span>         
           <span><Icon icon="mdi:trash" className='fs-5 icon-color mx-1' onClick={removeall}/></span> </div>         
         </div>
        </>
       )
   }
   return(
        <>
      <div className='parent'>
      <div className="child-one">
      <BetslipSectionFour />
    </div>
   <div className="child-two">
    <BetslipSectionThree />
   </div>
    <div className="card p-2 child-three mt-auto">
      {!minimise && <BetslipsectionTwo />}
      {minimise && <BetSlipsectionOne />}
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
     <Player 
       src='https://lottie.host/bc008560-8e30-4ee8-bb79-e79cce3d1b99/D6zTLH8kJo.json' 
       loop 
       autoplay 
       speed={2} 
       className="player-sm" />
   </div>
    </>
  )
}