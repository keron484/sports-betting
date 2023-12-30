import { Icon } from "@iconify/react";
import Dropdownmarkets from "../../components/Dropdownmarkets";
import { market_category } from "../../Data/navdata";
import { NavLink } from "react-router-dom";
function Livematchstats(){
    return(
        <>
          <div className="card bg-info mx-1 p-3 sticky-top">
    <div className="d-flex justify-content-between align-items-center pb-2">
      <div className="fs-5 c-white"><Icon icon="ic:round-arrow-back-ios" /></div>
      <div className="fs-6 fw-2">England Primier League</div>
      <div className="fs-5 c-white"><iconify-icon icon="bi:three-dots" /></div>
    </div>
    <div className="card mt-1 z-3 " style={{background: 'rgba(0, 0, 0, 0.2)'}}>
    <div className='d-flex justify-content-between mx-2 align-items-center mt-2 px-2'>
        <button className='badge-lg'><Icon icon="ion:arrow-back" className='fs-4 icon-color'/></button>
        <h1 className="fs-6 fw-3">Statistics</h1>
        <button className='badge-lg'><Icon icon="ion:arrow-forward"  className='fs-4 icon-color'/></button>
      </div>
      <div className="d-flex flex-row mb-3 my-1 justify-content-evenly display-none">
        <div className="d-flex">
          <div className="d-block stats-list pb-sm">
            <p className="text-center fs-12 c-white margin-zero">Home team recent matches</p>
            <div className="flex justify-content-center align-items-center text-color flex-row my-2">
              <span className="fs-12  fw-3 text-truncate" id="home-team-name">Bayern</span>
              <img src="image/bayern.png" alt="hometeamlogo" className="team-logo-sm mx-2" />
              <span className="fs-13 text-center mx-1 fw-bold"><span>2</span><span className="mx-1">:</span><span>1</span></span>
              <img src="image/dortmund.png" alt="hometeamlogo" className="team-logo-sm mx-2" />
              <span className="fs-12 fw-3 text-truncate" id="home-team-name">Dormund</span>
            </div>
            <div className="flex justify-content-center align-items-center text-color flex-row my-2">
              <span className="fs-12  fw-3 text-truncate" id="home-team-name">Bayern</span>
              <img src="image/bayern.png" alt="hometeamlogo" className="team-logo-sm mx-2" />
              <span className="fs-13 text-center mx-1 fw-bold"><span>2</span><span className="mx-1">:</span><span>1</span></span>
              <img src="image/dortmund.png" alt="hometeamlogo" className="team-logo-sm mx-2" />
              <span className="fs-12 fw-3 text-truncate" id="home-team-name">Dormund</span>
            </div>
            <p className="text-center fs-12 c-white my-2">Away Team recent matches</p>
            <div className="flex justify-content-center align-items-center text-color flex-row my-2">
              <span className="fs-12  fw-3 text-truncate" id="home-team-name">Bayern</span>
              <img src="image/bayern.png" alt="hometeamlogo" className="team-logo-sm mx-2" />
              <span className="fs-13 text-center mx-1 fw-bold"><span>2</span><span className="mx-1">:</span><span>1</span></span>
              <img src="image/dortmund.png" alt="hometeamlogo" className="team-logo-sm mx-2" />
              <span className="fs-12 fw-3 text-truncate" id="home-team-name">Dormund</span>
            </div>
            <div className="flex justify-content-center align-items-center text-color flex-row my-2">
              <span className="fs-12  fw-3 text-truncate" id="home-team-name">Bayern</span>
              <img src="image/bayern.png" alt="hometeamlogo" className="team-logo-sm mx-2" />
              <span className="fs-13 text-center mx-1 fw-bold"><span>2</span><span className="mx-1">:</span><span>1</span></span>
              <img src="image/dortmund.png" alt="hometeamlogo" className="team-logo-sm mx-2" />
              <span className="fs-12 fw-3 text-truncate" id="home-team-name">Dormund</span>
            </div>
            <div className="flex justify-content-center align-items-center text-color flex-row my-2">
              <span className="fs-12  fw-3 text-truncate" id="home-team-name">Bayern</span>
              <img src="image/bayern.png" alt="hometeamlogo" className="team-logo-sm mx-2" />
              <span className="fs-13 text-center mx-1 fw-bold"><span>2</span><span className="mx-1">:</span><span>1</span></span>
              <img src="image/dortmund.png" alt="hometeamlogo" className="team-logo-sm mx-2" />
              <span className="fs-12 fw-3 text-truncate" id="home-team-name">Dormund</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="card mt-3 py-1">
    <div className="d-flex flex-row p-1 sticky-top" id="nav-top-two">
    {
                        market_category.map((items) => {
                            return (
                                <>
                                    <NavLink className={
                                            ({isActive}) => isActive ? "link active" : null
                                        }
                                        to='/match-details'>
                                        <button className="mx-2 btn-list fs-12  px-4 inactive py-1 shadow-sm fw-4"
                                            key={
                                                items.id
                                        }>
                                            {
                                            items.lable
                                        }</button>
                                    </NavLink>
                                </>
                            )
                        })
                    }
    </div>
  </div>
  <div className="d-block mt-3 mb-5" id="match-events">
   <Dropdownmarkets></Dropdownmarkets>
  </div>
   </>
    )
    
}
export default Livematchstats;