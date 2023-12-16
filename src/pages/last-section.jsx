import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";
import Lastsectionitems from "./components/Lastsection-items";
import { useState, useEffect } from "react";
function Lastsection() {
  const [championships, setchampionships] = useState([]);
  const getdata = () => {
      var requestOptions = {
          method: "GET",
          redirect: "follow"
      };
      fetch("http://localhost:3032/championships", requestOptions)
      .then((response) => response.json())
      .then((result) => setchampionships(result))
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
      getdata()
  }, [])
  return (
    <>
      <div>
        <div className="card p-2 sticky-top">
          <div className="d-flex flex-row  justify-content-between px-2 py-2">
            <span className="fs-5 fw-bold">
              <Link  className="link">
                <Icon icon="ic:round-arrow-back-ios" className="icon-color" />
              </Link>
            </span>
            <span className="fw-4 mx-2 fs-13 text-color">Football</span>
            <span>
              <span>
                <Icon icon="zondicons:filter" className="fs-13 mx-2 icon-color" />
              </span>
            </span>
          </div>
          <div className="d-flex flex-row justify-content-center bg-f9 mx-auto py-1 rounded-2">
            <NavLink
              to="/last-section"
              className={({ isActive }) =>
                isActive
                  ? "toggle-active w-50 mx-1 px-5 py-2 fw-3"
                  : "toggle-inactive w-50 mx-1 px-5 py-2 fw-3"
              }
            >
              {" "}
              <div className="fs-7 ">
                {" "}
                <div className="bg-t fw-3 border-none">Sports</div>{" "}
              </div>
            </NavLink>
            <NavLink
              to="/live-events-list"
              className={({ isActive }) =>
                isActive
                  ? "toggle-active w-50 mx-1 px-5 py-2 fw-3"
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
            <Icon icon="icons8:football2" className="fs-4 icon-color" />
          </button>
          <span className="mx-2 fs-13 fw-3 text-color">Football</span>
        </div>
        <div className='my-2 d-flex justify-content-start px-2'>
          <input type="text" className='form-control form-control-sm rounded-2 border-primary' placeholder='search here'/>
        </div>
        <div className="d-block mt-1 mb-3 pb-xxl" id="last-section">
             {championships.map((items) => {
              return(
                <>
                 <Lastsectionitems 
                    id={items.id}
                    flag={items.flag}
                    leagues = {items.leagues}
                    link = {items.link}
                    title = {items.title}
                 />
                </>
              )
             })}
        </div>
      </div>
    </>
  );
}

export default Lastsection;
