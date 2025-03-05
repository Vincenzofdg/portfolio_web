import "../Style/Introduction.css";
import Profile from "../Assets/Profile.jpeg";

function Introduction() {
    return (
        <div className="introduction-section">
            <div className="introduction-container">
                <div className="introduction-text">
                    <h1 id="introduction-title">Vincenzo F. Di Giacomo teste</h1>
                    <p id="introduction-subtitle">
                        Android and Backend Developer
                    </p>
                    <br />
                    <br />
                    <p id="introduction-content">
                        I am a backend-focused developer with experience in
                        mobile app development using React Native and Kotlin. I
                        build backend systems with Node.js and Java, utilizing
                        AWS and Firebase for cloud infrastructure. I leverage
                        AWS Lambda for serverless architecture and use AWS SAM
                        to configure API Gateway.
                    </p>
                </div>
                <div className="introduction-picture">
                    <img
                        id="profile-picture"
                        src={Profile}
                        alt="Profile Picture"
                    />
                </div>
            </div>
        </div>
    );
}

export default Introduction;
