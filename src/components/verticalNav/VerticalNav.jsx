import React from 'react'

import { Col } from 'react-bootstrap';
import './verticalNav.css';

function VerticalNav() {
  return (
    <div className='vert-nav'>

        <Col >
            <a href="/"><div className="first circle-nav nav-hover"></div></a>
            <a href="#projects"><div className="second circle-nav nav-hover"></div></a>
            <a href="#work"><div className="third circle-nav nav-hover"></div></a>
            <a href="#contact"><div className="fourth circle-nav nav-hover"></div></a>
        </Col>

    </div>
  )
}

export default VerticalNav