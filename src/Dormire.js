import React  from 'react';


function Dormire() {
    return (
            <div className="container">
                <h2 className="pt-1">Dove dormire</h2>

                <div className="d-flex wrap justify-content-center">
                    <div class="casa-img width-50 width-100">

                    </div>
                    <div>
                        <p>Se venite da fuori,
                        qui potete trovare una <b>lista di strutture</b> dove poter soggiornare
                nei giorni prima/dopo il nostro matrimonio. Potete contattarle direttamente, vi lasciamo i recapiti.</p>
                        <p>Se preferite invece prenotare direttamente online, troverete anche i link alle
                pagine di prenotazione. Grazie in anticipo per lo sforzo che farete per essere presenti!</p>
                    </div>
                </div>



                <div className="divider"></div>
                <div className="w3-card-2 w3-row d-flex wrap" style={{ alignItems: 'center', borderRadius: '4px' }}>
                    <div className="w3-third">
                        <h3>Borgo Castel Savelli</h3>
                        <p>Via Sentiero del bosco 6,<br></br>00046 Grottaferrata, Roma</p>
                    </div>
                    <div className="w3-twothird w3-padding border-green" style={{ textAlign: 'justify' }}>
                        <p><strong>Vicino alla location del ricevimento.</strong> Residence con mini appartamenti con cucinino. Tipi di stanze: Doppia, tripla, quadrupla.</p>
                         <p>Telefono:<strong>06 9431 6081</strong></p>

                        <p>Oppure <strong><a href="https://www.booking.com/hotel/it/borgo-castel-savelli.it.html" target="newtab">
                            prenota su Booking.com</a></strong></p>
                    </div>
                </div>
                <hr></hr>
                <div className="w3-card-2  d-flex wrap" style={{ alignItems: 'center', borderRadius: '4px' }}>
                    <div className="w3-third">
                        <h3>B&b La dolce casetta</h3>
                        <p>Via Anagnina 31<br></br>00046 Grottaferrata, Roma</p>
                    </div>
                    <div className="w3-twothird w3-padding border-green" style={{ textAlign: 'justify' }}>
                        <p> <strong>Vicino alla location del ricevimento</strong>. Sono due casette indipendenti immerse nel verde, ognuna può ospitare dalle 2 alle 4 persone</p>
                            <p>Telefono: <strong>349 772 2382</strong></p>
                        <p>Oppure <strong><a href="https://www.booking.com/hotel/it/la-dolce-casetta.it.html"> prenota su Booking.com</a></strong></p>
                    </div>
                </div>
                <hr></hr>
                <div className="w3-card-2  d-flex wrap" style={{alignItems: 'center', borderRadius: '4px' }}>
                    <div className="w3-third">
                        <h3>B&B Il Casaletto</h3>
                        <p>Via Monte Compatri 33<br></br>00078 Monte Porzio Catone, Roma</p>
                    </div>
                    <div className="w3-twothird w3-padding border-green" style={{ textAlign: 'justify' }}>
                        <p>Piccolo B&B con un paio di camere a disposizione, a Monte Porzio Catone , dove si svolge la cerimonia. Tipi di stanze: Doppia, tripla.</p>
                            <p>Telefono: <strong>349 592 9060</strong></p>
                        <p>Oppure <strong><a href="https://www.booking.com/hotel/it/b-amp-b-il-casaletto.it.html"> prenota su Booking.com</a></strong></p>
                    </div>
                </div>
            </div>
    )
} export default Dormire