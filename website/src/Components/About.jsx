import "../Style/About.css";

import Img1 from "../Assets/img-01.jpg";
import Img2 from "../Assets/img-02.jpg";

function About() {
  return (
    <div className="about-container">
      <div className="text-about-container">
        <h1 id="about-text-01">About Me</h1>
        <h4 id="about-text-02">I'm a full-stack mobile developer with a specialization in JavaScript, 
        React, and backend technologies like Express and Sequelize, with a focus on MySQL. 
        I'm passionate about crafting innovative and efficient solutions for mobile applications, 
        and I thrive on turning ideas into reality through clean and scalable code. With a strong 
        foundation in both front-end and back-end development, I bring a holistic approach to creating mobile experiences that leave a lasting impression.</h4>
      </div>

      <div className="imgs-about-container">
        <img id="about-img-01" src={Img1} alt="Image 01" />
        <img id="about-img-02" src={Img2} alt="Image 02" />
      </div>
    </div>
  )
}

export default About;