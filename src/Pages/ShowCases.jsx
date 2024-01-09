import Header from "../Components/Header";
import { useContext } from "react";
import { Global } from "../Context";

import Email from "../Components/Email";

function ShowCases() {
  const { toggle } = useContext(Global);

  return !toggle ? (
    <div className="page">
      <Header />
    </div>
  ) : (
    <Header />
  )
}

export default ShowCases;