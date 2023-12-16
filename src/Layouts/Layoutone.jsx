import Navbottomlarge from "../pages/Navbottomlarge";
import { Outlet } from "react-router-dom";
import Lastsection from "../pages/last-section";
import Secondsection from "../pages/second-section";
import Navbottom from "../pages/navbottom";
function Layoutone() {
  return (
    <>
     <div className="app-large z-l">
     <nav
        className='navbar navbar-expand-lg bg-white sticky-top navbar-light py-2 mb-1 justify-content-center border-bottom shadow-sm'
        >
        <h1
          className='flex-center logo  fw-bold fs-5 uppercase  mx-3 mb-2 mt-1'
        >
          Strato Bet
        </h1>
      </nav>
      <div className="container" >
        <div className="row">
          <div className="col-lg-4" id="first-section">
            <Outlet></Outlet>
          </div>
          <div className="col-lg-4" id="mid-section">
            <Secondsection></Secondsection>
          </div>
          <div className="col-lg-4" id="last-section">
            <Lastsection></Lastsection>
          </div>
        </div>
      </div>
      <footer>
        <Navbottom></Navbottom>

        <div className="">
          <Navbottomlarge></Navbottomlarge>
        </div>
      </footer>
     </div>
     <div id="toastBox" className="z-h">

 </div>
    </>
  );
}

export default Layoutone;
