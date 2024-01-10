import {Link} from 'react-router-dom';
import { Icon } from '@iconify/react';
import { count } from '../Redux/slices/BetslipSlice';
import { useSelector } from "react-redux";
function Navbottom(){
  const num_events = useSelector(count);
    return(
     <>
      <nav className="navbar fixed-bottom navbar-expand-sm shadow-sm border-top  justify-content-between bg-white nav-sm px-3" style={{height: '3.5em'}} id='nav'>
    <Link className='link' to="/second-section">
    <div className="  fw-4 d-block text-center  primary-icon-color">
    <Icon icon="fluent:fire-16-filled" className='fs-5'/>
    <p className='fs-12 '>Live</p>
  </div>
    </Link>
   <Link className='link' to="/last-section">
   <div className="  fw-4 d-block text-center  primary-icon-color">
   <Icon icon="solar:football-bold" className='fs-5'/>
   <p className='fs-12 '>Matches</p>
  </div>
   </Link>
  <div className=" d-block text-center top-5">
    <Link className='link' to="/bet-slip">
    <button type="button" className="icon-button">
    <Icon icon="ion:ticket" className='fs-4'/>
      <span className={num_events > 0 ? "icon-button__badge" : "visually-hidden"}>{num_events}</span>
    </button>
    </Link>
  </div>
  <Link className='link' to="/bet-history-list">
  <div className="  fw-4 d-block text-center  primary-icon-color">
     <Icon icon="clarity:clock-solid" className='fs-5'/>
     <p className='fs-12 '>My bets</p>
  </div>
  </Link>
  <Link className='link' to="/first-section">
  <div className="  fw-4 d-block text-center  primary-icon-color">
  <Icon icon="ep:menu" className='fs-5'/>
  <p className='fs-12 '>Menu</p>
  </div>
  </Link>
</nav>

     </>
    );
}
export default Navbottom;