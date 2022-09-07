import logo from '../../images/logoUpdateDark.png';
import './navi.css';

function Navi() {
  return (
    <nav style={{zIndex:1}} className="navbar navbar-dark pos-f-t top-0 start-0 end-0 navbar-expand-md">
      <a className="navbar-brand meautobrand" href="/" alt="logo">
        <img 
          alt="logo"
          src={logo}
          width="70vw"
          className="d-inline-block"
          />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <a className="link-font" href="#">Home</a>
          <a className="link-font" href="#projects">Featured Projects</a>
          <a className="link-font" href="#work">Work</a>
          <a className="link-font" href="#contact">Contact</a>
        </ul>
      </div>
      <p className="navbar-nav endTag start-70 end-0" id="name-corner">Ian Gray</p>
    </nav>

  );
}

export default Navi;