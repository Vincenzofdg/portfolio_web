import { useContext, useEffect } from "react";
import { Global } from "../../Context";
import { useNavigate } from "react-router-dom";

import Pesquisa from "../../Context/Pesquisa";

import Menu from "./Components/Menu";
import Content from "./Components/Content";
import structure from "./structure";

import "./Style/Page.css";

import { generateToken } from "../../Service/Pesquisa/Token";

function Overview() {
  const { credentials, token, setRequestToken, setMenuIndex } = useContext(Global);
  const navigate = useNavigate();

  useEffect(() => {
    async function Jobs() {
      const pesquisaToken = await generateToken(credentials);
      setRequestToken(pesquisaToken.token);
    };
    if (!!token) {
      setMenuIndex((Object.keys(structure))[0]);
      Jobs()
      return
    };
    navigate("/*")
  }, [])

  return (
    <Pesquisa>
      <div className="overview-page">
        <Menu />
        <Content />
      </div>
    </Pesquisa>
  )
}

export default Overview;