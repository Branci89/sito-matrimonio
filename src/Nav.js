import {Link } from 'react-router-dom';
import HambIcon from './img/hamburgerIcon.png'
function Nav(){
    const myFunction = ()=> {
        var x = document.getElementById("demo");
        if (x.className.indexOf("w3-show") === -1) {
          x.className += " w3-show";
        } else { 
          x.className = x.className.replace(" w3-show", "");
        }
      }
    return(
        <>
          <nav className="w3-bar">
          <Link className="w3-bar-item w3-button w3-hide-small" to="/">Home</Link>
          <Link className="w3-bar-item w3-button w3-hide-small" to="/Conferma">Conferma Presenza</Link>
          <Link className="w3-bar-item w3-button w3-hide-small" to="/Dormire">Dove Dormire</Link>
          <Link className="w3-bar-item w3-button w3-hide-small" to="/Regalo">Regalo di Nozze</Link>
          <Link className="w3-bar-item w3-button w3-hide-small" to="/Contatti">Contatti</Link>
          <div className="w3-hide-large w3-hide-medium">
                  <button className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={myFunction}>
                  <span><img alt="ham-menu" style={{width:'24px'}} src={HambIcon}></img></span></button>
          </div>
        </nav>
        <div id="demo" className='w3-bar-block w3-hide w3-hide-large w3-hide-medium'>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/Conferma">Conferma Presenza</Link></div>
                <div><Link to="/Dormire">Dove Dormire</Link></div>
                <div><Link to="/Regalo">Regalo di Nozze</Link></div>
                <div><Link to="/Contatti">Contatti</Link></div>
            </div>
        </>
    )
} export default Nav