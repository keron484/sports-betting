import {Icon} from "@iconify/react";
function Bethistorylistitems(props)
{

    return(
        <>
          <div className="card mb-2 p-1 shadow-sm mt-1" key={props.id}>
      <div className="d-flex flex-row justify-content-between mt-1 mx-2">
        <div className="d-block">
          <div className="justify-content-start fs-12 fw-4 text-color">Premier League</div>
          <div className="justify-content-start fs-12 fw-4 text-color">{props.match_date} {props.kick_off_time}</div>
        </div>
        <div className="d-flex">
          <button className="badge-sm d-flex align-items-center"><Icon icon="ph:waveform-fill" className="fs-4 icon-color"/></button>
        </div>
      </div>
      <div className="d-flex flex-row mb-1 my-4 justify-content-center mb-1">
        <div className="d-block">
          <div className="home-team-circle-one">
            <div className="home-team-circle-two text-center">
             <img src={props.htlogo} alt="hometeamname" className="team-logo bottom-1" />
            </div>
          </div>
          <div className="fs-12 fw-4 text-center mt-1">
            <div id="home-team-name" className="text-truncate">{props.htname}</div>
          </div>
        </div>
       <div className="d-block  mx-5 mt-3 text-center">
             <h1 className="fs-4 fw-bold text-color">VS</h1>
        </div>
        <div className="d-block">
          <div className="home-team-circle-one">
            <div className="home-team-circle-two text-center p-1 px-1">
            <img src={props.atlogo} alt="hometeamname" className="team-logo bottom-1" />
            </div>
          </div>
          <div className="fs-12 fw-4 text-center mt-1">
            <div id="home-team-name" className="text-truncate">{props.awname}</div>
          </div>
        </div>
      </div>
      <div className="d-block border-top py-1 mb-1">
        <p className="fs-12 mx-2 margin-zero fw-4  text-color">Bet: {props.market_lable}<span className="float-end fw-bold fs-12">{props.odd}<span /></span></p>
        <p className="fs-12 mx-2 margin-zero fw-4 text-color">Status <span className="float-end c-stbl fw-bold fs-12">Accepted<span /></span></p>
      </div>
    </div>
        </>
    );

}
export default Bethistorylistitems;