import { Icon } from "@iconify/react";
function Customersupport()
{
  return(
    <>
    <div className="card border-none d-flex flex-row justify-content-between py-3 px-2">
      <span><Icon icon="ic:round-arrow-back-ios" className="icon-color" /></span>
      <span className="fw-4 text-color">Customer Support</span>
      <span></span>
    </div>
    <div className="mt-4 mb-1">
        <label htmlFor="userid" className="fs-6 fw-3 mx-2 text-color my-1">User ID</label>
        <input type="text" className="form-control shadow-sm" placeholder="user id goes here"/>
    </div>
    <div className="mt-2">
        <label htmlFor="Message" className="fs-6 fw-3 mx-2 text-color">Message</label>
        <textarea name="" className="form-control my-2 shadow-sm pb-5 rounded-2" placeholder="Write a Message"></textarea>
    </div>
    <div className="mt-3 d-flex justify-content-center px-1 ">
      <button className="btn btn-lg fs-12 button-color text-white w-100">Send Message</button>
    </div>
    </>
  )
}
export default Customersupport;