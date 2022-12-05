import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import plantHere from '../../images/plantHereImage.jpg';
import badBank from '../../images/badBanking.jpg';
import portfolioApp from '../../images/portfolioApp.jpg';
import swiftReader from '../../images/swiftReaderDesktop.jpg'

import mobilePlant from '../../images/mobilePlant.jpg';
import mobileBank from '../../images/bankMobile.jpg';
import mobilePort from '../../images/mobilePort.jpg';
import mobileSwift from '../../images/swiftReaderMobile.jpg'

import '../../App.css';

import './projects.css';
    
function Projects() {
    
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const bankLink = (e) => {
        e.preventDefault()
        window.open('https://ian-grayfullstackbankingapplication.s3.amazonaws.com/index.html')
      }
    const gitLink = (e) => {
        e.preventDefault()
        window.open('https://github.com/IanZGray/ianzgray.GitHub.io')
      }
    const swiftLink = (e) => {
        e.preventDefault()
        window.open('https://swiftreader-814f4.web.app/')
      }

    const bankMobileLink = (e) => {
        e.preventDefault()
        window.location = 'https://ian-grayfullstackbankingapplication.s3.amazonaws.com/index.html'
      }
    const gitMobileLink = (e) => {
        e.preventDefault()
        window.location = 'https://github.com/IanZGray/ianzgray.GitHub.io'
      }
    const SwiftMobileLink = (e) => {
        e.preventDefault()
        window.location = 'https://swiftreader-814f4.web.app/'
      }

    const swiftParagraph = `Front facing, quality study aide, and lightning-fast document loader. This app houses a full library of novels in its front-end and allows user uploads for instant viewing in the Swift Reader format. The text is translated into a flash-card style cycle of words that instantly improves the reading speed of the user. Settings are controlled in the front end in state. Local Storage is utilized to keep track of the user's place in their current read. Any need for a database was bypassed by this app's front-end architecture.`
    const awsParagraph = `Using machine learning, we parsed large data sets of soil composition and rainfall history to composite an app that can locate the optimal land for planting based on crop data. `
    const badBankParagraph = `A full-stack banking application that allows a user to create an account, log in, and deposit/withdraw money. The app utilizes JSON web tokens for authentication. Login status saved in local storage.`
    // const fireWatchParagraph = `Using NCOO api, this app can inform users of the potential risks of upcoming forest fires by comparing consecutive days with little or no rain, and temperature.`
    const fireWatchParagraph = `This mobile-first website uses breakpoints to switch between designs and display sizes.`

  return (
    <Container fluid className="pages featured" id="projects">
        <div className="featured-view">
        <h1 className="mobile-big-header">Featured Project</h1>
        <h1 className="big-header reveal">Featured Project</h1>

        {/* Mobile View */}
        <Carousel id="mobile-caro" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item onClick={ SwiftMobileLink } >
            <div className="fog"></div>
            <img src={mobileSwift} alt="Swift Reader"  className="mobile-pics"/>

                <Carousel.Caption>
                    <h1 className="mobile-header">Swift Reader</h1>
                    <h2 className="mobile-sub-header">Study Aide and Document Reader</h2>
                    <p className='mobile-p'>{swiftParagraph}</p>
                    <p className="mobile-languages">Firebase, React.js, Node.js, yarn, JavaScript, CSS, HTML</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item onClick={ bankMobileLink } >
            <div className="fog"></div>
            <img src={mobileBank} alt="Bad Bank"  className="mobile-pics"/>

                <Carousel.Caption>
                    <h1 className="mobile-header">Bad Bank</h1>
                    <h2 className="mobile-sub-header">Full Stack Bank Project MIT</h2>
                    <p className='mobile-p'>{badBankParagraph}</p>
                    <p className="mobile-languages">React.js, Node.js, Express.js, Mongo DB, Mongooese, Mongo Atlas, npm, Bootstrap, JWT, Bcrypt, JavaScript, CSS, HTML</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        {/* Desktop and Tablet View */}
        <Col className="project-rows" xs={{span: 8, offset: 4}}>
            <div id="tablet-view" className='reveal projects-fade-right' >
                <div className="yellow-box" onClick={ swiftLink } >
                    <div className='bio'>
                    <h1 className="header left">Swift Reader</h1>
                    <h2 className="sub-header left">Study Aide and Document Reader</h2>
                    <p>{swiftParagraph}</p>
                    <p className="languages">Firebase, React.js, Node.js, yarn, JavaScript, CSS, HTML</p>
                    </div>
                    <div  className="pic-border" >
                        <img src={mobileSwift} alt="Swift Reader" className="pics"/>
                    </div>
                </div>
            </div>
            <div id="desktop-view" className="reveal projects-fade-right" >
                <div className="yellow-box" onClick={ swiftLink }>
                    <div className='bio'>
                        <h1 className="header left">Swift Reader</h1>
                        <h2 className="sub-header left">Study Aide and Document Reader</h2>
                        <p>{swiftParagraph}</p>
                        <p className="languages">Firebase, React.js, Node.js, yarn, JavaScript, CSS, HTML</p>
                    </div>
                    <div className="pic-border" >
                        <img src={swiftReader} alt="Swift Reader" className="pics"/>
                    </div>
                </div>
            </div>
        </Col>
        <Col className="project-rows" xs={{span: 8, offset: 1}}>
            <div id="tablet-view"  className='reveal projects-fade-left' >
                <div className="yellow-box" onClick={ bankLink }>
                    <div className='bio'>
                    <h1 className="header left">Bad Bank</h1>
                    <h2 className="sub-header left">Front-Facing Bank Project</h2>
                    <p>{badBankParagraph}</p>
                    <p className="languages">React.js, Node.js, Express.js, Mongo DB, Mongooese, Mongo Atlas, npm, Bootstrap, JWT, Bcrypt, JavaScript, CSS, HTML</p>
                    {/* <a href="https://ian-grayfullstackbankingapplication.s3.amazonaws.com/index.html" target="_blank" rel="noreferrer"><button className="project-buttons" alt="link to design page">View</button></a> */}
                    {/* <a href="https://GitHub.com/IanZGray/Bad-Bank" target="_blank" rel="noreferrer"><button className="project-buttons" alt="link to design page">GitHub</button></a>                             */}
                    </div>
                    <div className="pic-border" >
                        <img src={mobileBank} alt="Bad Bank" className="pics"/>
                    </div>
                </div>
            </div>
            <div id="desktop-view" className="reveal projects-fade-left" >
                <div className="yellow-box" onClick={ bankLink }>
                    <div className='bio'>
                    <h1 className="header left">Bad Bank</h1>
                    <h2 className="sub-header left">Front-Facing Bank Project</h2>
                    <p>{badBankParagraph}</p>
                    <p className="languages">React.js, Node.js, Express.js, Mongo DB, Mongooese, Mongo Atlas, npm, Bootstrap, JWT, Bcrypt, JavaScript, CSS, HTML</p>
                    {/* <a href="https://ian-grayfullstackbankingapplication.s3.amazonaws.com/index.html" target="_blank" rel="noreferrer"><button className="project-buttons clicks" alt="link to design page">View</button></a> */}
                    {/* <a href="https://GitHub.com/IanZGray/Bad-Bank" target="_blank" rel="noreferrer"><button className="project-buttons clicks" alt="link to design page">GitHub</button></a>                             */}
                    </div>
                    <div className="pic-border" >
                        <img src={badBank} alt="Bad Bank" className="pics"/>
                    </div>
                </div>
            </div>
        </Col>

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
                    {/* <Row className="project-rows">
                        <div id="tablet-view" onClick={ gitLink } >
                            <Col className="yellow-box" xs={{span: 7, offset: 4}}>
                                <Col xs={{span: 5}}>
                                    <img src={mobilePort} alt="portfolio"  className="pics"/>
                                </Col>
                                <Col xs={{span: 7 }} className='bio'>
                                    <h1 className="header right">this.website</h1>
                                    <h2 className="sub-header right">My Development Portfolio</h2>
                                    <p>{fireWatchParagraph}</p>
                                    <p className="languages">React.js, Node.js, Yarn, Bootstrap, JavaScript, CSS, HTML</p>
                                </Col>
                            </Col>
                        </div>
                        <div id="desktop-view" className="reveal projects-fade-right" onClick={ gitLink } >
                            <Col className="yellow-box" xs={{span: 7, offset: 4}}>
                                <Col xs={{span: 5}}>
                                    <img src={portfolioApp} alt="portfolio"  className="pics"/>
                                </Col>
                                <Col xs={{span: 7 }} className='bio'>
                                    <h1 className="header right">this.website</h1>
                                    <h2 className="sub-header right">My Development Portfolio</h2>
                                    <p>{fireWatchParagraph}</p>
                                    <p className="languages">React.js, Node.js, Yarn, Bootstrap, JavaScript, CSS, HTML</p>
                                </Col>
                            </Col>
                        </div>
                    </Row> */}
        </div>
    </Container>
  )
}

export default Projects