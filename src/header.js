import Ghirigoro from './disegno';
import Ghirigoro2 from './disegno2';

function Header() {
  return (
    <header className="App-header">
      <div class="d-flex justify-content-space-around wrap width-100" style={{ paddingleft: '100px' }}>
        <div>
          <Ghirigoro2 ></Ghirigoro2>
          <h3 className="SubHeaderTitle"><b>Ci sposiamo!</b></h3>
          <h1 className="myHeader"> Claudio e Elisa</h1>
          <Ghirigoro></Ghirigoro>
        </div>
        <div className="width-50 width-100 welcome-container">
          <div className="welcome-box">
        </div>
        </div>


      </div>
    </header>
  )
} export default Header;