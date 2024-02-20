import { useContext, useEffect } from "react";
import { Global } from "../../Context";
import { useNavigate } from "react-router-dom";

import Menu from "./Components/Menu";
import Content from "./Components/Content";
import "./Style/Page.css";

import getAcessToken from "../../Service/HeyPet/getAcessToken";

function HeyPet() {
  const { token, setMenuIndex, credentials, setRequestToken } = useContext(Global);
  const navigate = useNavigate();

  useEffect(() => {
    async function Request() {
      const newToken = await getAcessToken(credentials);
      setRequestToken(newToken);
    }
    
    if (!!token) {
      setMenuIndex('info');
      Request()
      return;
    };
    
    navigate("/*");
  }, [])

  return (
    <div className="heypet-page">
      <Menu />
      <Content />
    </div>
  )
}

export default HeyPet;