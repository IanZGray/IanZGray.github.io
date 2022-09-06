import React from 'react'

import { Container } from 'react-bootstrap';

import Col from 'react-bootstrap/Col';

import './contact.css';

const contactParagraph = `Reach out to me at one of the links below`

const mail = ()=>{
  window.open('mailto:ianzacharygray@gmail.com', '_self')
}
function Contact() {
  return (
    <Container className='pages' id="contact">
    <h1 className='contact-big-header'>Contact</h1>
    <div className='contact-contents'>
      <h1 className='contact-header'>Let's Chat!</h1>
      <h3 className='contact-sub-header'>{contactParagraph}</h3>
      <button className="contact-button" onClick={mail} >
        Email Me!
      </button>
      <br/>
      <a href="https://www.linkedin.com/in/ian-gray-651b2177/" target="_blank" rel="noreferrer"><button className="contact-button" alt="link to design page">LinkedIn</button></a>
      <br/>
      <a href="https://linktr.ee/ianzgray" target="_blank" rel="noreferrer"><button className="contact-button" alt="link to design page">My Link Tree</button></a>

    </div>
    </Container>
  )
}

export default Contact