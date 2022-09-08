import React from 'react'

import './resumeButton.css'

import pdf from './Ian_Gray_Resume_2022.pdf'
function ResumeButton() {
  return (
    <div className='resume-button'>
          <a href={pdf} without rel='noopener noreferrer' target="_blank" ><button className="resume-header" alt="resume">Resume</button></a>

        <div>{pdf}</div>
    </div>
  )
}

export default ResumeButton