import { useContext } from "react";
import { Global } from "../../../Context";

import "../Style/Menu.css";
import structure from "../structure";

function Menu() {
  const { menuIndex, setMenuIndex, credentials: {username} } = useContext(Global);

  const menuElement = (name, i) => {
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
        <img 
          id="overview-logo" 
          src={username === "vincenzofdg" ? "https://avatars.githubusercontent.com/u/79121466?v=4" : "https://scontent.fcgh40-1.fna.fbcdn.net/v/t39.30808-6/342068938_1270726640496642_5141069327682517539_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=cyU9CFcGgYIAX9SW6fA&_nc_zt=23&_nc_ht=scontent.fcgh40-1.fna&oh=00_AfAXvlh3A_hzT-e8E6f6b7casibcxxVv7jMlHmxggT64Cg&oe=65E17D26"} 
          alt="Logo"
        />
        <div className="overview-logo-text">
          <p id="overview-index-lable">{username === "vincenzofdg" ? "Vincenzo" : "Marcelo"}</p>
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