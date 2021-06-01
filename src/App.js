import './App.css';
import {
  BrowserRouter ,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home'
import Dormire from './Dormire';
import Nav from './Nav';
import Ghirigoro from './disegno';
import Ghirigoro2 from './disegno2';



function App() {

  return (
    <div >
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <header className="App-header">
        <Ghirigoro2></Ghirigoro2>
        <h3>Ci sposiamo!</h3> 
        <h1 className="myHeader"> Elisa & Claudio</h1>
        <Ghirigoro></Ghirigoro>
      </header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Conferma" component="Conferma"></Route>
          <Route exact path="/Dormire" component={Dormire}></Route>
          <Route exact path="/Regalo" component="Regalo"></Route>
          <Route exact path="/Contatti" component="Contatti"></Route>
        </Switch>
      </div>
      
    </BrowserRouter>
    
    </div>
  );
}

export default App;
