import { useContext, useEffect } from "react";
import { Global } from "../Context";
import { useNavigate } from "react-router-dom";

import "../Styles/Dashboard.css";

function Overview() {
  const { token, client } = useContext(Global);
  const navigate = useNavigate();

  useEffect(() => {
    if (!!token) return;
    navigate("/*")
  }, [])

  return (
    <h1>
      OLA VINCENZO
    </h1>
  )
}

export default Overview;