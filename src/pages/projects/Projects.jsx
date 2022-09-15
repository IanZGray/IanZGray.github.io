import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import plantHere from '../../images/plantHereImage.jpg';
import badBank from '../../images/badBanking.jpg';
import portfolioApp from '../../images/portfolioApp.jpg';

import mobilePlant from '../../images/mobilePlant.jpg';
import mobileBank from '../../images/bankmobile.png';
import mobilePort from '../../images/mobilePort.jpg';

import '../../App.css';

import './projects.css';

function Projects() {
    
    const awsParagraph = `Using machine learning, we parsed large data sets of soil composition and rainfall history to composite an app that can locate the optimal land for planting based on crop data. `
    const badBankParagraph = `An implementation of custom hooks in React.js that allows a user to create an account, log in, and deposit/withdraw money.`
    // const fireWatchParagraph = `Using NCOO api, this app can inform users of the potential risks of upcoming forest fires by comparing consecutive days with little or no rain, and temperature.`
    const fireWatchParagraph = `This mobile-first website uses breakpoints to switch between designs and display sizes.`
  return (
    <Container fluid className="pages featured" id="projects">
        <h1 className="big-header">Featured Projects</h1>

                    <div id="mobile-view">

                            <h1 className="header right">Plant Here</h1>
                            <h2 className="sub-header right">AWS Sustainability Project</h2>
                            <div className='pic-border'>
                            <img src={mobilePlant} alt="AWS Sustainability Project"  className="pics"/>
                            </div>
                            <p>{awsParagraph}</p>
                            <p className="languages">React.js, Node.js, npm, JavaScript, CSS, HTML</p>
                            <a href="https://effervescent-banoffee-aed9b2.netlify.app/" target="_blank" rel="noreferrer"><button className="project-buttons" alt="link to design page">View</button></a>
                            <div className='line'></div>

                    </div>
                    <Row className="project-rows">
                    <div id="tablet-view">
                        <Col className="yellow-box" xs={{span: 7, offset: 4}}>
                            <Col xs={{span: 5}}>
                                <img src={mobilePlant} alt="AWS Sustainability Project"  className="pics"/>
                            </Col>
                            <Col xs={{span: 7 }} className='bio'>
                                <h1 className="header right">Plant Here</h1>
                                <h2 className="sub-header right">AWS Sustainability Project</h2>
                                <p>{awsParagraph}</p>
                                <p className="languages">React.js, Node.js, npm, Bootstrap, JavaScript, CSS, HTML</p>
                                <a href="https://effervescent-banoffee-aed9b2.netlify.app/" target="_blank" rel="noreferrer"><button className="project-buttons" alt="link to design page">View</button></a>
                            </Col>
                        </Col>
                    </div>
                    <div id="desktop-view">
                        <Col className="yellow-box" xs={{span: 7, offset: 4}}>
                            <Col xs={{span: 5}}>
                                <img src={plantHere} alt="AWS Sustainability Project"  className="pics"/>
                            </Col>
                            <Col xs={{span: 7 }} className='bio'>
                                <h1 className="header right">Plant Here</h1>
                                <h2 className="sub-header right">AWS Sustainability Project</h2>
                                <p>{awsParagraph}</p>
                                <p className="languages">React.js, Node.js, npm, Bootstrap, JavaScript, CSS, HTML</p>
                                <a href="https://effervescent-banoffee-aed9b2.netlify.app/" target="_blank" rel="noreferrer"><button className="project-buttons" alt="link to design page">View</button></a>
                            </Col>
                        </Col>
                    </div>
                </Row>

                    <div id="mobile-view">

                            <h1 className="header left">Bad Bank</h1>
                            <h2 className="sub-header left">Front-Facing Bank Project</h2>
                            <div className='pic-border'>
                            <img src={mobileBank} alt="Bad Bank"  className="pics"/>
                            </div>
                            <p>{badBankParagraph}</p>
                            <p className="languages">React.js, Node.js, npm, Bootstrap, JavaScript, CSS, HTML</p>
                            <a href="https://ian-graybankingapplication.s3.amazonaws.com/index.html" target="_blank" rel="noreferrer"><button className="project-buttons" alt="link to design page">View</button></a>
                            <a href="https://GitHub.com/IanZGray/Bad-Bank" target="_blank" rel="noreferrer"><button className="project-buttons" alt="link to design page">GitHub</button></a>
                            <div className='line'></div>

                    </div>
                    <Row className="project-rows">
                    <div id="tablet-view">
                        <Col className="yellow-box" xs={{span: 7, offset: 1}}>
                            <Col xs={{span: 7 }} className='bio'>
                            <h1 className="header left">Bad Bank</h1>
                            <h2 className="sub-header left">Front-Facing Bank Project</h2>
                            <p>{badBankParagraph}</p>
                            <p className="languages">React.js, Node.js, npm, Bootstrap, JavaScript, CSS, HTML</p>
                            <a href="https://ian-graybankingapplication.s3.amazonaws.com/index.html" target="_blank" rel="noreferrer"><button className="project-buttons" alt="link to design page">View</button></a>
                            <a href="https://GitHub.com/IanZGray/Bad-Bank" target="_blank" rel="noreferrer"><button className="project-buttons" alt="link to design page">GitHub</button></a>                            </Col>
                            <Col xs={{span: 5}}>
                                <img src={mobileBank} alt="Bad Bank"  className="pics"/>
                            </Col>
                        </Col>
                    </div>
                    <div id="desktop-view">
                        <Col className="yellow-box" xs={{span: 7, offset: 1}}>
                            <Col xs={{span: 7 }} className='bio'>
                            <h1 className="header left">Bad Bank</h1>
                            <h2 className="sub-header left">Front-Facing Bank Project</h2>
                            <p>{badBankParagraph}</p>
                            <p className="languages">React.js, Node.js, npm, Bootstrap, JavaScript, CSS, HTML</p>
                            <a href="https://ian-graybankingapplication.s3.amazonaws.com/index.html" target="_blank" rel="noreferrer"><button className="project-buttons" alt="link to design page">View</button></a>
                            <a href="https://GitHub.com/IanZGray/Bad-Bank" target="_blank" rel="noreferrer"><button className="project-buttons" alt="link to design page">GitHub</button></a>                            </Col>
                            <Col xs={{span: 5}}>
                                <img src={badBank} alt="Bad Bank"  className="pics"/>
                            </Col>
                        </Col>
                    </div>
                </Row>

                    <div id="mobile-view">

                            <h1 className="header right">this.website</h1>
                            <h2 className="sub-header right">My Development Portfolio</h2>
                            <div className='pic-border'>
                            <img src={mobilePort} alt="portfolio"  className="pics"/>
                            </div>
                            <p>{fireWatchParagraph}</p>
                            <p className="languages">React.js, Node.js, Yarn, Bootstrap, JavaScript, CSS, HTML</p>
                            <a href="https://GitHub.com/IanZGray/ianzgray.GitHub.io" target="_blank" rel="noreferrer"><button className="project-buttons" alt="link to design page">GitHub</button></a>
                            <div className='line'></div>

                    </div>
                    <Row className="project-rows">
                    <div id="tablet-view">
                        <Col className="yellow-box" xs={{span: 7, offset: 4}}>
                            <Col xs={{span: 5}}>
                                <img src={mobilePort} alt="portfolio"  className="pics"/>
                            </Col>
                            <Col xs={{span: 7 }} className='bio'>
                                <h1 className="header right">this.website</h1>
                                <h2 className="sub-header right">My Development Portfolio</h2>
                                <p>{fireWatchParagraph}</p>
                                <p className="languages">React.js, Node.js, Yarn, Bootstrap, JavaScript, CSS, HTML</p>
                                <a href="https://GitHub.com/IanZGray/ianzgray.GitHub.io" target="_blank" rel="noreferrer"><button className="project-buttons" alt="link to design page">GitHub</button></a>
                            </Col>
                        </Col>
                    </div>
                    <div id="desktop-view">
                        <Col className="yellow-box" xs={{span: 7, offset: 4}}>
                            <Col xs={{span: 5}}>
                                <img src={portfolioApp} alt="portfolio"  className="pics"/>
                            </Col>
                            <Col xs={{span: 7 }} className='bio'>
                                <h1 className="header right">this.website</h1>
                                <h2 className="sub-header right">My Development Portfolio</h2>
                                <p>{fireWatchParagraph}</p>
                                <p className="languages">React.js, Node.js, Yarn, Bootstrap, JavaScript, CSS, HTML</p>
                                <a href="https://GitHub.com/IanZGray/ianzgray.GitHub.io" target="_blank" rel="noreferrer"><button className="project-buttons" alt="link to design page">GitHub</button></a>
                            </Col>
                        </Col>
                    </div>
                </Row>
    </Container>
  )
}

export default Projects