import Ghirigoro from './disegno';
import Ghirigoro2 from './disegno2';

function Home() {
    return(
        <>
        <header className="App-header">
        <Ghirigoro2></Ghirigoro2>
        <h3>Ci sposiamo!</h3> 
        <h1 className="myHeader"> Elisa & Claudio</h1>
        <Ghirigoro></Ghirigoro>
      </header>
      <section className="w3-row"  >
        <div className="w3-content" style={{margin: 'auto', width:'50%'}}>
          <h1>Benvenuti!</h1>
          <p>È proprio vero, ci sposiamo!!!</p>
          <p> Siamo felicissimi!
          Non stiamo più nella pelle e vogliamo condividere con te questa notizia!
          Stiamo organizzando questo matrimonio e vogliamo che sia un giorno speciale per tutti.</p>
          <div><img src="https://i.postimg.cc/t44CLXCn/eucalipto-sito.png" alt="eucalipto-sito.png"></img></div>
          <p>
            In attesa del grande giorno, abbiamo creato questo sito, dove puoi trovare tutta una serie informazioni da condividere e i dettagli della nostra storia d'amore.</p>

          <p>È importante che tu sappia che nella sezione "conferma presenza" puoi confermare se vieni o no al matrimonio. 
          Dacci risposta il prima possibile per favore: ci renderai più facile l'organizzazione dei preparativi.</p>

          <p>Goditi il sito e ci vediamo presto! Un abbraccione!</p>
        </div>
        </section>
        </>
    )
} export default Home;