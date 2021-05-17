import './App.css';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home'


function App() {

  const myFunction = ()=> {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") === -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }


  return (
    <BrowserRouter>
      <div className="App">
      <nav className="w3-bar" style={{width:'100%', display:'flex', justifyContent:'space-evenly', marginBottom:'30px', fontSize:'13px',padding: '10px'}}>
          <Link className="w3-bar-item w3-button w3-hide-small">Home</Link>
          <Link className="w3-bar-item w3-button w3-hide-small">Conferma Presenza</Link>
          <Link className="w3-bar-item w3-button w3-hide-small">Dove Dormire</Link>
          <Link className="w3-bar-item w3-button w3-hide-small">Regalo di Nozze</Link>
          <Link className="w3-bar-item w3-button w3-hide-small">Contatti</Link>
          <div className="w3-hide-large w3-hide-medium">
                  <button className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={myFunction}>
                  <span><img alt="ham-menu" style={{width:'24px'}} src=''></img></span></button>
          </div>
        </nav>
        <div id="demo" className='w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium'>
                <div><Link >Home</Link></div>
                <div><Link to="#">Conferma Presenza</Link></div>
                <div><Link to="#">Dove Dormire</Link></div>
                <div><Link ></Link>Regalo di Nozze</div>
                <div><Link ></Link>Contatti</div>
            </div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Conferma" component="Conferma"></Route>
          <Route exact path="/Dormire" component="Dormire"></Route>
          <Route exact path="/Regalo" component="Regalo"></Route>
          <Route exact path="/Contatti" component="Contatti"></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
