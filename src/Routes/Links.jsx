import React from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Betslip from '../Pages/Nonlivepages/bet-slip';
import Firstsection from '../Pages/Nonlivepages/first-section';
import Useraccount from '../Pages/Nonlivepages/user-account';
import Eventslive from '../Pages/Livepage/sports-events-live';
import Eventslivelist from '../Pages/Livepage/sports-events-live-list';
import Matches from '../Pages/Nonlivepages/matches';
import Matchstats from '../Pages/Nonlivepages/match-statistics';
import Matchdetails from '../Pages/Nonlivepages/match-details';
import Bethistorydetails from '../Pages/Nonlivepages/bet-history-details';
import Promocode from '../Pages/Nonlivepages/Promocode';
import Bethistorylist from '../Pages/Nonlivepages/Bet-history-list';
import Deposite from '../Pages/Nonlivepages/deposite';
import Messages from '../Pages/Nonlivepages/Messages';
import { Matchstatisticsitemsawayteam, Matchstatshometeam } from '../components/Matchstats';
import BonusAccount from '../Pages/Nonlivepages/BonusAccount';
import Authentication from '../Login/authentication';
import Signup from '../Login/Signup';
import Changepassword from '../Login/change-password';
import Passwordrecovery from '../Login/password-recovery';
import Email from '../Login/Email';
import Layouttwo from '../Layouts/Layouttwo';
import Layoutmobile from '../Layouts/Layoutmobile';
import Secondsection from '../Pages/Livepage/second-section';
import Matchdetailslive from '../Pages/Livepage/matchdetails-live';
import Customersupport from '../Pages/Nonlivepages/customerSupport';
import Cashout from '../Pages/Nonlivepages/Cashout';
import Promopage from '../Pages/Nonlivepages/Promo';
import Bethistorybonus from '../Pages/Nonlivepages/Bet-history-details-bonus';
import Recoverybymail from '../Login/Recovery-mail';
import Orangedeposite from '../Pages/Nonlivepages/orange-deposite';
import Login from '../Login/Login';
import Mtndeposite from '../Pages/Nonlivepages/mtn-deposite';
import Mybetsettings from '../Pages/Nonlivepages/Mybetsettings';
import { count } from '../Redux/slices/BetslipSlice';
import { useSelector } from "react-redux";
import { Defaultbetslip } from '../Pages/Nonlivepages/bet-slip';
import { loggedin } from '../Redux/slices/AuthSlice';
import Lastsection from '../Pages/Nonlivepages/last-section';
import Livematchstats from '../Pages/Livepage/Livematchstats';
import VirtualGames from '../Pages/Nonlivepages/Vitualgames';
import AviatorGame from '../Games/Aviator';
function Links()
{
   const number =  useSelector(count);
   const loginStatus = useSelector(loggedin);
    return(
     <>
     <BrowserRouter>
     <Routes>
     <Route path='/aviator' element={<AviatorGame />}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/authentication' element={<Authentication></Authentication>}></Route>
     <Route path='/change-password' element={<Changepassword></Changepassword>}></Route>
     <Route path='/sign-up' element={<Signup></Signup>}></Route>
     <Route path='/password-recovery' element={<Passwordrecovery></Passwordrecovery>} ></Route>
     <Route path='/email' element={<Email ></Email>}></Route>
     <Route path='/recovery-email' element={<Recoverybymail></Recoverybymail>}></Route>
     </Routes>
     <Routes>
       <Route element={<Layouttwo />}>
          <Route path='/' element={<Lastsection />}></Route>
          <Route path='/livematch-stats' element={<Livematchstats />}></Route>
          <Route path='/first-section' element={<Firstsection />}></Route>  
          <Route path='/menu' element={<Firstsection />}></Route>  
          <Route path='/my-account' element={<Useraccount />}></Route>  
          <Route path='/bet-history-details/:id' element={<Bethistorydetails />}></Route>
          <Route path='/bet-history-details-bonus/:id' element={<Bethistorybonus />}></Route>  
          <Route path='/bet-history-list' element={<Bethistorylist />}></Route>  
          <Route path='/bet-slip' element={number <= 0 ? <Defaultbetslip /> : <Betslip />}></Route>
          <Route path='/promocode' element={number <= 0 ? <Defaultbetslip /> : <Promocode />}></Route>  
          <Route path={loginStatus ? '/account-deposite' : '/'} element={<Deposite />}></Route>
          <Route path='/messages' element={<Messages />}></Route> 
          <Route path='/bonus-account' element={number <= 0 ? <Defaultbetslip /> : <BonusAccount />}></Route>
          <Route path='/customer-support' element={<Customersupport></Customersupport>}></Route> 
          <Route path={loginStatus ? '/withdraw' : '/'} element={<Cashout></Cashout>}></Route> 
          <Route path='/promo' element={<Promopage></Promopage>}></Route>
          <Route path={loginStatus ? '/orange-deposite' : '/'} element={<Orangedeposite></Orangedeposite>}></Route>
          <Route path={loginStatus ? '/mtn-deposite' : '/'} element={<Mtndeposite></Mtndeposite>}></Route>
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
          <Route path='/virtual-games' element={<VirtualGames></VirtualGames>}></Route>
       </Route> 
     </Routes>
     <Routes>
       <Route element={<Layoutmobile/>}>
          <Route path='/' element={<Secondsection />}></Route>
          <Route path='/login-mobile' element={<Secondsection />}></Route>
          <Route path='/second-section' element={<Secondsection />}></Route>
          <Route path='/virtual-games' element={<VirtualGames></VirtualGames>}></Route>
          <Route path='/match-details-live/:id' element={<Matchdetailslive></Matchdetailslive>}></Route>
          <Route path='/first-section' element={<Firstsection />}></Route>  
          <Route path='/my-account' element={<Useraccount />}></Route>  
          <Route path='/bet-history-details/:id' element={<Bethistorydetails />}></Route>  
          <Route path='/bet-history-details-bonus/:id' element={<Bethistorybonus />}></Route>  
          <Route path='/bet-history-list' element={<Bethistorylist />}></Route>  
          <Route path='/bet-slip' element={number <= 0 ? <Defaultbetslip /> : <Betslip />}></Route>
          <Route path='/promocode' element={number <= 0 ? <Defaultbetslip /> : <Promocode />}></Route>  
          <Route path={loginStatus ? '/account-deposite' : '/login-mobile'} element={<Deposite />}></Route>
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
          <Route path={loginStatus ? '/withdraw' : '/login-mobile'} element={<Cashout></Cashout>}></Route> 
          <Route path='/promo' element={<Promopage></Promopage>}></Route>
          <Route path={loginStatus ? '/orange-deposite' : '/login-mobile'} element={<Orangedeposite></Orangedeposite>}></Route>
          <Route path={loginStatus ? '/mtn-deposite' : '/login-mobile'} element={<Mtndeposite></Mtndeposite>}></Route>
          <Route path='/mybets-setting/:id' element={<Mybetsettings></Mybetsettings>}></Route>
       </Route> 
     </Routes>
     </BrowserRouter>
     </>
    );
}

export default Links;