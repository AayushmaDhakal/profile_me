import React from "react";
import "../About/About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
const About = () => {
  return (
    <div id="aboutme" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img className="neon-img" src={theme_pattern} alt="about-image" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="profile-img1" src={profile_img} alt="profile-img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Bsc.Csit passed out student focusing on frontend development. Learning daily about new things to develop skills and to perform good in web development.
            </p>
            <p>
              Currently Learning
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill-display">
              <p>Html & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill-display">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill-display">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill-display">
              <p>Next JS</p> <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievement">
        <div className="about-achievement-display">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="about-achievement-display">
          <h1>90+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="about-achievement-display">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};
export default About;