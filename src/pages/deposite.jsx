import {Icon} from '@iconify/react';
import {Link} from 'react-router-dom';
function Deposite()
{
    return(
        <>
<div>
  <div className="card mb-2 px-3 py-2 d-flex flex-row align-items-center justify-content-between">
    <p className="fs-5 mt-2"><Link className='link' to="/first-section"><Icon icon="ic:round-arrow-back-ios" className='c-grey' /></Link></p>
    <p className="fs-13 mt-2 fw-4">Account deposites</p>
    <p></p>
  </div>
  <div className>
    <div className="card p-2 bg-f9">
      <div className="container">
        <div className="col-lg-12">
          <div className="row">
            <p className="text-center my-2 fs-6 fw-3 text-color">Mobile Money Deposites</p>
            <div className="col-6">
            <Link className='link' to="/mtn-deposite">
              <div className="card bg-primary"  type="button">
                <div className>
                   <img src="image/mtn_logo.png" className='w-100 h-25' alt="mtn logo" />
                </div>
                <div className="card-title  bottom-1 rounded-3">
                  <p className="text-center bottom-2 fs-12 fw-4 c-white">MTN</p>
                </div>  
              </div>
            </Link>
            </div>
            <div className="col-6">
            <Link className='link' to="/orange-deposite">
              <div className="card bg-primary text-white" type="button" >
                <div className="image-area">
                  <img src="image/orange_logo.png" className='w-100 h-25' alt="orange logo"/>
                </div>
                <div className="card-title bottom-1 rounded-3">
                  <p className="text-center bottom-2 fs-12 fw-4 ">Orange</p>
                </div>  
              </div>                       
            </Link>
            </div>
          </div>

          {/* Iterate here */} 
        </div>
      </div>
    </div>
  </div>
</div>


{/* modial here */}


        </>
    );
}
export default Deposite;