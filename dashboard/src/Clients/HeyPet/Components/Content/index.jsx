import { useContext } from "react";
import { Global } from "../../../../../Context";

import Information from "./Information";
import Adoption from "./Adoption";
import Lost from "./Lost";
import Home from "./Homes";
import Rescue from "./Rescue";
import Complain from "./Complain";

const ContentSwitch = () => {
  const { menuIndex } = useContext(Global);
  const obj = {
    info: <Information />,
    adoption: <Adoption />,
    lost: <Lost />,
    home: <Home />,
    rescue: <Rescue />,
    complain: <Complain />
  };
  
  return obj[menuIndex]
} 

export default ContentSwitch;