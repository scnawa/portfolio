import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="bento-box">
        <div className="box">
            <div className="inner-box">Featured Projects</div>
            <div className="inner-box">
                <div className="about-content">
                    <h3>About Me</h3>
                    <p>
                        Recent Computer Science graduate (B.Sc. 2024) passionate about 
                        full-stack development and cloud technologies. Seeking 
                        entry-level software engineering roles to apply academic 
                        knowledge and contribute to impactful projects.
                    </p>
                </div>
            </div>
        </div>
        <div className="box">
          <div className="inner-box">3</div>
          <div className="inner-box">4</div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;