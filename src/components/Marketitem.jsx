import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { slipActions } from "../Redux/slices/BetslipSlice";
import { useState } from "react";
function Marketitem(props) {
    
    const betitems = useSelector((state) => state.betslip.selections);
    const parentId = props.parentId
    var id = props.id;
    const match_date = props.match_date
    const match_name = props.match_name
    const market_category = props.market_category
    const kick_off_time = props.kick_off_time
    const market_lable = props.market_lable
    const odd = props.odd
    const awname = props.awname
    const atlogo = props.atlogo
    const htname = props.htname
    const htlogo = props.htlogo
    const dispatch = useDispatch();
    const addtobetslip = () => {
      dispatch(slipActions.addTobetslip({
        id,
        parentId,
        match_name,
        market_lable,
        odd,
        match_date,
        market_category,
        kick_off_time,
        awname,
        atlogo,
        htname,
        htlogo
      }))
      
    }
    const isInBetslip = betitems.some((items) => items.id === id);
    return(
        <>
          <button 
           className={isInBetslip ? "py-2 rounded-2  bet-live w-100 mx-1 theme-color c-white" : "py-2 rounded-2  bet-live w-100 mx-1  bg-f9"}
           onClick={() => { addtobetslip();}} 
           key={props.id}
           >
            <Link className="link" to='/bet-slip'>
            <span className="display-none">{props.match_date} {props.match_name} {props.parentId} {props.market_category} {props.id} {props.kick_off_time}</span> 
           <span className="float-start fw-3 fw-3 ">{props.market_lable}</span> 
           <span className="float-end match-odds fw-5 fw-bold ">{props.odd}</span> 
            </Link>
        </button>
        
        </>
    )
}
export default Marketitem;