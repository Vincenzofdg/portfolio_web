import { useContext } from "react";
import { Global } from "../Context";
import { useNavigate } from "react-router-dom";

import "../Style/Header.css";
import Logo from "../Assets/Logo.png";
import GitHub from "../Assets/Contacts/Github.svg";
import LinkedIn from "../Assets/Contacts/LinkedIn.svg";
import Discord from "../Assets/Contacts/Discord.svg";

function Header() {
    const { menu, SetMenu, toggle, SetToggle } = useContext(Global);
    const navigate = useNavigate();

    const navArray = ["Home", "Projects", "Contact"];

    const renderNavText = (e, i) => {
        const keyValue = `nav-${i + 1}`;
        const navLink = "/" + e.toLowerCase().replace(" ", "-");
        const url = navLink !== "/home" ? navLink : "/";

        const handleClick = () => {
            SetToggle(false);
            if (menu === url) return;
            SetMenu(url);
            navigate(url);
        };

        return (
            <h4
                key={keyValue}
                className={`nav-index ${menu === url && "selected"}`}
                onClick={handleClick}>
                {e}
            </h4>
        );
    };

    const renderContact = () => (
        <div className="contact-container">
            <img
                className="contact-icon"
                onClick={() =>
                    window.open("https://github.com/vincenzofdg/", "_blank")
                }
                src={GitHub}
                alt="GitHub Icon"
            />
            <img
                className="contact-icon"
                onClick={() =>
                    window.open(
                        "https://www.linkedin.com/in/vincenzofdg/",
                        "_blank",
                    )
                }
                src={LinkedIn}
                alt="LinkedIn Icon"
            />
            <img
                className="contact-icon"
                onClick={() => window.open("", "_blank")}
                src={Discord}
                alt="Discord Icon"
            />
            {/*<img className="contact-icon" onClick={() => window.open('https://steamcommunity.com/id/vfdgiacomo', '_blank')} src={Steam} alt="Steam Icon" />*/}
        </div>
    );

    const handleToggle = () => SetToggle(!toggle);

    return (
        <>
            <div className="header-container">
                <img id="logo" src={Logo} alt="Logo" />
                <div className="nav-container">
                    {navArray.map((e, i) => renderNavText(e, i))}
                </div>
            </div>

            {!toggle ? (
                <div onClick={handleToggle} className="toggle-container">
                    <div className="toggle-bar closed" />
                    <div className="toggle-bar closed" />
                    <div className="toggle-bar closed" />
                </div>
            ) : (
                <>
                    <div
                        onClick={handleToggle}
                        className="toggle-container fix">
                        <div className="toggle-bar opened1" />
                        <div className="toggle-bar opened2" />
                    </div>

                    <div className="toggle-grid-center">
                        <div className="toggle-menu">
                            {navArray.map((e, i) => renderNavText(e, i))}
                            <br />
                            {renderContact()}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Header;
