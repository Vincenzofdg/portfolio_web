import { useContext } from "react";
import { Global } from "../../../../Context";

import Clients from "./Clients";
import Apps from "./Apps";

const ContentSwitch = () => {
  const { menuIndex } = useContext(Global);
  const obj = {
    clients: <Clients />,
    apps: <Apps />,
  };
  
  return obj[menuIndex]
} 

export default ContentSwitch;