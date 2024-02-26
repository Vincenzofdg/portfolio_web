import { useContext } from "react";
import { Global } from "../../../../Context";

import Map from "./Map";
import Warning from "./Warning";
import Status from "./Status";
import Result from "./Result";
import Announcement from "./Announcement";

const ContentSwitch = () => {
  const { menuIndex } = useContext(Global);

  const obj = {
    Map: <Map />,
    Warning: <Warning />,
    Status: <Status />,
    Result: <Result />,
    Announcement: <Announcement />
  };
  
  return obj[menuIndex]
} 

export default ContentSwitch;