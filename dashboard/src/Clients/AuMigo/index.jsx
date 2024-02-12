import { useContext, useEffect } from "react";
import { Global } from "../../Context";
import { useNavigate } from "react-router-dom";


function AuMigo() {
  const { token } = useContext(Global);
  const navigate = useNavigate();

  useEffect(() => {
    if (!!token) return;
    navigate("/*")
  }, [])

  return (
    <h1>
      AuMigo
    </h1>
  )
}

export default AuMigo;