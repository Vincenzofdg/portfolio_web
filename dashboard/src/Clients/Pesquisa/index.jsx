import { useContext, useEffect } from "react";
import { Global } from "../../Context";
import { useNavigate } from "react-router-dom";

import Menu from "./Components/Menu";
import Content from "./Components/Content";
import structure from "./structure";

import "./Style/Page.css";

function Pesquisa() {
  const { token, setMenuIndex } = useContext(Global);
  const navigate = useNavigate();

  useEffect(() => {
    if (!!token) {
      setMenuIndex((Object.keys(structure))[1]);
      return
    };
    navigate("/*")
  }, [])

  return (
    <div className="overview-page">
      <Menu />
      <Content />
    </div>
  )
}

export default Pesquisa;