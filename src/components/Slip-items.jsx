import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { slipActions } from "../Redux/slices/BetslipSlice";
function Slipitems(props)
{
    const id = props.id;
    
    const dispatch = useDispatch();
    const removeitem = () => {
     dispatch(slipActions.removeFromslip(id))
    }
    return(
        <>
       <div className="card mb-1 border-none text-color p-2" key={props.id}>
      <h2 className="fs-6  margin-zero py-1">
        <span className="float-start mt-1 mx-3 py-1 ">{props.match_name}</span>
        <span className='float-end'><Icon icon="ph:x-circle-fill" className='fs-3 mx-1 icon-color' onClick={removeitem}/>
        </span>
        </h2>
      <p className="fw-3 fs-12 mx-3 margin-zero">{props.match_date} , {props.kick_off_time} {props.parentId}</p>
      <div className="card  px-3 bg-f9 text-color">
        <h2 className="fs-6 mt-1 mb-1 text-color"><span className="float-start mt-1 fw-bold">{props.market_category}: {props.market_lable}</span><span className=" float-end fw-bold">{props.odd}</span></h2>
      </div>
      </div>
        </>
    )
}
export default Slipitems;
