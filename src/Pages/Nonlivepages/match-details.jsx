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
                        <div className="fs-5 fw-4  c-white">
                            <Link className="link" to={`/pre-matches/${params.Eventtitle}`}><Icon icon="ic:round-arrow-back-ios"/></Link>
                        </div>
                        <div className="fs-6 fw-3 text-white">England Premier League</div>
                        <div className="fs-5 c-white">
                            <Icon icon="tabler:dots"/>
                        </div>
                    </div>
                    <div className="card mt-1 py-2 stats-area">
                        <div className="d-flex flex-row justify-content-between align-Fixtures-center">
                            <div className="mx-2 invisible">
                                <button><Icon icon="ic:round-arrow-forward-ios"/></button>
                            </div>
                            <div className="mx-2">
                                <NavLink to='/match-stats' className='link'>
                                    <button className='badge-lg'><Icon icon="ion:arrow-forward-outline" className='fs-4 icon-color'/></button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="d-flex flex-row mb-3 mt-1 justify-content-center">
                            <div className="d-flex">
                                <div className="fs-12 justify-content-start mt-3 mx-2 fw-4" id="home-team-name">
                                    {
                                    Fixtures.htname
                                }</div>
                                <div className="home-team-circle-one bg-t">
                                    <div className="home-team-circle-two text-center  bg-t">
                                        <img src={
                                                Fixtures.htlogo
                                            }
                                            alt="hometeamname"
                                            className="team-logo"/>
                                    </div>
                                </div>
                            </div>
                            <div className="d-block mx-3 text-center mb-1">
                                <p className="fs-6 fw-5 margin-zero">VS</p>
                                <p className="fs-7 fw-3 margin-zero">Starts in</p>
                                <p className="fs-7 fw-3 margin-zero">42 Days</p>
                                <p className="fs-7 fw-3 margin-zero">13.02.2025</p>
                            </div>
                            <div className="d-flex">
                                <div className="home-team-circle-one bg-t">
                                    <div className="home-team-circle-two text-center bg-t">
                                        <img src={
                                                Fixtures.atlogo
                                            }
                                            alt="awayteamname"
                                            className="team-logo bottom-1"/>
                                    </div>
                                </div>
                                <div className="fs-12 justify-content-end mt-3 mx-2 d-flex  fw-4" id='home-team-name'>
                                    {
                                    Fixtures.awname
                                }</div>
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
