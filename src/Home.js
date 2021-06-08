import {Link } from 'react-router-dom';
import Header from './header'

function Home() {
    return(
        <>
      <Header></Header> 
      <div className="container">
      <section className="w3-row"  >


        <div className="w3-content  d-flex wrap f-column align-items-center justify-content-center">
          

        <h2 className="pt-1">Benvenuto!</h2>
          <p>È proprio vero, nonostante il periodo, ci sposiamo! Ce la stiamo mettendo tutta per organizzare questo matrimonio e vogliamo renderlo un giorno <b>divertente e piacevole per tutti</b>. Per questo qui sotto troverai sempre gli <b>ultimi aggiornamenti</b> per sapere come muoverti e cosa fare.
          Nelle varie sezioni del sito invece, abbiamo raccolto altre informazioni che speriamo possano esserti utili.</p>
          

          <div className="divider"></div>

          <h2>Ultimi aggiornamenti COVID</h2>
          <div></div>
          <div className="back-green"><span><b>~ 07/06/2021 ~</b></span></div>
          
          <p>Dal 15 Giugno è prevista la ripartenza dei matrimoni. NON ci saranno limiti di invitati,  ma saranno previsti distanziamenti e norme di sicurezza per tutelare tutti. 
          </p><p>
            Per partecipare al ricevimento ogni invitato dovrà <b>obbligatoriamente essere dotato di Green Pass: </b>
            Dovrete inviare a noi, pochi giorni prima, la <b>documentazione</b> che attesta che avete fatto il <b>vaccino</b> (almeno la prima dose, da 15 giorni), il <b>tampone</b> (rapido nelle 48 ore prima, il molecolare dovrebbe essere portato a 72 ore) o essere guariti da massimo 15 giorni dal COVID. 
            
           <b> Sono esclusi da questi obblghi solo i bambini al di sotto dei 2 anni  </b>
          </p>
          </div>






        </section>
        </div>
        </>
    )
} export default Home;