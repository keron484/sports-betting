import {  NavLink } from "react-router-dom";
import { user_balance } from "../Redux/slices/BetSlice";
import { useSelector } from "react-redux";
export  function Loggedin()
{
    const acc_balance = useSelector(user_balance);
    const isDecimal = (number) => {
         const numberString = number.toString();
         return numberString.includes(".");
    }
    return(
        <>
        <div className="d-flex justify-content-between align-items-center"> 
       <div className="mt-2 mx-2 w-75">
        <p className="fs-12 fw-3 margin-zero px-1 text-color">Current Acccout</p>
        <h1 className="fw-bold fs-5 mt-1 mx-1 z-3 text-color">{isDecimal(acc_balance) ? acc_balance.toFixed(2) : acc_balance}<span className="mx-2">₣</span></h1>
       </div>
       <div className="mt-1">
       <button 
       className="bg-fgreen mx-2 border-none fs-12 px-3 py-2 fw-3 text-white rounded-2">
        <NavLink className="link" to="/account-deposite">
            Deposit
        </NavLink>
        </button>
       </div>
      </div>  
        </>
    )
}
export function Notloggedin()
{
    return(
        <> 
        <div className="d-flex justify-content-center align-items-center px-1 my-2">
            <button className="login-lg border-none py-2 fs-12 fw-3 w-50 mx-1"><NavLink className="link" to="/login">Login </NavLink></button>
            <button className="signup-lg border-none py-2 fs-12 fw-3 w-50 mx-1"><NavLink className="link" to="/sign-up"><span>Sign up </span></NavLink></button>
        </div>
        </>
    )
}