import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";
import { bonus_bet_list, slipitems, user_balance, } from "../../Redux/slices/BetSlice";
import { Bonusbetlist } from "../../components/bet-history-items";
import Bethistoryitems from "../../components/bet-history-items";
import { useSelector } from "react-redux";
import { Player } from '@lottiefiles/react-lottie-player';
function Bethistorylist()
{
  const acc_balance = useSelector(user_balance);
  const betItems = useSelector(slipitems);
  const bonus_data = useSelector(bonus_bet_list);
  const betdata = betItems.map((items) => {
      return(
        <Bethistoryitems
        id = {items.id}
        date={items.date}
        time={items.time}
        bettype={items.bettype}
        totalOdds={items.totalOdds}
        stake={items.stake}
        potential_wininings={items.potential_wininings.toFixed(2)}
        bonus_calcu={items.bonus_calcu.toFixed(2)}
        />
      );
  })
  const betdata_bonus = bonus_data.map((items) => {
    return(
      <>
        <Bonusbetlist 
          id = {items.id}
          date = {items.date}
          time = {items.time}
          bettype = {items.bettype}
          totalOdds = {items.totalOdds}
          stake = {items.stake}
          potential_wininings = {items.potential_wininings}
        />
      </>
    )
  })
    return(
     <>
<div>
  <div className="card p-2 mb-3 sticky-top pb-xxl" id="mid-section">
    <div className="d-flex flex-row justify-content-between align-items-center px-2 my-2">
      <NavLink className="link" to="/first-section"><span className="fs-5"><Icon icon="ic:round-arrow-back-ios" className="icon-color" /></span></NavLink>
      <h2 className="fs-6 fw-4 mt-2 text-color">Bet History</h2>
      <span className="fs-5 c-grey"><Icon icon="material-symbols:filter-alt-sharp"  className="icon-color"/></span>
    </div>
    <div className="d-block p-1 mx-2">
      <p className="fs-12 fw-3 text-color">Main Account</p>
      <h1 className="fs-5 fw-bold top-2 ls-1 text-color">{acc_balance}<span className="fw-bold mx-2">₣</span> </h1>
    </div>
    <div className="card d-flex flex-row justify-content-around rounded-2 bg-f9">
      <div className="d-block text-center">
        <p className="my-1 fs-12 margin-zero fw-3 text-color">Monthly</p>
        <p className="fs-4 mx-2 margin-zero top-1 icon-color"><Icon icon="bi:calendar-week-fill" /></p>
      </div>
      <div className="d-block text-center">
        <p className="my-1 fs-12 margin-zero fw-3 text-color">Weekly</p>
        <p className="fs-4 mx-2 margin-zero top-1 icon-color"><Icon icon="bi:calendar-week-fill" /></p>
      </div>
      <div className="d-block text-center">
        <p className="my-1 fs-12 margin-zero fw-3 text-color">Deposite</p>
        <p className="fs-4 mx-2 margin-zero top-1"> 
           <Link className="link" to='/account-deposite'>
           <Icon icon="ph:plus-circle-fill" className="c-green fs-2" />
          </Link>
          </p>
      </div>                  
    </div>
  </div>
  <div className="pb-xxl" id="mid-section">
    {betItems.length < 1 && bonus_data ? <Player  src='https://lottie.host/e5e03007-daa7-4fce-94d4-e0fb5d3acca3/yRoSbdYPIS.json'
     loop 
     autoplay 
     speed={2} 
     className="player" /> 
      : betdata_bonus }
  </div>
</div>
   
     </>
    );
}

export default Bethistorylist;