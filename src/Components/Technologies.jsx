import "../Style/Technologies.css";

import Java from "../Assets/Technologies/Java.svg";
import JavaScript from "../Assets/Technologies/JavaScript.svg";
import Python from "../Assets/Technologies/Python.svg";
import NodeJS from "../Assets/Technologies/NodeJS.svg";
import MySQL from "../Assets/Technologies/MySQL.svg";
import Docker from "../Assets/Technologies/Docker.svg";
import AWS from "../Assets/Technologies/AWS.svg";
import Firebase from "../Assets/Technologies/Firebase.svg";

function Technologies() {
    return (
        <div className="technologies-container">
            <img id="tec-img" src={Java} alt="Java" />
            <img id="tec-img" src={JavaScript} alt="JavaScript" />
            <img id="tec-img" src={Python} alt="Python" />
            <img id="tec-img" src={NodeJS} alt="NodeJS" />
            <img id="tec-img" src={MySQL} alt="MySQL" />
            <img id="tec-img" src={Docker} alt="Docker" />
            <img id="tec-img" src={Firebase} alt="Firebase" />
            <img id="tec-img" src={AWS} alt="AWS" />
        </div>
    );
}

export default Technologies;
