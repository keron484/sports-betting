import { Icon } from '@iconify/react';
import { NavLink, Link } from 'react-router-dom';
import Lastsectionitems from "./components/Lastsection-items";
export function Livechampionships()
{
    return(
      <>
      <div>
        <div className="card p-2 sticky-top">
          <div className="d-flex flex-row  justify-content-between px-2 py-2">
            <span className="fs-5 fw-bold">
              <Link to="/pre-sports-list" className="link">
                <Icon icon="ic:round-arrow-back-ios" className="c-grey" />
              </Link>
            </span>
            <span className="fw-4 mx-2 fs-13">Football Live</span>
            <span>
              <span>
                <Icon icon="bxs:bell" className="fs-5 c-grey" />
              </span>
              <span>
                <Icon icon="zondicons:filter" className="fs-13 mx-2 c-grey" />
              </span>
            </span>
          </div>
          <div className="d-flex flex-row justify-content-center bg-f9 mx-auto py-1 rounded-2">
            <NavLink
              to="/last-section"
              className={({ isActive }) =>
                isActive
                  ? "toggle-active w-50 mx-1 px-5 py-2 fw-3 btn"
                  : "toggle-inactive w-50 mx-1 px-5 py-2 fw-3"
              }
            >
              {" "}
              <div className="fs-7 ">
                {" "}
                <div className="bg-t fw-3 border-none ">Sports</div>{" "}
              </div>
            </NavLink>
            <NavLink
              to="/live-events-list"
              className={({ isActive }) =>
                isActive
                  ? "toggle-active w-50 mx-1 px-5 py-2 fw-3 btn"
                  : "toggle-inactive w-50 mx-1 px-5 py-2 fw-3"
              }
            >
              {" "}
              <div className="fs-7 ">
                {" "}
                <div className="bg-t fw-3 border-none ">Live</div>{" "}
              </div>
            </NavLink>
          </div>
        </div>
        <div className="title my-2 d-flex flex-row align-items-center">
          <button className="badge-md">
            <Icon icon="icons8:football2" className="fs-5 c-grey" />
          </button>
          <span className="mx-2 fs-12 fw-3">Footbal</span>
        </div>
        <div className="d-block mt-1 mb-3 pb-xxl" id="last-section">
        <Lastsectionitems></Lastsectionitems>
        </div>
      </div>
    </>
    );
}
