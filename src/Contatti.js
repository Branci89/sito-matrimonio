import React  from 'react';

function Contatti(){
    return(
        <div className="container">
            <div className="d-flex width-100 ">
        <div className="border-dotted mt-1 mb-1 width-50">
                <h2>Lo sposo</h2>
                <p><b>Claudio</b><br></br>+39 389 114 3516</p>
                </div>

                <div style={{width:'20px'}}></div>

                <div className="border-dotted mt-1 mb-1 width-50">
                <h2>Lo sposa</h2>
                <p><b>Elisa</b><br></br>+39 348 64 57 887</p>
                </div>
                </div>

                <div className="divider"></div>

                <h2>I nostri fornitori</h2>
                <p>Se volete farci una sorpresa, vi lasciamo i contatti dei fornitori a cui ci siamo affidati per il matrimonio. Grazie in anticipo per il pensiero </p>

                <div className="d-flex width-100 ">
        <div className="border-dotted mt-1 mb-1" style={{flexGrow:'1'}}>
                <h2>Il Casale del ricevimento</h2>
                <p><b>Casale La Torretta</b><br></br>
                Manuela - 347 482 4884<br></br>
                Innocenzo - 389 435 4358</p>
                </div>

                <div style={{width:'20px'}}></div>

                <div className="border-dotted mt-1 mb-1" style={{flexGrow:'1'}}>
                <h2>Il coro della Chiesa</h2>
                <p><b>Tiziana - Mamma della sposa</b><br></br>328 41 53 660</p>
                </div>

                <div style={{width:'20px'}}></div>

                <div className="border-dotted mt-1 mb-1" style={{flexGrow:'1'}}>
                <h2>La band del ricevimento</h2>
                <p><b>Starlight Eventi</b><br></br></p>
                <p>Evelyn - 351 811 2267</p>
                </div>
                </div>



                </div>
    )
} export default Contatti;