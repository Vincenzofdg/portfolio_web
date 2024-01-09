import Header from "../Components/Header";
import { useContext } from "react";
import { Global } from "../Context";

function ShowCases() {
  const { toggle } = useContext(Global);

  return !toggle ? (
    <div className="page">
      <Header />
      <h1>SHOW CASES</h1>
    </div>
  ) : (
    <Header />
  )
}

export default ShowCases;