import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { promo_code_list } from "./bet";
function Promopage()
{
    const promoitems = useSelector(promo_code_list);
    return(
        <>
   
        <div className="card d-flex justify-content-between align-items-center flex-row py-2 px-2">
            <NavLink className="link" to="/first-section"><p><Icon icon="ic:round-arrow-back-ios" className="fs-5 icon-color mt-2"/></p></NavLink>
            <p className="fs-6 text-color mt-2 fw-3">Promo Code</p>
            <p></p>
        </div>
         {promoitems.map((items) => {
            return(
                <>
                <div className="mt-2">
                <div className="card shadow-sm mb-2 d-flex flex-row justify-content-between px-1 py-3 align-items-center">
                 <div className="mx-1 d-flex">
                 <button className="badge-lg mx-1"><Icon icon="ion:ticket" className='fs-4 icon-color'/></button>
                  <div className="d-block mx-1">
                    <p className="fs-12 fw-4 text-color margin-zero">{items.amount}</p>
                    <p className="fs-12 fw-4 text-color margin-zero">{items.expire_date}</p>
                  </div>
                 </div>
                  <p className="fw-3 margin-zero text-color"><span>{items.promocode}</span></p>
                  <div className="card bg-f9 d-flex">
                  </div>
                </div>
                </div>
                </>
            )
         })}
        </>
    )
}
export default Promopage;