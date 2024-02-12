import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Global } from "../Context";

import "../Styles/Login.css";
import Cover from "../Assets/cover.png";
import Logo from "../Assets/logo.jpg";

// import { requestLogin } from "../Service/Login";
import { teste } from "../Service/test";

function LoginPage() {
  const { setClient, setToken, credentials, setCredentials } = useContext(Global);
  const navigate = useNavigate();

  const handleClick = async () => {
    // const response = await requestLogin(credentials);
    
    // if (!response.token) {
    //   window.alert(response);
    //   setCredentials(prev => ({...prev, password: ""}));
    //   return;
    // }

    // setToken(response.token);
    // setClient(response.data);
    // navigate(`/${response.endpoint}`)

    const response = await teste();
    console.log(response)
  }

  const textInput = (name) => {
    const typeName = name === 'password' ? "password" : "text";

    const handleChange = ({target}) => {
      const {id, value} = target
      setCredentials(prev => ({...prev, [id]: value}))
    }

    return (
      <div className="input-container">
        <label htmlFor={name}>{name}</label>
        <input
          className="input" 
          type={typeName} 
          id={name}
          value={credentials[name]}
          onChange={handleChange}
        />
        <div id="bar" />
      </div>
    )
  }

  return (
    <>
      <img className="cover" src={Cover} alt="VKoders Cover" />
      <img className="logo" src={Logo} alt="VKoders Logo" />
      <div className="container">
        {textInput('username')}
        {textInput('password')}
        <input 
          className="button"
          type="submit" 
          value="log in"
          onClick={handleClick}
          style={{
            backgroundColor: "green",
            cursor: "pointer"
          }}
        />
      </div>
    </>
  )
}

export default LoginPage;
