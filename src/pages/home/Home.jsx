import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './home.css';
import '../../App.css';
import ResumeButton from '../../components/resumeButton/ResumeButton';

function Home() {
    var offsetStart = 0;
    var offsetEnd = 0;

    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll', ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
    }, false);
  return (
    <div id="backround-home-color">
    <div className='a-line slide-out'></div>
        <Container fluid className="home-page front-card slide-down" id="home">
        
            <Row className="first-row">
                {/* <Col xs={{span: 5}}>
                    <ResumeButton/>
                </Col> */}
                <Col xs={{span:5, offset:5}} className='bio-bubble'>
                    <h1 className="titles">Ian<br/>Gray</h1>
                    <h1 className="sub-title">Web Developer</h1>
                </Col>
            </Row>

        </Container>
        

    </div>

  )
}

export default Home