import "../Style/About.css";
import Profile from "../Assets/Profile.jpeg";

function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1 id="about-title">Vincenzo F. Di Giacomo</h1>
          <p id="about-subtitle">Modile FullStack Developer</p>
          <br /><br />
          <p id="about-content">As a full-stack mobile developer, I am passionate about technology and have extensive experience in creating 
            innovative solutions. With skills in both mobile app development and web application creation, I constantly 
            seek out challenges that allow me to explore new technologies 
            and drive results.
          </p>
        </div>
        <div className="about-picture">
          <img id="profile-picture" src={Profile} alt="Profile Picture" />
        </div>
      </div>
    </div>
  )
}

export default About;