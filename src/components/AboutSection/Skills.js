import React from 'react';

function Skills() {
  return (
    <div className='skills'>
      <div className='title'>
        <p className='text-muted-white'>ABOUT ME</p>
        <h2 className='mt-0'>Skills and Experience</h2>
      </div>
      <div className='description'>
        <p>
          I’m an <span className='highlight-hover-white'>Full Stack Developer</span> doing web dev stuffs since <span className='highlight-hover-white'>Nov 2017</span>. Having a thing for
          knowledge, I make it a habit to read all sorts of books every day. Also, I learn from the
          community, so you can see me lurking around
          <a
            target='_blank'
            href='https://twitter.com/jorenrui/'
            rel='noopener noreferrer'
            className='text-link'
          >
            Twitter
          </a>
          .
        </p>
        <p>
          I love learning more about web techs so you may find me doing some personal projects,
          casually writing articles or notes, or learning more about design and other fields, other
          than code.
        </p>
        <p>In my free time, you’ll find me spending quality time with my friends and family.</p>
      </div>
      <div className='skills-list'>
        <div className='core-skills'>
          <h3 className='list-title'>Core</h3>
          <ul>
            <li>
              <span>HTML5 & CSS3</span>
            </li>
            <li>
              <span>JavaScript</span>
            </li>
            <li>
              <span>NextJS</span>
            </li>
            <li>
              <span>ReactJS</span>
            </li>
            <li>
              <span>MySQL</span>
            </li>
            <li>
              <span>Responsive Design</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>Figma</span>
            </li>
            <li>
              <span>TypeScript</span>
            </li>
            <li>
              <span>Git</span>
            </li>
            <li>
              <span>NodeJS</span>
            </li>
            <li>
              <span>KoaJS</span>
            </li>
            <li>
              <span>CSS in JS</span>
            </li>
          </ul>
        </div>
        <div className='other-skills'>
          <h3 className='list-title'>Dabbled with...</h3>
          <ul>
            <li>
              <span>jQuery / AJAX</span>
            </li>
            <li>
              <span>Laravel</span>
            </li>
            <li>
              <span>PHP, Meedo (PHP DB)</span>
            </li>
            <li>
              <span>Code Igniter 3</span>
            </li>
            <li>
              <span>Java, COBOL, C/C++</span>
            </li>
            <li>
              <span>Bootstrap</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
