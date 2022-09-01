import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import eye from '../../images/eye.jpg';
import pac from '../../images/pac.jpg';
import bus from '../../images/bus.jpg';



import '../../App.css';

import './projects.css';

function Projects() {
    
    const awsParagraph = `Using machine learning, we parsed large data sets of soil composition and rainfall history to composite an app that can locate the optimal land for planting based on crop data. `
    const badBankParagraph = `An implementation of custom hooks in React.js that allows a user to create an account, log in, and deposit/withdraw money.`
    const fireWatchParagraph = `Using NCOO api, this app can inform users of the potential risks of upcoming forest fires by comparing consecutive days with little or no rain, and temperature.`
  return (
    <Container fluid className="pages">
        <h1 className="big-header">Featured Projects</h1>
                <Row className="project-rows">
                    <Col className="yellow-box" xs={{span: 7, offset: 4}}>
                        <Col xs={{span: 5}}>
                            <img src={eye} alt="AWS Sustainability Project"  className="pics"/>
                        </Col>
                        <Col xs={{span: 7 }} className='bio'>
                            <h1 className="header right">Plant Here</h1>
                            <h2 className="sub-header right">AWS Sustainability Project</h2>
                            <p>{awsParagraph}</p>
                            <p className="languages">React.js, Node.js, JavaScript, CSS, HTML</p>
                            <button className="project-buttons"> Live Implementation </button> <button className="project-buttons"> Github Repository</button>
                        </Col>
                    </Col>
                </Row>
                <Row className="project-rows">
                    <Col className="yellow-box" xs={{span: 7, offset: 1}}>
                        <Col xs={{span: 7 }} className='bio'>
                        <h1 className="header left">Bad Bank</h1>
                        <h2 className="sub-header left">Front-Facing Bank Project</h2>
                        <p>{badBankParagraph}</p>
                        <p className="languages">React.js, Node.js, JavaScript, CSS, HTML</p>
                        <button className="project-buttons"> Live Implementation </button> <button className="project-buttons"> Github Repository</button>
                        </Col>
                        <Col xs={{span: 5}}>
                            <img src={pac} alt="Bad Bank"  className="pics"/>
                        </Col>
                    </Col>
                </Row>
                <Row className="project-rows">
                    <Col className="yellow-box" xs={{span: 7, offset: 4}}>
                        <Col xs={{span: 5}}>
                            <img src={bus} alt="Fire Watch"  className="pics"/>
                        </Col>
                        <Col xs={{span: 7 }} className='bio'>
                            <h1 className="header right">Fire Watch</h1>
                            <h2 className="sub-header right">Fire Prediction App</h2>
                            <p>{fireWatchParagraph}</p>
                            <button className="project-buttons"> Live Implementation </button> <button className="project-buttons"> Github Repository</button>
                        </Col>
                    </Col>
                </Row>
    </Container>
  )
}

export default Projects