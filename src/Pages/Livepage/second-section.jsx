import { Navtoplisttwoitems } from "../../components/Navbar";
import Liveeventsitem from "../../components/Live";
import { Loggedin, Notloggedin } from "../../components/Loginstate";
import { useSelector } from "react-redux";
import { loggedin } from "../../Redux/slices/AuthSlice";
function Secondsection()
{

  const loginStatus = useSelector(loggedin);
    return(
        <>
      
    <div>
  <div className="card p-1 mb-2  sticky-top shadow-sm">
    <div className="d-block">
    <div className="menu-tow d-flex p-2">
       <Navtoplisttwoitems></Navtoplisttwoitems>
      </div> 
      {
        loginStatus ? <Loggedin></Loggedin> :   <Notloggedin></Notloggedin>
      }   
    </div>
  </div>
  <div className="d-block pb-xxl" id="mid-section">
    <Liveeventsitem></Liveeventsitem>
  </div>
</div>
 {/*modial goes here */}




        </>
    );
}

export default Secondsection;