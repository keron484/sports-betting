import {Link, NavLink} from 'react-router-dom';
import {Icon} from "@iconify/react";
import { market_category } from '../../Data/navdata';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Dropdownmarkets from '../../components/Dropdownmarkets';
function Matchdetails() {

    const params = useParams();
    const [Fixtures, setFixtures] = useState([]);
    const getdata = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        fetch(`http://localhost:3039/${params.Eventtitle}/${params.id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => setFixtures(result))
        .catch((error) => console.log("error", error));
    }
    useEffect(() => {
        getdata()
    },)
    return (
        <>

            <div>
                <div className="card bg-info-st mx-1 p-3 sticky-top">
                    <div className="d-flex justify-content-between align-content-center">
                        <div className="fs-5 fw-4">
                            <Link className="link" to={`/pre-matches/${params.Eventtitle}`}><Icon icon="ic:round-arrow-back-ios"/></Link>
                        </div>
                        <div className="fs-6 text-color fw-3 mt-1">England Primier League</div>
                        <div className="fs-5">
                            <Icon icon="tabler:dots"/>
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
                                <div className="fs-12 justify-content-start mt-4 mx-2 fw-4 " id="home-team-name">{Fixtures.htname}</div>
                                <div className="match-details-circle-one bg-t d-flex flex-row align-items-center justify-content-center">
                                    <div className="match-details-circle-two p-1 px-1 text-center  bg-t d-flex flex-row align-items-center justify-content-center">
                                        <img src={Fixtures.htlogo} alt="hometeamname" className="team-logo"/>
                                    </div>
                                </div>
                            </div>
                           <div>
                           </div>
                            <div className="d-block mx-2 text-center mt-3">
                               <p className='fs-5 margin-zero fw-bold'>VS</p>
                               <p className='fs-12 fw-4 margin-zero'>starts in</p>
                               <p className='fs-12 fw-4 margin-zero'>32 days 45:90:58</p>
                            </div>

                            <div className="d-flex">
                                <div className="match-details-circle-one bg-t d-flex flex-row align-items-center justify-content-center">
                                    <div className="match-details-circle-two p-1 px-1 bg-t d-flex flex-row align-items-center justify-content-center">
                                        <img src={Fixtures.atlogo} alt="awayteamname" className="team-logo"/>
                                    </div>
                                </div>
                                <div className="fs-12 justify-content-end mt-4 mx-2 fw-4 " id="home-team-name">{Fixtures.awname}</div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center  mb-1'>
                            <div className='d-block text-center'>
                            <h1 className='fs-12 fw-bold text-color'>1-half, 45:56  (1-0)</h1>
                            </div>
                        </div>
                    </div>
                    <div className='px-2'>
                          <div className='d-flex flex-row justify-content-between'>
                          <p className="fs-12 margin-zero mx-2 fw-4">{Fixtures.htname}  </p>
                            <p className="fs-12 margin-zero mx-2 fw-4">Draw</p>
                            <p className="fs-12 margin-zero mx-2 fw-4">{Fixtures.awname} 50%</p>
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
            </div>
           <Dropdownmarkets></Dropdownmarkets>
        </>
    );
}

export default Matchdetails;
