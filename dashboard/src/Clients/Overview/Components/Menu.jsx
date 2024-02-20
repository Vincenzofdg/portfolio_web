import { useContext } from "react";
import { Global } from "../../../Context";

import "../Style/Menu.css";
import structure from "../structure";

function Menu() {
  const { menuIndex, setMenuIndex } = useContext(Global);

  console.log(Object.keys(structure))

  const menuElement = (name, i) => {
    if (name === "logo") return;
    
    const {img: icon, title} = structure[name];
    const isSelected = name === menuIndex;

    return (
      <div
        key={`overview-menu-${i}`}
        onClick={() => setMenuIndex(name)}
        className="overview-menu-index"
        style={{backgroundColor: isSelected && "rgb(56, 62, 73)"}}
      >
          <img id="overview-index-icon" src={icon} alt={title + " icone"} />
          <p id="overview-index-lable">{title}</p>
      </div>
    )
  }

  return (
    <div className="overview-menu">
      <div className="overview-logo-container">
        <img id="overview-logo" src={structure["logo"]} alt="Logo" />
        <div className="overview-logo-text">
          <p id="overview-index-lable">Welcome</p>
          <p id="overview-index-lable" style={{textAlign: "end"}}>Vincenzo</p>
        </div>
      </div>


      <div className="overview-menu-container">
        {
          Object.keys(structure).map((name, i) => menuElement(name, i))
        }
      </div>
    </div>
  )
}

export default Menu;