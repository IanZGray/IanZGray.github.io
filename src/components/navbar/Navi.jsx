// import logo from '../../images/logoUpdateDark.png';
import mobileLogo from '../../images/logoCoffee2.png';
import './navi.css';

import pdf from '../resumeButton/Ian_Gray_Resume_2022.pdf'


function Navi() {
  return (
    <nav style={{zIndex:10}} className="navbar navbar-light pos-f-t top-0 start-0 end-0 navbar-expand-md">
      {/* <a className="navbar-brand meautobrand" href="/" alt="logo">
                  <img 
          alt="logo"
          src={mobileLogo}
          width="70vw"
          className="d-inline-block"
          />
      </a> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand meautobrand" href="/" alt="logo">
                  <img 
          alt="logo"
          src={mobileLogo}
          width="70vw"
          className="d-inline-block"
          />
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <a className="link-font" href="#projects">Featured Projects</a>
          <a className="link-font" href="#work">Work</a>
          <a className="link-font" href="#contact">Contact</a>
          <a className="link-font" href={pdf} without rel='noopener noreferrer' target="_blank" >Resume</a>

        </ul>
      </div>

      {/* <p className="navbar-nav endTag start-70 end-0" id="name-corner">Ian Gray</p> */}
    </nav>

  );
}

export default Navi;