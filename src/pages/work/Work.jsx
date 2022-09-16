import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import './work.css';

import books from '../../images/amazonpage.png';
import design from '../../images/uIPic.jpg';
import git from '../../images/githubSC.png';

function work() {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

  return (

    <>
    <Container className='work-page' id="work">
    <h1 className='work-big-header reveal'>Work</h1>
    <div id="mobile-view">

              <h1 className='work-header'>Gray Design</h1>
              <h3 className='work-sub-header'>Branding & Web Design</h3>
              <p className='work-p'>My small design business where you can find examples of my work in the UI branch of web development.</p>
              <img src={design} alt="Gray Design"  className="work-pics"/>
              <a href="https://www.designwithgray.com/" target="_blank" rel="noreferrer"><button className="work-button" alt="link to design page">+ More</button></a>

                {/* <div className='line'></div> */}

              <h1 className='work-header'>Github</h1>
              <h3 className='work-sub-header'>All Currently Listed Repos</h3>
              <p className='work-p'>If you view examples of my code here, we can talk about it!</p>
              <img src={git} alt="GitHub"  className="work-pics"/>
              <a href="https://github.com/IanZGray" target="_blank" rel="noreferrer"><button className="work-button" alt="link to github">+ More</button></a>
              
              {/* <div className='line'></div> */}

              <div className='cont'>
              <h1 className='work-header'>Books</h1>
              <h3 className='work-sub-header'>Fiction & Non-Fiction</h3>
              <p className='work-p'>Conveying information to others; whether through visuals, story, or under the hood code, is important to me. Browse my small library of works.</p>
              <img src={books} alt="books"  className="work-pics"/>
              <a href="https://www.amazon.com/~/e/B09NZ7DCS4" target="_blank" rel="noreferrer"><button className="work-button" alt="link to books">+ More</button></a>
              </div>

              {/* <div className='line'></div> */}

    </div>
    <div id="work-tablet-view"> 
    
    <Row >
        <Col className='side-box work-reveal fade-left' >
            <h1 className='work-header'>Gray Design</h1>
            <h3 className='work-sub-header'>Branding & Web Design</h3>
            <p className='work-p'>My small design business where you can find examples of my work in the UI branch of web development.</p>
            <a href="https://www.designwithgray.com/" target="_blank" rel="noreferrer"><button className="work-button" alt="link to design page">+ More</button></a>
            <img src={design} alt="Gray Design"  className="work-pics"/>
        </Col>
        <Col className='middle-box work-reveal fade-bottom' xs={{span: 4}}>
            <h1 className='work-header'>Github</h1>
            <h3 className='work-sub-header'>All Currently Listed Repos</h3>
            <p className='work-p'>If you view examples of my code here, we can talk about it!</p>
            <a href="https://github.com/IanZGray" target="_blank" rel="noreferrer"><button className="work-button" alt="link to github">+ More</button></a>
            <img src={git} alt="GitHub"  className="work-pics"/>
        </Col>
        <Col className='side-box work-reveal fade-right' xs={{span: 4}}>
            <div className='cont'>
            <h1 className='work-header'>Books</h1>
            <h3 className='work-sub-header'>Fiction & Non-Fiction</h3>
            <p className='work-p'>Conveying information to others (whether through visuals, story, or under-the-hood code) is important to me. Browse my small library of works.</p>
            <a href="https://www.amazon.com/kindle-dbs/entity/author/B09NZ7DCS4?_encoding=UTF8&node=283155&offset=0&pageSize=12&searchAlias=stripbooks&sort=author-sidecar-rank&page=1&langFilter=default" target="_blank" rel="noreferrer"><button className="work-button" alt="link to books">+ More</button></a>
            <img src={books} alt="Books"  className="work-pics"/>
            </div>
        </Col>
    </Row>

    </div>



    </Container>
    </>

  )
}

export default work