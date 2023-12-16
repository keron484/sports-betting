import React from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Betslip from '../pages/bet-slip';
import Firstsection from '../pages/first-section';
import Lastsection from '../pages/last-section';
import Useraccount from '../pages/user-account';
import Eventslive from '../pages/sports-events-live';
import Eventslivelist from '../pages/sports-events-live-list';
import Matches from '../pages/matches';
import Matchstats from '../pages/match-statistics';
import Matchdetails from '../pages/match-details';
import Bethistorydetails from '../pages/bet-history-details';
import Promocode from '../pages/Promocode';
import Layoutone from '../Layouts/Layoutone';
import Layouttwo from '../Layouts/Layouttwo';
import Bethistorylist from '../pages/Bet-history-list';
import Deposite from '../pages/deposite';
import Messages from '../pages/Messages';
import { Matchstatshometeam, Matchstatisticsitemsawayteam } from '../pages/components/Matchstats';
import BonusAccount from '../pages/BonusAccount';
import Login from '../pages/LoginCopmonents/Login';
import Authentication from '../pages/LoginCopmonents/authentication';
import Signup from '../pages/LoginCopmonents/Signup';
import Changepassword from '../pages/LoginCopmonents/change-password';
import Passwordrecovery from '../pages/LoginCopmonents/password-recovery';
import Email from '../pages/LoginCopmonents/Email';
import Layoutmobile from '../Layouts/Layoutmobile';
import Secondsection from '../pages/second-section';
import Matchdetailslive from '../pages/matchdetails-live';
import { count } from '../pages/BetslipSlice';
import { useSelector } from "react-redux";
import { Defaultbetslip } from '../pages/bet-slip';
import Customersupport from '../pages/customerSupport';
import Cashout from '../pages/Cashout';
import Promopage from '../pages/Promo';
import Bethistorybonus from '../pages/Bet-history-details-bonus';
import Recoverybymail from '../pages/LoginCopmonents/Recovery-mail';
import Orangedeposite from '../pages/orange-deposite';
import Mtndeposite from '../pages/mtn-deposite';
import Mybetsettings from '../pages/Mybetsettings';
function Links()
{
   const number =  useSelector(count);
    return(
     <>
     <BrowserRouter>
     <Routes>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/authentication' element={<Authentication></Authentication>}></Route>
     <Route path='/change-password' element={<Changepassword></Changepassword>}></Route>
     <Route path='/sign-up' element={<Signup></Signup>}></Route>
     <Route path='/password-recovery' element={<Passwordrecovery></Passwordrecovery>} ></Route>
     <Route path='/email' element={<Email ></Email>}></Route>
     <Route path='/recovery-email' element={<Recoverybymail></Recoverybymail>}></Route>
     </Routes>
     <Routes>
       <Route element={<Layoutone />}>
          <Route path='/' element={<Firstsection />}></Route>
          <Route path='/first-section' element={<Firstsection />}></Route>  
          <Route path='/my-account' element={<Useraccount />}></Route>  
          <Route path='/bet-history-details/:id' element={<Bethistorydetails />}></Route>
          <Route path='/bet-history-details-bonus/:id' element={<Bethistorybonus />}></Route>  
          <Route path='/bet-history-list' element={<Bethistorylist />}></Route>  
          <Route path='/bet-slip' element={number <= 0 ? <Defaultbetslip /> : <Betslip />}></Route>
          <Route path='/promocode' element={number <= 0 ? <Defaultbetslip /> : <Promocode />}></Route>  
          <Route path='/account-deposite' element={<Deposite />}></Route>
          <Route path='/messages' element={<Messages />}></Route> 
          <Route path='/bonus-account' element={number <= 0 ? <Defaultbetslip /> : <BonusAccount />}></Route>
          <Route path='/customer-support' element={<Customersupport></Customersupport>}></Route> 
          <Route path='/withdraw' element={<Cashout></Cashout>}></Route> 
          <Route path='/promo' element={<Promopage></Promopage>}></Route>
          <Route path='/orange-deposite' element={<Orangedeposite></Orangedeposite>}></Route>
          <Route path='/mtn-deposite' element={<Mtndeposite></Mtndeposite>}></Route>
       </Route>
       <Route element={<Layouttwo />}>
          <Route path='/match-details-live/:id' element={<Matchdetailslive></Matchdetailslive>}></Route>
          <Route path='/last-section' element={<Lastsection />}></Route>  
          <Route path='/pre-matches/:Eventtitle' element={<Matches />}></Route> 
          <Route path='/match-details/:Eventtitle/:id' element={<Matchdetails />}></Route>  
          <Route path='/match-stats' element={<Matchstats />}></Route>   
          <Route path='/stats-away-team' element={<Matchstatisticsitemsawayteam />}></Route>  
          <Route path='/stats-away-home' element={<Matchstatshometeam />}></Route>  
          <Route path='/live-events/:Eventtitle' element={<Eventslive />}></Route>  
          <Route path='/live-events-list' element={<Eventslivelist/>}></Route>
          <Route path='/mybets-setting/:id' element={<Mybetsettings></Mybetsettings>}></Route>
       </Route> 
     </Routes>
     <Routes>
       <Route element={<Layoutmobile/>}>
          <Route path='/' element={<Secondsection />}></Route>
          <Route path='/second-section' element={<Secondsection />}></Route>
          <Route path='/match-details-live/:id' element={<Matchdetailslive></Matchdetailslive>}></Route>
          <Route path='/first-section' element={<Firstsection />}></Route>  
          <Route path='/my-account' element={<Useraccount />}></Route>  
          <Route path='/bet-history-details/:id' element={<Bethistorydetails />}></Route>  
          <Route path='/bet-history-details-bonus/:id' element={<Bethistorybonus />}></Route>  
          <Route path='/bet-history-list' element={<Bethistorylist />}></Route>  
          <Route path='/bet-slip' element={number <= 0 ? <Defaultbetslip /> : <Betslip />}></Route>
          <Route path='/promocode' element={number <= 0 ? <Defaultbetslip /> : <Promocode />}></Route>  
          <Route path='/account-deposite' element={<Deposite />}></Route>
          <Route path='/messages' element={<Messages />}></Route> 
          <Route path='/bonus-account' element={number <= 0 ? <Defaultbetslip /> : <BonusAccount />}></Route> 
          <Route path='/last-section' element={<Lastsection />}></Route>  
          <Route path='/pre-matches/:Eventtitle' element={<Matches />}></Route>  
          <Route path='/match-stats' element={<Matchstats />}></Route>  
          <Route path='/match-details/:Eventtitle/:id' element={<Matchdetails />}></Route>  
          <Route path='/stats-away-team' element={<Matchstatisticsitemsawayteam />}></Route>  
          <Route path='/stats-away-home' element={<Matchstatshometeam />}></Route>  
          <Route path='/live-events/:Eventtitle' element={<Eventslive />}></Route>  
          <Route path='/live-events-list' element={<Eventslivelist/>}></Route>
          <Route path='/customer-support' element={<Customersupport></Customersupport>}></Route> 
          <Route path='/withdraw' element={<Cashout></Cashout>}></Route> 
          <Route path='/promo' element={<Promopage></Promopage>}></Route>
          <Route path='/orange-deposite' element={<Orangedeposite></Orangedeposite>}></Route>
          <Route path='/mtn-deposite' element={<Mtndeposite></Mtndeposite>}></Route>
          <Route path='/mybets-setting/:id' element={<Mybetsettings></Mybetsettings>}></Route>
       </Route> 
     </Routes>
     </BrowserRouter>
     </>
    );
}

export default Links;