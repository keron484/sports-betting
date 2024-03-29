import {Link, NavLink} from 'react-router-dom';
import {Icon} from "@iconify/react";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Dropdownmarkets from '../../components/Dropdownmarkets';
import { market_category } from '../../Data/navdata';
function Matchdetailslive() {
    const params = useParams();
    const [Livedata, setLivedata] = useState([]);
    const getdata = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        fetch(`http://localhost:3031/Livedata/${params.id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => setLivedata(result))
        .catch((error) => console.log("error", error));
    }
    useEffect(() => {
        getdata()
    },)
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setSeconds(prevSeconds => (prevSeconds + 1) % 5400); // 5400 seconds = 90 minutes
      }, 1000);
      
      return () => clearInterval(timer);
    }, []);
    
    const formattedMinutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const formattedSeconds = (seconds % 60).toString().padStart(2, '0');
    const gradientStyle = {
      background: 'linear-gradient(90deg, #095256, #439775)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontSize: '36px',
      fontWeight: 'bold',
    };
    return (
        <>
            <div>
                <div className="card bg-info-st  sticky-top pb-1">
                    <div className="d-flex justify-content-between align-items-center px-3 my-1">
                        <div className="fs-5 fw-4 ">
                            <Link className="link" to='/live-events-list'><Icon icon="ic:round-arrow-back-ios"/></Link>
                        </div>
                        <div className="fs-12 text-color fw-3 mt-1">England Primier League</div>
                        <div className="fs-5  mb-1">
                            <Icon icon="tabler:dots" />
                        </div>
                    </div>
                    <div className="card mt-1 py-2 stats-area mx-2 mb-3">
                        <NavLink className="link" to={`/livematch-stats`}>
                        <div className='d-flex justify-content-end mx-2'>
                          <button className='badge-md'><Icon icon="ion:arrow-forward"  className='fs-12 icon-color'/></button>
                        </div>
                        </NavLink>
                    <div className="d-flex flex-row mt-1 justify-content-center align-items-center">
                            <div className="d-flex">
                                <div className="fs-12 justify-content-start mt-4 mx-2 fw-4 " id="home-team-name">{Livedata.htname}</div>
                                <div className="match-details-circle-one bg-t d-flex flex-row align-items-center justify-content-center">
                                    <div className="match-details-circle-two text-center  bg-t d-flex flex-row align-items-center justify-content-center">
                                        <img src={Livedata.htlogo} alt="hometeamname" className="team-logo"/>
                                    </div>
                                </div>
                            </div>
                           <div>
                           </div>
                            <div className="d-block mx-1 text-center">
                                <p className="fs-3 fw-bold margin-zero">
                                    <span className='text-color'>{Livedata.htscore}</span>
                                    <span className='mx-1'>:</span>
                                    <span className='text-color'>{Livedata.atscore}</span>
                                </p>
                            </div>

                            <div className="d-flex">
                                <div className="match-details-circle-one bg-t d-flex flex-row align-items-center justify-content-center">
                                    <div className="match-details-circle-two bg-t d-flex flex-row align-items-center justify-content-center">
                                        <img src={Livedata.atlogo} alt="awayteamname" className="team-logo"/>
                                    </div>
                                </div>
                                <div className="fs-12 justify-content-end mt-4 mx-2 fw-3 " id="home-team-name">{Livedata.awname}</div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center  mb-1'>
                            <div className='d-block text-center'>
                            <h1 className='fs-12 fw-bold text-color'>{formattedMinutes < 45 ? "1-half" : "2-half"}, {formattedMinutes}:{formattedSeconds}  (1-0)</h1>
                            </div>
                        </div>
                    </div>
                        <div className='px-2'>
                          <div className='d-flex flex-row justify-content-between'>
                          <p className="fs-12 margin-zero mx-2">{Livedata.htname}  </p>
                            <p className="fs-12 margin-zero mx-2">Draw</p>
                            <p className="fs-12 margin-zero mx-2">{Livedata.awname} 50%</p>
                          </div>
                           <div className='w-100  bg-light result flex-row d-flex align-items-center'>
                                <div className='d-flex justify-content-center align-items-center w-25 bg-warning h-100 home'>
                                    <p className='fs-7 mt-3 text-white'>Away 25 %</p>
                                </div>
                                <div className='d-flex justify-content-center align-items-center w-25 bg-danger h-100 draw'>
                                    <p className='fs-7 mt-3 text-white'>Draw 25 %</p>
                                </div>
                                <div className='d-flex justify-content-center align-items-center w-50 bg-primary h-100 away'>
                                <p className='fs-7 mt-3 text-white'>Home  50 %</p>
                                </div>
                            </div>
                           </div>

                </div>
                <div className="card mt-3 py-1 my-2 sticky-top">
                    <div className="d-flex flex-row p-1 py-2" id="nav-top-two">
                        {
                        market_category.map((items) => {
                            return (
                                <>
                                    <NavLink className={
                                            ({isActive}) => isActive ? "link active" : null
                                        }
                                        to='/match-details'>
                                        <button className="mx-2  fs-12 border-none rounded-5  px-4  py-1 active fw-4"
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
                    } </div>
                </div>
                <div className='my-1'>
                    <input 
                    type="text" 
                    className='form-control form-control-sm rounde-1 border-primary' 
                    placeholder='Search here'
                    />
                </div>
                <div className="d-block pb-xxl" id='markets'>
                    <Dropdownmarkets></Dropdownmarkets>
                </div>
            </div>


        </>
    )

}
export default Matchdetailslive;
