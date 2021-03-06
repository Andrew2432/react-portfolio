import React from 'react';
import './About.css';

function About() {
  return (
    <section className={'about'} id="about">
      <div className="about-container">
        <h1>About Me</h1>
        <p>
          I am currently pursuing my bachelors in Computer Science and
          Engineering, in St. Joseph College of Engineering, Sriperumbudur. It
          took me 3 years to have a solid knowledge in web development as an
          industry. I find the constant evolution of web development makes me to
          be updated and pushes me to level up my skills.
          <br />
          <br />
          I have no experience of working as a web developer intern; though I
          look forward to it.
          <br />
          <br />I believe my knowledge of web development is valuable. I develop
          my websites with consistent UI and build robust API as backend. I
          strongly enforce a11y (web accessibility) and Unit Testing in my
          workflow.
        </p>
      </div>
    </section>
  );
}

export default About;
