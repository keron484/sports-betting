import {Link} from 'react-router-dom';
import { Icon } from '@iconify/react';
import { count } from './BetslipSlice';
import { useSelector } from "react-redux";
function Navbottom(){
  const num_events = useSelector(count);
    return(
     <>
      <nav className="navbar fixed-bottom navbar-expand-sm shadow-sm border-top  justify-content-between bg-white nav-sm px-3" style={{height: '4.5em'}} id='nav'>
    <Link className='link' to="/second-section">
    <div className="mb-3  fw-4 d-block text-center mt-1 primary-icon-color">
    <Icon icon="fluent:fire-16-filled" className='fs-4'/>
    <p className='fs-12 bottom-1'>Live</p>
  </div>
    </Link>
   <Link className='link' to="/last-section">
   <div className="mb-3  fw-4 d-block text-center mt-1 primary-icon-color">
   <Icon icon="solar:football-bold" className='fs-4'/>
   <p className='fs-12 bottom-1'>Matches</p>
  </div>
   </Link>
  <div className="mb-3 d-block text-center top-2">
    <Link className='link' to="/bet-slip">
    <button type="button" className="icon-button">
    <Icon icon="ion:ticket" className='fs-4'/>
      <span className={num_events > 0 ? "icon-button__badge" : "visually-hidden"}>{num_events}</span>
    </button>
    </Link>
  </div>
  <Link className='link' to="/bet-history-list">
  <div className="mb-3  fw-4 d-block text-center mt-1 primary-icon-color">
     <Icon icon="clarity:clock-solid" className='fs-4'/>
     <p className='fs-12 bottom-1'>My bets</p>
  </div>
  </Link>
  <Link className='link' to="/first-section">
  <div className="mb-3  fw-4 d-block text-center mt-1 primary-icon-color">
  <Icon icon="ep:menu" className='fs-4'/>
  <p className='fs-12 bottom-1'>Menu</p>
  </div>
  </Link>
</nav>

     </>
    );
}
export default Navbottom;