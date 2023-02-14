import React from 'react';
import resume from '../../assets/resume.pdf';

// /home/messyginger/vite-portfolio-app/src/assets/resume.pdf

const CTA = () => {
    return (
        <div className='cta'>
            <a href={resume} download className='btn'>Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
    )
}

export default CTA