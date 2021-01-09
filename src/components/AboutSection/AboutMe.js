import React from 'react';

function AboutMe() {
  return (
    <div className='about-me'>
      <div className='name'>
        <p className='text-muted'>ABOUT ME</p>
        <h1 className='display-2 mt-0'>
          <span className='highlight-primary'>Joeylene</span>
        </h1>
        <h1 className='display-2'>
          <span className='highlight-primary'>Rivera</span>
        </h1>
      </div>
      <div className='description'>
        <p>
          A <span className='highlight-hover'>full stack developer</span> based in{' '}
          <span className='highlight-hover'>Manila, Philippines</span>.
        </p>
        <p>
          Ever since I started working as a Web Developer Intern during the summer of 2017 and
          discovered the open-source, I got hooked in web development. Starting on November 2017, I
          started to get serious in learning the tech, starting with receiving the
          {' '}
          <a
            target='_blank'
            href='https://www.freecodecamp.org/certification/merakireal/legacy-front-end'
            rel='noopener noreferrer'
            className='text-link-primary'
          >
            freeCodeCamp Front End Development Certificate
          </a>
          . I then learned Laravel to develop my thesis. Then I built this portfolio on Nov 2019 as a way to start learning ReactJS. You can read more about
          {' '}
          <a
            target='_blank'
            href='https://dev.to/jorenrui/my-2019-in-review-24ig'
            rel='noopener noreferrer'
            className='text-link-primary'
          >
            what I did on 2019 in my blog post
          </a>
          .
        </p>
        <p>
          By 2020, I decided to transition from PHP to JS and I'm currently working as a <span className='highlight-hover'>Full Stack Developer</span> in the Philippines. Ah I've also graduated as an <span className='highlight-hover'>Information Technology major</span> on 2020.
        </p>
        <p>
          As for 2021, I'm currently focus on my side projects and learning more about GraphQL and Rails.
        </p>
      </div>
      <div className='title'>
        <h1 className='display-2'>
          <span className='highlight-primary'>Full Stack</span>
        </h1>
        <h1 className='display-2'>
          <span className='highlight-primary'>Developer</span>
        </h1>
      </div>
    </div>
  );
}

export default AboutMe;
