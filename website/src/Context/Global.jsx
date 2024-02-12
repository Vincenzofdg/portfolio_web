import { useState } from "react";
import { Global as Context } from ".";

function MyProvider({children}) {
  const [menu, SetMenu] = useState("/");
  const [toggle, SetToggle] = useState(false);

  const obj = {
    menu, SetMenu,
    toggle, SetToggle,
  }

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default MyProvider;