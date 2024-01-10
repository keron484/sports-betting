import { Outlet } from 'react-router-dom'
import Navbottomlarge from '../components/Navbottomlarge'
import Navbottom from '../components/navbottom'
import Secondsection from '../Pages/Livepage/second-section'
import Firstsection from '../Pages/Nonlivepages/first-section'
function Layouttwo () {

  return (
    <>
    <div className='app-large'>
    <nav
        className='navbar navbar-expand-lg bg-white sticky-top navbar-light py-2 mb-1 justify-content-center border-bottom shadow-sm'
        >
        <h1
          className='flex-center logo  fw-bold fs-5 capitalize mx-3 mb-2 mt-1'
        >
          STRATOBET
        </h1>
      </nav>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4' id='last-section'>
            <Firstsection></Firstsection>
          </div>
          <div className='col-lg-4' id='mid-section'>
            <Secondsection></Secondsection>
          </div>
          <div className='col-lg-4' id='last-section'>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <footer>
        <Navbottom></Navbottom>

        <div className=''>
          <Navbottomlarge></Navbottomlarge>
        </div>
      </footer>
    </div>

    </>
  )
}

export default Layouttwo
