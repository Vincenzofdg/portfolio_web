import { useContext } from "react";
import { Global } from "../../../Context";


import "../Style/Menu.css";
import structure from "../structure";

function Menu() {
  const { menuIndex, setMenuIndex, client } = useContext(Global);

  const menuElement = (name) => {
    const {img: icon, title} = structure[name];
    const isSelected = name === menuIndex;

    const handleClick = () => setMenuIndex(name);

    return (
      <div onClick={handleClick} className="hey-pet-menu-index" style={{backgroundColor: isSelected && "rgb(56, 62, 73)"}}>
        <img id="hey-pet-index-icon" src={icon} alt={title + " icone"} />
        <p id="hey-pet-index-lable">{title}</p>
      </div>
    )
  }

  return (
    <div className="hey-pet-menu">
      <img id="hey-pet-logo" src={structure["logo"]} alt="Hey Pet Logo" />
      <p id="hey-pet-menu-website" onClick={() => window.open(client.site_url, '_blank')}>website</p>
      <div className="hey-pet-menu-container">
        { menuElement('info') }
        { menuElement('adoption') }
        { menuElement('lost') }
        { menuElement('home') }
        { menuElement('rescue') }
        { menuElement('complain') }
        { menuElement('products') }
        { menuElement('news') }
        { menuElement('sponsors') }
      </div>
    </div>
  )
}

export default Menu;