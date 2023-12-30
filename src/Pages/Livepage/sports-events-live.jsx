import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Marketitem from "../../components/Marketitem";
function Eventslive()
{
  const params = useParams();
  var target = params.Eventtitle;
  const [Livelist, setLivelist] = useState([]);
const getdata = () => {
    var requestOptions = {
        method:"GET",
        redirect: "follow"
    };
    fetch(`http://localhost:3039/${target}`, requestOptions)
    .then((response) => response.json())
    .then((result) => setLivelist(result))
    .catch((error) => console.log("error", error));
}
useEffect(() => {
    getdata(Livelist);
},)
    return(
        <>
<div>
<div className="card mb-2 px-3 py-3 sticky-top shadow-sm">
    <div className="row">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="fw-5 fs-5 icon-color fw-bold"><Link className="link" to="/live-events-list"><Icon icon="ic:round-arrow-back-ios" /></Link></div>
        <div className="fs-6 fw-3 mt-1 text-color">Premier League</div>
        <div className="fw-3  d-flex bottom-1">
          <Icon icon="mdi:filter" className="w-5 fs-5 icon-color fw-bold "/>
        </div>
      </div>
    </div>
  </div>
  <div id="matches-container">
    {/* iteratable match component starts here  */}
    {Livelist.map((items) => {
      return(
        <>
         <Link className="link" to={`/match-details-live/${items.id}`}>
         <div className="card mb-2 shadow-sm">
        <div className="d-flex flex-row justify-content-between mt-3">
           <div className="d-flex flex-row align-items-center mx-2">
             <button className="badge-sm d-flex flex-row align-items-center">
              <Icon icon="fa:soccer-ball-o" className="fs-3 icon-color"/>
              </button>
                <span className="fs-12 fw-3 mx-2">
                  Premier League
                </span>
            </div>
          <div className="d-flex">
          <button className="badge-sm mx-3 d-flex align-items-center"><Icon icon="ph:waveform-bold" className="fs-5 c-red" /></button>
          </div>
        </div>
       {/* firsblock starts */}
      <div className="d-flex flex-row  mt-2 justify-content-center mb-2">
        <div className="d-block text-center">
          <div className="home-team-circle-one">
            <div className="home-team-circle-two  text-center p-1">
              <img src={items.htlogo} alt="bayern_munich"  className="team-logo bottom-1"/>
            </div>
          </div>
          <div className="fs-12 mt-2 fw-4 text-color text-truncate">
            <div id="home-team-name">
              {items.htname}
            </div>
          </div>
        </div>
       {/* firsblock ends */}

       {/* second block starts  */}
        <div className="d-block  mx-3 text-center mt-1">
           <h1 className="fs-4 ls-2 fw-bold text-color margin-zero"> 
           <span>{items.htscore}</span> 
           :
           <span>{items.atscore}</span>
           </h1>
           <p className="fs-12 text-color margin-zero fw-4 text-bold pt-1"><span className="mx-1">{items.timelable},</span>
                 <span className="ls-1">{ items.matchtime}</span>
            </p>
        </div>
       {/* second block ends */}
       
       {/* last block starts here  */}
        <div className="d-block text-center">
        <div className="home-team-circle-one">
            <div className="home-team-circle-two  text-center p-1">
             <img src={items.atlogo} alt="dortmund" className="team-logo bottom-1"/>
            </div>
          </div>
          <div className="fs-12 mt-2 fw-4 text-color text-truncate">
            <div id="home-team-name">
              {items.awname}
            </div>
          </div>
        </div>
       {/* last block ends  */}
      </div>
      <div className="d-flex justify-content-around mb-2 mt-2">
      {
                                        items.liveodds.map((c, i) => (
                                       
                                            
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
                                                }
                                                atlogo = {items.atlogo}
                                                awname = {items.awname}
                                                htname = {items.htname}
                                                htlogo = {items.htlogo}
                                            ></Marketitem>
                                            
                                        ))
                                    }
      </div>
    </div>
         </Link>
        </>
      )
    })}
    {/* iterate here */}
  </div>
  </div>
        </>
    );

}

export default Eventslive;