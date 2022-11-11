import React from 'react'

import './work.css';

import books from '../../images/amazonpage.png';
import design from '../../images/uIPic.jpg';
import git from '../../images/githubSC.png';

function work() {

  const workLink = (e) => {
    e.preventDefault()
    window.location = 'https://www.designwithgray.com/' 
  }
  const gitLink = (e) => {
    e.preventDefault()
    window.location = 'https://github.com/IanZGray' 
  }
  const bookLink = (e) => {
    e.preventDefault()
    window.location = 'https://www.amazon.com/kindle-dbs/entity/author/B09NZ7DCS4?_encoding=UTF8&node=283155&offset=0&pageSize=12&searchAlias=stripbooks&sort=author-sidecar-rank&page=1&langFilter=default/' 
  }

  return (

    <div className='work-page' id="work">
      <div className='work-position'>
        <h1 className='work-big-header reveal'>Work</h1>

        <div id="mobile-view">
          <div onClick={ workLink } >
            <h1 className='work-header'>Gray Design</h1>
            <h3 className='work-sub-header'>Branding & Web Design</h3>
            <p className='work-p'>My small design business where you can find examples of my work in the UI branch of web development.</p>
            <img src={design} alt="Gray Design"  className="work-pics"/>
            {/* <a href="https://www.designwithgray.com/" target="_blank" rel="noreferrer"><button className="work-button" alt="link to design page">+ More</button></a> */}
            {/* <div className='line'></div> */}
          </div>

          <div onClick={ gitLink } >
            <h1 className='work-header'>Github</h1>
            <h3 className='work-sub-header'>All Currently Listed Repos</h3>
            <p className='work-p'>If you view examples of my code here, we can talk about it!</p>
            <img src={git} alt="GitHub"  className="work-pics"/>
            {/* <a href="https://github.com/IanZGray" target="_blank" rel="noreferrer"><button className="work-button" alt="link to github">+ More</button></a> */}
            {/* <div className='line'></div> */}
          </div>

          <div onClick={ bookLink } >
            <h1 className='work-header'>Books</h1>
            <h3 className='work-sub-header'>Fiction & Non-Fiction</h3>
            <p className='work-p'>Conveying information to others; whether through visuals, story, or under the hood code, is important to me. Browse my small library of works.</p>
            <img src={books} alt="books"  className="work-pics"/>
            {/* <a href="https://www.amazon.com/~/e/B09NZ7DCS4" target="_blank" rel="noreferrer"><button className="work-button" alt="link to books">+ More</button></a> */}
          </div>
          {/* <div className='line'></div> */}
        </div>

        <div id="work-tablet-view"> 
          <div className='work-row'>
              <div className='side-box reveal fade-left' onClick={ workLink } >
                <h1 className='work-header'>Gray Design</h1>
                <h3 className='work-sub-header'>Branding & Web Design</h3>
                <p className='work-p'>My small design business where you can find examples of my work in the UI branch of web development.</p>
                {/* <a href="https://www.designwithgray.com/" target="_blank" rel="noreferrer"><button className="work-button clicks" alt="link to design page">+ More</button></a> */}
                <img src={design} alt="Gray Design"  className="work-pics"/>
              </div>
              <div className='middle-box reveal fade-bottom' onClick={ gitLink } >
                <h1 className='work-header'>Github</h1>
                <h3 className='work-sub-header'>All Currently Listed Repos</h3>
                <p className='work-p'>If you view examples of my code here, we can talk about it!</p>
                {/* <a href="https://github.com/IanZGray" target="_blank" rel="noreferrer"><button className="work-button clicks" alt="link to github">+ More</button></a> */}
                <img src={git} alt="GitHub"  className="work-pics"/>
              </div>
              <div className='side-box reveal fade-right' onClick={ bookLink } >
                <h1 className='work-header'>Books</h1>
                <h3 className='work-sub-header'>Fiction & Non-Fiction</h3>
                <p className='work-p'>Conveying information to others (whether through visuals, story, or under-the-hood code) is important to me. Browse my small library of works.</p>
                {/* <a href="https://www.amazon.com/kindle-dbs/entity/author/B09NZ7DCS4?_encoding=UTF8&node=283155&offset=0&pageSize=12&searchAlias=stripbooks&sort=author-sidecar-rank&page=1&langFilter=default" target="_blank" rel="noreferrer"><button className="work-button clicks" alt="link to books">+ More</button></a> */}
                <img src={books} alt="Books"  className="work-pics"/>
              </div>
          </div>
        </div>

      </div>
    </div>



  )
}

export default work