import GitHub from "../Assets/Contacts/GitHub.png";
import LinkedIn from "../Assets/Contacts/LinkedIn.png";
import Discord from "../Assets/Contacts/Discord.png";
import Steam from "../Assets/Contacts/Steam.png";

import "../Style/Footer.css";

function Footer() {
  const github = "https://github.com/vincenzofdg/";
  const linkedin = "https://www.linkedin.com/in/vincenzofdg/";
  const discord = "";
  const steam = "https://steamcommunity.com/id/vfdgiacomo";

  return (
    <div className="contact-container">
      <img className="contact-icon" onClick={() => window.open(github, '_blank')} src={GitHub} alt="GitHub Icon" />
      <img className="contact-icon" onClick={() => window.open(linkedin, '_blank')} src={LinkedIn} alt="LinkedIn Icon" />
      <img className="contact-icon" onClick={() => window.open(discord, '_blank')} src={Discord} alt="Discord Icon" />
      <img className="contact-icon" onClick={() => window.open(steam, '_blank')} src={Steam} alt="Steam Icon" />
    </div>
  )
}

export default Footer;