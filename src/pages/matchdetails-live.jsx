import {Link, NavLink} from 'react-router-dom';
import {Icon} from "@iconify/react";
import { market_category } from './Data/navdata';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Dropdownmarkets from './components/Dropdownmarkets';
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
    return (
        <>
            <div>
                <div className="card bg-info-st  sticky-top">
                    <div className="d-flex justify-content-between align-items-center px-3 my-1">
                        <div className="fs-4 fw-4 ">
                            <Link className="link" to=''><Icon icon="ic:round-arrow-back-ios"/></Link>
                        </div>
                        <div className="fs-6 text-white fw-3 mt-2">England Primier League</div>
                        <div className="fs-4  mb-1">
                            <Icon icon="tabler:dots"/>
                        </div>
                    </div>
                    <div className="card mt-1 py-2 stats-area mx-2 mb-3">
                        <NavLink className="link" to={`/match-stats-live/${Livedata.id}`}>
                        <div className='d-flex justify-content-end mx-2'>
                          <button className='badge-lg'><Icon icon="ion:arrow-forward"  className='fs-4 icon-color'/></button>
                        </div>
                        </NavLink>
                    <div className="d-flex flex-row mt-1 justify-content-center">
                            <div className="d-flex">
                                <div className="fs-12 justify-content-start mt-2 mx-2 fw-3 text-white" id="home-team-name">{Livedata.htname}</div>
                                <div className="match-details-circle-one bg-t">
                                    <div className="match-details-circle-two p-1 px-1 text-center  bg-t">
                                        <img src={Livedata.htlogo} alt="hometeamname" className="team-logo"/>
                                    </div>
                                </div>
                            </div>
                           <div>
                           </div>
                            <div className="d-block mx-1 text-center">
                                <p className="fs-1 fw-bold margin-zero">
                                    <span className='text-color'>{Livedata.htscore}</span>
                                    <span className='mx-1'>:</span>
                                    <span className='text-color'>{Livedata.atscore}</span>
                                </p>
                            </div>

                            <div className="d-flex">
                                <div className="match-details-circle-one bg-t">
                                    <div className="match-details-circle-two text-center p-1 px-1 bg-t">
                                        <img src={Livedata.atlogo} alt="awayteamname" className="team-logo"/>
                                    </div>
                                </div>
                                <div className="fs-12 justify-content-end mt-2 mx-2 fw-3 text-white" id="home-team-name">{Livedata.awname}</div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mt-1 mb-2'>
                            <h1 className='fs-6 fw-bold text-color'>1-half, 45:56 ( 2 : 0 ) </h1>
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
