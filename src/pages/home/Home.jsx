import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';

import './home.css';
import '../../App.css';
// import profPic from '../../images/ProfilePic.jpg';

function Home() {
  return (
    <Container fluid className="pages">
                <Row className="first-row">
                    {/* <Col>
                        <Image src={profPic} fluid roundedCircle className="profilePic"/>
                    </Col>
                    <Col xs={9} className='bio-bubble'>
                        <h1 className="titles">I am Ian Gray</h1>
                        <h1 className="sub-title">And I'm a Web Developer</h1>
                    </Col> */}
                    <Col xs={{span:5, offset: 5}} className='bio-bubble'>
                        <h1 className="titles">Ian<br/>Gray</h1>
                        <h1 className="sub-title">Web Developer</h1>
                    </Col>
                </Row>
                <Row className="second-row">
                    {/* <h1 > second row</h1> */}
                </Row>

    </Container>
  )
}

export default Home