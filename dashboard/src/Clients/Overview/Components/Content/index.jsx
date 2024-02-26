import { useContext } from "react";
import { Global } from "../../../../Context";

import Search from "./Search";
import Apps from "./Apps";

const ContentSwitch = () => {
  const { menuIndex } = useContext(Global);
  const obj = {
    Search: <Search />,
    apps: <Apps />,
  };
  
  return obj[menuIndex]
} 

export default ContentSwitch;