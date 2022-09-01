// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

import './navi.css';

function Navi() {
  return (
    <nav style={{zIndex:1}} className="navbar navbar-light pos-f-t position-fixed top-0 start-0 end-0 navbar-expand-md">
      <a className="navbar-brand meautobrand" href="/">Ian Gray</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <Link className="meauto" to="/">Home</Link>
          <Link className="meauto" to="projects">Featured Projects</Link>
          <Link className="meauto" to="work">Work</Link>
          <Link className="meauto" to="about">About Me</Link>
          <Link className="meauto" to="contact">Contact</Link>
        </ul>
        <p className="navbar-nav endTag position-fixed start-70 end-0">Ian Gray</p>
      </div>
    </nav>

  );
}

export default Navi;