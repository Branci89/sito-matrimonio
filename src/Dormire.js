

function Dormire(){
    return(
        <>
        <div className="w3-row w3-margin">
            <div className="w3-container" style={{width:'70%', margin:'auto'}}>
                <p>Se venite da fuori, 
                qui potete trovare una lista di strutture dove poter soggiornare
                nei giorni prima/dopo il nostro matrimonio. Potete direttamente contattarle</p>
                <p>Se preferite invece passare dal più tradizionale booking.com, vi abbiamo lasciato i link alle 
                pagine di prenotazione. Grazie in anticipo per lo sforzo che farete per essere presenti!</p>
            </div>
           
        </div>
        
        <div className="w3-row" style={{width:'75%', margin:'auto'}}>
        <hr></hr>
        <div className="w3-card-2" style={{display:'flex', alignItems:'center', borderRadius:'4px', textAlign:'justify'}}>
                <div className="w3-third">
                 <p><strong>Borgo Castel Savelli</strong></p>
                 <p>Via Sentiero del bosco 6,<br></br>00046 Grottaferrata, Roma</p>
                 </div>
                <div className="w3-twothird w3-padding">
                <p>Si trova a 500mt in linea d'aria rispetto alla location del ricevimento. 
                <br></br>Residence con mini appartamenti con cucinino. Tipi di stanze: Doppia, tripla, quadrupla</p>
                <div>
                    <span>Telefono: </span><strong>06 9431 6081</strong>
                </div>
                <p>Oppure <strong><a href="https://www.trivago.it/?aDateRange%5Barr%5D=2021-09-16&aDateRange%5Bdep%5D=2021-09-18&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=1643895%2F100&hasList=1&hasMap=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=20000&address=&addressGeoCode=&offset=0&ra=&overlayMode=" target="newtab">
                 cercalo su trivago!</a></strong></p>
                </div>
            </div>
            <hr></hr>
            <div className="w3-card-2" style={{display:'flex', alignItems:'center', borderRadius:'4px'}}>
                <div className="w3-third">
                 <p><strong>B&B Il Casaletto</strong></p>
                 <p>Via Monte Compatri 33<br></br>00078 Monte Porzio Catone, Roma</p>
                 </div>
                <div className="w3-twothird w3-padding">
                <p>Piccolo B&B con un paio di camere a disposizione. Tipi di stanze: Doppia, tripla.</p>
                <div>
                    <span>Telefono: </span><strong>349 592 9060</strong>
                </div>
                <p>Oppure <strong><a href="https://www.booking.com/hotel/it/b-amp-b-il-casaletto.it.html"> prenota su Booking.com</a></strong></p>
                </div>
            </div>
        </div>
        </>

    )
} export default Dormire