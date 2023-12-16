import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Prematcheventsitems from "./components/Prematch-item";
function Matches()
{

    return(
        <>
<div>
  <div className="card mb-2 px-3 py-3 sticky-top">
    <div className="row">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="fw-5 fs-5 icon-color fw-bold"><Link className="link" to="/first-section"><Icon icon="ic:round-arrow-back-ios" /></Link></div>
        <div className="fs-6 fw-3 mt-1 text-color">Premier League</div>
        <div className="fw-3  d-flex bottom-1">
          <Icon icon="mdi:filter" className="w-5 fs-5 icon-color fw-bold "/>
        </div>
      </div>
    </div>
  </div>
  <div id="second-section" className="pb-xl">
    {/* iteratable match component starts here  */}
   <Prematcheventsitems></Prematcheventsitems>
  </div>
</div>
   
        </>
    );

}

export default Matches;