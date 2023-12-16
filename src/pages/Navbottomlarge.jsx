import { Icon } from "@iconify/react";
import { NavLink } from 'react-router-dom';
import { count } from './BetslipSlice';
import { useSelector } from "react-redux";
function Navbottomlarge()
{
    const num_events = useSelector(count);

    return(
        <>
<nav className="navbar fixed-bottom navbar-expand-sm navbar-light bg-white shadow mb-1 justify-content-evenly mx-auto rounded-5 fw-3 nav-lg" style={{height:"4em", width:"35%"}}>
    <div className="d-block text-center  mx-1">
        <button className="button d-flex align-items-center">
             <NavLink to="/" className={({isActive}) => isActive ? "link nav-link-bottom" : null}>
                <Icon icon="fluent:fire-16-filled" /> 
             </NavLink>
       </button>
       
    </div>
    <div className="d-block text-center  mx-1">
        <button className="button d-flex align-items-center">
             <NavLink to="/last-section" className={({isActive}) => isActive ? "link nav-link-bottom" : null}>
             <Icon icon="solar:football-bold"/>
            </NavLink>
        </button>
       
    </div>
    <div className="d-block text-center top-3 mx-1">
          <NavLink to="/bet-slip" className="link">
            <button type="button" className="icon-button">
             <Icon icon="ion:ticket" />
             <span className={num_events > 0 ? "icon-button__badge" : "visually-hidden"}>{num_events}</span>
            </button>
          </NavLink>
        
    </div>
    <div className="d-block text-center  mx-1">
        <button className="button d-flex align-items-center">
            <NavLink className={({isActive}) => isActive ? "link nav-link-bottom" : null} to="/bet-history-list">
                <Icon icon="clarity:clock-solid" />
            </NavLink>
        </button>
         
    </div>
    <div className="d-block text-center  mx-1">
          <button  className="button d-flex align-items-center">
            <NavLink  className={({isActive}) => isActive ? "link nav-link-bottom" : null} to="/first-section">
                <Icon icon="ep:menu" />
            </NavLink>
          </button>
        
    </div>
</nav>

        </>
    );
}
export default Navbottomlarge;