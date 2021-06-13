import './App.css';
import React  from 'react';

import {
  BrowserRouter ,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home'
import Dormire from './Dormire';
import Conferma from './Conferma'
import Regalo from './Regalo'
import Contatti from './Contatti'
import Nav from './Nav';

function App() {
  

  return (
    <div >
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Conferma" component={Conferma}></Route>
          <Route exact path="/Dormire" component={Dormire}></Route>
          <Route exact path="/Regalo" component={Regalo}></Route>
          <Route exact path="/Contatti" component={Contatti}></Route>
        </Switch>
      </div>
      
    </BrowserRouter>
    
    </div>
  );
}

export default App;
