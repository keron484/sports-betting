import {Icon} from "@iconify/react";
import {Link} from "react-router-dom";
import Marketitem from "./Marketitem";
import { useState, useEffect } from "react";
function Liveeventsitem() {
    const [Livedata, setLivedata] = useState([]);
    const getdata = () => {
        var requestOptions = {
            method:"GET",
            redirect: "follow"
        };
        fetch(`http://localhost:3031/Livedata`, requestOptions)
        .then((response) => response.json())
        .then((result) => setLivedata(result))
        .catch((error) => console.log("error", error));
    }
    useEffect(() => {
        getdata(Livedata);
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
        <> {
            Livedata.map((items) => {
                return (
                    <>
                        <Link className="link"
                            to={`/match-details-live/${items.id}`}>
                            <div className="card mb-2 px-1 rounded-3 shadow-sm" key={items.id}>
                                <div className="d-flex  flex-row mt-2 px-1  justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <button className="badge-sm d-flex flex-row align-items-center"><Icon icon="fa:soccer-ball-o" className="fs-3 icon-color"/></button>
                                        <span className="fs-12 fw-3 mx-2">
                                            {
                                            items.Eventtitle
                                        }</span>
                                    </div>
                                    <div className="align-items-center">
                                        <button className="badge-sm mx-2 d-flex align-items-center"
                                            ><Icon icon="ph:waveform-bold" className="fs-5 icon-color" /></button>
                                    </div>
                                </div>
                                <div className="d-flex flex-row  mt-3 justify-content-center align-items-center text-center">
                                    {/*block one start*/}
                                        <div className="d-block text-center">
                                        <div className="home-team-circle-one flex-row d-flex align-items-center justify-content-center">
                                            <div className="home-team-circle-two flex-row d-flex align-items-center justify-content-center text-center">
                                                <img src={
                                                        items.htlogo
                                                    }
                                                    className="team-logo object-fit "
                                                    alt={
                                                        items.htname
                                                    }/>
                                            </div>
                                        </div>
                                        <div className="fs-7  fw-4 text-center my-1">
                                            <div id="home-team-name" className="fs-12 text-center text-truncate text-color">
                                                {
                                                items.htname
                                            }</div>
                                        </div>
                                        </div>
                                    {/*block one end */}

                                    {/*block two start*/}
                                    <div className="mx-2 text-center">
                                        <h1 className="fw-bold fs-1 scores text-color">
                                            <span style={gradientStyle}>{
                                                items.htscore
                                            }
                                                <span>
                                                    <span className="mx-1" style={gradientStyle}>:</span>
                                                    <span className="margin-one" style={gradientStyle}>
                                                        {
                                                        items.atscore
                                                    }</span>
                                                </span>
                                            </span>
                                        </h1>
                                        <span className="mx-1 fs-12 fw-bold">
                                        <span className="mx-1">{
                                            formattedMinutes < 45 ? "1-half" : "2-half"
                                        },</span>
                                           {formattedMinutes}:{formattedSeconds}
                                           </span>
                                    </div>
                                    {/*block two end */}

                                    {/*block three start */}
                                    <div className="d-block text-center">
                                        <div className="home-team-circle-one flex-row d-flex align-items-center justify-content-center">
                                            <div className="home-team-circle-two flex-row d-flex align-items-center justify-content-center text-center">
                                                <img src={
                                                        items.atlogo
                                                    }
                                                    className="team-logo mt-1 object-fit"
                                                    alt={
                                                        items.atname
                                                    }/>
                                            </div>
                                        </div>
                                        <div className="fs-7 fw-4 my-1">
                                            <div id="away-team-name" className="fs-12 text-center text-truncate text-color">
                                                {
                                                items.awname
                                            }</div>
                                        </div>
                                    </div>
                                    {/*block three end */} </div>
                
                                <div className="d-block margin-zero top-1">
                                    <span className="fw-4 mx-2 my-1 fs-12 text-color">1X2</span>
                                    <div className="d-flex justify-content-around mb-2">
                                        {
                                        items.liveodds.map((c, i) => (
                                       
                                            
                                            <Marketitem 
                                            id={
                                                c.id
                                            }
                                            parentId = {c.parentId}
                                                match_name={
                                                    c.match_name
                                                }
                                                match_date={
                                                    c.match_date
                                                }
                                                kick_off_time={
                                                    c.kick_off_time
                                                }
                                                market_category={
                                                    c.market_category
                                                }
                                                market_lable={
                                                    c.market_lable
                                                }
                                                odd={
                                                    c.odd
                                                }
                                                atlogo = {items.atlogo}
                                                awname = {items.awname}
                                                htname = {items.htname}
                                                htlogo = {items.htlogo}
                                            ></Marketitem>
                                            
                                        ))
                                    } </div>
                                </div>
                            </div>
                        </Link>

                    </>
                )
            })
        } </>
    )

}
export default Liveeventsitem;
