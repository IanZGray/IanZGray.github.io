import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import plantHere from '../../images/plantHereImage.jpg';
import badBank from '../../images/badBanking.jpg';
import portfolioApp from '../../images/portfolioApp.jpg';

import mobilePlant from '../../images/mobilePlant.jpg';
import mobileBank from '../../images/bankmobile.png';
import mobilePort from '../../images/mobilePort.jpg';

import '../../App.css';

import './projects.css';
    
function Projects() {
    
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const awsParagraph = `Using machine learning, we parsed large data sets of soil composition and rainfall history to composite an app that can locate the optimal land for planting based on crop data. `
    const badBankParagraph = `A full-stack banking application that allows a user to create an account, log in, and deposit/withdraw money. The app utilizes JSON web tokens for authentication. Login status saved in local storage.`
    // const fireWatchParagraph = `Using NCOO api, this app can inform users of the potential risks of upcoming forest fires by comparing consecutive days with little or no rain, and temperature.`
    const fireWatchParagraph = `This mobile-first website uses breakpoints to switch between designs and display sizes.`
  return (
    <Container fluid className="pages featured" id="projects">
        <div className="featured-view">
        <h1 className="mobile-big-header">Featured Projects</h1>
        <h1 className="big-header reveal">Featured Projects</h1>

        <Carousel id="mobile-caro" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item id="mobile-view">
            <div className="fog"></div>
            <img src={mobilePlant} alt="Plant Here"  className="mobile-pics"/>
                <Carousel.Caption>
                    <h1 className="mobile-header">Plant Here </h1>
                    <h2 className="mobile-sub-header">AWS Sustainability Project</h2>
                    <a href="https://effervescent-banoffee-aed9b2.netlify.app/" target="_blank" rel="noreferrer" className="mobile-project-buttons" alt="link to plant here implementation">View</a>
                    <p className='mobile-p'>{awsParagraph}</p>
                    <p className="mobile-languages">React.js, Node.js, npm, JavaScript, CSS, HTML</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className="fog"></div>
            <img src={mobileBank} alt="Bad Bank"  className="mobile-pics"/>

                <Carousel.Caption>
                    <h1 className="mobile-header">Bad Bank</h1>
                    <h2 className="mobile-sub-header">Full Stack Bank Project MIT</h2>
                    <a href="https://ian-grayfullstackbankingapplication.s3.amazonaws.com/index.html" target="_blank" rel="noreferrer" className="mobile-project-buttons" alt="link to banking app implementation">View</a>
                    {/* <br></br> */}
                    {/* <a href="https://GitHub.com/IanZGray/Bad-Bank" target="_blank" rel="noreferrer" className="mobile-project-buttons" alt="link to banking app github">GitHub</a> */}
                    <p className='mobile-p'>{badBankParagraph}</p>
                    <p className="mobile-languages">React.js, Node.js, Express.js, Mongo DB, Mongooese, Mongo Atlas, npm, Bootstrap, JWT, Bcrypt, JavaScript, CSS, HTML</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className="fog"></div>
            <img src={mobilePort} alt="This Portfolio"  className="mobile-pics"/>

                <Carousel.Caption>
                    <h1 className="mobile-header">this.website</h1>
                    <h2 className="mobile-sub-header">My Development Portfolio</h2>
                    <a href="https://GitHub.com/IanZGray/ianzgray.GitHub.io" target="_blank" rel="noreferrer" className="mobile-project-buttons" alt="link to this portfolio's github">GitHub</a>
                    <p className='mobile-p'>{fireWatchParagraph}</p>
                    <p className="mobile-languages">React.js, Node.js, Yarn, Bootstrap, JavaScript, CSS, HTML</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
                    {/* <div id="mobile-view">
                        <Col className='mobile-pic-border-aws'>
                            <div className="fog"></div>
                            <h1 className="mobile-header">Plant Here</h1>
                            <h2 className="mobile-sub-header">AWS Sustainability Project</h2>
                            <a href="https://effervescent-banoffee-aed9b2.netlify.app/" target="_blank" rel="noreferrer" className="mobile-project-buttons" alt="link to design page">View</a>
                            <p className='mobile-p'>{awsParagraph}</p>
                            <p className="mobile-languages">React.js, Node.js, npm, JavaScript, CSS, HTML</p>
                        </Col>
                    </div> */}
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
                    <div id="desktop-view" className="reveal projects-fade-right">
                        <Col className="yellow-box" xs={{span: 7, offset: 4}}>
                            <Col xs={{span: 5}}>
                                <img src={plantHere} alt="AWS Sustainability Project"  className="pics"/>
                            </Col>
                            <Col xs={{span: 7 }} className='bio'>
                                <h1 className="header right">Plant Here</h1>
                                <h2 className="sub-header right">AWS Sustainability Project</h2>
                                <p>{awsParagraph}</p>
                                <p className="languages">React.js, Node.js, npm, Bootstrap, JavaScript, CSS, HTML</p>
                                <a href="https://effervescent-banoffee-aed9b2.netlify.app/" target="_blank" rel="noreferrer"><button className="project-buttons clicks" alt="link to design page">View</button></a>
                            </Col>
                        </Col>
                    </div>
                </Row>

                    {/* <div id="mobile-view">
                        <Col className='mobile-pic-border-bank'>
                            <div className="fog"></div>
                            <h1 className="mobile-header">Bad Bank</h1>
                            <h2 className="mobile-sub-header">Front-Facing Bank Project</h2>
                            <a href="https://ian-graybankingapplication.s3.amazonaws.com/index.html" target="_blank" rel="noreferrer"><button className="mobile-project-buttons" alt="link to design page">View</button></a>
                            <a href="https://GitHub.com/IanZGray/Bad-Bank" target="_blank" rel="noreferrer" className="mobile-project-buttons" alt="link to design page">GitHub</a>
                            <p className='mobile-p'>{badBankParagraph}</p>
                            <p className="mobile-languages">React.js, Node.js, npm, Bootstrap, JavaScript, CSS, HTML</p>
                        </Col>
                    </div> */}
                    <Row className="project-rows">
                    <div id="tablet-view">
                        <Col className="yellow-box" xs={{span: 7, offset: 1}}>
                            <Col xs={{span: 7 }} className='bio'>
                            <h1 className="header left">Bad Bank</h1>
                            <h2 className="sub-header left">Front-Facing Bank Project</h2>
                            <p>{badBankParagraph}</p>
                            <p className="languages">React.js, Node.js, Express.js, Mongo DB, Mongooese, Mongo Atlas, npm, Bootstrap, JWT, Bcrypt, JavaScript, CSS, HTML</p>
                            <a href="https://ian-grayfullstackbankingapplication.s3.amazonaws.com/index.html" target="_blank" rel="noreferrer"><button className="project-buttons" alt="link to design page">View</button></a>
                            {/* <a href="https://GitHub.com/IanZGray/Bad-Bank" target="_blank" rel="noreferrer"><button className="project-buttons" alt="link to design page">GitHub</button></a>                             */}
                            </Col>
                            <Col xs={{span: 5}}>
                                <img src={mobileBank} alt="Bad Bank"  className="pics"/>
                            </Col>
                        </Col>
                    </div>
                    <div id="desktop-view" className="reveal projects-fade-left">
                        <Col className="yellow-box" xs={{span: 7, offset: 1}}>
                            <Col xs={{span: 7 }} className='bio'>
                            <h1 className="header left">Bad Bank</h1>
                            <h2 className="sub-header left">Front-Facing Bank Project</h2>
                            <p>{badBankParagraph}</p>
                            <p className="languages">React.js, Node.js, Express.js, Mongo DB, Mongooese, Mongo Atlas, npm, Bootstrap, JWT, Bcrypt, JavaScript, CSS, HTML</p>
                            <a href="https://ian-grayfullstackbankingapplication.s3.amazonaws.com/index.html" target="_blank" rel="noreferrer"><button className="project-buttons clicks" alt="link to design page">View</button></a>
                            {/* <a href="https://GitHub.com/IanZGray/Bad-Bank" target="_blank" rel="noreferrer"><button className="project-buttons clicks" alt="link to design page">GitHub</button></a>                             */}
                            </Col>
                            <Col xs={{span: 5}}>
                                <img src={badBank} alt="Bad Bank"  className="pics"/>
                            </Col>
                        </Col>
                    </div>
                </Row>

                    {/* <div id="mobile-view">
                        <Col className='mobile-pic-border-this'>
                            <div className="fog"></div>
                            <h1 className="mobile-header">this.website</h1>
                            <h2 className="mobile-sub-header">My Development Portfolio</h2>
                            <a href="https://GitHub.com/IanZGray/ianzgray.GitHub.io" target="_blank" rel="noreferrer" className="mobile-project-buttons" alt="link to design page">GitHub</a>
                            <p className='mobile-p'>{fireWatchParagraph}</p>
                            <p className="mobile-languages">React.js, Node.js, Yarn, Bootstrap, JavaScript, CSS, HTML</p>
                        </Col>
                    </div> */}
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
                    <div id="desktop-view" className="reveal projects-fade-right">
                        <Col className="yellow-box" xs={{span: 7, offset: 4}}>
                            <Col xs={{span: 5}}>
                                <img src={portfolioApp} alt="portfolio"  className="pics"/>
                            </Col>
                            <Col xs={{span: 7 }} className='bio'>
                                <h1 className="header right">this.website</h1>
                                <h2 className="sub-header right">My Development Portfolio</h2>
                                <p>{fireWatchParagraph}</p>
                                <p className="languages">React.js, Node.js, Yarn, Bootstrap, JavaScript, CSS, HTML</p>
                                <a href="https://GitHub.com/IanZGray/ianzgray.GitHub.io" target="_blank" rel="noreferrer"><button className="project-buttons clicks" alt="link to design page">GitHub</button></a>
                            </Col>
                        </Col>
                    </div>
                </Row>
        </div>
    </Container>
  )
}

export default Projects