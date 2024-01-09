import "../Style/Technologies.css";

import Swift from "../Assets/Technologies/Swift.png";
import JavaScript from "../Assets/Technologies/JavaScript.png";
import React from "../Assets/Technologies/React.png";
import NodeJS from "../Assets/Technologies/NodeJS.png";
import Sequelize from "../Assets/Technologies/Sequelize.png";
import MySQL from "../Assets/Technologies/MySQL.png";
import MongoDB from "../Assets/Technologies/MongoDB.png";
import Docker from "../Assets/Technologies/Docker.png";
import Git from "../Assets/Technologies/Git.png";

function Technologies() {
  return (
    <div className="technologies-container">
      <img id="tec-img" src={Swift} alt="Swift" />
      <img id="tec-img" src={JavaScript} alt="JavaScript" />
      <img id="tec-img" src={React} alt="React" />
      <img id="tec-img" src={NodeJS} alt="NodeJS" />
      <img id="tec-img" src={Sequelize} alt="Sequelize" />
      <img id="tec-img" src={MySQL} alt="MySQL" />
      <img id="tec-img" src={MongoDB} alt="MongoDB" />
      <img id="tec-img" src={Docker} alt="Docker" />
      <img id="tec-img" src={Git} alt="Git" />
    </div>
  )
}

export default Technologies;