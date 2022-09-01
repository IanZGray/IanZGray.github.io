import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import './work.css';

import books from '../../images/amazonpage.png';
import design from '../../images/uIPic.jpg';
import git from '../../images/githubSC.png';

function work() {
  return (

    <>
    <Container className='pages'>
    <h1 className='big-header'>Work</h1>
    <Row>
        <Col className='side-box' xs={{span: 4}}>
            <h1 className='work-header'>Gray Design</h1>
            <h3 className='work-sub-header'>Branding & Web Design</h3>
            <p className='work-p'>My small design business where you can find examples of my work in the artistic side of web development.</p>
            <a href="https://www.designwithgray.com/" target="_blank" rel="noreferrer"><button className="work-button" alt="link to design page">+ More</button></a>
            <img src={design} alt="AWS Sustainability Project"  className="work-pics"/>
        </Col>
        <Col className='middle-box' xs={{span: 4}}>
            <h1 className='work-header'>Github</h1>
            <h3 className='work-sub-header'>All Currently Listed Repos</h3>
            <p className='work-p'>If you view examples of my code here, we can talk about it!</p>
            <a href="https://github.com/IanZGray" target="_blank" rel="noreferrer"><button className="work-button" alt="link to github">+ More</button></a>
            <img src={git} alt="AWS Sustainability Project"  className="work-pics"/>
        </Col>
        <Col className='side-box' xs={{span: 4}}>
            <div className='cont'>
            <h1 className='work-header'>Books</h1>
            <h3 className='work-sub-header'>Fiction & Non-Fiction</h3>
            <p className='work-p'>Conveying information to others; whether through visuals, story, or under the hood code, is important to me. Browse my small library of works.</p>
            <a href="https://www.amazon.com/~/e/B09NZ7DCS4" target="_blank" rel="noreferrer"><button className="work-button" alt="link to books">+ More</button></a>
            <img src={books} alt="AWS Sustainability Project"  className="work-pics"/>
            </div>
        </Col>
    </Row>


    </Container>
    </>

  )
}

export default work