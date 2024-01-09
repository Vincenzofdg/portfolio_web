import "../Style/Technologies.css";

import Swift from "../Assets/Technologies/Swift.svg";
import JavaScript from "../Assets/Technologies/JavaScript.svg";
import React from "../Assets/Technologies/React.svg";
import NodeJS from "../Assets/Technologies/NodeJS.svg";
import Sequelize from "../Assets/Technologies/Sequelize.svg";
import MySQL from "../Assets/Technologies/MySQL.svg";
import MongoDB from "../Assets/Technologies/MongoDB.svg";
import Docker from "../Assets/Technologies/Docker.svg";
import Git from "../Assets/Technologies/Git.svg";

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