import { Link } from "react-router-dom";
function VirtualGames() {
    return(
        <>
        <div className="card mb-2 p-2 sticky-top">
          <div className="d-flex justify-content-center align-items-center">
          <p className="fs-13 fw-bold mt-2 text-color">Virtual Games</p>
           </div>
        </div>
        <div className="container">
        <Link className="link" to='/aviator'>
        <div className=" d-block w-25  text-center">
                <img src="games/crash-aviator.jpg" alt="" className="game-logo"/>
                <p className="fw-12 text-color fw-bold">Crash Aviator</p>
            </div>
        </Link>
        </div>
        </>
    )
}
export default VirtualGames;