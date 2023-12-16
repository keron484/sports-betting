function Userprofileitemone(props) 
{
   return(
    <>
     <p className="fw-3 mx-2 mt-3 mb-0 fs-6 icon-color" key={props.id}>{props.labletitle}</p>
      <div className="text-color d-flex flex-row justify-content-between card shadow-sm px-2 py-3 align-items-center my-2">
        <p className="fs-6 fw-3 margin-zero">{props.lableone}</p>
        <p className="fs-6 fw-3 margin-zero">{props.labletwo}</p>
      </div>
      <div className="text-color d-flex flex-row justify-content-between card shadow-sm px-2 py-3 align-items-center my-2">
        <p className="fs-6 fw-3 margin-zero">{props.lablethree}</p>
        <p className="fs-6 fw-3 margin-zero"><span>{props.lablefour}</span> </p>
      </div>
      <div className="text-color d-flex flex-row justify-content-between card shadow-sm px-2 py-3 align-items-center my-2">
        <p className="fs-6 fw-3 margin-zero">{props.lablefive}</p>
        <p className="fs-6 fw-3 margin-zero"><span>{props.lablesix}</span> </p>
      </div>
    </>
   );    
}

export default Userprofileitemone;