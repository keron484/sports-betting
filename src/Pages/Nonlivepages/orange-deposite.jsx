import {Link} from 'react-router-dom'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { placebetActions } from '../../Redux/slices/BetSlice';
function Orangedeposite(){
    const [deposite_amount, setDeposite_amount] = useState(500);
    const dispatch = useDispatch();
    const isdeposited = () => {
      dispatch(placebetActions.accountdeposite(Number(deposite_amount)))
    }
    const isfilled = event => {
       setDeposite_amount(event.target.value);
    }
    return(
        <>
    <div className="card mb-2 px-3 py-2 d-flex flex-row align-items-center justify-content-between">
    <p className="fs-5 mt-2"><Link className='link' to="/account-deposite"><Icon icon="ic:round-arrow-back-ios" className='c-grey' /></Link></p>
    <p className="fs-13 mt-2 fw-4">Orange Mobile Money</p>
    <p></p>
  </div>
  <div className='card w-100 px-2 py-3'>
  <div className="text-center px-4 py-2">
        <img src="image/orange_logo.png" alt="orangelogo" className="h-25 w-25 rounde-2" />
        </div>
        <div className="d-block">
          <div className="mb-1">
            <label className="form-label fw-bold fs-12 margin-zero py-1">1XAF - 1 000 000XAF</label>
            <input 
              type="number"
              name="amount"
              className="form-control form-control-sm rounded-3 margin-zero py-1" 
              onChange={isfilled}
              value={deposite_amount}
              />
          </div>
          <div className="mb-1">
            <label className="form-label margin-zero fs-12 fw-4 py-1">E-mail</label>
            <input type="email" name="email" className="form-control form-control-sm rounded-3 margin-zero py-1" placeholder="example@mail.com" />
          </div>
          <div className="mb-1">
            <label className="form-label margin-zero fs-12 fw-4 py-1">Username</label>
            <input type="text" name="name" className="form-control form-control-sm rounded-3 margin-zero py-1" placeholder="strato user" />
          </div>
        </div>
      <div className="text-center my-3">
        <button className="border-none button-color text-white rounded-5 w-3 fs-6 fw-3 py-2 w-100" onClick={isdeposited}>Make deposite</button>
      </div>
      </div>
      
        </>
    )
}
export default Orangedeposite;