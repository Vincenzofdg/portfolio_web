import { useState } from "react";
import { Global as Context } from ".";

function GlobalState({children}) {
  const [credentials, setCredentials] = useState({username: "", password: ""});
  const [token, setToken] = useState("");
  const [requestToken, setRequestToken] = useState("");

  const [client, setClient] = useState({});
  const [menuIndex, setMenuIndex] = useState("");

  const obj = {
    credentials, setCredentials,
    token, setToken,
    requestToken, setRequestToken,
    client, setClient,
    menuIndex, setMenuIndex
  };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default GlobalState;