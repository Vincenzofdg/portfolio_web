import "../Style/Introduction.css";
import Profile from "../Assets/Profile.jpeg";

function Introduction() {
  return (
    <div className="introduction-section">
      <div className="introduction-container">
        <div className="introduction-text">
          <h1 id="introduction-title">Vincenzo F. Di Giacomo</h1>
          <p id="introduction-subtitle">Modile FullStack Developer</p>
          <br /><br />
          <p id="introduction-content">As a full-stack mobile developer, I am passionate about technology and have extensive experience in creating 
            innovative solutions. With skills in both mobile app development and web application creation, I constantly 
            seek out challenges that allow me to explore new technologies 
            and drive results.
          </p>
        </div>
        <div className="introduction-picture">
          <img id="profile-picture" src={Profile} alt="Profile Picture" />
        </div>
      </div>
    </div>
  )
}

export default Introduction;