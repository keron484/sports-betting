import { Icon } from "@iconify/react";
import {Link, useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import Marketitem from "./Marketitem";
function Prematcheventsitems()
{
  const params = useParams();
  var target = params.Eventtitle;
  const [Fixtures, setFixtures] = useState([]);
const getdata = () => {
    var requestOptions = {
        method:"GET",
        redirect: "follow"
    };
    fetch(`http://localhost:3039/${target}`, requestOptions)
    .then((response) => response.json())
    .then((result) => setFixtures(result))
    .catch((error) => console.log("error", error));
}
useEffect(() => {
    getdata(Fixtures);
},)
    return(
        <>
         {
          
          Fixtures.map((items, index) => {
            return(
              <>
    <Link className="link" to={`/match-details/${items.Eventtitle}/${items.id}`}>
     <div className="card mb-2" key={items.id}>
      <div className="mb-1 mt-1">
      <div className="d-flex  flex-row mt-2 px-2  justify-content-between">
        <div className="d-flex flex-row align-items-center">
         <button className="badge-sm d-flex flex-row align-items-center"><Icon icon="icons8:football2" className="fs-4 icon-color" /></button>
         <span className="fs-12 fw-3 mx-2 text-color">{items.Eventtitle}</span>
        </div>
        <div className="d-flex flex-row align-items-center">
          <button className="badge-sm d-flex align-items-center"><Icon icon="tabler:star" className="fs-5 c-stbl" /></button>
          <button className="badge-sm mx-2 d-flex align-items-center"><Icon icon="charm:bell" className="fs-5 c-stbl" /></button>
        </div>
      </div>
      </div>
      <div className="d-flex flex-row  mt-3 justify-content-center align-items-center text-center text-color">
                                    {/*block one start*/}
                                        <div className="d-block text-center">
                                        <div className="home-team-circle-one">
                                            <div className="home-team-circle-two p-1 px-1 text-center">
                                                <img src={
                                                        items.htlogo
                                                    }
                                                    className="team-logo object-fit mt-1"
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
                                    <div className="d-block  mx-4  text-center fw-5 text-color">
                                      <p className="fs-14 fw-bold margin-zero">VS</p>
                                      <p className="fs-12 fw-5 margin-zero">Starts in</p>
                                      <p className="fs-12 fw-5 margin-zero">12:00:23</p>
                                      </div>
                                    {/*block two end */}

                                    {/*block three start */}
                                    <div className="d-block text-center">
                                        <div className="home-team-circle-one">
                                            <div className="home-team-circle-two text-center p-1 px-1">
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
      <p className="fs-12 fw-4 margin-zero px-2 text-color">1X2</p>
      <div className="d-flex justify-content-around   mb-1 py-1">
      {
        items.market_1x2.map((c, i) => (
            <Marketitem id={
                    c.id
                }
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
            }></Marketitem>
        ))
    }
      </div>
    </div>
    </Link>
              </>
            )
           }) 
         }
        </>
    );
}
export default Prematcheventsitems;
