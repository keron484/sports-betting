import Navbottomlarge from '../components/Navbottomlarge';
import { Outlet } from 'react-router-dom';
import Lastsection from "../Pages/Nonlivepages/last-section";
import Secondsection from "../Pages/Livepage/second-section";
import Navbottom from "../components/navbottom";
function Layoutmobile()
{
    return(
        <>
        <div className="app-sm">
        <nav
        className='navbar navbar-expand-lg bg-white sticky-top navbar-light py-2 mb-1 justify-content-center border-bottom shadow-sm'
        >
        <h1
          className='flex-center logo  fw-bold fs-5 uppercase  mx-3 mb-2 mt-1'
        >
          STRATOBET
        </h1>
      </nav>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 visually-hidden' id='first-section'>
                    <Secondsection></Secondsection>
                </div>
                <div className='col-lg-4' id='mid-section'>
                <Outlet></Outlet>
                </div>
                <div className='col-lg-4 visually-hidden' id='last-section'>
                    <Lastsection></Lastsection>
                </div>
            </div>
        </div>
        <footer>
        <Navbottom></Navbottom>
            <div className='z-1'>
                <Navbottomlarge></Navbottomlarge>
            </div>
        </footer>
        </div>
        </>
    );
}

export default Layoutmobile;