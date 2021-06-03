import Ghirigoro from './disegno';
import Ghirigoro2 from './disegno2';

function Header(){
    return(
        <header className="App-header">
        <Ghirigoro2></Ghirigoro2>
        <h3>Ci sposiamo!</h3> 
        <h1 className="myHeader"> Elisa & Claudio</h1>
        <Ghirigoro></Ghirigoro>
      </header>
    )
} export default Header;