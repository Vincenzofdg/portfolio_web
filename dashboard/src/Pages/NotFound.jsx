import { useNavigate } from "react-router-dom";

import Error from "../Assets/404.png"

import "../Styles/NotFound.css"

function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/")

  return (
    <div className="page grid-cointainer">
      <div className="error-container">
        <img className="error-icon" src={Error} alt="Page not Found" />
        <p id="error-text">Something went wrong please go back to Home Page</p>
        <br />
        <p onClick={handleClick} id="go-back-text">click here ☕️</p>
      </div>
    </div>
  )
}

export default NotFound;