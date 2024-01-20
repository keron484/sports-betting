import {Icon} from '@iconify/react';
function AviatorGame(){
    return(
        <>
        <nav class="navbar navbar-expand-lg justify-content-between align-items-center px-2 bg-light">
            <div>
                <h1 className='fs-3  fw-bold'>STRATOBET</h1>
            </div>
            <div>
                <h1 className='fs-3  fw-bold'>Aviator</h1>
            </div>
            <div className='d-flex flex-row align-items-center mx-2'>
                 <button className='balance ls-1 fw-4'>1000000000 F</button>
            </div>
         </nav>
         <div className="container">
            <div className="row">
                <di className="col-lg-4">

                </di>
                <div className="col-lg-8 border">
                     <h1>This is the graph area</h1>
                </div>
            </div>
         </div>
        </>
    )
}
export default AviatorGame;