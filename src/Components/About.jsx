import "../Style/About.css";

import Img1 from "../Assets/img-01.jpg";
import Img2 from "../Assets/img-02.jpg";

function About() {
    return (
        <div className="about-container">
            <div className="text-about-container">
                <h1 id="about-text-01">About Me</h1>
                <h4 id="about-text-02">
                    I am a backend and mobile developer with extensive
                    experience in Java (Spring) and Node.js, specializing in
                    building scalable and efficient APIs and backend systems. I
                    focus on creating high-performance, reliable server-side
                    solutions that integrate seamlessly with various
                    applications.
                    <br />
                    <br />
                    In addition to backend development, I have strong expertise
                    in mobile and desktop application development, using React,
                    C#, and Kotlin to build high-quality, user-friendly
                    applications. From designing and implementing APIs to
                    developing intuitive user interfaces, I ensure a smooth and
                    responsive experience across different platforms. With a
                    deep understanding of modern development frameworks and best
                    practices, I strive to deliver well-structured,
                    maintainable, and scalable solutions tailored to meet
                    diverse business and technical needs.
                </h4>
            </div>

            <div className="imgs-about-container">
                <img id="about-img-01" src={Img1} alt="Image 01" />
                <img id="about-img-02" src={Img2} alt="Image 02" />
            </div>
        </div>
    );
}

export default About;
