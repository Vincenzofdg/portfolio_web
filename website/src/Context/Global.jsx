import { useState } from "react";
import { Global as Context } from ".";

function MyProvider({children}) {
  const [menu, SetMenu] = useState("/");
  const [toggle, SetToggle] = useState(false);

  const [credentials, setCredentials] = useState({username: "", password: ""});
  const [token, setToken] = useState("");
  const [requestToken, setRequestToken] = useState("");

  const [client, setClient] = useState({});
  const [menuIndex, setMenuIndex] = useState("");

  const obj = {
    menu, SetMenu,
    toggle, SetToggle,
    credentials, setCredentials,
    token, setToken,
    requestToken, setRequestToken,
    client, setClient,
    menuIndex, setMenuIndex
  }

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default MyProvider;