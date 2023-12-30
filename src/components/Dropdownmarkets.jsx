import { useState, useEffect } from "react";
import Marketitem from "./Marketitem";
function Dropdownmarkets(props)
{
  const [largemarket, setlargemarket] = useState([]);
  const getdata = () => {
      var requestOptions = {
          method:"GET",
          redirect: "follow"
      };
      fetch("http://localhost:3050/largemarket", requestOptions)
      .then((response) => response.json())
      .then((result) => setlargemarket(result))
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
      getdata()
  }, [])
 return(
        <>
         {largemarket.map((items, index) => {
          return(
            <>
          <div>
            <div>
                 <div className="card mt-2 border-none"  id="list_dropdown">  
                <div className="container">
                  <div className="col-lg-12 pb-2">
                    <div className="fs-13 fw-3 margin-zero pb-1 px-2 text-color">{items.lable}</div>
                    <div className="row">
                      {items.markets.map((item) => (
                              <>
                              <div className={items.lable === "1X2" ? "col-lg-4 col-4 my-1" : items.lable === "doublechance" ?  "col-lg-4 col-4" : "col-lg-6 col-6 my-1"}>
                              <Marketitem 
                               id={item.id}
                               match_name={item.match_name}
                               match_date={item.match_date}
                               kick_off_time={item.kick_off_time}
                               market_category={item.market_category}
                               market_lable={item.market_lable}
                               odd={item.odd}
                              />
                              </div>
                              </>
                       ))}
                    </div>
                  </div>
                </div>
              </div>  
            </div>
       </div>
            </>
          )
         })}
        </>
    );
}

export default Dropdownmarkets;