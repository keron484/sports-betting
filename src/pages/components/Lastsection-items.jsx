import {Icon} from "@iconify/react";
import {Link} from 'react-router-dom';
import {useState} from "react";
function Lastsectionitems(props) {
    const [dropdown, setDropdown] = useState(false);
    function toggledropdown() {
        setDropdown(prevalue => !prevalue);
    }

    const styles = {
        transform: dropdown ? "rotate(180deg)" : "rotate(0deg)",
        transition: dropdown ? "all ease-out 0.3s" : "all ease-out 0.3s"
    }
   const league_games = props.leagues
   var count = league_games.length
    return (
              <>
            <Link className="link" to={`${props.link}`}>
            <div className="card mb-1 border-none px-2 d-flex flex-row justify-content-between py-2 shadow-sm"
                 onClick={toggledropdown}>
                <div className="first-item">
                    <button className="badge-md"> <img src={props.flag} alt="flag" className="w-100 h-100"/> </button>
                    <span className="fs-12 fw-3 mx-2 text-color">
                        {props.title}
                    </span>
                </div>
                <div className={count === 1 ? "display-none" : "second-item d-flex flex-row align-items-center"}>
                    <span className="fs-12 fw-3 text-color mx-2 mt-1">{count}</span>
                    <button className="badge-md mx-1"><Icon icon="ep:arrow-down-bold"  className="icon-color" style={styles}/></button>
                </div>
            </div>
            {dropdown && <div className={count === 1 ? "display-none" : "card my-1 px-2"}>
            <div className="d-block">
                 {league_games.map((items) => {
                     return(
                         <>
                         <Link to={`/pre-matches/${items.Eventtitle}`} className="link">
                         <div className="d-flex flex-row justify-content-between my-3">
                         <div className="first-item">
                         <button className="badge-md"> <img src={props.flag} alt="flag" className="w-100 h-100"/> </button>
                    <span className="fs-12 fw-3 mx-2 text-color">
                        {items.lable}
                    </span>
                </div>
                <div className="second-item d-flex">
                    <button className="badge-md text-color">N</button>
                </div>
                </div>
                         </Link>
                        </>
                    )
                 })}
                 </div>
            </div>}
            </Link>
                        </>
    )
     }
     export default Lastsectionitems;

 export function Livelistitems(props)
{
    const [dropdown, setDropdown] = useState(false);
    function toggledropdown() {
        setDropdown(prevalue => !prevalue);
    }

    const styles = {
        transform: dropdown ? "rotate(180deg)" : "rotate(0deg)",
        transition: dropdown ? "all ease-out 0.3s" : "all ease-out 0.3s"
    }
   const league_games = props.leagues
   var count = league_games.length
    return(
        <>
      <Link className="link" to="">
      <div className="card mb-1 border-none px-2 d-flex flex-row justify-content-between py-2 shadow-sm"
           onClick={toggledropdown}>
          <div className="first-item">
              <button className="badge-md"> <img src={props.flag} alt="flag" className="w-100 h-100"/> </button>
              <span className="fs-12 fw-3 mx-2 text-color">
                  {props.title}
              </span>
          </div>
          <div className={count === 1 ? "display-none" : "second-item d-flex flex-row align-items-center"}>
              <span className="fs-12 fw-3 text-color mx-2 mt-1">{count}</span>
              <button className="badge-md mx-1"><Icon icon="ep:arrow-down-bold"  className="icon-color" style={styles}/></button>
          </div>
      </div>
      {dropdown && <div className={count === 1 ? "display-none" : "card my-1 px-2"}>
      <div className="d-block">
           {league_games.map((items) => {
               return(
                   <>
                   <Link to={`/live-events/${items.Eventtitle}`} className="link">
                   <div className="d-flex flex-row justify-content-between my-3">
                   <div className="first-item">
                   <button className="badge-md"> <img src={props.flag} alt="flag" className="w-100 h-100"/> </button>
              <span className="fs-12 fw-3 mx-2 text-color">
                  {items.lable}
              </span>
          </div>
          <div className="second-item d-flex">
              <button className="badge-md text-color">N</button>
          </div>
          </div>
                   </Link>
                  </>
              )
           })}
           </div>
      </div>}
      </Link>
                  </>
)
}
















