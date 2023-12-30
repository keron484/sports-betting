import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { message_list, placebetActions } from "../../Redux/slices/BetSlice";
export function Messageitem(props)
{
  const msg_id = props.id
  const dispatch = useDispatch();
  
  const deletemsg = () => {
      dispatch(placebetActions.removemessage(msg_id))
  }
  return(
    <>
          <div className="card rounded-2 shadow-sm my-2 p-2">
          <p className="text-break" key={props.id}>
          <p className="fw-3 fs-13 margin-zero">{props.title}<span className="float-end fs-5 icon-color"><Icon icon="mdi:trash"  className="c-red" onClick={deletemsg} /></span></p>
           <div className="bottom-1 text-color">
                  {props.body}
           </div>
         </p>  
          </div>
    </>
  )
}

function Messages() {
  const msgList = useSelector(message_list);
    return(
        <>
        <div className="d-flex flex-row card py-2 justify-content-between px-3 align-items-center">
           <span className="c-grey fs-5"><Link className='link' to="/first-section"><Icon icon="ic:round-arrow-back-ios" className="icon-color"/></Link></span>          
            <span className="fw-4 fs-13 text-color">Messages</span>
            <span className="fw-4 fs-13"></span>                  
        </div>
  
               {msgList.map((items) => (
                <Messageitem 
                  id={items.id}
                  title={items.title}
                  body={items.body}
                />
               ))}
         
        </>
    );
}
export default Messages;